import Keyboard from "@core/frame/app/Keyboard";
import State from "@core/frame/util/State";
import GroupView from "@core/frame/view/group/GroupView";
import PageManager from "@core/frame/page/PageManager";
import {Scroller} from "@core/frame/view/base/ScrollView";
import View from "@core/frame/view/base/View";

require("../../css/style.css");

/**
 * view-app的版本号
 * @type {string}
 */
export var version = "0.2.3(2022-10-22)";

export default class Application extends GroupView {
    constructor(id) {
        super(null, null);
        this.listenerLocation = this;
        this.viewVersion = version;
        this.focusable = false;
        this.id = id;
        delete this.viewManager;
        delete this.fatherView;
        delete this.frontView;
        delete this.select;
        //Application的scroller于其他的不同，创建时，只需要创建滚动器
        this.scroller = new ApplicationScroller(this);
        this.pageManager = new PageManager(this);

        this.foregroundPage = null;
        this.keyboard = new Keyboard();

        /**
         * @type {VideoPlayer}
         * @private
         */
        this._player = null;

        this.urlParam = null;
        /**
         * 启动模式
         * @type {string}
         */
        this.launchMode = State.LaunchMode.ENTER;
        /**
         * 启动页面模式
         * 单页面/多页面
         * @type {string}
         */
        this.pageMode = State.PageMode.SINGLE;
    }

    launch() {
        console.log("app-launch view-app version：" + this.viewVersion);
        this.scroller.init();
        //获取页面参数信息数据
        var pageInfoList = this.pageManager.pageInfoList;
        //TODO 这里应该有一个判断有哪些参数表示是进入app
        //获取地址栏数据
        this.urlParam = Application.parseUrl();//地址栏参数
        var param = null;//第一个页面的参数信息
        var firstPage = null;
        if (!pageInfoList || pageInfoList.length == 0) {
            this.launchMode = State.LaunchMode.ENTER;
            console.log("当前启动模式：" + this.launchMode);
            //清理缓存
            this.clearCache();
            var object = this.onLaunch(this.urlParam)
            firstPage = object.firstPage;
            param = object.param;
        } else {
            this.launchMode = State.LaunchMode.BACK;
            console.log("当前启动模式：" + this.launchMode);
            this.pageManager.recoveryPageList();
            param = this.pageManager.popPageInfo().param;//从pageManager中出栈顶页面的参数
            this.onLaunch(this.urlParam);
            firstPage = this.pageList.pop();
        }

        if (firstPage) {
            this.create(firstPage, param);
        } else {
            console.error("Page对象创建错误！")
        }
    }

    create(page, param) {
        this.onCreate(page, param);
        this.startPage(page, param);
    }

    stop() {
        this.onStop();
    }

    destroy() {
        //清楚缓存
        this.clearCache();
        //回调
        this.onDestroy();

        //获取退出app的目标地址
        var exitUrl = this.exitUrl();
        if (exitUrl) {
            location.href = exitUrl;
        } else {
            console.error("未定义退出地址");
        }
    }

    /**
     * 跳转到外部
     * 1.订购
     * 2.外部链接
     * @param outsideUrl 外部目标地址
     */
    gotoOutside(outsideUrl) {
        this.stop();
        location.href = outsideUrl;
    }

    /**
     * 让业务的实际 Application子类重写该方法
     * @return {string} 退出app后，跳转的目标页地址
     */
    exitUrl() {
        return "";
    }

    /**
     * 启动Page
     * @param{Page} page
     * @param{Object} param
     */
    startPage(page, param) {
        page.application = this;

        if (this.foregroundPage && this.foregroundPage.lifeState == State.LifeState.RUN) {
            this.foregroundPage.pause();
        }
        this.foregroundPage = page;
        this.keyboard.page = null;//保护，防止异常触发按键
        this.player.page = null;//保护，防止异常触发

        if (param) {
            param = param.clone();//避免移除ViewManager中的pageInfoList异常
        }

        this.addChild(page);
        page.create(param);
        page.resume();
        this.measure();
        this.keyboard.page = page;
        this.player.page = page;
        page.isForeground = true;

        // console.log(this.pageList);
    }

    /**
     * 关闭Page
     * @param{Page} page
     */
    finishPage(page) {
        if (page.lifeState == State.LifeState.RUN) {//运行中
            page.pause();
        }

        if (page.lifeState == State.LifeState.PAUSE) {//暂停
            page.stop();
        }

        if (page.lifeState == State.LifeState.STOP) {//停止
            page.destroy();
        }
        var pageInfo = this.pageManager.popPageInfo();//将栈顶数据出栈
        console.log("出栈数据：", pageInfo)
        if (this.pageList.length == 0) {
            this.keyboard.page = null;//最后一个页面销毁时的保护机制
            this.player.page = null;//最后一个页面销毁时的保护机制
            this.stop();//app停止
            this.destroy();//app销毁
        } else {
            var backResultData = page.backResultData;
            this.pageToForeground(backResultData);
        }
    }

    /**
     * resume或create栈顶的Page
     * @param backResultData
     */
    pageToForeground(backResultData) {
        var page = this.pageList.peek();

        //正在运行，无动作
        if (page.lifeState == State.LifeState.RUN) {
            return;
        }
        this.foregroundPage = page;
        this.keyboard.page = null;//保护，防止异常触发
        this.player.page = null;//保护，防止异常触发
        page.isForeground = true;
        if (page.lifeState == State.LifeState.BEFORE_CREATE) {//页面未创建
            page.application = this;
            var param = this.pageManager.popPageInfo().param;
            page.create(param);
        } else if (page.lifeState == State.LifeState.STOP) {//页面停止，重新创建
            var param = page.param;
            this.pageManager.popPageInfo();//或者this.pageManager.removePageInfo(param);
            page.create(param);
        }
        page.resume();
        if (backResultData) {
            page.onResult(backResultData);//将返回数据传递到上一个一个页面
        }
        this.keyboard.page = page;
        this.player.page = page;
    }

    /**
     *
     * @param{Page} page
     */
    addChild(page) {
        this.pageList.push(page);
    }

    /**
     * 在子类中重写，返回一个全局方法器
     * @returns{VideoPlayer}
     */
    getPlayerInstance() {
        console.error("获取播放器方法（getPlayInstance）未重写")
        return this._player;
    }

    /**
     * 当app启动模式是
     *  ENTER时，两个参数是同一个，都是进入app时的参数
     *  BACK时，第一个是返回时的第一个页面参数，第二个是返回时携带的
     * @param{Object} param
     * @param{Object} urlParam
     */
    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", this.urlParam);
        return {};
    }

    /**
     * 当
     * @param page
     * @param param
     */
    onCreate(page, param) {
        // 显示页面到前台
        this.startPage(page, param);
    }

    onStop() {
    }

    onDestroy() {
    }

    /**
     * 清除缓存
     */
    clearCache() {
        //清除页面参数信息缓存
        this.pageManager.clearPageInfo();
    }

    get ele() {
        if (!this._ele) {
            this._ele = document.getElementById(this.id);
        }
        return this._ele;
    }

    get pageList() {
        return this.childViews;
    }

    get player() {
        if (!this._player) {
            var player = this.getPlayerInstance();
            if (player) {
                this._player = player;
            }
        }

        return this._player;
    }

    static parseUrl(url) {
        var e = "";//获取参数string: 格式 a=b&c=d
        if (url) {//解析传入的url
            var index = url.indexOf("?");
            if (index >= 0) {
                e = url.substring(index);
            }
        } else {
            e = window.location.search.substring(1);
        }

        var t, n, r, i, o, a = {};
        var l = e.split("&");                  //参数分割成数组
        for (i = 0, o = l.length; o > i; i++) {
            //将每个参数的=左边作为key, =右边作为value保存在a中
            t = l[i], n = t.indexOf("="), -1 !== n && (r = t.substr(n + 1), a[t.substr(0, n)] = r);
        }
        return a;
    }

    $$(id) {
        return document.getElementById(id);
    }
}

class ApplicationScroller extends Scroller {
    /**
     * 测量宽、高
     */
    measure() {
        this.size = this.fatherView.size;
        //根据子节点计算
        var size = View.getVisibleSize(this.ele);
        if (size.width > this.width) {
            this.width = size.width;
        }
        if (size.height > this.height) {
            this.height = size.height;
        }
    }
}

/**
 * 给数组添加获取最后一个元素的方法
 * @returns {null}
 */
Array.prototype.peek = function () {
    var ele = null;
    if (this.length > 0) {
        ele = this[this.length - 1];
    }
    return ele;
}

/**
 * 删除指定元素
 * @param ele
 */
Array.prototype.removeEle = function (ele) {
    var index = this.indexOf(ele);
    if (index >= 0) {
        this.splice(index, 1);
    }
}

/**
 * 深克隆对象
 * @returns {any}
 */
Object.prototype.clone = function () {
    return JSON.parse(JSON.stringify(this));
}

Object.prototype.concat = function (object) {
    for (var key of Object.keys(object)) {
        this[key] = object[key];
    }
}

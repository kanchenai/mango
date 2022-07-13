import GroupView from "./GroupView";

export default class Dialog extends GroupView {
    constructor(viewManager,html) {
        super(viewManager);
        this.focusable = false;
        //page的返回事件
        this.pageKeyBack = null;

        if(html){
            buildEle(this);//TODO dialog是否可以完全脱离page中的布局，需要验证
            this.html = html;
        }
    }

    show() {
        super.show();
        this.frontView = this.page.focusView;
        this.requestFocus();

        var dialog = this;
        this.pageKeyBack = this.page.key_back_event;
        this.page.key_back_event = function () {
            dialog.hide();
        }
    }

    hide() {
        super.hide();
        this.frontView.requestFocus();
        this.page.key_back_event = this.pageKeyBack;
    }

    requestFocus() {
        if (this.childViews.length == 0) {
            var focusView = this.viewManager.focusView;
            if (focusView && focusView != this) {//焦点存在，并且和当前不是同一个
                focusView.requestUnFocus();
            }
            this.viewManager.focusView = this;
        } else {
            this.childViews[0].requestFocus();
        }
    }

    set ele(value) {
        super.ele = value;
        this.setStyle("visibility", "");
        this.setStyle("display", "none");
    }

    get ele() {
        return super.ele;
    }

    setAttributeParam() {
        super.setAttributeParam();
        this.setFocusChange("null", "null", "null", "null");

        return false;
    }

    /**
     * 使用ele创建控件
     * @param{Element} ele
     * @param{ViewManager} viewManager
     * @returns {Dialog}
     */
    static parseByEle(ele, viewManager) {
        var dialog = new Dialog(viewManager);
        dialog.ele = ele;
        dialog.setAttributeParam(ele);
        dialog.scroller.init();
        dialog.bindImage();
        viewManager.eleToObject(dialog.scroller.ele, dialog);//往内部执行
        return dialog;
    }
}

/**
 * 创建dialog的ele
 * TODO 未确认效果，需要调试下
 */
var buildEle = function (dialog){
    var ele = document.createElement("div");
    dialog.ele = ele;
    dialog.width = dialog.page.width;
    dialog.height = dialog.path.height;
    dialog.hide();
}
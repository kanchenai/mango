import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/list/list_variety_fragment.html";
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import content_0 from "@images-js/list/list_variety_fragment/content_0.png";
import content_1 from "@images-js/list/list_variety_fragment/content_1.png";
import content_2 from "@images-js/list/list_variety_fragment/content_2.png";
import content_3 from "@images-js/list/list_variety_fragment/content_3.png";
import content_4 from "@images-js/list/list_variety_fragment/content_4.png";
import content_5 from "@images-js/list/list_variety_fragment/content_5.png";
import content_6 from "@images-js/list/list_variety_fragment/content_6.png";
import content_7 from "@images-js/list/list_variety_fragment/content_7.png";
import content_8 from "@images-js/list/list_variety_fragment/content_8.png";
import content_9 from "@images-js/list/list_variety_fragment/content_9.png";
import content_10 from "@images-js/list/list_variety_fragment/content_10.png";
import content_11 from "@images-js/list/list_variety_fragment/content_11.png";
import content_12 from "@images-js/list/list_variety_fragment/content_12.png";
import content_13 from "@images-js/list/list_variety_fragment/content_13.png";
import content_14 from "@images-js/list/list_variety_fragment/content_14.png";
import content_15 from "@images-js/list/list_variety_fragment/content_15.png";
import content_16 from "@images-js/list/list_variety_fragment/content_16.png";
import content_17 from "@images-js/list/list_variety_fragment/content_17.png";
import content_18 from "@images-js/list/list_variety_fragment/content_18.png";
import content_19 from "@images-js/list/list_variety_fragment/content_19.png";
import content_20 from "@images-js/list/list_variety_fragment/content_20.png";
import content_21 from "@images-js/list/list_variety_fragment/content_21.png";
import content_22 from "@images-js/list/list_variety_fragment/content_22.png";
import content_23 from "@images-js/list/list_variety_fragment/content_23.png";
import content_24 from "@images-js/list/list_variety_fragment/content_24.png";
import content_25 from "@images-js/list/list_variety_fragment/content_25.png";
import content_26 from "@images-js/list/list_variety_fragment/content_26.png";
import content_27 from "@images-js/list/list_variety_fragment/content_27.png";
import content_28 from "@images-js/list/list_variety_fragment/content_28.png";
import content_29 from "@images-js/list/list_variety_fragment/content_29.png";
import content_30 from "@images-js/list/list_variety_fragment/content_30.png";
import content_31 from "@images-js/list/list_variety_fragment/content_31.png";
import content_32 from "@images-js/list/list_variety_fragment/content_32.png";
import content_33 from "@images-js/list/list_variety_fragment/content_33.png";
import content_34 from "@images-js/list/list_variety_fragment/content_34.png";
import content_35 from "@images-js/list/list_variety_fragment/content_35.png";
export default class ListVarietyFragment extends Fragment {
    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.nextLeft = "none";

        this.filter_first = this.findViewById("filter_first");
        this.filter_first.select = true;
        this.filter_first.orientation = HORIZONTAL;
        this.filter_first.adapter = new FilterAdapter();
        this.filter_first.data = filterFirstData;
        this.filter_first.selectView = this.filter_first.childViews[0];
        this.filter_first.selectView.childViews[0].setSelectStyle();

        this.filter_second = this.findViewById("filter_second");
        this.filter_second.select = true;
        this.filter_second.orientation = HORIZONTAL;
        this.filter_second.adapter = new FilterAdapter();
        this.filter_second.data = filterSecondData;
        this.filter_second.selectView = this.filter_second.childViews[0];
        this.filter_second.selectView.childViews[0].setSelectStyle();

        this.filter_third = this.findViewById("filter_third");
        this.filter_third.select = true;
        this.filter_third.orientation = HORIZONTAL;
        this.filter_third.adapter = new FilterAdapter();
        this.filter_third.data = filterThirdData;
        this.filter_third.selectView = this.filter_third.childViews[0];
        this.filter_third.selectView.childViews[0].setSelectStyle();

        this.content_list = this.findViewById("content_list");
        this.content_list.col = 4;
        this.content_list.margin.right = 5;
        this.content_list.adapter = new ContentAdapter();
        this.content_list.data = contentListData;
    }

    setView() {

    }

    initUtils() {

    }
}

var filterFirstData = [
    "全部", "音乐", "情感", "搞笑",
    "咨询", "亲子", "旅游", "美食",
    "生活", "时尚", "竞技", "访谈",
    "脱口秀", "纪实"
];

var filterSecondData = [
    "全部", "内地", "港台", "其他"
];

var filterThirdData = [
    "最新", "最热"
];

var contentListData = [
    {pic: content_0, name: "密室大逃脱 第四季", info: "杨幂 大张伟 黄明昊 张国伟"},
    {pic: content_1, name: "乘风破浪 第三季", info: "那英 宁静 张蔷 许茹芸 黄奕 柳翰雅 胡杏儿 钟欣潼"},
    {pic: content_2, name: "向往的生活 第六季", info: "黄磊 何炅 张艺兴 彭昱畅 张子枫"},
    {pic: content_3, name: "你好，星期六", info: "何炅 冯禧"},
    {pic: content_4, name: "披荆斩棘 第二季", info: "杜德伟 温兆伦 任贤齐 陈小春"},
    {pic: content_5, name: "快乐再出发", info: "陈楚生 苏醒 王栎鑫 张远 陆虎"},
    {pic: content_6, name: "中餐厅 第六季", info: "黄晓明 殷桃 尹正 章若楠 陈立农"},
    {pic: content_7, name: "花儿与少年 第四季", info: "张凯丽 刘敏涛 杨幂"},
    {pic: content_8, name: "密室大逃脱 4 大神版", info: "未知"},
    {pic: content_9, name: "爸爸当家", info: "李艾 魏晨 王祖蓝 李亚男"},
    {pic: content_10, name: "向往的生活 6 会员Plus版", info: "黄磊 何炅 张艺兴 彭昱畅 张子枫"},
    {pic: content_11, name: "100道光芒", info: "未知"},
    {pic: content_12, name: "快乐再出发 加更版", info: "陈楚生 苏醒 王栎鑫 张远 陆虎"},
    {pic: content_13, name: "美好年华研习社", info: "汪涵 马可"},
    {pic: content_14, name: "大侦探 第七季", info: "何炅 张若昀 大张伟 王欧 魏晨"},
    {pic: content_15, name: "乘风破浪3 舞台纯享版", info: "那英 宁静 张蔷 许茹芸 黄奕 柳翰雅 胡杏儿 钟欣潼"},
    {pic: content_16, name: "声生不息", info: "何炅 王祖蓝"},
    {pic: content_17, name: "明星大侦探 第六季", info: "何炅 撒贝宁 白敬亭 刘昊然 张若昀"},
    {pic: content_18, name: "披荆斩棘的哥哥", info: "黄贯中 林志炫 陈小春 谢天华 林晓峰 张智霖 染汉文"},
    {pic: content_19, name: "欢迎来到蘑菇屋", info: "陈楚生 曹恩齐 文韬 陆虎 罗子彤 齐思钧 石凯 邵明"},
    {pic: content_20, name: "花儿与少年 4 会员Plus版", info: "张凯丽 刘敏涛 杨幂 李斯丹妮 赵今麦"},
    {pic: content_21, name: "向往的生活 第五季", info: "黄磊 何炅 张艺兴 彭昱畅 张子枫"},
    {pic: content_22, name: "牧野家族", info: "容祖儿 王子文 吴永恩 张瀚"},
    {pic: content_23, name: "明星大侦探 第三季", info: "何炅 撒贝宁 白敬亭 吴映洁 张若昀 吴磊"},
    {pic: content_24, name: "向往的生活 第二季", info: "黄磊 何炅 刘宪华 彭昱畅"},
    {pic: content_25, name: "乘风破浪的姐姐", info: "伊能静 钟丽缇 陈松伶 宁静 阿朵 郑希怡 张萌"},
    {pic: content_26, name: "花儿与少年4 会员彩蛋", info: "张凯丽 刘敏涛 杨幂 李斯丹妮 赵今麦"},
    {pic: content_27, name: "明星大侦探 第三季", info: "何炅 撒贝宁 白敬亭"},
    {pic: content_28, name: "芒果捞星闻 2022", info: "未知"},
    {pic: content_29, name: "密室大逃脱3 大神版", info: "JY 火树 文韬 齐思钧 蒲熠星 邵明明"},
    {pic: content_30, name: "明星大侦探 第五季", info: "何炅 撒贝宁 白敬亭 张若昀"},
    {pic: content_31, name: "突袭训练室", info: "那英 宁静张蔷许茹芸,黄奕 柳翰雅,胡杏儿"},
    {pic: content_32, name: "向往的生活", info: "黄磊 何炅 刘宪华"},
    {pic: content_33, name: "明星大侦探 第二季", info: "何炅 撒贝宁 白敬亭 王鸥 王嘉尔"},
    {pic: content_34, name: "向往的生活6 老友记", info: "黄磊 何炅 张艺兴 彭昱畅 张子枫"},
    {pic: content_35, name: "向往的生活6慢直播", info: "黄磊 何炅 张艺兴 彭昱畅 张子枫"},
]

class FilterAdapter extends Adapter {
    bindHolder(holder, data) {
        var txt = holder.findViewById("txt");
        txt.text = data;
    }
}

class ContentAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        var txt = holder.findViewById("txt");//TODO 使用TextView文字不显示
        var info = holder.findEleById("info");
        pic.src = data.pic;
        txt.text = data.name;
        info.innerText = data.info;

    }
}
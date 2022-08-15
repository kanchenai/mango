import Page from "@core/frame/page/Page";
import html from "@html/detail.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import highlight_0 from "@images-js/detail/highlight_0.png";
import highlight_1 from "@images-js/detail/highlight_1.png";
import highlight_2 from "@images-js/detail/highlight_2.png";
import highlight_3 from "@images-js/detail/highlight_3.png";
import highlight_4 from "@images-js/detail/highlight_4.png";
import highlight_5 from "@images-js/detail/highlight_5.png";
import highlight_6 from "@images-js/detail/highlight_6.png";
import highlight_7 from "@images-js/detail/highlight_7.png";
import highlight_8 from "@images-js/detail/highlight_8.png";
import highlight_9 from "@images-js/detail/highlight_9.png";
import highlight_10 from "@images-js/detail/highlight_10.png";
import highlight_11 from "@images-js/detail/highlight_11.png";
import highlight_12 from "@images-js/detail/highlight_12.png";
import highlight_13 from "@images-js/detail/highlight_13.png";

export default class DetailPage extends Page {
    constructor() {
        super();
        this.pageName = "DetailPage";
    }

    onCreate(param) {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.highlight = this.findViewById("highlight");
        this.highlight.orientation = HORIZONTAL;
        this.highlight.adapter = new HighlightAdapter();
        this.highlight.data = highlightData;

        this.subset_list = this.findViewById("subset_list");
        this.subset_list.orientation = HORIZONTAL;
        this.subset_list.adapter = new HighlightAdapter();
        this.subset_list.data = highlightData;
    }

    setView() {

    }

    initUtils() {
        this.highlightPlayingIndex = 0;
    }
}


var highlightData = [
    {
        pic: highlight_0,
        name: "第11期：张艺兴化身DJ 李荣浩默契合唱气氛感拉满",
        info: "2.0亿次播放"
    },
    {
        pic: highlight_1,
        name: "Plus版第11期：李荣浩张艺兴沙滩聊\"电焊音乐\" 彭彭玩\"梦幻同花顺\" 笑翻众人",
        info: "2423.6万次播放"
    },
    {
        pic: highlight_2,
        name: "慢直播第9期：张艺兴李荣浩成蘑菇屋粉刷匠 彭彭给子枫定制\"666\"窗户",
        info: "1632.6万次播放"
    },
    {
        pic: highlight_3,
        name: "张子枫做饭自带帮厨 是我们的团宠妹妹没错啦！",
        info: ""
    },
    {
        pic: highlight_4,
        name: "张艺兴卖力刷漆 十毫升的油漆八毫升在李荣浩脸上？",
        info: ""
    },
    {
        pic: highlight_5,
        name: "张艺兴成为人形拖把 什么时候兼职蘑菇屋滑梯清洁人员了？",
        info: ""
    },
    {
        pic: highlight_6,
        name: "张艺兴蘑菇屋气氛组组长 张哥的蘑菇屋舞蹈秀show time！",
        info: ""
    },
    {
        pic: highlight_7,
        name: "张艺兴李荣浩合唱想太多 自带混响的歌声仿佛演唱会现场！",
        info: ""
    },
    {
        pic: highlight_8,
        name: "张艺兴的行李箱有空但不多 张哥同款收纳选手在哪里？",
        info: ""
    },
    {
        pic: highlight_9,
        name: "有哪些渐行渐远的时代印记 李荣浩直呼回到过去太难了！",
        info: ""
    },
    {
        pic: highlight_10,
        name: "彭昱畅做菜把自己吃yue了 才做得很好下次就别做了",
        info: ""
    },
    {
        pic: highlight_11,
        name: "彭昱畅张子枫在蘑菇屋待遇的区别 彭彭做菜全靠自己妹妹自带帮厨",
        info: ""
    },
    {
        pic: highlight_12,
        name: "彭昱畅一看就会医学就废 没想到黄老师不仅会做菜还是生活小能手",
        info: ""
    },
    {
        pic: highlight_13,
        name: "彭昱畅像极了做错事的孩子 隔着屏幕都能感受到彭仔的慌张！",
        info: ""
    },
]

class HighlightAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var txt = holder.findViewById("txt");
        var info = holder.findEleById("info");

        pic.src = data.pic;
        txt.text = data.name;
        info.innerText = data.info;

        let totalLen = holder.recycleView.data.length
        var index = (holder.index + totalLen) % totalLen;
        if(index == this.recycleView.page.highlightPlayingIndex){
            holder.findEleById("playing").style.display = "block";
        }
    }
}
import Page from "@core/frame/page/Page";
import html from "@html/detail.html"
import {Adapter, HORIZONTAL, VERTICAL} from "@core/frame/view/group/RecycleView";
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
import subset_0 from "@images-js/detail/subset_0.png";
import subset_1 from "@images-js/detail/subset_1.png";
import subset_3 from "@images-js/detail/subset_3.png";
import subset_4 from "@images-js/detail/subset_4.png";
import part_0 from "@images-js/detail/part_0.png";
import part_1 from "@images-js/detail/part_1.png";
import part_2 from "@images-js/detail/part_2.png";
import part_3 from "@images-js/detail/part_3.png";
import part_4 from "@images-js/detail/part_4.png";
import same_type_0 from "@images-js/detail/same_type_0.png";
import same_type_1 from "@images-js/detail/same_type_1.png";
import same_type_2 from "@images-js/detail/same_type_2.png";
import watch_too_0 from "@images-js/detail/watch_too_0.png";
import watch_too_1 from "@images-js/detail/watch_too_1.png";
import watch_too_2 from "@images-js/detail/watch_too_2.png";
import watch_too_3 from "@images-js/detail/watch_too_3.png";
import watch_too_4 from "@images-js/detail/watch_too_4.png";
import watch_too_5 from "@images-js/detail/watch_too_5.png";
import watch_too_6 from "@images-js/detail/watch_too_6.png";
import watch_too_7 from "@images-js/detail/watch_too_7.png";
import watch_too_8 from "@images-js/detail/watch_too_8.png";
import watch_too_9 from "@images-js/detail/watch_too_9.png";
import watch_too_10 from "@images-js/detail/watch_too_10.png";
import watch_too_11 from "@images-js/detail/watch_too_11.png";
import watch_too_12 from "@images-js/detail/watch_too_12.png";
import watch_too_13 from "@images-js/detail/watch_too_13.png";
import watch_too_14 from "@images-js/detail/watch_too_14.png";
import VideoPlayer from "@core/frame/player/VideoPlayer";
import PlayInfo from "@core/frame/player/PlayInfo";
import utils from "@src/util/utils";

export default class DetailPage extends Page {
    onCreate(param) {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.video_pic = this.findViewById("video_pic");
        this.bg = this.findViewById("bg");

        this.highlight = this.findViewById("highlight");
        this.highlight.orientation = HORIZONTAL;
        this.highlight.adapter = new HighlightAdapter();
        this.highlight.data = highlightData;

        this.subset_list = this.findViewById("subset_list");
        this.subset_list.orientation = HORIZONTAL;
        this.subset_list.adapter = new SubsetAdapter();
        this.subset_list.data = subsetData;

        this.part_list = this.findViewById("part_list");
        this.part_list.orientation = HORIZONTAL;
        this.part_list.adapter = new PartAdapter();
        this.part_list.data = partData;

        this.same_type = this.findViewById("same_type");
        this.same_type.orientation = HORIZONTAL;
        this.same_type.adapter = new SameTypeAdapter();
        this.same_type.data = sameTypeData;

        this.watch_too = this.findViewById("watch_too");
        this.watch_too.orientation = VERTICAL;
        this.watch_too.margin.bottom = 9;
        this.watch_too.adapter = new WatchTooAdapter();
        this.watch_too.data = watchTooData;

        this.player = new VideoPlayer(this);

        var playUrl = "http://live.ynurl.com/video/s10027-LCDST/index.m3u8"
        var playInfo = new PlayInfo(playUrl, 19, 19, 767, 420);
        this.player.play(0, playInfo);
    }

    setView() {
        this.player.onPlayStart = "onPlayStart";
        this.player.onPositionChangeListener = "onPositionChangeListener";
        this.player.onVolumeChangeListener = "onVolumeChangeListener";
        this.player.onPlayComplete = "onPlayComplete";
        this.player.onPlayPause = "onPlayPause";
        this.player.onPlayResume = "onPlayResume";
        this.player.onPlayStop = "onPlayStop";
        this.player.onPlayError = "onPlayError";
        this.player.onPlayByTime = "onPlayByTime";
    }

    initUtils() {
        this.highlightPlayingIndex = 0;
        this.subsetPlayingIndex = 2;
    }

    onPause() {
        this.player.pause();
    }

    onPlayStart() {
        console.log(this.pageName + " onPlayStart");
        this.video_pic.hide();
        utils.bgToVideoBg(this.bg.ele.parentNode,this.bg.ele,this.player.playInfo);
    }

    onPlayPause() {
        console.log(this.pageName + " onPlayPause");
        this.video_pic.show();
        utils.videoBgToBg(this.bg.ele.parentNode,this.bg.ele)
    }

    onPlayResume() {
        console.log(this.pageName + " onPlayResume");
        this.video_pic.hide();
        utils.bgToVideoBg(this.bg.ele.parentNode,this.bg.ele,this.player.playInfo);
    }

    onPositionChangeListener(position, duration) {
        // console.log(this.pageName + " position",position,"duration",duration);
    }

    onVolumeChangeListener(volume) {
        console.log(this.pageName + " volume", volume);
    }

    onPlayStop() {
        console.log(this.pageName + " onPlayStop");
        this.video_pic.show();
        utils.videoBgToBg(this.bg.ele.parentNode,this.bg.ele)
    }

    onPlayComplete() {
        console.log(this.pageName + " onPlayComplete");
    }

    onPlayError() {
        console.log(this.pageName + " onPlayError");
    }

    onPlayByTime(time) {
        console.log(this.pageName + " onPlayByTime", time);
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
];

var subsetData = [
    {
        pic: subset_0,
        name: "慢直播第8期：黄磊出海钓鱼",
    },
    {
        pic: subset_1,
        name: "老友记：张子枫宋轶电焊",
    },
    {
        pic: highlight_0,
        name: "第11期：张艺兴李荣浩默契合唱",
    },
    {
        pic: subset_3,
        name: "Plus第11期：同花顺反转不断",
    },
    {
        pic: subset_4,
        name: "慢直播第9期：李荣浩成粉刷匠",
    }
];

var partData = [
    {
        pic: part_0,
        name: "慢直播第8期：黄磊出海钓鱼",
    },
    {
        pic: part_1,
        name: "老友记：张子枫宋轶电焊",
    },
    {
        pic: part_2,
        name: "第11期：张艺兴李荣浩默契合唱",
    },
    {
        pic: part_3,
        name: "Plus第11期：同花顺反转不断",
    },
    {
        pic: part_4,
        name: "慢直播第9期：李荣浩成粉刷匠",
    }
];

var sameTypeData = [
    {
        pic: same_type_0,
        name: "向往的生活",
        info: "《向往的生活》是由湖南卫视制作"
    },
    {
        pic: same_type_1,
        name: "向往的生活 第二季",
        info: "《向往的生活》是由湖南卫视制作"
    },
    {
        pic: same_type_2,
        name: "向往的生活 第三季",
        info: "《向往的生活》是由湖南卫视制作"
    },
];

var watchTooData = [
    {
        pic: watch_too_0,
        name: "Plus第11期：同花顺反转不断",
        info: "海量次播放"
    },
    {
        pic: watch_too_1,
        name: "Plus第10期：艺兴彭彭承包早餐",
        info: "海量次播放"
    },
    {
        pic: watch_too_2,
        name: "Plus第12期：黄磊套路龚俊出海",
        info: "海量次播放"
    },
    {
        pic: watch_too_3,
        name: "第2期：歌剧诡影（下）",
        info: "海量次播放"
    },
    {
        pic: watch_too_4,
        name: "第2期：古宅惊魂（上）",
        info: "海量次播放"
    },
    {
        pic: watch_too_5,
        name: "Plus第7期：隐形组\"极挑局\"",
        info: "海量次播放"
    },
    {
        pic: watch_too_6,
        name: "老友记：李荣浩音乐会",
        info: "海量次播放"
    },
    {
        pic: watch_too_7,
        name: "慢直播第7期：彭彭剖鱼",
        info: "海量次播放"
    },
    {
        pic: watch_too_8,
        name: "Plus第6期：张艺兴教跳狂派舞",
        info: "海量次播放"
    },
    {
        pic: watch_too_9,
        name: "第7期：李雪琴演绎烫嘴绕口令",
        info: "海量次播放"
    },
    {
        pic: watch_too_10,
        name: "第8期：张艺兴翻窗练舞",
        info: "海量次播放"
    },
    {
        pic: watch_too_11,
        name: "第13期：黄磊艺兴\"反目成仇\"",
        info: "海量次播放"
    },
    {
        pic: watch_too_12,
        name: "Plus第1期：三兄妹寻神秘树屋",
        info: "海量次播放"
    },
    {
        pic: watch_too_13,
        name: "第5期：天使学园（上）",
        info: "海量次播放"
    },
    {
        pic: watch_too_14,
        name: "第9期：黄磊灵魂拷问张艺兴",
        info: "海量次播放"
    },
];

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
        if (index == this.recycleView.page.highlightPlayingIndex) {
            holder.findEleById("playing").style.display = "block";
        } else {
            holder.findEleById("playing").style.display = "none";
        }
    }
}

class SubsetAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var txt = holder.findViewById("txt");

        pic.src = data.pic;
        txt.text = data.name;

        let totalLen = holder.recycleView.data.length
        var index = (holder.index + totalLen) % totalLen;
        if (index == this.recycleView.page.subsetPlayingIndex) {
            holder.findEleById("playing").style.display = "block";
        } else {
            holder.findEleById("playing").style.display = "none";
        }
    }
}

class PartAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var txt = holder.findViewById("txt");

        pic.src = data.pic;
        txt.text = data.name;
    }
}

class SameTypeAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var txt = holder.findViewById("txt");
        var info = holder.findEleById("info")
        pic.src = data.pic;
        txt.text = data.name;
        info.innerText = data.info;
    }
}

class WatchTooAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var txt = holder.findViewById("txt");
        var info = holder.findEleById("info")
        pic.src = data.pic;
        txt.text = data.name;
        info.innerText = data.info;
    }
}

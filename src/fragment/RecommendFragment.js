import Fragment from "@core/frame/view/group/Fragment";

import html from "@html/fragment/recommend_fragment.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import VMargin from "@core/frame/util/VMargin";
import big_picture_0 from "@images-js/home/recommend_fragment/big_picture_0.png";
import big_picture_1 from "@images-js/home/recommend_fragment/big_picture_1.png";
import big_picture_2 from "@images-js/home/recommend_fragment/big_picture_2.png";
import big_picture_3 from "@images-js/home/recommend_fragment/big_picture_3.png";
import big_picture_4 from "@images-js/home/recommend_fragment/big_picture_4.png";
import big_picture_5 from "@images-js/home/recommend_fragment/big_picture_5.png";
import big_picture_6 from "@images-js/home/recommend_fragment/big_picture_6.png";
import big_picture_7 from "@images-js/home/recommend_fragment/big_picture_7.png";
import big_picture_8 from "@images-js/home/recommend_fragment/big_picture_8.png";
import big_picture_9 from "@images-js/home/recommend_fragment/big_picture_9.png";
import history_0 from "@images-js/home/recommend_fragment/history_0.png";
import history_1 from "@images-js/home/recommend_fragment/history_1.png";
import history_2 from "@images-js/home/recommend_fragment/history_2.png";
import history_3 from "@images-js/home/recommend_fragment/history_3.png";
import coming_soon_0 from "@images-js/home/recommend_fragment/coming_soon_0.png"
import coming_soon_1 from "@images-js/home/recommend_fragment/coming_soon_1.png"
import coming_soon_2 from "@images-js/home/recommend_fragment/coming_soon_2.png"
import coming_soon_3 from "@images-js/home/recommend_fragment/coming_soon_3.png"
import coming_soon_4 from "@images-js/home/recommend_fragment/coming_soon_4.png"
import coming_soon_5 from "@images-js/home/recommend_fragment/coming_soon_5.png"
import coming_soon_6 from "@images-js/home/recommend_fragment/coming_soon_6.png"
import like_0 from "@images-js/home/recommend_fragment/like_0.png"
import like_1 from "@images-js/home/recommend_fragment/like_1.png"
import like_2 from "@images-js/home/recommend_fragment/like_2.png"
import like_3 from "@images-js/home/recommend_fragment/like_3.png"
import like_4 from "@images-js/home/recommend_fragment/like_4.png"
import like_5 from "@images-js/home/recommend_fragment/like_5.png"
import like_6 from "@images-js/home/recommend_fragment/like_6.png"
import like_7 from "@images-js/home/recommend_fragment/like_7.png"
import like_8 from "@images-js/home/recommend_fragment/like_8.png"
import like_9 from "@images-js/home/recommend_fragment/like_9.png"
import like_10 from "@images-js/home/recommend_fragment/like_10.png"
import like_11 from "@images-js/home/recommend_fragment/like_11.png"
import like_12 from "@images-js/home/recommend_fragment/like_12.png"
import like_13 from "@images-js/home/recommend_fragment/like_13.png"
import like_14 from "@images-js/home/recommend_fragment/like_14.png"
import like_15 from "@images-js/home/recommend_fragment/like_15.png"
import like_16 from "@images-js/home/recommend_fragment/like_16.png"
import like_17 from "@images-js/home/recommend_fragment/like_17.png"
import like_18 from "@images-js/home/recommend_fragment/like_18.png"
import like_19 from "@images-js/home/recommend_fragment/like_19.png"
import like_20 from "@images-js/home/recommend_fragment/like_20.png"
import like_21 from "@images-js/home/recommend_fragment/like_21.png"
import like_22 from "@images-js/home/recommend_fragment/like_22.png"
import like_23 from "@images-js/home/recommend_fragment/like_23.png"


import {ScrollCenter} from "@core/frame/view/group/GroupView";

export default class RecommendFragment extends Fragment {
    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.carousel = this.findViewById("carousel");
        this.carousel.focusable = false;//在焦点判断时跳过
        this.carousel.orientation = HORIZONTAL;
        this.carousel.adapter = new CarouselAdapter();
        this.carousel.data = bigPictureList;

        this.point_list = this.findViewById("point_list");
        this.point_list.orientation = HORIZONTAL;
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0, 0, 3, 3);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = bigPictureList;


        this.history = this.findViewById("history");
        this.history.orientation = HORIZONTAL;
        this.history.adapter = new HistoryAdapter();
        this.history.data = history;

        this.coming_soon = this.findViewById("coming_soon");
        this.coming_soon.orientation = HORIZONTAL;
        this.coming_soon.adapter = new ComingSoonAdapter();
        this.coming_soon.data = comingSoon;

        this.like = this.findViewById("like");
        this.like.col = 4;
        this.like.margin.bottom = 12;
        this.like.adapter = new LikeAdapter();
        this.like.data = likeData;

    }

    setView() {

    }

    initUtils() {

    }

    onClickListener(view) {
        console.log(view);
    }

    onScrollingListener(scrollView, x, y) {
    }
}

var bigPictureList = [
    big_picture_0, big_picture_1, big_picture_2, big_picture_3, big_picture_4,
    big_picture_5, big_picture_6, big_picture_7, big_picture_8, big_picture_9
];

var history = [
    {
        pic: history_0,
        name: "向往的生活 第六季",
        info: "第07-08期"
    },
    {
        pic: history_1,
        name: "乘风破浪 第三季",
        info: "05-20"
    },
    {
        pic: history_2,
        name: "向往的生活 第五季",
        info: "第04-23期"
    },
    {
        pic: history_3,
        name: "声生不息",
        info: "第05-15期"
    },
    {
        pic: history_0,
        name: "向往的生活 第六季",
        info: "第07-08期"
    }
];

var comingSoon = [
    {
        time: "明天 00：00",
        pic: coming_soon_0,
        name: "精灵旅社4"
    },
    {
        time: "7-14 12:00",
        pic: coming_soon_1,
        name: "密室大逃脱4"
    },
    {
        time: "7-16 22:00",
        pic: coming_soon_2,
        name: "牧野家族"
    },
    {
        time: "07-27 10：00",
        pic: coming_soon_3,
        name: "少年白马醉春风"
    },
    {
        time: "即将上线",
        pic: coming_soon_4,
        name: "从前慢·白首要相离"
    },
    {
        time: "即将上线",
        pic: coming_soon_5,
        name: "式微"
    },
    {
        time: "即将上线",
        pic: coming_soon_6,
        name: "虚颜"
    },
    {
        time: "即将上线",
        pic: coming_soon_0,
        name: "精灵旅社4"
    },
];

var likeData = [
    {
        pic: like_0,
        name: "嘉宾档案：听王心凌唱《第一次爱的人》",
        info: "王心凌 《第一次爱的人》 好绝"
    },
    {
        pic: like_1,
        name: "本公主做事全凭心情 你们休想安排我",
        info: "本公主做事全凭心情"
    },
    {
        pic: like_2,
        name: "新生日记第8期看点：婆媳矛盾致麦迪娜宫缩",
        info: "婆媳矛盾致麦迪娜宫缩"
    },
    {
        pic: like_3,
        name: "纯享版：李承炫&戚薇《天上飞》荷尔蒙爆表",
        info: "《天上飞》"
    },
    {
        pic: like_4,
        name: "官宣！杨幂大张伟黄明昊张国伟陈伟霆彭昱畅",
        info: "《密室大逃脱4》阵容官宣"
    },
    {
        pic: like_5,
        name: "王紫璇再现小神婆舞蹈名场面 引全场姐妹跟风",
        info: "王紫璇再现小神婆舞蹈名场"
    },
    {
        pic: like_6,
        name: "张智霖准备了全鱼宴，谢娜：第一口下去就笑了",
        info: "谢娜感恩张智霖的全鱼宴"
    },
    {
        pic: like_7,
        name: "阿朵孟佳白鹿非遗秀《我的新衣》高燃沉浸其中",
        info: "阿朵孟佳白鹿同台演绎非遗秀"
    },
    {
        pic: like_8,
        name: "仙界醋王，隔着屏幕都能闻到酸味",
        info: "仙界醋王，隔着屏幕都能闻到酸味"
    },
    {
        pic: like_9,
        name: "《进击的皇后2》第12集看点：嘴都亲肿了？这也太上头了",
        info: "嘴都亲肿了？这也太上头了"
    },
    {
        pic: like_10,
        name: "谢娜意外摔倒了，全场爆笑，只有张杰一脸担心",
        info: "谢娜意外摔倒张杰一脸担心"
    },
    {
        pic: like_11,
        name: "谭松韵给蘑菇屋打电话 软萌可爱点手抓饭",
        info: "谭松韵打电话点菜 太软萌可爱了"
    },
    {
        pic: like_12,
        name: "太后摄政，朕生无可恋",
        info: "太后摄政，朕生无可恋"
    },
    {
        pic: like_13,
        name: "《独行月球》曝沈腾特辑，穿着40斤宇航服抖包袱",
        info: "沈腾穿着40斤宇航服抖包袱"
    },
    {
        pic: like_14,
        name: "再续前缘！许凯吴谨言二搭圆梦",
        info: "再续前缘！许凯吴谨言二搭圆梦"
    },
    {
        pic: like_15,
        name: "羞羞脸！林楠换衣服被鹿希看见",
        info: "林楠换衣服被鹿希看见"
    },
    {
        pic: like_16,
        name: "张子枫目睹张宥浩杀人",
        info: "张子枫目睹张宥浩杀人"
    },
    {
        pic: like_17,
        name: "高家为有多坏？新第三者就在方糖眼皮底下蹦跶",
        info: "新第三者就在方糖眼皮底下蹦跶"
    },
    {
        pic: like_18,
        name: "杨幂《花儿与少年》交个朋友大片，羊毛卷发",
        info: "杨幂《花儿与少年》交个朋友大片"
    },
    {
        pic: like_19,
        name: "魏晨于玮三亚婚礼现场照曝光 好友陆虎惊喜现身",
        info: "魏晨于玮三亚婚礼现场照曝光"
    },
    {
        pic: like_20,
        name: "我是大美人20220706期：正确减肥先分型",
        info: "正确减肥先分型"
    },
    {
        pic: like_21,
        name: "《爸爸当家》7月5日看点：全职爸爸天花板",
        info: "小米小宝穿古装超可爱"
    },
    {
        pic: like_22,
        name: "荒野乱斗大明星阿亮 第4集",
        info: "公牛很强壮"
    },
    {
        pic: like_23,
        name: "《机甲兽神之爆裂飞车》第18集看点：擎锋上当了",
        info: "擎锋上当了"
    }
];
class CarouselAdapter extends Adapter {
    bindHolder(holder, data) {
        var big_picture = holder.findEleById("big_picture");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        big_picture.src = data;
    }
}

class PointAdapter extends Adapter {
    bindHolder(holder, data) {
    }
}

class HistoryAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findEleById("pic");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        var txt = holder.findEleById("txt");//TODO 使用TextView文字不显示
        var info = holder.findEleById("info");
        pic.src = data.pic;
        txt.innerText = data.name;
        info.innerText = data.info;

    }
}

class ComingSoonAdapter extends Adapter {
    bindHolder(holder, data) {
        var time = holder.findEleById("time")
        var pic = holder.findEleById("pic");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        var txt = holder.findEleById("txt");//TODO 使用TextView文字不显示
        time.innerText = data.time;
        pic.src = data.pic;
        txt.innerText = data.name;

    }
}

class LikeAdapter extends Adapter{
    bindHolder(holder, data) {
        var pic = holder.findEleById("pic");
        var txt = holder.findViewById("txt");
        var info = holder.findEleById("info");

        pic.src = data.pic;
        txt.text = data.name;
        info.innerText = data.info;

    }
}

var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        this.carousel.scrollByIndex(index);


        var that = this;
        setTimeout(function () {
            if (that.scrollTop != 0) {
                that.scrollVerticalTo(0);
            }
        }, 0)
    }
}


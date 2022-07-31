import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/variety_fragment.html";
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import VMargin from "@core/frame/util/VMargin";
import big_picture_0 from "@images-js/home/recommend_fragment/big_picture_0.png";
import big_picture_1 from "@images-js/home/recommend_fragment/big_picture_1.png";
import big_picture_2 from "@images-js/home/recommend_fragment/big_picture_2.png";
import big_picture_3 from "@images-js/home/recommend_fragment/big_picture_3.png";
import big_picture_6 from "@images-js/home/recommend_fragment/big_picture_6.png";
import like_0 from "@images-js/home/recommend_fragment/like_0.png";
import like_1 from "@images-js/home/recommend_fragment/like_1.png";
import like_2 from "@images-js/home/recommend_fragment/like_2.png";
import like_3 from "@images-js/home/recommend_fragment/like_3.png";
import like_4 from "@images-js/home/recommend_fragment/like_4.png";
import like_5 from "@images-js/home/recommend_fragment/like_5.png";
import like_6 from "@images-js/home/recommend_fragment/like_6.png";
import like_7 from "@images-js/home/recommend_fragment/like_7.png";
import like_8 from "@images-js/home/recommend_fragment/like_8.png";
import like_9 from "@images-js/home/recommend_fragment/like_9.png";
import like_10 from "@images-js/home/recommend_fragment/like_10.png";
import like_11 from "@images-js/home/recommend_fragment/like_11.png";

export default class VarietyFragment extends Fragment{

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
        this.point_list.select = true;
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0, 0, 3, 3);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = bigPictureList;

        this.ace_variety = this.findViewById("ace_variety");
        this.ace_variety.col = 4;
        this.ace_variety.adapter = new AceVarietyAdapter();
        this.ace_variety.data = aceData;


    }

    setView() {

    }

    initUtils() {

    }


}

var bigPictureList = [
    big_picture_0, big_picture_1, big_picture_2, big_picture_3, big_picture_6
];

var aceData = [
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

class AceVarietyAdapter extends Adapter {
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
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
    }

    setView() {

    }

    initUtils() {

    }

    onScrollingListener(scrollView,x,y){
        //TODO 滚动监听不触发
        console.log(arguments)
    }

}

var bigPictureList = [
    big_picture_0,big_picture_1,big_picture_2,big_picture_3,big_picture_4,
    big_picture_5,big_picture_6,big_picture_7,big_picture_8,big_picture_9
];

var history = [
    {
        pic:history_0,
        name:"向往的生活 第六季",
        info:"第07-08期"
    },
    {
        pic:history_1,
        name:"乘风破浪 第三季",
        info:"05-20"
    },
    {
        pic:history_2,
        name:"向往的生活 第五季",
        info:"第04-23期"
    },
    {
        pic:history_3,
        name:"声生不息",
        info:"第05-15期"
    },
    {
        pic:history_0,
        name:"向往的生活 第六季",
        info:"第07-08期"
    }
];

var comingSoon = [
    {
        time:"明天 00：00",
        pic:coming_soon_0,
        name:"精灵旅社4"
    },
    {
        time:"7-14 12:00",
        pic:coming_soon_1,
        name:"密室大逃脱4"
    },
    {
        time:"7-16 22:00",
        pic:coming_soon_2,
        name:"牧野家族"
    },
    {
        time:"07-27 10：00",
        pic:coming_soon_3,
        name:"少年白马醉春风"
    },
    {
        time:"即将上线",
        pic:coming_soon_4,
        name:"从前慢·白首要相离"
    },
    {
        time:"即将上线",
        pic:coming_soon_5,
        name:"式微"
    },
    {
        time:"即将上线",
        pic:coming_soon_6,
        name:"虚颜"
    },
    {
        time:"即将上线",
        pic:coming_soon_0,
        name:"精灵旅社4"
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

var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        this.carousel.scrollByIndex(index);


        var that = this;
        setTimeout(function (){
            if(that.scrollTop != 0){
                that.scrollVerticalTo(0);
            }
        },0)
    }
}

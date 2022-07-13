import Fragment from "@core/frame/view/group/Fragment";

import html from "@html/fragment/recommend_fragment.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import VMargin from "@core/frame/util/VMargin";
import big_picture_0 from "@images-js/home/recommend_fragment/big_picture_0.png";
import history_0 from "@images-js/home/recommend_fragment/history_0.png";
import history_1 from "@images-js/home/recommend_fragment/history_1.png";
import history_2 from "@images-js/home/recommend_fragment/history_2.png";
import history_3 from "@images-js/home/recommend_fragment/history_3.png";
import {ScrollCenter} from "@core/frame/view/group/GroupView";

export default class RecommendFragment extends Fragment {
    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.scrollLocate = ScrollCenter;

        this.carousel = this.findViewById("carousel");
        this.carousel.focusable = false;//在焦点判断时跳过
        this.carousel.orientation = HORIZONTAL;
        this.carousel.adapter = new CarouselAdapter();
        this.carousel.data = new Array(7);

        this.point_list = this.findViewById("point_list");
        this.point_list.orientation = HORIZONTAL;
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0, 0, 2, 2);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = new Array(7);


        this.history = this.findViewById("history");
        this.history.orientation = HORIZONTAL;
        this.history.adapter = new HistoryAdapter();
        this.history.data = [
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
    }

    setView() {

    }

    initUtils() {

    }

    onScrollingListener(){
        //TODO 这个监听不触发
        console.log(arguments)
    }
}

class CarouselAdapter extends Adapter {
    bindHolder(holder, data) {
        var big_picture = holder.findEleById("big_picture");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        big_picture.src = big_picture_0;
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

var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        //TODO this指向到page了，无法指向fragment
        // this.carousel.scrollByIndex(index);
    }
}

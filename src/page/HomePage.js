import Page from "@core/frame/page/Page";

import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";

import big_picture_0 from "../images-js/big_picture_0.png"
import VMargin from "@core/frame/util/VMargin";
export default class HomePage extends Page {
    constructor() {
        super();
        this.pageName = "HomePage";
    }

    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.navigation = this.findViewById("navigation");
        console.log(this.navigation);
        this.navigation.orientation = HORIZONTAL;
        this.navigation.adapter = new NavigationAdapter();
        this.navigation.data = new Array(13);

        this.carousel = this.findViewById("carousel");
        this.carousel.focusable = false;//在焦点判断时跳过
        this.carousel.orientation = HORIZONTAL;
        this.carousel.adapter = new CarouselAdapter();
        this.carousel.data = new Array(7);

        this.point_list = this.findViewById("point_list");
        this.point_list.orientation = HORIZONTAL;
        this.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0,0,2,2);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = new Array(7);

    }

    setView() {
    }

    initUtil(){

    }

    onClickListener(view) {
        console.log(view.pageName, "-onClickListener", view);
    }

    onFocusChangeListener(view, hasFocus) {
        console.log("焦点变化监听", hasFocus, view);
    }

    onResume() {
        // console.log(this.pageName + "-onResume");
    }

    onPause() {
        console.log(this.pageName + "-onPause");
    }

    onStop() {
        console.log(this.pageName + "-onStop");
    }

    onDestroy() {
        console.log(this.pageName + "-onDestroy");
    }

    key_back_event() {
    }
}

class NavigationAdapter extends Adapter{
    bindHolder(holder, data) {
    }
}

class CarouselAdapter extends Adapter{
    bindHolder(holder, data) {
        var big_picture = holder.findEleById("big_picture");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        big_picture.src = big_picture_0;
    }
}

class PointAdapter extends Adapter{
    bindHolder(holder, data) {
    }
}

var onFocusChangeListenerPoint = function (view,hasFocus){
    if(hasFocus){
        var index = view.fatherView.holder.index;

        view.page.carousel.scrollByIndex(index);
    }
}
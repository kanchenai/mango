import Page from "@core/frame/page/Page";
import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";

import RecommendFragment from "@fragment/RecommendFragment";

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

        this.frame = this.findViewById("frame");
        this.frame.addFragmentList([
            new RecommendFragment(this.viewManager)
        ])

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

    onScrollingListener(){
        //TODO 滚动不触发改监听
        console.log(arguments)
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

import Page from "@core/frame/page/Page";
import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";

import RecommendFragment from "@fragment/RecommendFragment";
import {ScrollCenter} from "@core/frame/view/group/GroupView";

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
        this.navigation.select = true;
        this.navigation.orientation = HORIZONTAL;
        this.navigation.adapter = new NavigationAdapter();
        this.navigation.data = navigationData;

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

var navigationData = [
    "精选","综艺","电视剧","电影",
    "少儿","动漫","大芒","新闻",
    "音乐","游戏","娱乐","生活",
    "教育","投教","纪录片","时尚",
    "直播"
]

class NavigationAdapter extends Adapter{
    bindHolder(holder, data) {
        var txt = holder.findEleById("txt");
        txt.innerText = data;
    }
}

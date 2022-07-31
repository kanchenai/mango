import Page from "@core/frame/page/Page";
import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";

import RecommendFragment from "@fragment/RecommendFragment";
import {ScrollCenter} from "@core/frame/view/group/GroupView";
import VarietyFragment from "@fragment/VarietyFragment";
import DramaFragment from "@fragment/DramaFragment";
import MovieFragment from "@fragment/MovieFragment";
import ChildFragment from "@fragment/ChildFragment";
import AnimationFragment from "@fragment/AnimationFragment";
import DamangFragment from "@fragment/DamangFragment";
import NewsFragment from "@fragment/NewsFragment";
import MusicFragment from "@fragment/MusicFragment";
import GameFragment from "@fragment/GameFragment";
import EntertainmentFragment from "@fragment/EntertainmentFragment";
import LifeFragment from "@fragment/LifeFragment";
import EducationFragment from "@fragment/EducationFragment";
import TeachingFragment from "@fragment/TeachingFragment";
import DocumentaryFragment from "@fragment/DocumentaryFragment";
import FashionFragment from "@fragment/FashionFragment";
import LiveFragment from "@fragment/LiveFragment";

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
        this.navigation.onFocusChangeListener = onNavigationFocusChangeListener;
        this.navigation.adapter = new NavigationAdapter();
        this.navigation.data = navigationData;

        this.frame = this.findViewById("frame");
        this.frame.addFragmentList([
            new RecommendFragment(this.viewManager),
            new VarietyFragment(this.viewManager),
            new DramaFragment(this.viewManager),
            new MovieFragment(this.viewManager),
            new ChildFragment(this.viewManager),
            new AnimationFragment(this.viewManager),
            new DamangFragment(this.viewManager),
            new NewsFragment(this.viewManager),
            new MusicFragment(this.viewManager),
            new GameFragment(this.viewManager),
            new EntertainmentFragment(this.viewManager),
            new LifeFragment(this.viewManager),
            new EducationFragment(this.viewManager),
            new TeachingFragment(this.viewManager),
            new DocumentaryFragment(this.viewManager),
            new FashionFragment(this.viewManager),
            new LiveFragment(this.viewManager)
        ])

    }

    setView() {
    }

    initUtil() {

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
    "精选", "综艺", "电视剧", "电影",
    "少儿", "动漫", "大芒", "新闻",
    "音乐", "游戏", "娱乐", "生活",
    "教育", "投教", "纪录片", "时尚",
    "直播"
]

class NavigationAdapter extends Adapter {
    bindHolder(holder, data) {
        var txt = holder.findEleById("txt");
        txt.innerText = data;
    }
}

var onNavigationFocusChangeListener = function (view, hasFocus) {
    if (hasFocus) {
        var len = this.navigation.data.length
        var index = (view.fatherView.holder.index + len) % len;

        // if(index <= 1){
            this.frame.switchTo(index)
        // }
    }
}


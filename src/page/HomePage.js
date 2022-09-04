import Page from "@core/frame/page/Page";
import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";

import RecommendFragment from "@fragment/home/RecommendFragment";
import {ScrollCenter} from "@core/frame/view/group/GroupView";
import VarietyFragment from "@fragment/home/VarietyFragment";
import DramaFragment from "@fragment/home/DramaFragment";
import MovieFragment from "@fragment/home/MovieFragment";
import ChildFragment from "@fragment/home/ChildFragment";
import AnimationFragment from "@fragment/home/AnimationFragment";
import DamangFragment from "@fragment/home/DamangFragment";
import NewsFragment from "@fragment/home/NewsFragment";
import MusicFragment from "@fragment/home/MusicFragment";
import GameFragment from "@fragment/home/GameFragment";
import EntertainmentFragment from "@fragment/home/EntertainmentFragment";
import LifeFragment from "@fragment/home/LifeFragment";
import EducationFragment from "@fragment/home/EducationFragment";
import TeachingFragment from "@fragment/home/TeachingFragment";
import DocumentaryFragment from "@fragment/home/DocumentaryFragment";
import FashionFragment from "@fragment/home/FashionFragment";
import LiveFragment from "@fragment/home/LiveFragment";
import ListPage from "@page/ListPage";
import SearchPage from "@page/SearchPage";

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
        this.top_group = this.findViewById("top_group");

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

    navigationScrollDisappear() {
        this.top_group.scrollVerticalTo(70);
    }

    navigationScrollDisplay() {
        this.top_group.scrollVerticalTo(0);
    }

    onClickListener(view) {
        if (view.id == "content_lib") {
            var listPage = new ListPage();
            this.startPage(listPage);
        } else if (view.id == "search") {
            var searchPage = new SearchPage();
            var param = {
                key:this.findViewById("search").findViewById("key").text
            }
            this.startPage(searchPage,param);
        } else {

        }
        console.log(this.pageName, "-onClickListener", view);
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


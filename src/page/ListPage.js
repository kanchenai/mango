import Page from "@core/frame/page/Page";
import html from "@html/list.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import ListRecommendFragment from "@fragment/list/ListRecommendFragment";
import ListVarietyFragment from "@fragment/list/ListVarietyFragment";

export default class ListPage extends Page{
    onCreate(param){
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){
        this.navigation = this.findViewById("navigation");
        this.navigation.select = true;
        this.navigation.orientation = HORIZONTAL;
        this.navigation.onFocusChangeListener = onNavigationFocusChangeListener;
        this.navigation.adapter = new NavigationAdapter();
        this.navigation.data = navigationData;


        this.frame = this.findViewById("frame");
        this.frame.addFragmentList([
            new ListRecommendFragment(this.viewManager),
            new ListVarietyFragment(this.viewManager),
            new ListRecommendFragment(this.viewManager),
            new ListVarietyFragment(this.viewManager),
            new ListRecommendFragment(this.viewManager)
        ])

    }
    setView(){}
    initUtils(){}


    key_back_event() {
        let index = this.navigation.childViews.indexOf(this.focusView.fatherView);
        if(index < 0){
            this.frame.foregroundView.scrollVerticalTo(0);
            this.navigation.requestFocus();
        }else if(index > 0){
            this.navigation.focusByIndex(0);
        }else{
            super.key_back_event();
        }
    }

}

var navigationData = [
    "精选", "综艺", "电视剧", "电影",
    "少儿"
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

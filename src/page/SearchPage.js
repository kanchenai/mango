import Page from "@core/frame/page/Page";
import html from "@html/search.html"
import {Adapter} from "@core/frame/view/group/RecycleView";
import VMargin from "@core/frame/util/VMargin";

export default class SearchPage extends Page {

    constructor() {
        super();
        this.pageName = "SearchPage";
    }

    onCreate(param) {
        this.html = html;
        console.log(this.pageName, "param", param);
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.keyword = this.findViewById("keyword");
        this.keyword.marquee();
        this.keyboard = this.findViewById("keyboard");
        this.keyboard.col = 6;
        this.keyboard.margin = new VMargin(0, 5, 0, 5);
        this.keyboard.adapter = new KeyboardAdapter();
        this.keyboard.data = keyboardData;
    }

    setView() {
        this.keyboard.onClickListener = onKeyboardClickListener;

    }

    initUtils() {
    }

}

var keyboardData = [
    "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X",
    "Y", "Z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9",
];

class KeyboardAdapter extends Adapter {
    bindHolder(holder, data) {
        var txt = holder.findEleById("txt");
        txt.innerText = data;
    }
}

var onKeyboardClickListener = function (view){
    let data = view.data;

    this.keyword.text = this.keyword.text + data;
    this.keyword.marquee();
}

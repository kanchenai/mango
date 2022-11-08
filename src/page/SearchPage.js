import Page from "@core/frame/page/Page";
import html from "@html/search.html"
import {Adapter} from "@core/frame/view/group/RecycleView";
import VMargin from "@core/frame/util/VMargin";
import poster_0 from "@images-js/search/poster_0.png";
import poster_1 from "@images-js/search/poster_1.png";
import poster_2 from "@images-js/search/poster_2.png";
import poster_3 from "@images-js/search/poster_3.png";
import poster_4 from "@images-js/search/poster_4.png";
import poster_5 from "@images-js/search/poster_5.png";
import DetailPage from "@page/DetailPage";

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

        this.search_recommend = this.findViewById("search_recommend");
        this.search_recommend.col = 2;
        this.search_recommend.margin.right = 10;
        this.search_recommend.margin.bottom = 10;
        this.search_recommend.adapter = new PosterAdapter();
        this.search_recommend.data = posterData;

        this.search_result = this.findViewById("search_result");
        this.search_result.col = 2;
        this.search_result.margin.right = 10;
        this.search_result.margin.bottom = 10;
        this.search_result.adapter = new PosterAdapter();
        this.search_result.data = posterData;
    }

    setView() {
        this.keyboard.onClickListener = onKeyboardClickListener;

    }

    initUtils() {
    }

    onClickListener(view) {
        switch (view.id) {
            case "button_delete":
                var key = this.keyword.text;
                if (key.length > 0) {
                    key = key.substring(0, key.length - 1);
                    this.keyword.text = key;
                }
                break;
            case "button_clear":
                this.keyword.text = "";
                break;
        }
    }

    onPosterClickListener(view){
        var data = view.data;
        console.log(data);

        var detailPage = new DetailPage();
        this.startPage(detailPage,null);

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

var posterData = [
    {
        pic: poster_0,
        name: "精灵旅社4"
    },
    {
        pic: poster_1,
        name: "密室大逃脱4"
    },
    {
        pic: poster_2,
        name: "牧野家族"
    },
    {
        pic: poster_3,
        name: "少年白马醉春风"
    },
    {
        pic: poster_4,
        name: "从前慢·白首要相离"
    },
    {
        pic: poster_5,
        name: "式微"
    }
];

class KeyboardAdapter extends Adapter {
    bindHolder(holder, data) {
        var txt = holder.findEleById("txt");
        txt.innerText = data;
    }
}

class PosterAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findViewById("txt");
        var img = holder.findViewById("pic");

        text.text = data.name;
        img.src = data.pic;

    }
}

var onKeyboardClickListener = function (view) {
    let data = view.data;

    this.keyword.text = this.keyword.text + data;
    this.keyword.marquee();
}

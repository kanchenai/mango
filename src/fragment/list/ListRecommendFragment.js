import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/list/list_recommend_fragment.html";
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
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
import VMargin from "@core/frame/util/VMargin";

export default class ListRecommendFragment extends Fragment{
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
        this.point_list.select = true;
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0, 0, 3, 3);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = bigPictureList;



        this.back_top = this.findViewById("back_top");
        this.back_top.hide();
    }

    setView() {

    }

    initUtils() {

    }
}

var bigPictureList = [
    big_picture_0, big_picture_1, big_picture_2,
    big_picture_3, big_picture_4, big_picture_5
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


var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        this.carousel.scrollByIndex(index);


        var that = this;
        setTimeout(function () {
            if (that.scrollTop != 0) {
                that.scrollVerticalTo(0);
            }
        }, 0)
    }
}
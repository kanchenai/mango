import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/movie_fragment.html"

export default class MovieFragment extends Fragment{

    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.setStyle("background","red");

    }

    setView() {

    }

    initUtils() {

    }
}
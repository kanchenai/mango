import Fragment from "@core/frame/view/group/Fragment";

export default class LiveFragment extends Fragment{

    onCreate() {
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.setStyle("background","#12723d");

    }

    setView() {

    }

    initUtils() {

    }
}
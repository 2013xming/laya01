import BaseView from "./BaseView";
export default class HomeView extends BaseView {
    startBtn:Laya.Image;
    constructor() { super(); }
    onAwake(): void {
        
        // this.startBtn.on(Laya.Event.CLICK, this, this.onStartImageClick);
    }
    onOpened(): void {
        console.log(this.width);
        console.log(this.startBtn.width);
        console.log((this.width - this.startBtn.width) / 2);
        this.height = Laya.stage.height;
        this.width = Laya.stage.width;
        this.startBtn.x = (Laya.stage.width - this.startBtn.width) / 2; 
    }
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStartImageClick(): void {
        console.log("onStartImageClick");
    }
}
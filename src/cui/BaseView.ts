export default class BaseView extends Laya.Scene {
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onOpened(param: any): void {
        console.log(Laya.stage.height);
        // 赋值不能在onAwake中
        this.height = Laya.stage.height;
        this.width = Laya.stage.width;
    }
}
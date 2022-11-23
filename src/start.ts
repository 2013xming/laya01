import Sprite = Laya.Sprite;
export default class start extends Laya.Script {
    /** @prop {name:btnL1, tips:"节点", type:node, default: null}*/
    public btnL1: Node = null;

    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;
    /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
    public numType: number = 1000;
    /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
    public strType: string = "hello laya";
    /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
    public boolType: boolean = true;
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    startBtn:Laya.Image;

    constructor() { 
        super();
    }
    onAwake(): void {
        // Laya.get
        console.log(this.btnL1);
        // this.btnL1.
        // this.btnL1.on("click", this, function(e) {
        //     console.log(111)
        // });
        // var gameContainer:Sprite = new Sprite();
        // gameContainer.on("click", this, function(e) {
        //         console.log(111)
        // });

        // 加载 unity 场景
        // Laya.Scene3D.load("res/LayaScene_SampleScene/Conventional/SampleScene.ls",new Laya.Handler(this, (scene:Laya.Scene) => {
        //     this.owner.addChild(scene);
        //     console.log(scene);
        // }));

        // 注册按钮事件
        // this.startBtn.on(Laya.Event.CLICK, this, this.onStartImageClick);
    }
    onEnable(): void {
        console.log('onEnable');
        // this.btnL1.addEventListener(Laya.Event.CLICK, function(e) {
        //     console.log(111)
        // })
        // 背景音乐
        // Laya.SoundManager.playMusic('sound/bgmusic_1.mp3');
    }

    onDisable(): void {
    }

    // onClick(event: Laya.Event): void {
    //    // 切换场景    
    //     Laya.Scene.open('level1.scene');
    // }

    // onStartImageClick(): void {
    //     console.log("onStartImageClick");
    // }
}
// import Browser = Laya.Browser;
// import ColliderBase = Laya.ColliderBase;
import { posEqual } from '../utils/utils';

export default class Enemy extends Laya.Script {
    
    private spriteSelf: Laya.Sprite = null;
    private circleCollider: Laya.CircleCollider = null;
    private rigidBody: Laya.RigidBody = null; 

    private speed:number = 100;
    // state: ready, moving, stoped
    public state: string = "ready"; 
    pathPos: Array<Array<number>> = [];
    pathIndex: number = 0;
    hp: number = 1;
    testTimer: any = null;
    protected hpProgressBar:Laya.ProgressBar = null;

    constructor() {
        super();
    }
    async onAwake(): Promise<void> {
        this.spriteSelf = this.owner as Laya.Sprite;
        this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider) as Laya.CircleCollider;
        this.circleCollider.radius = 50;
        this.circleCollider.enabled = true;
        this.setCircleColliderPos();
        this.rigidBody = this.spriteSelf.getComponent(Laya.RigidBody);

        this.spriteSelf.x = 0;
        this.spriteSelf.y = 0;
        this.spriteSelf.pivot(this.spriteSelf.width/2, this.spriteSelf.height/2);
        // (this.spriteSelf as Laya.Component).anchor(this.spriteSelf.width/2, this.spriteSelf.height/2);
        // this.spriteSelf.zOrder = 1;
        // const hpImg:Laya.Image = await loader.loadRes(path, Laya.Loader.IMAGE) as any;
        // Laya.loader.load(["res/ui/progressBar.png", "res/ui/progressBar$bar.png"], Laya.Handler.create(this, this.onLoadComplete));
        Laya.loader.load(["img/hpBar.png", "img/hpBar$bar.png"], Laya.Handler.create(this, function() {
            this.hpProgressBar = new Laya.ProgressBar("img/hpBar.png");
            this.owner.addChild(this.hpProgressBar);
            this.hpProgressBar.width = this.spriteSelf.width;
            this.hpProgressBar.height = 10;
            
            this.hpProgressBar.value = this.hp;
            // this.hpProgressBar.x = (Laya.stage.width - this.hpProgressBar.width ) / 2;
            this.hpProgressBar.top = -10;
            //设置九宫格边距，以防变形
            this.hpProgressBar.sizeGrid = "5,5,5,5";
            console.log(this.hpProgressBar);
        }));
        // console.log(hpImg);
    }

    onEnable(): void {
        // this.spriteSelf = this.owner.getChildByName('enemySprite') as Laya.Sprite;
        // this.state = 'moving';
    }

    onDisable(): void {
    }
    onTriggerEnter(other:any, self:any, contact:any): void {
        console.log('enemy onTriggerEnter.');
        // TODO  attacked
        
        // console.log(other);
        // this.testTimer = setInterval(() => {
        //     this.hpProgressBar.value -= 0.1;
        //     if(this.hpProgressBar.value <= 0){
        //         console.log('dead.');
        //         this.owner.removeSelf();
        //         clearInterval(this.testTimer);
        //     }
        // }, 200);
    }
    // onTriggerStay(other: any, self: any, contact: any): void {
    //     console.log('onTriggerStay');
    // }
    onTriggerExit(other: any, self: any, contact: any): void {
        console.log('Enemy onTriggerExit.');
        // console.log(other);
        // clearInterval(this.testTimer);
        // this.spriteSelf.scale(0.5, 0.5);
    }
    setState(state: string): void {
        this.state = state;
    }
    setWH(width: number, height: number): void {

        this.spriteSelf.width = width
        this.spriteSelf.height = height;
        this.setCircleColliderPos();
        this.setCircleRadius(Math.max(width, height) / 2);
        this.spriteSelf.pivot(width/2, height/2);
    }
    // setPosition(x: number, y: number): void {
    //     // const self = this.owner.getChildByName('enemy') as Laya.Sprite;
    //     this.spriteSelf = this.owner as Laya.Sprite;
    //     this.setCircleColliderPos();
    // }
    setCircleColliderPos(): void {
        
        this.circleCollider.x = this.spriteSelf.width / 2 - this.circleCollider.radius;
        this.circleCollider.y = this.spriteSelf.height / 2 - this.circleCollider.radius;
    }
    setSpeed(speed: number): void {
        this.speed = speed;
    }
    // setBg(bgpath: string): void {
    //     // todo
    //     // this.bg = bgpath;
    // }
    setCircleRadius(radius: number): void {
        this.circleCollider.radius = radius;
    }
    setPath(pathPos:Array<Array<number>>): void {
        this.pathPos = pathPos;
        this.spriteSelf.x = pathPos[0][0] + this.spriteSelf.width / 2;
        this.spriteSelf.y = pathPos[0][1] + this.spriteSelf.height /2 ;
    }
    stop():void {
        this.state = 'stopped';
    }
    onUpdate(): void {
        if(this.state == 'moving'){
            if(this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1){
                const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];
                const len = this.speed * Laya.timer.delta / 1000;
                const radian = Math.atan2(deltaY, deltaX);
                this.rigidBody.setVelocity({ x: Math.floor((len * Math.cos(radian)) * 100) / 100, y: Math.floor((len * Math.sin(radian)) * 100) / 100 });
                if(posEqual([this.spriteSelf.x - this.circleCollider.radius, this.spriteSelf.y - this.circleCollider.radius], this.pathPos[this.pathIndex + 1], len)){
                    this.spriteSelf.x = this.pathPos[this.pathIndex + 1][0] + this.circleCollider.radius;
                    this.spriteSelf.y = this.pathPos[this.pathIndex + 1][1] + this.circleCollider.radius;
                    this.pathIndex++;
                    this.rigidBody.setVelocity({ x: 0, y: 0 });
                    console.log('posEqual');
                    return;
                }
            }
        }  
    }
    onUpdate_bak(): void {
        if(this.state == 'moving'){
            if(this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1){
                const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];
                const len = this.speed * Laya.timer.delta / 1000;
                // const radian = deltaY * deltaX >= 0 ? Math.atan(deltaY / deltaX) :  Math.PI / 2 + Math.atan(deltaY / deltaX);
                const radian = Math.atan2(deltaY, deltaX);

                // if(this.spriteSelf.x < 0
                //     || this.spriteSelf.x > Browser.clientWidth
                //     || this.spriteSelf.y < 0
                //     || this.spriteSelf.y > Browser.clientHeight
                // ){
                //     this.state = 'stoped'  
                //     return;
                // }

                this.spriteSelf.x += Math.floor((len * Math.cos(radian)) * 100) / 100;
                this.spriteSelf.y += Math.floor((len * Math.sin(radian)) * 100) / 100;
                // console.log( Math.floor((len * Math.cos(radian)) * 100) / 100);
                // console.log( Math.floor((len * Math.sin(radian)) * 100) / 100);
                // console.log(len);
                
                if(posEqual([this.spriteSelf.x, this.spriteSelf.y], this.pathPos[this.pathIndex + 1], len)){
                    this.spriteSelf.x = this.pathPos[this.pathIndex + 1][0];
                    this.spriteSelf.y = this.pathPos[this.pathIndex + 1][1];
                    this.pathIndex++;
                    console.log('posEqual');
                    return;
                }
                // this.setCircleColliderPos();

            }
        }
    }
}
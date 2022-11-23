import Browser = Laya.Browser;
import ColliderBase = Laya.ColliderBase;
import { posEqual } from '../utils/utils';

export default class Enemy extends Laya.Script {
    
    private spriteSelf: Laya.Sprite = null;

    private speed:number = 100;
    // state: ready, moving, stoped
    public state: string = "ready"; 
    pathPos: Array<Array<number>> = [];
    pathIndex: number = 0;
    hp: number = 0;

    constructor() {
        super();
    }
    onAwake(): void {
        this.spriteSelf = this.owner as Laya.Sprite;
        this.spriteSelf.x = 0;
        this.spriteSelf.y = 0;
    }
    onEnable(): void {
        // this.spriteSelf = this.owner.getChildByName('enemySprite') as Laya.Sprite;
        this.state = 'moving';
    }

    onDisable(): void {
    }
    onTriggerEnter(colliderB: ColliderBase, colliderA: ColliderBase, contact): void {
        // console.log('onTriggerEnter.');
        // TODO  attacked
        this.spriteSelf.scale(1.5, 1.5);
    }
    onTriggerExit(other: any, self: any, contact: any): void {
        console.log('onTriggerExit.');
        this.spriteSelf.scale(0.5, 0.5);
    }
    setState(state: string): void {
        this.state = state;
    }
    setWH(width: number, height: number): void {
        // const self = this.owner.getChildByName('enemy') as Laya.Sprite;
        this.spriteSelf.width = width
        this.spriteSelf.height = height;
    }
    setPosition(x: number, y: number): void {
        // const self = this.owner.getChildByName('enemy') as Laya.Sprite;
        this.spriteSelf = this.owner as Laya.Sprite;
        this.spriteSelf.x = x;
        this.spriteSelf.y = y;
    }
    setSpeed(speed: number): void {
        this.speed = speed;
    }
    setBg(bgpath: string): void {
        // todo
        // this.bg = bgpath;
    }
    setPath(pathPos:Array<Array<number>>): void {
        this.pathPos = pathPos;
        this.spriteSelf.x = pathPos[0][0];
        this.spriteSelf.y = pathPos[0][1];
    }
    stop():void {
        this.state = 'stopped';
    }
    onUpdate(): void {
        if(this.state == 'moving'){
            if(this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1){
                const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];

                // const radian = deltaY * deltaX >= 0 ? Math.atan(deltaY / deltaX) :  Math.PI / 2 + Math.atan(deltaY / deltaX);
                const radian = Math.atan2(deltaY, deltaX);

                if(posEqual([this.spriteSelf.x, this.spriteSelf.y], this.pathPos[this.pathIndex + 1], this.speed * Laya.timer.delta / 1000)){
                    this.pathIndex++;
                    console.log('posEqual');
                    return;
                }
                // if(this.spriteSelf.x < 0
                //     || this.spriteSelf.x > Browser.clientWidth
                //     || this.spriteSelf.y < 0
                //     || this.spriteSelf.y > Browser.clientHeight
                // ){
                //     this.state = 'stoped'  
                //     return;
                // }

                this.spriteSelf.x += (this.speed * Math.cos(radian) * Laya.timer.delta / 1000);
                this.spriteSelf.y += (this.speed * Math.sin(radian) * Laya.timer.delta / 1000);

            }
        }
    }
}
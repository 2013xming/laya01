import EventType from "../constant/EventType";
const turretType = {
    t1: {
        attackType: 'single'
    },
    t2: {
        attackType: 'group'
    },
}

export default class turret extends Laya.Script {
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    shotRange: number = 1;
    aggressivity: number = 0;
    private spriteSelf: Laya.Sprite = null;
    private circleCollider: Laya.CircleCollider = null;
    private shootIntervalTimerList:Array<any> = [];
    private attackType: string = 'single';
    constructor() { super(); }
    onAwake(): void {
        this.spriteSelf = this.owner as Laya.Sprite;
        this.spriteSelf.width = 50;
        this.spriteSelf.height = 50;
        // this.spriteSelf.zOrder = 1;
        // this.circleCollider = this.spriteSelf.addComponent(Laya.CircleCollider);
        this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider) as Laya.CircleCollider;
        this.circleCollider.radius = 100;
        this.circleCollider.enabled = true;
        // this.circleCollider.x = 400;
        // this.circleCollider.y = 400;
        // this.setCircleColliderPos();
        // this.spriteSelf.addComponent(Laya.RigidBody);
        this.spriteSelf.pivot(this.spriteSelf.width/2, this.spriteSelf.height/2);
        this.owner.on(Laya.Event.CLICK, this, this.onMouseClick);
        setInterval(() =>{
            this.spriteSelf.scale(1.2, 1.2);
            setTimeout(() =>{
                this.spriteSelf.scale(0.8, 0.8);
            }, 300);
            setTimeout(() =>{
                this.spriteSelf.scale(1, 1);
            }, 600);
        }, 900);
    }
    onEnable(): void {
    }

    onDisable(): void {
    }
    onUpdate(): void {
        // todo: 检测是否射程范围之内
    }
    // checkPosInShotRange(enemyList:Array<Laya.Sprite>): boolean {
    //     for (let i = 0; i < enemyList.length; i++) {
    //         // enemyList[i].
    //     }
    //     return false;
    // }
    // getNearestEnemy(enemyList:Array<Laya.Sprite>): Laya.Sprite { 
    //     return;
    // }
    onMouseClick(event: Laya.Event): void {
        console.log("mouse click");
        event.stopPropagation();
    }
    // createCircleCollider(radius = 50) {
    //     let rigidbody: Laya.CircleCollider = this.owner.addComponent(Laya.CircleCollider);
    //     rigidbody.radius = radius;
    // }
    onTriggerEnter(other:any, self:any, contact:any) {
        console.log('turret 射程范围内');
        if(this.attackType === 'group'){
            Laya.stage.event(EventType.START_ATTACK, {other, self});
            const intervalTimer = setInterval(() => {
                Laya.stage.event(EventType.START_ATTACK, {other, self});
            }, 500);
            this.shootIntervalTimerList.push({id:other.id, timer: intervalTimer, other, self});
        }
        if(this.attackType === 'single'){
            if (this.shootIntervalTimerList.length === 0){
                Laya.stage.event(EventType.START_ATTACK, {other, self});
                const intervalTimer = setInterval(() => {
                    Laya.stage.event(EventType.START_ATTACK, {other, self});
                }, 500);
                this.shootIntervalTimerList.push({id:other.id, timer: intervalTimer, other, self});
            } else {
                this.shootIntervalTimerList.push({id:other.id, timer: null, other, self});
            }
            
        }
        
    }
    // 方法无效
    onTriggerStay(): void {
        console.log('stay.');
    }
    onTriggerExit(other: any, self: any, contact: any): void {
        console.log('turret  onTriggerExit.');
        const index = this.shootIntervalTimerList.findIndex((item)=>{
            return item.id === other.id;
        })
        if(index > -1){
            let timer = this.shootIntervalTimerList.splice(index, 1);
            clearInterval(timer[0].timer);
            timer[0].timer = null;
            if(this.attackType === 'single' && this.shootIntervalTimerList.length > 0){
                Laya.stage.event(EventType.START_ATTACK, {
                    other: this.shootIntervalTimerList[0].other,
                    self: this.shootIntervalTimerList[0].self
                });
                this.shootIntervalTimerList[0].timer = setInterval(() => {
                    Laya.stage.event(EventType.START_ATTACK, {
                        other: this.shootIntervalTimerList[0].other,
                        self: this.shootIntervalTimerList[0].self
                    });
                }, 500);
            }
        }
    }
    setPosition(x: number, y: number): void {
        // const self = this.owner.getChildByName('enemy') as Laya.Sprite;
        // console.log(this.spriteSelf);
        // const bg:Laya.Image = this.spriteSelf.getChildByName('background') as Laya.Image;
        this.spriteSelf.x = x - this.spriteSelf.width / 2;
        this.spriteSelf.y = y - this.spriteSelf.height / 2;
        // console.log(this.spriteSelf);
        this.setCircleColliderPos();
    }
    setCircleColliderPos(): void {
        this.circleCollider.x =  this.spriteSelf.width / 2 - this.circleCollider.radius;
        this.circleCollider.y =  this.spriteSelf.height / 2 - this.circleCollider.radius;
    }
    setShortRange(shotRange: number): void {
        this.circleCollider.radius = this.shotRange = shotRange;
        this.setCircleColliderPos();
    }
    setWH(width: number, height: number): void {
        this.spriteSelf.width = width
        this.spriteSelf.height = height;
        this.setCircleColliderPos();
        this.spriteSelf.pivot(width/2, height/2);
    }
}
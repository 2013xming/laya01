export default class bullet extends Laya.Script {
   
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    private spriteSelf: Laya.Sprite = null;
    private circleCollider: Laya.CircleCollider = null;
    private rigidBody: Laya.RigidBody = null; 

    private speed:number = 100;
    // private targetPos: Array<number> = [];
    private radian:number = 0;
    // state: ready, moving
    private state: string = "ready"; 

    constructor() { super(); }
    onAwake(): void {
        this.spriteSelf = this.owner as Laya.Sprite;
        this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider) as Laya.CircleCollider;
        this.circleCollider.radius = 5;
        this.circleCollider.enabled = true;
        this.setCircleColliderPos();
        this.rigidBody = this.spriteSelf.getComponent(Laya.RigidBody);

        this.spriteSelf.x = 0;
        this.spriteSelf.y = 0;
        this.spriteSelf.width = 15;
        this.spriteSelf.height = 5;
        this.spriteSelf.pivot(this.spriteSelf.width/2, this.spriteSelf.height/2);
    }
    onEnable(): void {
    }

    onDisable(): void {
    }
    onUpdate(): void {
        if(this.state == 'moving'){
            const len = this.speed * Laya.timer.delta / 1000;
            const x = Math.floor((len * Math.cos(this.radian)) * 100) / 100;
            const y = Math.floor((len * Math.sin(this.radian)) * 100) / 100;
            this.rigidBody.setVelocity({ x: x, y: y});
        }  
    }
    onTriggerEnter(other:any, self:any, contact:any): void {
        console.log('onTriggerEnter.');
        // TODO  attacked
        // this.spriteSelf.scale(1.5, 1.5);
    }
    setCircleColliderPos(): void {
        this.circleCollider.x = this.spriteSelf.width / 2 - this.circleCollider.radius;
        this.circleCollider.y = this.spriteSelf.height / 2 - this.circleCollider.radius;
    }
    setState(state: string): void {
        this.state = state;
    }
    setWH(width: number, height: number): void {
        this.spriteSelf.width = width
        this.spriteSelf.height = height;
        this.spriteSelf.pivot(width/2, height/2);
        this.setCircleColliderPos();
        this.setCircleRadius(Math.max(width, height) / 2);

    }
    setPosition(x: number, y: number): void {
        this.spriteSelf.x = x - this.spriteSelf.width / 2;
        this.spriteSelf.y = y - this.spriteSelf.height / 2 ;
        this.setCircleColliderPos();

    }
    setCircleRadius(radius: number): void {
        this.circleCollider.radius = radius;
        this.setCircleColliderPos();
    }
    setSpeed(speed: number): void {
        this.speed = speed;
    }
    setTargetPos(x: number, y: number){
        const deltaY = y - this.spriteSelf.y;
        const deltaX = x - this.spriteSelf.x;
        this.radian = Math.atan2(deltaY, deltaX);
    }
}
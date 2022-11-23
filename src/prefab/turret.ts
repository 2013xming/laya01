export default class turret extends Laya.Script {
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    shotRange: number = 0;
    aggressivity: number = 0;
    private spriteSelf: Laya.Sprite = null;
    
    constructor() { super(); }
    onAwake(): void {
        this.spriteSelf = this.owner as Laya.Sprite;
        // this.spriteSelf.width = 50;
        // this.spriteSelf.height = 50;
        this.owner.on(Laya.Event.MOUSE_UP, this, this.onMouseClick);
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
    onMouseClick(): void {
        console.log("mouse click");
    }
    createCircleCollider(radius = 50) {
        let rigidbody: Laya.CircleCollider = this.owner.addComponent(Laya.CircleCollider);
        rigidbody.radius = radius;
    }
    onTriggerEnter(colliderB: Laya.ColliderBase, colliderA: Laya.ColliderBase, contact) {
        console.log('射程范围内')
    }
    setPosition(x: number, y: number): void {
        // const self = this.owner.getChildByName('enemy') as Laya.Sprite;
        console.log(this.spriteSelf);
        const bg:Laya.Image = this.spriteSelf.getChildByName('background') as Laya.Image;
        this.spriteSelf.x = x - bg.width / 2;
        this.spriteSelf.y = y - bg.height / 2 ;
    }
}
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Browser = Laya.Browser;
import WebGL = Laya.WebGL;
import PrefabFactory from "../utils/Prefab";
import EventType from "../constant/EventType";
import {
    getPosList,
    creteEnemy,
    creteTurret,
    creteBullet
} from "../utils/utils";

export default class level1 extends Laya.Script {

     public enemyPrefab:Laya.Prefab;

     public turretPrefab:Laya.Prefab;
 
     public posList: Array<Array<number>> = [];
     public enemy:Laya.Sprite = null;
    
    constructor() { 
        super();
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        // Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        // Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.scaleMode = Stage.SCALE_FULL;
        Laya.stage.bgColor = "#ff00ff";
    }
    onAwake(): void {
        // todo  需要转换像素 1080*1920 --> Browser.clientWidth, Browser.clientHeight 
        this.posList = getPosList(this.owner);
        let timer = null;
        setTimeout(()=>{
            this.startEnemyMove();
            timer = setInterval(this.startEnemyMove.bind(this), 1500);
        }, 2000);
        setTimeout(()=>{
            clearInterval(timer);
        }, 10 * 1000);
        Laya.stage.on(EventType.START_ATTACK, this, (data)=>{
            // console.log(data);
            this.startBulletMove(data.self, data.other);
            
        })
    }
    onEnable(): void {
    }

    onDisable(): void {
    }
    onClick(event: Laya.Event): void {
        // console.log(event);
        creteTurret(this.owner, {
            x: event.stageX,
            y: event.stageY,
            width: 140,
            height: 140,
            bgImg:'../laya/assets/img/icon.png',
            range: 250
        });
    }
    async startEnemyMove(): Promise<void> {
        const enemy1:Laya.Sprite = await creteEnemy(this.owner, {
            width: 100,
            height: 100,
            bgImg: '../laya/assets/img/22.png',
        }) as any;
        const enemyjs1 = enemy1.getComponent(Laya.Script);
        enemyjs1.setPath(this.posList);
        enemyjs1.setSpeed(100);
        enemyjs1.setState('moving');
    }
    async startBulletMove(turret:Laya.CircleCollider, enemy:Laya.CircleCollider): Promise<void> {
        const bullet:Laya.Sprite = await creteBullet(this.owner, {
            x: (turret.owner as Laya.Sprite).x,
            y: (turret.owner as Laya.Sprite).y,
            width: 40,
            height: 12,
            bgImg: '../laya/assets/img/banban.png',
        }) as any;
        const bulletjs = bullet.getComponent(Laya.Script);
        bulletjs.setSpeed(1000);
        bulletjs.setTargetPos((enemy.owner as Laya.Sprite).x, (enemy.owner as Laya.Sprite).y);
        bulletjs.setState('moving');
    }
}
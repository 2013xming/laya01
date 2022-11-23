import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Browser = Laya.Browser;
import Tween = Laya.Tween;
import WebGL = Laya.WebGL;
import TimeLine = Laya.TimeLine;
// import Enemy from './prefab/enemy';
import PrefabFactory from "./utils/Prefab";

const SPEED: number = 50;

export default class level2 extends Laya.Script {
    /** @prop {name:enemyPrefab, tips:"敌方", type:Prefab}*/
    public enemyPrefab:Laya.Prefab;
    /** @prop {name:turretPrefab, tips:"塔", type:Prefab}*/
    public turretPrefab:Laya.Prefab;

    /** @prop {name:posList, tips:"", type:Array<number>}*/
    public posList: Array<Array<number>> = [[100, 0], [100, 500], [300, 500], [300, 900]];

    private timeLine:TimeLine = new TimeLine();
    public enemy:Laya.Sprite = null;


    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { 
        super();
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#ff00ff";

        
        Laya.loader.create("prefab/enemy.json", Laya.Handler.create(this, function() {
            console.log(0);
            this.enemyPrefab = Laya.loader.getRes("prefab/enemy.json");
        }), null, Laya.Loader.PREFAB);
        /* 加载预制体示例
        Laya.loader.create("prefab/turret.json", Laya.Handler.create(this, function() {
            console.log(1);
            this.turretPrefab = Laya.loader.getRes("prefab/turret.json") as Laya.Prefab;
        }), null, Laya.Loader.PREFAB);
        */ 
    }
    
    onEnable(): void {
        console.log(this.owner.numChildren);
        const path:Laya.Panel = this.owner.getChildByName('pathPanel') as Laya.Panel;
        const pathList:Array<Array<number>> = [];
        for (let i = 0; i < path.numChildren; i++){
            pathList.push([(path.getChildAt(i) as Sprite).x, (path.getChildAt(i) as Sprite).y]);
        }

        // this.createCharacter('../laya/assets/img/icon.png', [Browser.clientWidth / 4, 20]);
        // const enemy = new Enemy(100, 100, 300, 300);
        // Laya.stage.addChild(enemy);

        /*
        // 加载预制体示例
        this.enemy = Laya.Pool.getItemByCreateFun("enemy", this.enemyPrefab.create, this.enemyPrefab);
        const bg:Laya.Image = this.enemy.getChildByName('enemyBg') as Laya.Image;
        bg.height = 50;
        bg.width = 50;
        this.owner.addChild(this.enemy);
        this.enemyjs = this.enemy.getComponent(Laya.Script);
        this.enemyjs.setPath([[10, 0], [100, 0], [100, 100], [400, 1000]]);

        this.enemyjs.setState('moving');
        */

        // TODO 设置预设的大小和位置

        // for(let i = 0; i < this.posList.length; i++){
        //     this.timeLine.to(this.enemy, {x: this.posList[i][0], y: this.posList[i][1]}, 2000,null,0)
        // }
        // this.timeLine.play(0,true);

        // this.posList
        // TimeLine.to(this.enemy, {x})
        // setInterval(() =>{
        //     if (this.enemy.y < 1360)
        //         this.enemy.y += 1;
        //     else this.enemy.y = 0;
                
        //     // for(let i = 0; i < 4; i++){}
        // }, 100)
        const enemy:Laya.Sprite = this.creteEnemy(100, 100, '../laya/assets/img/icon.png');
        const enemyjs = enemy.getComponent(Laya.Script);
        enemyjs.setPath([[10, 0], [100, 0], [100, 100], [400, 1000]]);
        enemyjs.setState('moving');

        const enemy1:Laya.Sprite = this.creteEnemy(30, 30, '../laya/assets/img/22.png');
        const enemyjs1 = enemy1.getComponent(Laya.Script);
        enemyjs1.setPath([[100, 50], [100, 0], [300, 100], [200, 500]]);
        enemyjs1.setState('moving');

        const enemy2:Laya.Sprite = this.creteEnemy(50, 50, '../laya/assets/img/23.png');
        const enemyjs2 = enemy2.getComponent(Laya.Script);
        enemyjs2.setPath([[100, 0], [300, 200]]);
        // enemyjs2.setState('moving');

        // const enemyObj1:any = this.creteEnemy(30, 30, '../laya/assets/img/22.png');
        // // enemyObj1.enemyjs.setPath([[100, 50], [100, 0], [300, 100], [200, 500]]);
        // enemyObj1.enemyjs.setPath(pathList);
        // enemyObj1.enemyjs.setState('moving');
        // setTimeout(() => enemyObj1.enemyjs.stop(), 5000);
        // const enemyObj2:any = this.creteEnemy(50, 50, '../laya/assets/img/23.png');
        // enemyObj2.enemyjs.setPath([[100, 0], [300, 200]]);
        // enemyObj2.enemyjs.setState('moving');

        // setTimeout(() => enemyObj.enemyjs.stop(), 2000);
        // const enemyObj:object = this.creteEnemy(100, 100, '../laya/assets/img/icon.png');


    }

    onDisable(): void {
    }

    onUpdate(): void {
        // this.enemy.y += SPEED * Laya.timer.delta / 1000;
        
    }
    creteEnemy(width, height, bgImg): Laya.Sprite {
        const enemy:Laya.Sprite = Laya.Pool.getItemByCreateFun("enemy", this.enemyPrefab.create, this.enemyPrefab);

        
        const bg:Laya.Image = enemy.getChildByName('background') as Laya.Image;
        bg.height = width;
        bg.width = height;
        bg.skin = bgImg;
        this.owner.addChild(enemy);
        // const enemyjs = enemy.getComponent(Laya.Script);
        return enemy;
    }
    async creteTurret(x, y, width, height, bgImg): Promise<Laya.Sprite> {
        const prefabFactory = new PrefabFactory();
        
        const turret:Laya.Sprite = await prefabFactory.initPrefab('turret') as any;

        // console.log(this.enemyPrefab);
        // console.log(this.turretPrefab);
        // console.log(this.turretPrefab);
        // console.log(this.enemyPrefab);
        // const turret:Laya.Sprite = Laya.Pool.getItemByCreateFun("turret", this.turretPrefab.create, this.turretPrefab);
        // const turret1:Laya.Sprite = Laya.Pool.getItemByCreateFun("turret", this.enemyPrefab.create, this.enemyPrefab);
        // console.log(turret);
        // console.log(turret1);
        
        const bg:Laya.Image = turret.getChildByName('background') as Laya.Image;
        bg.height = height;
        bg.width = width;
        bg.skin = bgImg;
        this.owner.addChild(turret);
        const turretjs = turret.getComponent(Laya.Script);
        turretjs.setPosition(x, y);
        // const enemyjs = enemy.getComponent(Laya.Script);
        return turret;
    }

    onClick(event: Laya.Event): void {
        // console.log(event);
        this.creteTurret(event.stageX, event.stageY, 40, 40, '../laya/assets/img/icon.png');
    }

    private createCharacter(skin: string, pos:[number, number] = [0, 0]): Sprite {
        var character: Sprite = new Sprite();
        character.loadImage(skin);
        Laya.stage.addChild(character);
        character.x = pos[0];
        character.y = pos[1];
        return character;
    }
}
import PrefabFactory from "./Prefab";
type EnemyConfig = {
    width?: number,
    height?: number,
    bgImg?,
}
type TurretConfig = {
    x: number,
    y: number,
    width: number,
    height: number,
    bgImg,
    range: number
}
type BulletConfig = {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    bgImg?,
}
export function posEqual(pos:Array<number>, target:Array<number>, range:number):Boolean{
    // console.log(pos);
    // console.log(target);
    // console.log(range);
    // console.log(Math.pow((target[1] - pos[1]), 2));
    // console.log(Math.pow((target[0] - pos[0]), 2));
    return Math.pow(range, 2) >= Math.pow((target[1] - pos[1]), 2) + Math.pow((target[0] - pos[0]), 2);
}
/*
获取关卡路径，路径需要在scene 的孩子节点 pathPanel 上设置。
*/
export function getPosList(owner: Laya.Node):Array<Array<number>>{
    const path:Laya.Panel = owner.getChildByName('pathPanel') as Laya.Panel;
    const posList: Array<Array<number>> = [];
    for (let i = 0; i < path.numChildren; i++){
        posList.push([(path.getChildAt(i) as Laya.Sprite).x, (path.getChildAt(i) as Laya.Sprite).y]);
    }
    return posList;
}

export async function creteEnemy(owner: Laya.Node, enemyConfig: EnemyConfig): Promise<Laya.Sprite> {
    const prefabFactory = new PrefabFactory();
    const enemy:Laya.Sprite = await prefabFactory.initPrefab('enemy') as any;
    enemy.texture = enemyConfig.bgImg;
    owner.addChild(enemy);
    const enemyjs = enemy.getComponent(Laya.Script);
    enemyjs.setWH(enemyConfig.width, enemyConfig.height);
    return enemy;
}

export async function creteTurret(owner: Laya.Node, turretConfig: TurretConfig): Promise<Laya.Sprite> {
    const prefabFactory = new PrefabFactory();
    const turret:Laya.Sprite = await prefabFactory.initPrefab('turret') as any;
    turret.texture = turretConfig.bgImg;
    owner.addChild(turret);
    const turretjs = turret.getComponent(Laya.Script);
    turretjs.setPosition(turretConfig.x, turretConfig.y);
    turretjs.setWH(turretConfig.width, turretConfig.height);
    turretjs.setShortRange(turretConfig.range);
    return turret;
}

export async function creteBullet(owner: Laya.Node, bulletConfig: BulletConfig): Promise<Laya.Sprite> {
    const prefabFactory = new PrefabFactory();
    const bullet:Laya.Sprite = await prefabFactory.initPrefab('bullet') as any;
    bullet.texture = bulletConfig.bgImg;
    owner.addChild(bullet);
    const bulletjs = bullet.getComponent(Laya.Script);
    bulletjs.setPosition(bulletConfig.x, bulletConfig.y);
    bulletjs.setWH(bulletConfig.width, bulletConfig.height);
    return bullet;
}
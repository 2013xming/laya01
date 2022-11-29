import Loader from './Loader';

// Laya.loader.create("prefab/enemy.json", Laya.Handler.create(this, function() {
//     this.enemyPrefab = Laya.loader.getRes("prefab/enemy.json");
// }));
// Laya.loader.create("prefab/enemy.json", Laya.Handler.create(this, function() {
//     this.turretPrefab = Laya.loader.getRes("prefab/turret.json");
// }));

// file.read
// const prefabList = ['enemy', 'turret'];

export default class PrefabFactory{
    constructor() {
        // return this.initPrefab(name);
    }
    async initPrefab(prefabName: string):Promise<Laya.Sprite> {
        const loader = new Loader();
        const path = `prefab/${prefabName}.json`;
        const prefab:Laya.Prefab = await loader.loadRes(path) as any;
        // console.log(prefab);
        // console.log(prefabName);
        const prefabSprite:Laya.Sprite = Laya.Pool.getItemByCreateFun(prefabName, prefab.create, prefab);
        return prefabSprite;
    }
}

// export function creteTurret(width, height, bgImg): Laya.Sprite {
//     const enemyPrefab:Laya.Prefab;
//     const enemy:Laya.Sprite = Laya.Pool.getItemByCreateFun("enemy", enemyPrefab.create, enemyPrefab);
//     // const bg:Laya.Image = enemy.getChildByName('enemyBg') as Laya.Image;
//     // bg.height = width;
//     // bg.width = height;
//     // bg.skin = bgImg;
//     // this.owner.addChild(enemy);
//     // const enemyjs = enemy.getComponent(Laya.Script);
//     return ;
// }
// function getPrefab(){
//     fs.readDirSync(currentPath).forEach((name) => {
//         const filePath = path.join(currentPath, name);
//         const stat = fs.statSync(filePath);
//         if (stat.isFile()) {
//             // todo
//         }else if (stat.isDirectory()) {
//             getPrefab();
//         }
//     })
// }

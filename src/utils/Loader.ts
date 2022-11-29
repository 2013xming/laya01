// import { resolve } from "node:path/win32";

export default class Loader{
    constructor() {
    }

    async loadRes(resName:string, type:string = Laya.Loader.PREFAB):Promise<any> {
        let res = null;
        try {
            res = await (new Promise((resolve, reject) => {
                    Laya.loader.create(resName, Laya.Handler.create(this, function() {
                        //  this.enemyPrefab = Laya.loader.getRes("prefab/enemy.json");
                        const res = Laya.loader.getRes(resName);
                        // console.log("Laya.loader.getRes(resName):", resName);
                        resolve(res);
                    }), null, type);
                    setTimeout(() => reject(res), 60 * 60 * 1000);
                }));
        }catch(e) {

        }
        return res;
        // return new Promise(() => {
        //     Laya.loader.create(resName, Laya.Handler.create(this, function() {
        //         const res = Laya.loader.getRes(resName);
        //         resolve(res);
        //     }));
        // })
    }
    loadAllRes(resList:Array<string> ):Promise<any> {
        let resPro = [];
        for(var i = 0; i < resList.length; i++) {
            resPro.push(this.loadRes(resList[i]));
        }
        return Promise.all(resPro);
    }
    
}
/*----------------------------------------------------------------
Laya.loader.create("prefab/enemy.json", Laya.Handler.create(this, function() {
    this.enemyPrefab = Laya.loader.getRes("prefab/enemy.json");
}));
const enemy:Laya.Sprite = Laya.Pool.getItemByCreateFun("enemy", this.enemyPrefab.create, this.enemyPrefab);
const bg:Laya.Image = enemy.getChildByName('enemyBg') as Laya.Image;
bg.height = width;
bg.width = height;
bg.skin = bgImg;
this.owner.addChild(enemy);
*/
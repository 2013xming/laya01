(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class Loader {
        constructor() {
        }
        loadRes(resName) {
            return __awaiter(this, void 0, void 0, function* () {
                let res = null;
                try {
                    res = yield (new Promise((resolve, reject) => {
                        Laya.loader.create(resName, Laya.Handler.create(this, function () {
                            const res = Laya.loader.getRes(resName);
                            console.log("Laya.loader.getRes(resName):", resName);
                            console.log(res);
                            const enemy = Laya.Pool.getItemByCreateFun("enemy", res.create, res);
                            console.log(enemy);
                            resolve(res);
                        }), null, Laya.Loader.PREFAB);
                        setTimeout(() => reject(res), 60 * 60 * 1000);
                    }));
                }
                catch (e) {
                }
                return res;
            });
        }
        loadAllRes(resList) {
            let resPro = [];
            for (var i = 0; i < resList.length; i++) {
                resPro.push(this.loadRes(resList[i]));
            }
            return Promise.all(resPro);
        }
    }

    class PrefabFactory {
        constructor() {
        }
        initPrefab(prefabName) {
            return __awaiter(this, void 0, void 0, function* () {
                const loader = new Loader();
                const path = `prefab/${prefabName}.json`;
                const prefab = yield loader.loadRes(path);
                console.log(prefab);
                console.log(prefabName);
                const prefabSprite = Laya.Pool.getItemByCreateFun(prefabName, prefab.create, prefab);
                return prefabSprite;
            });
        }
    }

    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    var TimeLine = Laya.TimeLine;
    const SPEED = 50;
    class level2 extends Laya.Script {
        constructor() {
            super();
            this.posList = [[100, 0], [100, 500], [300, 500], [300, 900]];
            this.timeLine = new TimeLine();
            this.enemy = null;
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#ff00ff";
            Laya.loader.create("prefab/enemy.json", Laya.Handler.create(this, function () {
                console.log(0);
                this.enemyPrefab = Laya.loader.getRes("prefab/enemy.json");
            }), null, Laya.Loader.PREFAB);
        }
        onEnable() {
            console.log(this.owner.numChildren);
            const path = this.owner.getChildByName('pathPanel');
            const pathList = [];
            for (let i = 0; i < path.numChildren; i++) {
                pathList.push([path.getChildAt(i).x, path.getChildAt(i).y]);
            }
            const enemy = this.creteEnemy(100, 100, '../laya/assets/img/icon.png');
            const enemyjs = enemy.getComponent(Laya.Script);
            enemyjs.setPath([[10, 0], [100, 0], [100, 100], [400, 1000]]);
            enemyjs.setState('moving');
            const enemy1 = this.creteEnemy(30, 30, '../laya/assets/img/22.png');
            const enemyjs1 = enemy1.getComponent(Laya.Script);
            enemyjs1.setPath([[100, 50], [100, 0], [300, 100], [200, 500]]);
            enemyjs1.setState('moving');
            const enemy2 = this.creteEnemy(50, 50, '../laya/assets/img/23.png');
            const enemyjs2 = enemy2.getComponent(Laya.Script);
            enemyjs2.setPath([[100, 0], [300, 200]]);
        }
        onDisable() {
        }
        onUpdate() {
        }
        creteEnemy(width, height, bgImg) {
            const enemy = Laya.Pool.getItemByCreateFun("enemy", this.enemyPrefab.create, this.enemyPrefab);
            const bg = enemy.getChildByName('background');
            bg.height = width;
            bg.width = height;
            bg.skin = bgImg;
            this.owner.addChild(enemy);
            return enemy;
        }
        creteTurret(x, y, width, height, bgImg) {
            return __awaiter(this, void 0, void 0, function* () {
                const prefabFactory = new PrefabFactory();
                const turret = yield prefabFactory.initPrefab('turret');
                const bg = turret.getChildByName('background');
                bg.height = height;
                bg.width = width;
                bg.skin = bgImg;
                this.owner.addChild(turret);
                const turretjs = turret.getComponent(Laya.Script);
                turretjs.setPosition(x, y);
                return turret;
            });
        }
        onClick(event) {
            this.creteTurret(event.stageX, event.stageY, 40, 40, '../laya/assets/img/icon.png');
        }
        createCharacter(skin, pos = [0, 0]) {
            var character = new Sprite();
            character.loadImage(skin);
            Laya.stage.addChild(character);
            character.x = pos[0];
            character.y = pos[1];
            return character;
        }
    }

    class BaseView extends Laya.Scene {
        constructor() { super(); }
        onEnable() {
        }
        onDisable() {
        }
        onOpened(param) {
            console.log(Laya.stage.height);
            this.height = Laya.stage.height;
            this.width = Laya.stage.width;
        }
    }

    class HomeView extends BaseView {
        constructor() { super(); }
        onAwake() {
        }
        onOpened() {
            console.log(this.width);
            console.log(this.startBtn.width);
            console.log((this.width - this.startBtn.width) / 2);
            this.height = Laya.stage.height;
            this.width = Laya.stage.width;
            this.startBtn.x = (Laya.stage.width - this.startBtn.width) / 2;
        }
        onEnable() {
        }
        onDisable() {
        }
        onStartImageClick() {
            console.log("onStartImageClick");
        }
    }

    class start extends Laya.Script {
        constructor() {
            super();
            this.btnL1 = null;
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onAwake() {
            console.log(this.btnL1);
        }
        onEnable() {
            console.log('onEnable');
        }
        onDisable() {
        }
    }

    function posEqual(pos, target, range) {
        return Math.pow(range, 2) > Math.pow((target[1] - pos[1]), 2) + Math.pow((target[0] - pos[0]), 2);
    }

    class Enemy extends Laya.Script {
        constructor() {
            super();
            this.spriteSelf = null;
            this.speed = 100;
            this.state = "ready";
            this.pathPos = [];
            this.pathIndex = 0;
            this.hp = 0;
        }
        onAwake() {
            this.spriteSelf = this.owner;
            this.spriteSelf.x = 0;
            this.spriteSelf.y = 0;
        }
        onEnable() {
            this.state = 'moving';
        }
        onDisable() {
        }
        onTriggerEnter(colliderB, colliderA, contact) {
            this.spriteSelf.scale(1.5, 1.5);
        }
        onTriggerExit(other, self, contact) {
            console.log('onTriggerExit.');
            this.spriteSelf.scale(0.5, 0.5);
        }
        setState(state) {
            this.state = state;
        }
        setWH(width, height) {
            this.spriteSelf.width = width;
            this.spriteSelf.height = height;
        }
        setPosition(x, y) {
            this.spriteSelf = this.owner;
            this.spriteSelf.x = x;
            this.spriteSelf.y = y;
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        setBg(bgpath) {
        }
        setPath(pathPos) {
            this.pathPos = pathPos;
            this.spriteSelf.x = pathPos[0][0];
            this.spriteSelf.y = pathPos[0][1];
        }
        stop() {
            this.state = 'stopped';
        }
        onUpdate() {
            if (this.state == 'moving') {
                if (this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1) {
                    const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                    const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];
                    const radian = Math.atan2(deltaY, deltaX);
                    if (posEqual([this.spriteSelf.x, this.spriteSelf.y], this.pathPos[this.pathIndex + 1], this.speed * Laya.timer.delta / 1000)) {
                        this.pathIndex++;
                        console.log('posEqual');
                        return;
                    }
                    this.spriteSelf.x += (this.speed * Math.cos(radian) * Laya.timer.delta / 1000);
                    this.spriteSelf.y += (this.speed * Math.sin(radian) * Laya.timer.delta / 1000);
                }
            }
        }
    }

    class turret extends Laya.Script {
        constructor() {
            super();
            this.shotRange = 0;
            this.aggressivity = 0;
            this.spriteSelf = null;
        }
        onAwake() {
            this.spriteSelf = this.owner;
            this.owner.on(Laya.Event.MOUSE_UP, this, this.onMouseClick);
        }
        onEnable() {
        }
        onDisable() {
        }
        onUpdate() {
        }
        onMouseClick() {
            console.log("mouse click");
        }
        createCircleCollider(radius = 50) {
            let rigidbody = this.owner.addComponent(Laya.CircleCollider);
            rigidbody.radius = radius;
        }
        onTriggerEnter(colliderB, colliderA, contact) {
            console.log('射程范围内');
        }
        setPosition(x, y) {
            console.log(this.spriteSelf);
            const bg = this.spriteSelf.getChildByName('background');
            this.spriteSelf.x = x - bg.width / 2;
            this.spriteSelf.y = y - bg.height / 2;
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("level2.ts", level2);
            reg("cui/HomeView.ts", HomeView);
            reg("start.ts", start);
            reg("prefab/enemy.ts", Enemy);
            reg("prefab/turret.ts", turret);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "level2.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());

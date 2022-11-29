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

    const EventType = {
        START_ATTACK: 'START_ATTACK',
    };

    class Loader {
        constructor() {
        }
        loadRes(resName, type = Laya.Loader.PREFAB) {
            return __awaiter(this, void 0, void 0, function* () {
                let res = null;
                try {
                    res = yield (new Promise((resolve, reject) => {
                        Laya.loader.create(resName, Laya.Handler.create(this, function () {
                            const res = Laya.loader.getRes(resName);
                            resolve(res);
                        }), null, type);
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
                const prefabSprite = Laya.Pool.getItemByCreateFun(prefabName, prefab.create, prefab);
                return prefabSprite;
            });
        }
    }

    function posEqual(pos, target, range) {
        return Math.pow(range, 2) >= Math.pow((target[1] - pos[1]), 2) + Math.pow((target[0] - pos[0]), 2);
    }
    function getPosList(owner) {
        const path = owner.getChildByName('pathPanel');
        const posList = [];
        for (let i = 0; i < path.numChildren; i++) {
            posList.push([path.getChildAt(i).x, path.getChildAt(i).y]);
        }
        return posList;
    }
    function creteEnemy(owner, enemyConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefabFactory = new PrefabFactory();
            const enemy = yield prefabFactory.initPrefab('enemy');
            enemy.texture = enemyConfig.bgImg;
            owner.addChild(enemy);
            const enemyjs = enemy.getComponent(Laya.Script);
            enemyjs.setWH(enemyConfig.width, enemyConfig.height);
            return enemy;
        });
    }
    function creteTurret(owner, turretConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefabFactory = new PrefabFactory();
            const turret = yield prefabFactory.initPrefab('turret');
            turret.texture = turretConfig.bgImg;
            owner.addChild(turret);
            const turretjs = turret.getComponent(Laya.Script);
            turretjs.setPosition(turretConfig.x, turretConfig.y);
            turretjs.setWH(turretConfig.width, turretConfig.height);
            turretjs.setShortRange(turretConfig.range);
            return turret;
        });
    }
    function creteBullet(owner, bulletConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefabFactory = new PrefabFactory();
            const bullet = yield prefabFactory.initPrefab('bullet');
            bullet.texture = bulletConfig.bgImg;
            owner.addChild(bullet);
            const bulletjs = bullet.getComponent(Laya.Script);
            bulletjs.setPosition(bulletConfig.x, bulletConfig.y);
            bulletjs.setWH(bulletConfig.width, bulletConfig.height);
            return bullet;
        });
    }

    var Stage = Laya.Stage;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    class level1 extends Laya.Script {
        constructor() {
            super();
            this.posList = [];
            this.enemy = null;
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.scaleMode = Stage.SCALE_FULL;
            Laya.stage.bgColor = "#ff00ff";
        }
        onAwake() {
            this.posList = getPosList(this.owner);
            let timer = null;
            setTimeout(() => {
                this.startEnemyMove();
                timer = setInterval(this.startEnemyMove.bind(this), 1500);
            }, 2000);
            setTimeout(() => {
                clearInterval(timer);
            }, 10 * 1000);
            Laya.stage.on(EventType.START_ATTACK, this, (data) => {
                this.startBulletMove(data.self, data.other);
            });
        }
        onEnable() {
        }
        onDisable() {
        }
        onClick(event) {
            creteTurret(this.owner, {
                x: event.stageX,
                y: event.stageY,
                width: 140,
                height: 140,
                bgImg: '../laya/assets/img/icon.png',
                range: 250
            });
        }
        startEnemyMove() {
            return __awaiter(this, void 0, void 0, function* () {
                const enemy1 = yield creteEnemy(this.owner, {
                    width: 100,
                    height: 100,
                    bgImg: '../laya/assets/img/22.png',
                });
                const enemyjs1 = enemy1.getComponent(Laya.Script);
                enemyjs1.setPath(this.posList);
                enemyjs1.setSpeed(100);
                enemyjs1.setState('moving');
            });
        }
        startBulletMove(turret, enemy) {
            return __awaiter(this, void 0, void 0, function* () {
                const bullet = yield creteBullet(this.owner, {
                    x: turret.owner.x,
                    y: turret.owner.y,
                    width: 40,
                    height: 12,
                    bgImg: '../laya/assets/img/banban.png',
                });
                const bulletjs = bullet.getComponent(Laya.Script);
                bulletjs.setSpeed(1000);
                bulletjs.setTargetPos(enemy.owner.x, enemy.owner.y);
                bulletjs.setState('moving');
            });
        }
    }

    var Sprite = Laya.Sprite;
    var Stage$1 = Laya.Stage;
    var Browser$1 = Laya.Browser;
    var WebGL$1 = Laya.WebGL;
    var TimeLine = Laya.TimeLine;
    const SPEED = 50;
    class level2 extends Laya.Script {
        constructor() {
            super();
            this.posList = [];
            this.timeLine = new TimeLine();
            this.enemy = null;
            Laya.init(Browser$1.clientWidth, Browser$1.clientHeight, WebGL$1);
            Laya.stage.alignV = Stage$1.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage$1.ALIGN_CENTER;
            Laya.stage.scaleMode = Stage$1.SCALE_SHOWALL;
            Laya.stage.bgColor = "#ff00ff";
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                const path = this.owner.getChildByName('pathPanel');
                for (let i = 0; i < path.numChildren; i++) {
                    this.posList.push([path.getChildAt(i).x, path.getChildAt(i).y]);
                }
                setTimeout(this.startEnemyMove.bind(this), 2000);
            });
        }
        onDisable() {
        }
        onUpdate() {
        }
        startEnemyMove() {
            return __awaiter(this, void 0, void 0, function* () {
                const enemy1 = yield this.creteEnemy(50, 50, '../laya/assets/img/22.png');
                const enemyjs1 = enemy1.getComponent(Laya.Script);
                enemyjs1.setPath(this.posList);
                enemyjs1.setSpeed(100);
                enemyjs1.setState('moving');
                this.owner.addChild(enemy1);
            });
        }
        creteEnemy(width, height, bgImg) {
            return __awaiter(this, void 0, void 0, function* () {
                const prefabFactory = new PrefabFactory();
                const enemy = yield prefabFactory.initPrefab('enemy');
                enemy.texture = bgImg;
                this.owner.addChild(enemy);
                const enemyjs = enemy.getComponent(Laya.Script);
                console.log(enemyjs);
                enemyjs.setWH(width, height);
                return enemy;
            });
        }
        creteTurret(x, y, width, height, bgImg) {
            return __awaiter(this, void 0, void 0, function* () {
                const prefabFactory = new PrefabFactory();
                const turret = yield prefabFactory.initPrefab('turret');
                turret.width = width;
                turret.height = height;
                turret.texture = bgImg;
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

    class bullet extends Laya.Script {
        constructor() {
            super();
            this.spriteSelf = null;
            this.circleCollider = null;
            this.rigidBody = null;
            this.speed = 100;
            this.radian = 0;
            this.state = "ready";
        }
        onAwake() {
            this.spriteSelf = this.owner;
            this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider);
            this.circleCollider.radius = 5;
            this.circleCollider.enabled = true;
            this.setCircleColliderPos();
            this.rigidBody = this.spriteSelf.getComponent(Laya.RigidBody);
            this.spriteSelf.x = 0;
            this.spriteSelf.y = 0;
            this.spriteSelf.width = 15;
            this.spriteSelf.height = 5;
            this.spriteSelf.pivot(this.spriteSelf.width / 2, this.spriteSelf.height / 2);
        }
        onEnable() {
        }
        onDisable() {
        }
        onUpdate() {
            if (this.state == 'moving') {
                const len = this.speed * Laya.timer.delta / 1000;
                const x = Math.floor((len * Math.cos(this.radian)) * 100) / 100;
                const y = Math.floor((len * Math.sin(this.radian)) * 100) / 100;
                this.rigidBody.setVelocity({ x: x, y: y });
            }
        }
        onTriggerEnter(other, self, contact) {
            console.log('onTriggerEnter.');
        }
        setCircleColliderPos() {
            this.circleCollider.x = this.spriteSelf.width / 2 - this.circleCollider.radius;
            this.circleCollider.y = this.spriteSelf.height / 2 - this.circleCollider.radius;
        }
        setState(state) {
            this.state = state;
        }
        setWH(width, height) {
            this.spriteSelf.width = width;
            this.spriteSelf.height = height;
            this.spriteSelf.pivot(width / 2, height / 2);
            this.setCircleColliderPos();
            this.setCircleRadius(Math.max(width, height) / 2);
        }
        setPosition(x, y) {
            this.spriteSelf.x = x - this.spriteSelf.width / 2;
            this.spriteSelf.y = y - this.spriteSelf.height / 2;
            this.setCircleColliderPos();
        }
        setCircleRadius(radius) {
            this.circleCollider.radius = radius;
            this.setCircleColliderPos();
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        setTargetPos(x, y) {
            const deltaY = y - this.spriteSelf.y;
            const deltaX = x - this.spriteSelf.x;
            this.radian = Math.atan2(deltaY, deltaX);
        }
    }

    class Enemy extends Laya.Script {
        constructor() {
            super();
            this.spriteSelf = null;
            this.circleCollider = null;
            this.rigidBody = null;
            this.speed = 100;
            this.state = "ready";
            this.pathPos = [];
            this.pathIndex = 0;
            this.hp = 1;
            this.testTimer = null;
            this.hpProgressBar = null;
        }
        onAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                this.spriteSelf = this.owner;
                this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider);
                this.circleCollider.radius = 50;
                this.circleCollider.enabled = true;
                this.setCircleColliderPos();
                this.rigidBody = this.spriteSelf.getComponent(Laya.RigidBody);
                this.spriteSelf.x = 0;
                this.spriteSelf.y = 0;
                this.spriteSelf.pivot(this.spriteSelf.width / 2, this.spriteSelf.height / 2);
                Laya.loader.load(["img/hpBar.png", "img/hpBar$bar.png"], Laya.Handler.create(this, function () {
                    this.hpProgressBar = new Laya.ProgressBar("img/hpBar.png");
                    this.owner.addChild(this.hpProgressBar);
                    this.hpProgressBar.width = this.spriteSelf.width;
                    this.hpProgressBar.height = 10;
                    this.hpProgressBar.value = this.hp;
                    this.hpProgressBar.top = -10;
                    this.hpProgressBar.sizeGrid = "5,5,5,5";
                    console.log(this.hpProgressBar);
                }));
            });
        }
        onEnable() {
        }
        onDisable() {
        }
        onTriggerEnter(other, self, contact) {
            console.log('enemy onTriggerEnter.');
        }
        onTriggerExit(other, self, contact) {
            console.log('Enemy onTriggerExit.');
        }
        setState(state) {
            this.state = state;
        }
        setWH(width, height) {
            this.spriteSelf.width = width;
            this.spriteSelf.height = height;
            this.setCircleColliderPos();
            this.setCircleRadius(Math.max(width, height) / 2);
            this.spriteSelf.pivot(width / 2, height / 2);
        }
        setCircleColliderPos() {
            this.circleCollider.x = this.spriteSelf.width / 2 - this.circleCollider.radius;
            this.circleCollider.y = this.spriteSelf.height / 2 - this.circleCollider.radius;
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        setCircleRadius(radius) {
            this.circleCollider.radius = radius;
        }
        setPath(pathPos) {
            this.pathPos = pathPos;
            this.spriteSelf.x = pathPos[0][0] + this.spriteSelf.width / 2;
            this.spriteSelf.y = pathPos[0][1] + this.spriteSelf.height / 2;
        }
        stop() {
            this.state = 'stopped';
        }
        onUpdate() {
            if (this.state == 'moving') {
                if (this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1) {
                    const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                    const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];
                    const len = this.speed * Laya.timer.delta / 1000;
                    const radian = Math.atan2(deltaY, deltaX);
                    this.rigidBody.setVelocity({ x: Math.floor((len * Math.cos(radian)) * 100) / 100, y: Math.floor((len * Math.sin(radian)) * 100) / 100 });
                    if (posEqual([this.spriteSelf.x - this.circleCollider.radius, this.spriteSelf.y - this.circleCollider.radius], this.pathPos[this.pathIndex + 1], len)) {
                        this.spriteSelf.x = this.pathPos[this.pathIndex + 1][0] + this.circleCollider.radius;
                        this.spriteSelf.y = this.pathPos[this.pathIndex + 1][1] + this.circleCollider.radius;
                        this.pathIndex++;
                        this.rigidBody.setVelocity({ x: 0, y: 0 });
                        console.log('posEqual');
                        return;
                    }
                }
            }
        }
        onUpdate_bak() {
            if (this.state == 'moving') {
                if (this.pathPos.length > 1 && this.pathIndex < this.pathPos.length - 1) {
                    const deltaY = this.pathPos[this.pathIndex + 1][1] - this.pathPos[this.pathIndex][1];
                    const deltaX = this.pathPos[this.pathIndex + 1][0] - this.pathPos[this.pathIndex][0];
                    const len = this.speed * Laya.timer.delta / 1000;
                    const radian = Math.atan2(deltaY, deltaX);
                    this.spriteSelf.x += Math.floor((len * Math.cos(radian)) * 100) / 100;
                    this.spriteSelf.y += Math.floor((len * Math.sin(radian)) * 100) / 100;
                    if (posEqual([this.spriteSelf.x, this.spriteSelf.y], this.pathPos[this.pathIndex + 1], len)) {
                        this.spriteSelf.x = this.pathPos[this.pathIndex + 1][0];
                        this.spriteSelf.y = this.pathPos[this.pathIndex + 1][1];
                        this.pathIndex++;
                        console.log('posEqual');
                        return;
                    }
                }
            }
        }
    }

    const turretType = {
        t1: {
            attackType: 'single'
        },
        t2: {
            attackType: 'group'
        },
    };
    class turret extends Laya.Script {
        constructor() {
            super();
            this.shotRange = 1;
            this.aggressivity = 0;
            this.spriteSelf = null;
            this.circleCollider = null;
            this.shootIntervalTimerList = [];
            this.attackType = 'single';
        }
        onAwake() {
            this.spriteSelf = this.owner;
            this.spriteSelf.width = 50;
            this.spriteSelf.height = 50;
            this.circleCollider = this.spriteSelf.getComponent(Laya.CircleCollider);
            this.circleCollider.radius = 100;
            this.circleCollider.enabled = true;
            this.spriteSelf.pivot(this.spriteSelf.width / 2, this.spriteSelf.height / 2);
            this.owner.on(Laya.Event.CLICK, this, this.onMouseClick);
            setInterval(() => {
                this.spriteSelf.scale(1.2, 1.2);
                setTimeout(() => {
                    this.spriteSelf.scale(0.8, 0.8);
                }, 300);
                setTimeout(() => {
                    this.spriteSelf.scale(1, 1);
                }, 600);
            }, 900);
        }
        onEnable() {
        }
        onDisable() {
        }
        onUpdate() {
        }
        onMouseClick(event) {
            console.log("mouse click");
            event.stopPropagation();
        }
        onTriggerEnter(other, self, contact) {
            console.log('turret 射程范围内');
            if (this.attackType === 'group') {
                Laya.stage.event(EventType.START_ATTACK, { other, self });
                const intervalTimer = setInterval(() => {
                    Laya.stage.event(EventType.START_ATTACK, { other, self });
                }, 500);
                this.shootIntervalTimerList.push({ id: other.id, timer: intervalTimer, other, self });
            }
            if (this.attackType === 'single') {
                if (this.shootIntervalTimerList.length === 0) {
                    Laya.stage.event(EventType.START_ATTACK, { other, self });
                    const intervalTimer = setInterval(() => {
                        Laya.stage.event(EventType.START_ATTACK, { other, self });
                    }, 500);
                    this.shootIntervalTimerList.push({ id: other.id, timer: intervalTimer, other, self });
                }
                else {
                    this.shootIntervalTimerList.push({ id: other.id, timer: null, other, self });
                }
            }
        }
        onTriggerStay() {
            console.log('stay.');
        }
        onTriggerExit(other, self, contact) {
            console.log('turret  onTriggerExit.');
            const index = this.shootIntervalTimerList.findIndex((item) => {
                return item.id === other.id;
            });
            if (index > -1) {
                let timer = this.shootIntervalTimerList.splice(index, 1);
                clearInterval(timer[0].timer);
                timer[0].timer = null;
                if (this.attackType === 'single' && this.shootIntervalTimerList.length > 0) {
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
        setPosition(x, y) {
            this.spriteSelf.x = x - this.spriteSelf.width / 2;
            this.spriteSelf.y = y - this.spriteSelf.height / 2;
            this.setCircleColliderPos();
        }
        setCircleColliderPos() {
            this.circleCollider.x = this.spriteSelf.width / 2 - this.circleCollider.radius;
            this.circleCollider.y = this.spriteSelf.height / 2 - this.circleCollider.radius;
        }
        setShortRange(shotRange) {
            this.circleCollider.radius = this.shotRange = shotRange;
            this.setCircleColliderPos();
        }
        setWH(width, height) {
            this.spriteSelf.width = width;
            this.spriteSelf.height = height;
            this.setCircleColliderPos();
            this.spriteSelf.pivot(width / 2, height / 2);
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("level/level1.ts", level1);
            reg("level2.ts", level2);
            reg("cui/HomeView.ts", HomeView);
            reg("start.ts", start);
            reg("prefab/bullet.ts", bullet);
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
    GameConfig.startScene = "level1.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = false;
    GameConfig.physicsDebug = true;
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

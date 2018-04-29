webpackJsonp(["main"],{

/***/ "./apps/intercept/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./apps/intercept/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./apps/intercept/src/app/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "   \n\t<hotkeys-cheatsheet></hotkeys-cheatsheet>  \n\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__("./apps/intercept/src/app/intercept.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./apps/intercept/src/app/intercept.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./apps/intercept/src/app/intercept/intercept.sass":
/***/ (function(module, exports) {

module.exports = ".head {\n  text-align: center; }\n\n.on-top {\n  z-index: 1000;\n  position: relative; }\n\n.badge {\n  z-index: 1000;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  padding: 1em; }\n\n.status-dark {\n  font-weight: 100;\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  color: #242424;\n  z-index: 1000;\n  position: absolute;\n  bottom: 40px;\n  padding: 1em; }\n\n.status {\n  font-weight: 100;\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  color: #FFF;\n  z-index: 1000;\n  position: absolute;\n  bottom: 40px;\n  padding: 1em; }\n\n.left {\n  left: 0; }\n\n.right {\n  right: 0; }\n\n.text {\n  font-weight: 100;\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  color: #FFF;\n  z-index: 1000;\n  position: absolute;\n  bottom: 0;\n  padding: 1em; }\n\n.sig-text {\n  font-weight: 100;\n  font-family: 'M+ 1m', 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace; }\n\n.nodes {\n  z-index: 1000;\n  position: absolute;\n  top: 350px;\n  right: 0;\n  padding: 1em; }\n\ndot {\n  margin-right: .5rem; }\n\n.heading {\n  position: relative;\n  text-align: center;\n  color: red;\n  /*color: #74FAA2 */\n  /*background-color: #242424; */\n  /*font-family: Fira Mono; */\n  font-weight: 100;\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  z-index: 1000; }\n\n::-moz-selection {\n  color: #242424;\n  background: #FFFFFF; }\n\n::selection {\n  color: #242424;\n  background: #FFFFFF; }\n\n/* WebKit/Blink Browsers */\n\n.set {\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  position: absolute;\n  right: 0;\n  padding: 1rem;\n  color: #242424;\n  background: #FFFFFF;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: lighter;\n  border-radius: 5px;\n  margin: 10px;\n  top: 100px;\n  z-index: 1000; }\n\n.setL {\n  top: 200px;\n  right: 200px; }\n\n.setR {\n  top: 200px; }\n\n.local {\n  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;\n  position: absolute;\n  color: #242424;\n  background: #FFFFFF;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: lighter;\n  border-radius: 5px;\n  margin: 10px;\n  z-index: 1000px;\n  bottom: 20px;\n  right: 0;\n  padding: 1rem; }\n\n.L {\n  right: 200px; }\n\nsignal-player {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  top: 0;\n  left: 0; }\n\nsignal-player video {\n    /* Make video to at least 100% wide and tall */\n    min-width: 100%;\n    min-height: 100%;\n    /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n    width: auto;\n    height: auto;\n    /* */\n    /* Center the video */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -o-object-fit: cover;\n       object-fit: cover; }\n\nsignal-player #sig-video {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%; }\n"

/***/ }),

/***/ "./apps/intercept/src/app/intercept/intercept.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RcvrPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signal_signal__ = __webpack_require__("./libs/signal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./apps/intercept/src/app/intercept/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__ = __webpack_require__("./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RcvrPlayerComponent = /** @class */ (function () {
    function RcvrPlayerComponent(_ngZone, 
        // private store:Store,
        signal, electron, _hotkeysService, settingsService) {
        // this.electron.ipcRenderer.on('send-node', (event, arg) => {
        //   this._ngZone.run(() => {
        //     const reply = `Asynchronous message reply: ${arg} & ${event}`;
        //     this.selectedNode.id = arg;
        //   });
        // });
        var _this = this;
        this._ngZone = _ngZone;
        this.signal = signal;
        this.electron = electron;
        this._hotkeysService = _hotkeysService;
        this.settingsService = settingsService;
        this.dev = true;
        this.masterVideo = 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/d9de372f3d373d06d4e770e73af44cb1-500000-1439510486-w.mp4';
        this.selectedNode = { id: null };
        this.nodes = [
            {
                id: 0,
                source: 'assets/media/l.mp4',
                poster: 'assets/media/dots.gif',
                position: 'BW—LT',
            },
            {
                id: 1,
                source: 'assets/media/r.mp4',
                poster: 'assets/media/lost.jpg',
                position: 'BW—RT',
            },
            {
                id: 2,
                source: 'assets/media/0.mp4',
                poster: 'assets/media/bars.png',
                position: 'FW—01',
            },
            {
                id: 3,
                source: 'assets/media/1.mp4',
                poster: 'assets/media/circle.jpg',
                position: 'FW—02',
            },
        ];
        this.electron.ipcRenderer.on('send-node', function (event, arg) {
            var reply = "Asynchronous message reply: " + arg + " & " + event;
            _this.selectedNode.id = arg;
        });
        // this.electron.ipcRenderer.on('send-node', (event, arg) => {
        //   this._ngZone.run(() => {
        //     const reply = `Asynchronous message reply: ${arg}`;
        //     this.selectedNode.id = arg;
        //     // console.log('from ipc', arg)
        //   })
        //
        //
        //
        // }
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('shift+z', function (event) {
            console.log('toggled dev');
            _this.dev = !_this.dev;
            return false; // Prevent bubbling
        }, undefined, 'Toggle Meta Data'));
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('shift+1', function (event) {
            console.log('switched to 0');
            _this.onSelectNode(0);
            return false; // Prevent bubbling
        }, undefined, 'Select First Feed'));
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('shift+2', function (event) {
            console.log('switched to 1');
            _this.onSelectNode(1);
            return false; // Prevent bubbling
        }, undefined, 'Select Second Feed'));
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('shift+3', function (event) {
            console.log('switched to 2');
            _this.onSelectNode(2);
            return false; // Prevent bubbling
        }, undefined, 'Select Third Feed'));
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('shift+4', function (event) {
            console.log('switched to 3');
            _this.onSelectNode(3);
            return false; // Prevent bubbling
        }, undefined, 'Select Fourth Feed'));
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["Hotkey"]('space', function (event) {
            console.log('Secret message');
            _this.togglePlay();
            return false;
        }, undefined, 'Toggle Play'));
    }
    RcvrPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('outside electron ');
        if (this.electron.isElectronApp) {
            console.log('inside electron ');
            // this.electron.ipcRenderer.on('set-node', (event, node) => {
            //   console.log('set-node: ', node)
            // });
            this.electron.ipcRenderer.send('save-index', 'from angular');
            this.electron.ipcRenderer.on('save-index', function (event, arg) {
                console.log('inside ipc renderer ');
                console.log('saving index to ', arg);
            });
            this.electron.ipcRenderer.on('asynchronous-reply', function (event, index) {
                console.log(index); // prints "pong"
                _this._ngZone.run(function () {
                    var reply = "Asynchronous message reply: " + index;
                    _this.onSelectNode(index);
                    // this.selectedNode.id = arg;
                    console.log(reply);
                });
            });
            this.electron.ipcRenderer.send('asynchronous-message', 'ping');
        }
        // this.settingsService.getSettings().subscribe(settings => {
        //   this.settings = settings;
        //   const node = this.settings.node;
        //   console.log('in settings func');
        //   this.onSelectNode(node);
        // }, () => null);
        // console.log('a wild msg appeared 1')
        console.log('this is a good try!');
        this.signal.getMessage().subscribe(function (msg) {
            _this.msg = '1st ' + msg;
        });
        this.signal.getStatus().subscribe(function (status) {
            // console.log('status is: ' + status)
            _this.status = status;
            if (status === 'play') {
                _this.togglePlay();
                // this.media.state === 'paused' ? this.api.play() : this.api.pause();
                // this.media.play();
            }
            if (status === 'pause') {
                _this.togglePlay();
                // this.media.state === 'paused' ? this.api.play() : this.api.pause();
                // this.media.pause();
            }
            if (status === 'reset') {
                _this.media.seekTime(0);
            }
        });
    };
    RcvrPlayerComponent.prototype.isDev = function () {
        return this.dev;
    };
    RcvrPlayerComponent.prototype.getVideoApi = function (api) {
        console.log('why not us');
        this.api = api;
        this.media = api.getDefaultMedia();
    };
    RcvrPlayerComponent.prototype.onSelectNode = function (index) {
        if (index >= 0) {
            // console.log(`the index is : ${node`);
            if (this.electron.isElectronApp) {
                var msg = "is electron so setting node to : " + index;
                console.log(msg);
                this.electron.ipcRenderer.send('set-node', index);
            }
            this.selectedNode = this.nodes[index];
        }
        else {
            this.selectedNode = { id: null };
        }
    };
    RcvrPlayerComponent.prototype.togglePlay = function () {
        this.media.state === 'paused' ? this.api.play() : this.api.pause();
    };
    RcvrPlayerComponent.prototype.play = function () {
        this.media.play();
    };
    RcvrPlayerComponent.prototype.pause = function () {
        this.media.pause();
    };
    RcvrPlayerComponent.prototype.reset = function () {
        this.media.pause();
        this.media.seekTime(0);
    };
    RcvrPlayerComponent.prototype.end = function () {
        this.media.pause();
        this.media.seekTime(100, true);
    };
    RcvrPlayerComponent.prototype.saveSettings = function (node) {
        // console.log('setting to :' + node)
        this.settingsService.saveSettings({ node: node, isFromLocalStorage: true });
    };
    RcvrPlayerComponent.prototype.deleteSettings = function () {
        this.settingsService.deleteSettings();
    };
    RcvrPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rcvr-player',
            template: "    \n\n    <div class=\"head \" style='display: none;'>\n      <h2 class=\"heading sig-text ui-text\">_INTERCEPT</h2>\n      <img class=\"badge\" width=\"50\" src=\"assets/rcvr.png\" style=\"-webkit-app-region: drag\">\n    </div>\n\n    <div *ngIf=\"isDev()\">\n      <p class=\"status left sig-text ui-text\" style=\"bottom: 80px\">state : {{ media.state }}</p>\n\n\n      <p class=\"status left sig-text ui-text\">status : {{ selectedNode.id }} | {{ selectedNode.source }} | {{ selectedNode.poster }} | {{ selectedNode.position }}</p>\n      <p class=\"status text sig-text ui-text\" [ngClass]=\"selectedNode.id === 0 ? 'left' : 'right'\">status : {{status || 'pending ...'}} node : {{ selectedNode.id | json }}</p>\n      <p class=\"time text sig-text ui-text\" [ngClass]=\"selectedNode.id === 0 ? 'right' : 'left'\">{{ media?.currentTime }} / {{ media?.duration}}</p>\n\n    </div>\n    \n    <div *ngIf=\"isDev()\" class=\"nodes sig-text ui-text\">\n      \n\n      <!--<li (click)=\"media?.state === 'paused' ? api.play() : api.pause() \">{{ media?.state === 'paused' ? 'play' : 'pause' }}</li>-->\n\n\n\n      <dot (click)=\"reset()\"><i class=\"icon-control-start icons\"></i></dot>\n\n      \n      <dot (click)=\"media?.state === 'paused' ? play() : pause() \"><i [ngClass]=\"media?.state === 'paused' ? 'icon-control-play' : 'icon-control-pause'\" class=\"icons\"></i></dot>\n      <dot (click)=\"end()\"><i class=\"icon-control-end icons\"></i></dot> \n      <!--<dot (click)=\"pause()\"><i  class=\"icon-control-pause icons\"></i></dot>-->\n\n    </div>\n    <intercept-player [video]=\"selectedNode\" (playerReady)=\"getVideoApi($event)\"></intercept-player>\n  ",
            styles: [__webpack_require__("./apps/intercept/src/app/intercept/intercept.sass")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1__signal_signal__["a" /* SignalService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_hotkeys__["HotkeysService"],
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* AppSettingsService */]])
    ], RcvrPlayerComponent);
    return RcvrPlayerComponent;
}());



/***/ }),

/***/ "./apps/intercept/src/app/intercept/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signal_signal__ = __webpack_require__("./libs/signal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./apps/intercept/src/app/intercept/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(cd, signal, settingsService) {
        this.cd = cd;
        this.signal = signal;
        this.settingsService = settingsService;
        this.autoPlay = false;
        this.playerReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.api = null;
        this.duration = 0;
        this.current = 0;
    }
    Object.defineProperty(PlayerComponent.prototype, "playResource", {
        set: function (_resource) {
            this.changeResource(_resource, 'video/mp4');
        },
        enumerable: true,
        configurable: true
    });
    PlayerComponent.prototype.ngOnInit = function () {
        // this.currentFeed = this.feeds[0];
        this.currentFeed = null;
    };
    PlayerComponent.prototype.ngOnChanges = function () {
        // console.log('changes!!!!!')
        if (this.api !== null)
            this.media = this.api.getDefaultMedia();
        this.cd.detectChanges();
    };
    PlayerComponent.prototype.onPlayerReady = function (api) {
        // console.log('it did call')
        this.media = api.getDefaultMedia();
        this.api = api;
        // this.setTime(60);
        this.playerReady.emit(api);
        // setTimeout(() => {
        //   this.playAfter(api);
        // }, 10000);
        //
        // console.log(this.media, this.api);
    };
    PlayerComponent.prototype.changeResource = function (source, type) {
        var _this = this;
        if (this.api)
            this.api.pause();
        this.sources = new Array();
        this.sources.push({
            src: source,
            type: type,
        });
        setTimeout(function () {
            _this.api.getDefaultMedia().currentTime = 0;
            if (_this.api && _this.autoPlay)
                _this.api.play();
        }, 300);
    };
    PlayerComponent.prototype.getApi = function () {
        return this.api;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PlayerComponent.prototype, "autoPlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PlayerComponent.prototype, "playResource", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "playerReady", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'intercept-player',
            template: "    \n    \n    <signal-player style=\"width: 100vw; height: 100vh\" (onPlayerReady)=\"onPlayerReady($event)\">\n      <vg-overlay-play></vg-overlay-play>\n      <vg-buffering></vg-buffering>\n      \n      <vg-scrub-bar >\n        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n      </vg-scrub-bar>\n      \n      <vg-controls>\n\n        <vg-fullscreen></vg-fullscreen>\n      </vg-controls>\n      <!--<p class=\"status\">status : {{ video.id }} | {{ video.source }} | {{ video.poster }} | {{ video.position }}</p>-->\n\n      <video #masterRef\n             [vgMedia]=\"masterRef\"\n             [vgMaster]=\"true\"\n             id=\"singleVideo\" \n             [poster]=\"video.poster\" \n             preload=\"auto\"\n             [src]=\"video.source\">\n      </video>\n    </signal-player>\n  ",
            styles: [__webpack_require__("./apps/intercept/src/app/intercept/intercept.sass")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__signal_signal__["a" /* SignalService */],
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* AppSettingsService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./apps/intercept/src/app/intercept/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SETTINGS_LOCATION = 'http://localhost:5000/api/config';
var SETTINGS_KEY = 'configuration';
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.node = 0;
        this.isFromLocalStorage = false;
    }
    return AppSettings;
}());

var AppSettingsService = /** @class */ (function () {
    function AppSettingsService(http) {
        this.http = http;
    }
    AppSettingsService.prototype.getSettings = function () {
        var _this = this;
        var settings = localStorage.getItem(SETTINGS_KEY);
        if (settings) {
            var ret = null;
            ret = JSON.parse(settings);
            ret.isFromLocalStorage = true;
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(ret);
        }
        else {
            return this.http.get(SETTINGS_LOCATION).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (settings) {
                if (settings) {
                    _this.saveSettings(settings);
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getSettings', new AppSettings())));
        }
    };
    AppSettingsService.prototype.saveSettings = function (settings) {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        console.log('setting set to: ' + settings.node);
    };
    AppSettingsService.prototype.deleteSettings = function () {
        localStorage.removeItem(SETTINGS_KEY);
    };
    AppSettingsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Log the error to the console
            switch (error.status) {
                case 404:
                    console.error("Can't find file: " + SETTINGS_LOCATION);
                    break;
                default:
                    console.error(error);
                    break;
            }
            // Return default configuration values
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(result);
        };
    };
    AppSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppSettingsService);
    return AppSettingsService;
}());



/***/ }),

/***/ "./apps/intercept/src/app/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rcvrDeclarations */
/* unused harmony export rcvrProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("./apps/intercept/src/app/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nrwl_nx__ = __webpack_require__("./node_modules/@nrwl/nx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nrwl_nx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__nrwl_nx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signal_player__ = __webpack_require__("./libs/player/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing__ = __webpack_require__("./apps/intercept/src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intercept_intercept__ = __webpack_require__("./apps/intercept/src/app/intercept/intercept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_rcvr_settings__ = __webpack_require__("./apps/intercept/src/app/settings/rcvr-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signal_player_src_core_core__ = __webpack_require__("./libs/player/src/core/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signal_player_src_buffering_buffering__ = __webpack_require__("./libs/player/src/buffering/buffering.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signal_player_src_overlay_play_overlay_play__ = __webpack_require__("./libs/player/src/overlay-play/overlay-play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signal_player_src_controls_controls__ = __webpack_require__("./libs/player/src/controls/controls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_socket_io__ = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signal_signal__ = __webpack_require__("./libs/signal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signal_environments_environtment__ = __webpack_require__("./libs/environments/environtment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signal_core__ = __webpack_require__("./libs/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__intercept_settings__ = __webpack_require__("./apps/intercept/src/app/intercept/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__intercept_player__ = __webpack_require__("./apps/intercept/src/app/intercept/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_hotkeys__ = __webpack_require__("./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_hotkeys__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var config = { url: __WEBPACK_IMPORTED_MODULE_15__signal_environments_environtment__["a" /* environment */].socket.baseUrl, options: __WEBPACK_IMPORTED_MODULE_15__signal_environments_environtment__["a" /* environment */].socket.opts };
function rcvrDeclarations() {
    return [__WEBPACK_IMPORTED_MODULE_2__component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__intercept_intercept__["a" /* RcvrPlayerComponent */], __WEBPACK_IMPORTED_MODULE_20__intercept_player__["a" /* PlayerComponent */], __WEBPACK_IMPORTED_MODULE_8__settings_rcvr_settings__["a" /* RcvrSettingsComponent */]];
}
function rcvrProviders() {
    return [__WEBPACK_IMPORTED_MODULE_14__signal_signal__["a" /* SignalService */], __WEBPACK_IMPORTED_MODULE_17__intercept_settings__["a" /* AppSettingsService */], __WEBPACK_IMPORTED_MODULE_22_angular2_hotkeys__["HotkeysService"]];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_16__signal_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__signal_player__["a" /* PlayerModule */],
                __WEBPACK_IMPORTED_MODULE_9__signal_player_src_core_core__["a" /* VgCoreModule */],
                __WEBPACK_IMPORTED_MODULE_11__signal_player_src_overlay_play_overlay_play__["a" /* VgOverlayPlayModule */],
                __WEBPACK_IMPORTED_MODULE_10__signal_player_src_buffering_buffering__["a" /* VgBufferingModule */],
                __WEBPACK_IMPORTED_MODULE_12__signal_player_src_controls_controls__["a" /* VgControlsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_electron__["b" /* NgxElectronModule */],
                __WEBPACK_IMPORTED_MODULE_4__nrwl_nx__["NxModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angular2_hotkeys__["HotkeyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            declarations: rcvrDeclarations(),
            providers: rcvrProviders(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./apps/intercept/src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intercept_intercept__ = __webpack_require__("./apps/intercept/src/app/intercept/intercept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_rcvr_settings__ = __webpack_require__("./apps/intercept/src/app/settings/rcvr-settings.ts");



var routes = [
    { path: '', redirectTo: 'player', pathMatch: 'full' },
    {
        path: 'player',
        component: __WEBPACK_IMPORTED_MODULE_1__intercept_intercept__["a" /* RcvrPlayerComponent */],
        data: { animation: 'player' }
    },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_2__settings_rcvr_settings__["a" /* RcvrSettingsComponent */] },
    { path: '**', redirectTo: 'player' }
];
var RoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./apps/intercept/src/app/settings/rcvr-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RcvrSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RcvrSettingsComponent = /** @class */ (function () {
    function RcvrSettingsComponent() {
    }
    RcvrSettingsComponent.prototype.ngOnInit = function () { };
    RcvrSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rcvr-settings',
            template: "\n    <p>\n      rcvr-settings works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], RcvrSettingsComponent);
    return RcvrSettingsComponent;
}());



/***/ }),

/***/ "./apps/intercept/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environments which uses `environments.ts`, but if you do
// `ng build --env=prod` then `environments.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./apps/intercept/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("./apps/intercept/src/app/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./apps/intercept/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./libs/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core_module__ = __webpack_require__("./libs/core/src/core.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core_module__["a"]; });



/***/ }),

/***/ "./libs/core/src/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coreDirectives */
/* unused harmony export coreServices */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_button__ = __webpack_require__("./libs/core/src/icon-button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./libs/core/src/icon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes__ = __webpack_require__("./libs/core/src/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dot__ = __webpack_require__("./libs/core/src/dot.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function coreDirectives() {
    return [__WEBPACK_IMPORTED_MODULE_2__icon_button__["a" /* IconButtonComponent */], __WEBPACK_IMPORTED_MODULE_3__icon__["a" /* IconComponent */], __WEBPACK_IMPORTED_MODULE_4__pipes__["a" /* FormatTimePipe */], __WEBPACK_IMPORTED_MODULE_5__dot__["a" /* DotComponent */], __WEBPACK_IMPORTED_MODULE_4__pipes__["b" /* FormatVolumePipe */]];
}
function coreServices() {
    return [];
}
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: coreDirectives(),
            exports: coreDirectives(),
            providers: coreServices()
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./libs/core/src/dot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DotComponent = /** @class */ (function () {
    function DotComponent() {
    }
    DotComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DotComponent.prototype, "input", void 0);
    DotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dot',
            template: "<div class=\"dot\"><ng-content></ng-content></div>",
            styles: [
                "\n    .dot {\n\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      background-color: #FFF;\n      color: rgba(65,50,63,0.725);\n      min-width: 1em;\n      border-radius: 10%;\n      vertical-align: middle;\n      padding: 1.2rem;\n      font-family: monospace;\n      cursor: pointer;\n      font-size: 16px;\n      \n      \n    }\n\n    .dot:before {\n      content:'';\n      float: left;\n      width: auto;\n      padding-bottom: 100%;\n    }\n    .dot:hover {\n      color: #FFF;\n      background-color: #242424;\n      \n    }\n    \n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DotComponent);
    return DotComponent;
}());



/***/ }),

/***/ "./libs/core/src/icon-button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButtonComponent = /** @class */ (function () {
    function IconButtonComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "className", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IconButtonComponent.prototype, "onClick", void 0);
    IconButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'icon-button',
            styles: [
                "\n    .btn--icon {\n      border-radius: 100%;\n      padding: 8px;\n      width: 40px;\n      height: 40px;\n    }\n  "
            ],
            template: "\n    <button\n      [attr.aria-label]=\"label\"\n      class=\"btn btn--icon btn--{{icon}} {{className}}\"\n      (click)=\"onClick.emit($event)\"\n      type=\"button\">\n      <icon [name]=\"icon\"></icon>\n    </button>\n  "
        })
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./libs/core/src/icon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.className = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "className", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "name", void 0);
    IconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'icon',
            styles: [
                "\n      .icon {\n      width: 24px;\n      height: 24px;\n      pointer-events: none;\n      }\n\n    .icon--small {\n      width: 18px;\n      height: 18px;\n    }\n  "
            ],
            template: "\n    <svg [attr.class]=\"'icon icon--' + name + ' ' + className\">\n      <use [attr.xlink:href]=\"'#icon-' + name\"></use>\n    </svg>\n  "
        })
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./libs/core/src/pipes/format-time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (time, unit) {
        if (typeof time !== 'number' || !time) {
            return '00:00';
        }
        // HTMLAudioElement provides time in seconds
        // SoundCloud provides time in milliseconds
        if (unit === 'ms') {
            time /= 1000; // convert milliseconds to seconds
        }
        var hours = Math.floor(time / 3600);
        var minutes = ("0" + Math.floor((time % 3600) / 60)).slice(-2);
        var seconds = ("0" + Math.floor(time % 60)).slice(-2);
        if (hours) {
            return hours + ":" + minutes + ":" + seconds;
        }
        else {
            return minutes + ":" + seconds;
        }
    };
    FormatTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formatTime',
            pure: true
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());



/***/ }),

/***/ "./libs/core/src/pipes/format-volume.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatVolumePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatVolumePipe = /** @class */ (function () {
    function FormatVolumePipe() {
    }
    FormatVolumePipe.prototype.transform = function (volume) {
        if (!volume)
            return '0.0';
        volume /= 10;
        var precision = volume >= 1 ? 2 : 1;
        return volume.toPrecision(precision);
    };
    FormatVolumePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formatVolume',
            pure: true
        })
    ], FormatVolumePipe);
    return FormatVolumePipe;
}());



/***/ }),

/***/ "./libs/core/src/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_time__ = __webpack_require__("./libs/core/src/pipes/format-time.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__format_time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_volume__ = __webpack_require__("./libs/core/src/pipes/format-volume.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__format_volume__["a"]; });




/***/ }),

/***/ "./libs/environments/environtment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    socket: {
        baseUrl: 'http://127.0.0.1:8080',
        opts: {}
    },
    api: {
        baseUrl: 'http://127.0.0.1:8080'
    }
};


/***/ }),

/***/ "./libs/player/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_player_module__ = __webpack_require__("./libs/player/src/player.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_player_module__["a"]; });



/***/ }),

/***/ "./libs/player/src/buffering/buffering.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgBufferingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vg_buffering__ = __webpack_require__("./libs/player/src/buffering/vg-buffering.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VgBufferingModule = /** @class */ (function () {
    function VgBufferingModule() {
    }
    VgBufferingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__vg_buffering__["a" /* VgBuffering */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__vg_buffering__["a" /* VgBuffering */]]
        })
    ], VgBufferingModule);
    return VgBufferingModule;
}());



/***/ }),

/***/ "./libs/player/src/buffering/vg-buffering.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgBuffering; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgBuffering = /** @class */ (function () {
    function VgBuffering(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgBuffering.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgBuffering.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgBuffering.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-buffering'),
        __metadata("design:type", Boolean)
    ], VgBuffering.prototype, "isBuffering", void 0);
    VgBuffering = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-buffering',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
            styles: [
                "\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgBuffering);
    return VgBuffering;
}());



/***/ }),

/***/ "./libs/player/src/controls/controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgControlsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vg_controls__ = __webpack_require__("./libs/player/src/controls/vg-controls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vg_fullscreen_vg_fullscreen__ = __webpack_require__("./libs/player/src/controls/vg-fullscreen/vg-fullscreen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vg_mute_vg_mute__ = __webpack_require__("./libs/player/src/controls/vg-mute/vg-mute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vg_volume_vg_volume__ = __webpack_require__("./libs/player/src/controls/vg-volume/vg-volume.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vg_play_pause_vg_play_pause__ = __webpack_require__("./libs/player/src/controls/vg-play-pause/vg-play-pause.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vg_playback_button_vg_playback_button__ = __webpack_require__("./libs/player/src/controls/vg-playback-button/vg-playback-button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vg_scrub_bar_vg_scrub_bar__ = __webpack_require__("./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vg_scrub_bar_vg_scrub_bar_buffering_time_vg_scrub_bar_buffering_time__ = __webpack_require__("./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vg_scrub_bar_vg_scrub_bar_cue_points_vg_scrub_bar_cue_points__ = __webpack_require__("./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vg_scrub_bar_vg_scrub_bar_current_time_vg_scrub_bar_current_time__ = __webpack_require__("./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vg_time_display_vg_time_display__ = __webpack_require__("./libs/player/src/controls/vg-time-display/vg-time-display.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vg_track_selector_vg_track_selector__ = __webpack_require__("./libs/player/src/controls/vg-track-selector/vg-track-selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var VgControlsModule = /** @class */ (function () {
    function VgControlsModule() {
    }
    VgControlsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vg_controls__["a" /* VgControls */],
                __WEBPACK_IMPORTED_MODULE_3__vg_fullscreen_vg_fullscreen__["a" /* VgFullscreen */],
                __WEBPACK_IMPORTED_MODULE_4__vg_mute_vg_mute__["a" /* VgMute */],
                __WEBPACK_IMPORTED_MODULE_5__vg_volume_vg_volume__["a" /* VgVolume */],
                __WEBPACK_IMPORTED_MODULE_6__vg_play_pause_vg_play_pause__["a" /* VgPlayPause */],
                __WEBPACK_IMPORTED_MODULE_7__vg_playback_button_vg_playback_button__["a" /* VgPlaybackButton */],
                __WEBPACK_IMPORTED_MODULE_8__vg_scrub_bar_vg_scrub_bar__["a" /* VgScrubBar */],
                __WEBPACK_IMPORTED_MODULE_9__vg_scrub_bar_vg_scrub_bar_buffering_time_vg_scrub_bar_buffering_time__["a" /* VgScrubBarBufferingTime */],
                __WEBPACK_IMPORTED_MODULE_10__vg_scrub_bar_vg_scrub_bar_cue_points_vg_scrub_bar_cue_points__["a" /* VgScrubBarCuePoints */],
                __WEBPACK_IMPORTED_MODULE_11__vg_scrub_bar_vg_scrub_bar_current_time_vg_scrub_bar_current_time__["a" /* VgScrubBarCurrentTime */],
                __WEBPACK_IMPORTED_MODULE_12__vg_time_display_vg_time_display__["a" /* VgTimeDisplay */],
                __WEBPACK_IMPORTED_MODULE_12__vg_time_display_vg_time_display__["b" /* VgUtcPipe */],
                __WEBPACK_IMPORTED_MODULE_13__vg_track_selector_vg_track_selector__["a" /* VgTrackSelector */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__vg_controls__["a" /* VgControls */],
                __WEBPACK_IMPORTED_MODULE_3__vg_fullscreen_vg_fullscreen__["a" /* VgFullscreen */],
                __WEBPACK_IMPORTED_MODULE_4__vg_mute_vg_mute__["a" /* VgMute */],
                __WEBPACK_IMPORTED_MODULE_5__vg_volume_vg_volume__["a" /* VgVolume */],
                __WEBPACK_IMPORTED_MODULE_6__vg_play_pause_vg_play_pause__["a" /* VgPlayPause */],
                __WEBPACK_IMPORTED_MODULE_7__vg_playback_button_vg_playback_button__["a" /* VgPlaybackButton */],
                __WEBPACK_IMPORTED_MODULE_8__vg_scrub_bar_vg_scrub_bar__["a" /* VgScrubBar */],
                __WEBPACK_IMPORTED_MODULE_9__vg_scrub_bar_vg_scrub_bar_buffering_time_vg_scrub_bar_buffering_time__["a" /* VgScrubBarBufferingTime */],
                __WEBPACK_IMPORTED_MODULE_10__vg_scrub_bar_vg_scrub_bar_cue_points_vg_scrub_bar_cue_points__["a" /* VgScrubBarCuePoints */],
                __WEBPACK_IMPORTED_MODULE_11__vg_scrub_bar_vg_scrub_bar_current_time_vg_scrub_bar_current_time__["a" /* VgScrubBarCurrentTime */],
                __WEBPACK_IMPORTED_MODULE_12__vg_time_display_vg_time_display__["a" /* VgTimeDisplay */],
                __WEBPACK_IMPORTED_MODULE_12__vg_time_display_vg_time_display__["b" /* VgUtcPipe */],
                __WEBPACK_IMPORTED_MODULE_13__vg_track_selector_vg_track_selector__["a" /* VgTrackSelector */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__core_services_vg_controls_hidden__["a" /* VgControlsHidden */]]
        })
    ], VgControlsModule);
    return VgControlsModule;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VgControls = /** @class */ (function () {
    function VgControls(API, ref, hidden) {
        this.API = API;
        this.ref = ref;
        this.hidden = hidden;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.vgAutohide = false;
        this.vgAutohideTime = 3;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgControls.prototype.ngOnInit = function () {
        var _this = this;
        var mouseMove = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(mouseMove.subscribe(this.show.bind(this)));
        var touchStart = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(touchStart.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgControls.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    };
    VgControls.prototype.ngAfterViewInit = function () {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    VgControls.prototype.onPlay = function () {
        if (this.vgAutohide) {
            this.hide();
        }
    };
    VgControls.prototype.onPause = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    };
    VgControls.prototype.onStartAds = function () {
        this.isAdsPlaying = 'none';
    };
    VgControls.prototype.onEndAds = function () {
        this.isAdsPlaying = 'initial';
    };
    VgControls.prototype.hide = function () {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    };
    VgControls.prototype.show = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    };
    VgControls.prototype.hideAsync = function () {
        var _this = this;
        if (this.API.state === __WEBPACK_IMPORTED_MODULE_5__core_states_vg_states__["a" /* VgStates */].VG_PLAYING) {
            this.timer = setTimeout(function () {
                _this.hideControls = true;
                _this.hidden.state(true);
            }, this.vgAutohideTime * 1000);
        }
    };
    VgControls.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.pointer-events'),
        __metadata("design:type", String)
    ], VgControls.prototype, "isAdsPlaying", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hide'),
        __metadata("design:type", Boolean)
    ], VgControls.prototype, "hideControls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgControls.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VgControls.prototype, "vgAutohide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VgControls.prototype, "vgAutohideTime", void 0);
    VgControls = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-controls',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>",
            styles: [
                "\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 1300;\n            top: 0;\n            /*background-color: rgba(0, 0, 0, 0.5);*/\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {  \n            bottom: -50px;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__core_services_vg_controls_hidden__["a" /* VgControlsHidden */]])
    ], VgControls);
    return VgControls;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-fullscreen/vg-fullscreen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgFullscreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_vg_fullscreen_api__ = __webpack_require__("./libs/player/src/core/services/vg-fullscreen-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VgFullscreen = /** @class */ (function () {
    function VgFullscreen(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    }
    VgFullscreen.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgFullscreen.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgFullscreen.prototype.onChangeFullscreen = function (fsState) {
        this.ariaValue = fsState ? 'fullscren mode' : 'normal mode';
        this.isFullscreen = fsState;
    };
    VgFullscreen.prototype.onClick = function () {
        this.changeFullscreenState();
    };
    VgFullscreen.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    };
    VgFullscreen.prototype.changeFullscreenState = function () {
        var element = this.target;
        if (this.target instanceof __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
    };
    VgFullscreen.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VgFullscreen.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgFullscreen.prototype, "onKeyDown", null);
    VgFullscreen = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-fullscreen',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <div class=\"circle\">\n      \n    </div>\n        <!--<div class=\"icon circle\"-->\n             <!--[class.vg-icon-fullscreen]=\"!isFullscreen\"-->\n             <!--[class.vg-icon-fullscreen_exit]=\"isFullscreen\"-->\n             <!--tabindex=\"0\"-->\n             <!--role=\"button\"-->\n             <!--aria-label=\"fullscreen button\"-->\n             <!--[attr.aria-valuetext]=\"ariaValue\">-->\n        <!--</div>-->\n  ",
            styles: [
                "\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            position: absolute;\n            right: 0;\n            margin-top: 1rem;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n      .circle {\n        height: 25px;\n        width: 25px;\n        background-color: white;\n        opacity: .2;\n        border-radius: 50%;\n        display: inline-block;\n      }\n      .circle:hover {\nopacity: 1;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_2__core_services_vg_fullscreen_api__["a" /* VgFullscreenAPI */]])
    ], VgFullscreen);
    return VgFullscreen;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-mute/vg-mute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgMute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgMute = /** @class */ (function () {
    function VgMute(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
        this.elem = ref.nativeElement;
    }
    VgMute.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgMute.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    };
    VgMute.prototype.onClick = function () {
        this.changeMuteState();
    };
    VgMute.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    };
    VgMute.prototype.changeMuteState = function () {
        var volume = this.getVolume();
        if (volume === 0) {
            if (this.target.volume === 0 && this.currentVolume === 0) {
                this.currentVolume = 1;
            }
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    };
    VgMute.prototype.getVolume = function () {
        var volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
    };
    VgMute.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgMute.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VgMute.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgMute.prototype, "onKeyDown", null);
    VgMute = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-mute',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div class=\"icon\"\n             [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n             [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n             [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n             [class.vg-icon-volume_off]=\"getVolume() === 0\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"mute button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
            styles: [
                "\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgMute);
    return VgMute;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-play-pause/vg-play-pause.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgPlayPause; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VgPlayPause = /** @class */ (function () {
    function VgPlayPause(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    VgPlayPause.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlayPause.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlayPause.prototype.onClick = function () {
        this.playPause();
    };
    VgPlayPause.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    };
    VgPlayPause.prototype.playPause = function () {
        var state = this.getState();
        switch (state) {
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PLAYING:
                this.target.pause();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PAUSED:
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgPlayPause.prototype.getState = function () {
        this.ariaValue = this.target ? this.target.state : __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PAUSED;
        return this.ariaValue;
    };
    VgPlayPause.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgPlayPause.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VgPlayPause.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgPlayPause.prototype, "onKeyDown", null);
    VgPlayPause = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-play-pause',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div class=\"icon\"\n             [class.vg-icon-pause]=\"getState() === 'playing'\"\n             [class.vg-icon-play_arrow]=\"getState() === 'paused' || getState() === 'ended'\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"play pause button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
            styles: [
                "\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgPlayPause);
    return VgPlayPause;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-playback-button/vg-playback-button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgPlaybackButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgPlaybackButton = /** @class */ (function () {
    function VgPlaybackButton(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.updatePlaybackSpeed();
    };
    VgPlaybackButton.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    };
    VgPlaybackButton.prototype.updatePlaybackSpeed = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]) {
            this.target.playbackRate = this.playbackValues[this.playbackIndex];
        }
        else {
            this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    };
    VgPlaybackButton.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgPlaybackButton.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], VgPlaybackButton.prototype, "playbackValues", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VgPlaybackButton.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgPlaybackButton.prototype, "onKeyDown", null);
    VgPlaybackButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-playback-button',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <span class=\"button\"\n          tabindex=\"0\"\n          role=\"button\"\n          aria-label=\"playback speed button\"\n          [attr.aria-valuetext]=\"ariaValue\">\n        {{getPlaybackRate()}}x\n    </span>",
            styles: [
                "\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgPlaybackButton);
    return VgPlaybackButton;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgScrubBarBufferingTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgScrubBarBufferingTime = /** @class */ (function () {
    function VgScrubBarBufferingTime(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarBufferingTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarBufferingTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarBufferingTime.prototype.getBufferTime = function () {
        var bufferTime = '0%';
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime = this.target.buffer.end / this.target.time.total * 100 + '%';
            }
        }
        return bufferTime;
    };
    VgScrubBarBufferingTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgScrubBarBufferingTime.prototype, "vgFor", void 0);
    VgScrubBarBufferingTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-scrub-bar-buffering-time',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
            styles: [
                "\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgScrubBarBufferingTime);
    return VgScrubBarBufferingTime;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgScrubBarCuePoints; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgScrubBarCuePoints = /** @class */ (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                var end = this.vgCuePoints[i].endTime >= 0 ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = cuePointDuration * 100 / this.target.time.total + '%';
                    position = this.vgCuePoints[i].startTime * 100 / Math.round(this.target.time.total / 1000) + '%';
                }
                ;
                this.vgCuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    };
    VgScrubBarCuePoints.prototype.updateCuePoints = function () {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['vgCuePoints'].currentValue) {
            this.updateCuePoints();
        }
    };
    VgScrubBarCuePoints.prototype.ngDoCheck = function () {
        if (this.vgCuePoints) {
            var changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", TextTrackCueList)
    ], VgScrubBarCuePoints.prototype, "vgCuePoints", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgScrubBarCuePoints.prototype, "vgFor", void 0);
    VgScrubBarCuePoints = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-scrub-bar-cue-points',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\"\n                  class=\"cue-point\"></span>\n        </div>\n    ",
            styles: [
                "\n        vg-scrub-bar-cue-points {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-cue-points .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls vg-scrub-bar-cue-points {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgScrubBarCuePoints);
    return VgScrubBarCuePoints;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgScrubBarCurrentTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgScrubBarCurrentTime = /** @class */ (function () {
    function VgScrubBarCurrentTime(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? this.target.time.current * 100 / this.target.time.total + '%' : '0%';
    };
    VgScrubBarCurrentTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgScrubBarCurrentTime.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VgScrubBarCurrentTime.prototype, "vgSlider", void 0);
    VgScrubBarCurrentTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-scrub-bar-current-time',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div><span class=\"slider\" *ngIf=\"vgSlider\"></span>",
            styles: [
                "\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 10px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: black;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            /*top: calc(50% - 3px);*/\n            /*-webkit-border-radius: 2px;*/\n            /*-moz-border-radius: 2px;*/\n            /*border-radius: 2px;*/\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            /*border: 1px solid white;*/\n            /*-webkit-border-radius: 2px;*/\n            /*-moz-border-radius: 2px;*/\n            /*border-radius: 2px;*/\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            /*background: white;*/\n            /*height: 15px;*/\n            /*width: 15px;*/\n            /*border-radius: 50%;*/\n            /*box-shadow: 0px 0px 10px black;*/\n            /*margin-top: -5px;*/\n            /*margin-left: -10px;*/\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgScrubBarCurrentTime);
    return VgScrubBarCurrentTime;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-scrub-bar/vg-scrub-bar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgScrubBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VgScrubBar = /** @class */ (function () {
    function VgScrubBar(ref, API, vgControlsHiddenState) {
        var _this = this;
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(function (hide) { return _this.onHideScrubBar(hide); }));
    }
    VgScrubBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBar.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBar.prototype.seekStart = function () {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === __WEBPACK_IMPORTED_MODULE_3__core_states_vg_states__["a" /* VgStates */].VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    };
    VgScrubBar.prototype.seekMove = function (offset) {
        if (this.isSeeking) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = percentage * this.target.time.total / 100;
            this.target.seekTime(percentage, true);
        }
    };
    VgScrubBar.prototype.seekEnd = function (offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    };
    VgScrubBar.prototype.touchEnd = function () {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    };
    VgScrubBar.prototype.getTouchOffset = function (event) {
        var offsetLeft = 0;
        var element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    };
    VgScrubBar.prototype.onMouseDownScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onMouseMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onMouseUpScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onTouchStartScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onTouchMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    };
    VgScrubBar.prototype.onTouchCancelScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.onTouchEndScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.arrowAdjustVolume = function (event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    };
    VgScrubBar.prototype.getPercentage = function () {
        return this.target ? this.target.time.current * 100 / this.target.time.total + '%' : '0%';
    };
    VgScrubBar.prototype.onHideScrubBar = function (hide) {
        this.hideScrubBar = hide;
    };
    VgScrubBar.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hide'),
        __metadata("design:type", Boolean)
    ], VgScrubBar.prototype, "hideScrubBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgScrubBar.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VgScrubBar.prototype, "vgSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onMouseDownScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onMouseMoveScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onMouseUpScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onTouchStartScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onTouchMoveScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchcancel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onTouchCancelScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "onTouchEndScrubBar", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgScrubBar.prototype, "arrowAdjustVolume", null);
    VgScrubBar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-scrub-bar',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div class=\"scrubBar\"\n             tabindex=\"0\"\n             role=\"slider\"\n             aria-label=\"scrub bar\"\n             aria-level=\"polite\"\n             [attr.aria-valuenow]=\"getPercentage()\"\n             aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n             [attr.aria-valuetext]=\"getPercentage() + '%'\">\n            <ng-content></ng-content>\n        </div>\n        \n    ",
            styles: [
                "\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 10px;\n            bottom: 0px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: white;\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 10px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_2__core_services_vg_controls_hidden__["a" /* VgControlsHidden */]])
    ], VgScrubBar);
    return VgScrubBar;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-time-display/vg-time-display.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VgUtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgTimeDisplay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Workaround until we can use UTC with Angular Date Pipe
var VgUtcPipe = /** @class */ (function () {
    function VgUtcPipe() {
    }
    VgUtcPipe.prototype.transform = function (value, format) {
        var date = new Date(value);
        var result = format;
        var ss = date.getUTCSeconds();
        var mm = date.getUTCMinutes();
        var hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, ss);
        result = result.replace(/mm/g, mm);
        result = result.replace(/hh/g, hh);
        return result;
    };
    VgUtcPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'vgUtc' })
    ], VgUtcPipe);
    return VgUtcPipe;
}());

var VgTimeDisplay = /** @class */ (function () {
    function VgTimeDisplay(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    VgTimeDisplay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgTimeDisplay.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgTimeDisplay.prototype, "vgProperty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgTimeDisplay.prototype, "vgFormat", void 0);
    VgTimeDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-time-display',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc:vgFormat }}</span>\n        <ng-content></ng-content>\n    ",
            styles: [
                "\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgTimeDisplay);
    return VgTimeDisplay;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-track-selector/vg-track-selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgTrackSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgTrackSelector = /** @class */ (function () {
    function VgTrackSelector(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTrackSelector.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTrackSelector.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var subs = Array.from(this.API.getMasterMedia().elem.children)
            .filter(function (item) { return item.tagName === 'TRACK'; })
            .filter(function (item) { return item.kind === 'subtitles'; })
            .map(function (item) { return ({
            label: item.label,
            selected: item.default === true,
            id: item.srclang
        }); });
        this.tracks = subs.concat([
            {
                id: null,
                label: 'Off',
                selected: subs.every(function (item) { return item.selected === false; })
            }
        ]);
        var track = this.tracks.filter(function (item) { return item.selected === true; })[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    };
    VgTrackSelector.prototype.selectTrack = function (trackId) {
        var _this = this;
        this.trackSelected = trackId === 'null' ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(this.API.getMasterMedia().elem.textTracks).forEach(function (item) {
            if (item.language === trackId) {
                _this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        });
    };
    VgTrackSelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgTrackSelector.prototype, "vgFor", void 0);
    VgTrackSelector = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-track-selector',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div class=\"container\">\n            <div class=\"track-selected\"\n                 [class.vg-icon-closed_caption]=\"!trackSelected\">\n                {{ trackSelected || '' }}\n            </div>\n            \n            <select class=\"trackSelector\" \n                    (change)=\"selectTrack($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"track selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let track of tracks\"\n                    [value]=\"track.id\"\n                    [selected]=\"track.selected === true\">\n                    {{ track.label }}\n                </option>\n            </select>\n        </div>\n    ",
            styles: [
                "\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgTrackSelector);
    return VgTrackSelector;
}());



/***/ }),

/***/ "./libs/player/src/controls/vg-volume/vg-volume.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgVolume; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgVolume = /** @class */ (function () {
    function VgVolume(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    VgVolume.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgVolume.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.ariaValue = this.getVolume() * 100;
    };
    VgVolume.prototype.onClick = function (event) {
        this.setVolume(this.calculateVolume(event.clientX));
    };
    VgVolume.prototype.onMouseDown = function (event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    };
    VgVolume.prototype.onDrag = function (event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    };
    VgVolume.prototype.onStopDrag = function (event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    };
    VgVolume.prototype.arrowAdjustVolume = function (event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
        }
    };
    VgVolume.prototype.calculateVolume = function (mousePosX) {
        var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        var volumeBarOffsetLeft = recObj.left;
        var volumeBarWidth = recObj.width;
        return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
    };
    VgVolume.prototype.setVolume = function (vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    };
    VgVolume.prototype.getVolume = function () {
        return this.target ? this.target.volume : 0;
    };
    VgVolume.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgVolume.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('volumeBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VgVolume.prototype, "volumeBarRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgVolume.prototype, "onDrag", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VgVolume.prototype, "onStopDrag", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VgVolume.prototype, "arrowAdjustVolume", null);
    VgVolume = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-volume',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n        <div \n            #volumeBar\n            class=\"volumeBar\"\n            tabindex=\"0\"\n            role=\"slider\"\n            aria-label=\"volume level\"\n            aria-level=\"polite\"\n            [attr.aria-valuenow]=\"ariaValue\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n            [attr.aria-valuetext]=\"ariaValue + '%'\"\n            (click)=\"onClick($event)\"\n            (mousedown)=\"onMouseDown($event)\">\n            <div class=\"volumeBackground\" [ngClass]=\"{dragging: isDragging}\">\n                <div class=\"volumeValue\" [style.width]=\"(getVolume() * (100-15)) + '%'\"></div>\n                <div class=\"volumeKnob\" [style.left]=\"(getVolume() * (100-15)) + '%'\"></div>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgVolume);
    return VgVolume;
}());



/***/ }),

/***/ "./libs/player/src/core/core.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coreDirectives */
/* unused harmony export coreServices */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgCoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vg_player_vg_player__ = __webpack_require__("./libs/player/src/core/vg-player/vg-player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vg_media_vg_media__ = __webpack_require__("./libs/player/src/core/vg-media/vg-media.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vg_cue_points_vg_cue_points__ = __webpack_require__("./libs/player/src/core/vg-cue-points/vg-cue-points.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_vg_fullscreen_api__ = __webpack_require__("./libs/player/src/core/services/vg-fullscreen-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vg_utils__ = __webpack_require__("./libs/player/src/core/services/vg-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_vg_events__ = __webpack_require__("./libs/player/src/core/events/vg-events.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vg_media_vg_media_element__ = __webpack_require__("./libs/player/src/core/vg-media/vg-media-element.ts");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// components



// services




// types


// utility classes

/**
 * @internal
 */
function coreDirectives() {
    return [__WEBPACK_IMPORTED_MODULE_1__vg_player_vg_player__["a" /* VgPlayer */], __WEBPACK_IMPORTED_MODULE_2__vg_media_vg_media__["a" /* VgMedia */], __WEBPACK_IMPORTED_MODULE_3__vg_cue_points_vg_cue_points__["a" /* VgCuePoints */]];
}
function coreServices() {
    return [__WEBPACK_IMPORTED_MODULE_4__services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_5__services_vg_fullscreen_api__["a" /* VgFullscreenAPI */], __WEBPACK_IMPORTED_MODULE_6__services_vg_utils__["a" /* VgUtils */], __WEBPACK_IMPORTED_MODULE_7__services_vg_controls_hidden__["a" /* VgControlsHidden */]];
}
var VgCoreModule = /** @class */ (function () {
    function VgCoreModule() {
    }
    VgCoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: coreDirectives(),
            exports: coreDirectives(),
            providers: coreServices()
        })
    ], VgCoreModule);
    return VgCoreModule;
}());



/***/ }),

/***/ "./libs/player/src/core/events/vg-events.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignalEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignalEvents = /** @class */ (function () {
    function SignalEvents() {
    }
    SignalEvents.VG_ABORT = 'abort';
    SignalEvents.VG_CAN_PLAY = 'canplay';
    SignalEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
    SignalEvents.VG_DURATION_CHANGE = 'durationchange';
    SignalEvents.VG_EMPTIED = 'emptied';
    SignalEvents.VG_ENCRYPTED = 'encrypted';
    SignalEvents.VG_ENDED = 'ended';
    SignalEvents.VG_ERROR = 'error';
    SignalEvents.VG_LOADED_DATA = 'loadeddata';
    SignalEvents.VG_LOADED_METADATA = 'loadedmetadata';
    SignalEvents.VG_LOAD_START = 'loadstart';
    SignalEvents.VG_PAUSE = 'pause';
    SignalEvents.VG_PLAY = 'play';
    SignalEvents.VG_PLAYING = 'playing';
    SignalEvents.VG_PROGRESS = 'progress';
    SignalEvents.VG_RATE_CHANGE = 'ratechange';
    SignalEvents.VG_SEEK = 'seek';
    SignalEvents.VG_SEEKED = 'seeked';
    SignalEvents.VG_SEEKING = 'seeking';
    SignalEvents.VG_STALLED = 'stalled';
    SignalEvents.VG_SUSPEND = 'suspend';
    SignalEvents.VG_TIME_UPDATE = 'timeupdate';
    SignalEvents.VG_VOLUME_CHANGE = 'volumechange';
    SignalEvents.VG_WAITING = 'waiting';
    SignalEvents.VG_LOAD = 'load';
    SignalEvents.VG_ENTER = 'enter';
    SignalEvents.VG_EXIT = 'exit';
    SignalEvents.VG_START_ADS = 'startads';
    SignalEvents.VG_END_ADS = 'endads';
    SignalEvents = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SignalEvents);
    return SignalEvents;
}());



/***/ }),

/***/ "./libs/player/src/core/services/vg-api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgAPI = /** @class */ (function () {
    function VgAPI() {
        this.medias = {}; // TODO: refactor to Set<IPlayable>
        this.playerReadyEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = __WEBPACK_IMPORTED_MODULE_1__states_vg_states__["a" /* VgStates */].VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], VgAPI);
    return VgAPI;
}());



/***/ }),

/***/ "./libs/player/src/core/services/vg-controls-hidden.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgControlsHidden; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgControlsHidden = /** @class */ (function () {
    function VgControlsHidden() {
        this.isHiddenSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    VgControlsHidden.prototype.state = function (hidden) {
        this.isHiddenSubject.next(hidden);
    };
    VgControlsHidden = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], VgControlsHidden);
    return VgControlsHidden;
}());



/***/ }),

/***/ "./libs/player/src/core/services/vg-fullscreen-api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgFullscreenAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vg_utils__ = __webpack_require__("./libs/player/src/core/services/vg-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VgFullscreenAPI = /** @class */ (function () {
    function VgFullscreenAPI() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VgFullscreenAPI.prototype.init = function (elem, medias) {
        var _this = this;
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_1__vg_utils__["a" /* VgUtils */].isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = this.polyfill != null;
        if (this.polyfill == null) {
            return;
        }
        var fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(function () {
            _this.onFullscreenChange();
        });
    };
    VgFullscreenAPI.prototype.onFullscreenChange = function () {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.next(this.isFullscreen);
    };
    VgFullscreenAPI.prototype.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.prototype.request = function (elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.next(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (__WEBPACK_IMPORTED_MODULE_1__vg_utils__["a" /* VgUtils */].isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) || __WEBPACK_IMPORTED_MODULE_1__vg_utils__["a" /* VgUtils */].isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.prototype.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.prototype.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.next(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], VgFullscreenAPI);
    return VgFullscreenAPI;
}());



/***/ }),

/***/ "./libs/player/src/core/services/vg-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VgUtils = /** @class */ (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    VgUtils.getZIndex = function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = function () {
        return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
    };
    VgUtils.isiOSDevice = function () {
        return navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i);
    };
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    VgUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], VgUtils);
    return VgUtils;
}());



/***/ }),

/***/ "./libs/player/src/core/states/vg-states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgStates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VgStates = /** @class */ (function () {
    function VgStates() {
    }
    VgStates.VG_ENDED = 'ended';
    VgStates.VG_PAUSED = 'paused';
    VgStates.VG_PLAYING = 'playing';
    VgStates.VG_LOADING = 'waiting';
    VgStates = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], VgStates);
    return VgStates;
}());



/***/ }),

/***/ "./libs/player/src/core/vg-cue-points/vg-cue-points.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgCuePoints; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_vg_events__ = __webpack_require__("./libs/player/src/core/events/vg-events.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VgCuePoints = /** @class */ (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpdateCuePoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onExitCuePoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCompleteCuePoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    VgCuePoints.prototype.ngOnInit = function () {
        var onLoad = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.ref.nativeElement, __WEBPACK_IMPORTED_MODULE_1__events_vg_events__["a" /* SignalEvents */].VG_LOAD);
        this.subscriptions.push(onLoad.subscribe(this.onLoad.bind(this)));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    };
    VgCuePoints.prototype.updateCuePoints = function (cues) {
        this.cuesSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        for (var i = 0, l = cues.length; i < l; i++) {
            var onEnter = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(cues[i], __WEBPACK_IMPORTED_MODULE_1__events_vg_events__["a" /* SignalEvents */].VG_ENTER);
            this.cuesSubscriptions.push(onEnter.subscribe(this.onEnter.bind(this)));
            var onExit = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(cues[i], __WEBPACK_IMPORTED_MODULE_1__events_vg_events__["a" /* SignalEvents */].VG_EXIT);
            this.cuesSubscriptions.push(onExit.subscribe(this.onExit.bind(this)));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.next(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.next(event.target);
    };
    VgCuePoints.prototype.ngDoCheck = function () {
        if (this.ref.nativeElement.cues) {
            var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    };
    VgCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onEnterCuePoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgCuePoints.prototype, "onEnterCuePoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onUpdateCuePoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgCuePoints.prototype, "onUpdateCuePoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onExitCuePoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgCuePoints.prototype, "onExitCuePoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onCompleteCuePoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgCuePoints.prototype, "onCompleteCuePoint", void 0);
    VgCuePoints = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[vgCuePoints]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], VgCuePoints);
    return VgCuePoints;
}());



/***/ }),

/***/ "./libs/player/src/core/vg-media/vg-media-element.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VgMediaElement */
var VgMediaElement = /** @class */ (function () {
    function VgMediaElement() {
    }
    Object.defineProperty(VgMediaElement.prototype, "audioTracks", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    VgMediaElement.prototype.addTextTrack = function (kind, label, language) {
        return null;
    };
    VgMediaElement.prototype.canPlayType = function (type) {
        return null;
    };
    VgMediaElement.prototype.load = function () { };
    VgMediaElement.prototype.msClearEffects = function () { };
    VgMediaElement.prototype.msGetAsCastingSource = function () {
        return null;
    };
    VgMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) { };
    VgMediaElement.prototype.msSetMediaKeys = function (mediaKeys) { };
    VgMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) { };
    VgMediaElement.prototype.pause = function () { };
    VgMediaElement.prototype.play = function () {
        return null;
    };
    VgMediaElement.prototype.setMediaKeys = function (mediaKeys) {
        return null;
    };
    VgMediaElement.prototype.addEventListener = function (type, listener, useCapture) { };
    return VgMediaElement;
}());



/***/ }),

/***/ "./libs/player/src/core/vg-media/vg-media.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_vg_events__ = __webpack_require__("./libs/player/src/core/events/vg-events.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VgMedia = /** @class */ (function () {
    function VgMedia(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isMetadataLoaded = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.isBufferDetected = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_ABORT),
            canPlay: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_CAN_PLAY),
            canPlayThrough: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_CAN_PLAY_THROUGH),
            durationChange: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_DURATION_CHANGE),
            emptied: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_EMPTIED),
            encrypted: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_ENCRYPTED),
            ended: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_ENDED),
            error: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_ERROR),
            loadedData: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_LOADED_DATA),
            loadedMetadata: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_LOADED_METADATA),
            loadStart: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_LOAD_START),
            pause: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_PAUSE),
            play: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_PLAY),
            playing: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_PLAYING),
            progress: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_PROGRESS),
            rateChange: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_RATE_CHANGE),
            seeked: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_SEEKED),
            seeking: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_SEEKING),
            stalled: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_STALLED),
            suspend: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_SUSPEND),
            timeUpdate: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_TIME_UPDATE),
            volumeChange: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_VOLUME_CHANGE),
            waiting: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.elem, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_WAITING),
            // Advertisement only events
            startAds: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_START_ADS),
            endAds: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, __WEBPACK_IMPORTED_MODULE_5__events_vg_events__["a" /* SignalEvents */].VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true, attributes: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: this.bufferDetected
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] !== _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = _this.state === __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PLAYING;
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        // Detect changes only for source elements or src attribute
        for (var i = 0, l = mutations.length; i < l; i++) {
            var mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (mut.target['src'] && mut.target['src'].length > 0 && mut.target['src'].indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' &&
                mut.removedNodes.length &&
                mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    };
    VgMedia.prototype.loadMedia = function () {
        var _this = this;
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout(function () { return _this.vgMedia.load(); }, 10);
    };
    VgMedia.prototype.play = function () {
        var _this = this;
        // short-circuit if already playing
        if (this.playPromise || (this.state !== __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PAUSED && this.state !== __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then(function () {
                _this.playPromise = null;
            })
                .catch(function () {
                // deliberately empty for the sake of eating console noise
            });
        }
        return this.playPromise;
    };
    VgMedia.prototype.pause = function () {
        var _this = this;
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise.then(function () {
                _this.vgMedia.pause();
            });
        }
        else {
            this.vgMedia.pause();
        }
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            // We should return undefined if vgMedia still doesn't exist
            var result = undefined;
            if (this.vgMedia) {
                result = this.vgMedia.id;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.vgMedia.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.vgMedia.currentTime;
        },
        set: function (seconds) {
            this.vgMedia.currentTime = seconds;
            // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.vgMedia.volume;
        },
        set: function (volume) {
            this.vgMedia.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.vgMedia.playbackRate;
        },
        set: function (rate) {
            this.vgMedia.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.vgMedia.buffered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "textTracks", {
        get: function () {
            return this.vgMedia.textTracks;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000
        };
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = t === Infinity;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_ENDED;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PLAYING;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = __WEBPACK_IMPORTED_MODULE_3__states_vg_states__["a" /* VgStates */].VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    };
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < this.lastPlayPos + offset) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > this.lastPlayPos + offset) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    };
    VgMedia.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = this.duration;
        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    };
    VgMedia.prototype.addTextTrack = function (type, label, language, mode) {
        var newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    };
    VgMedia.prototype.ngOnDestroy = function () {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VgMedia.prototype, "vgMedia", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VgMedia.prototype, "vgMaster", void 0);
    VgMedia = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[vgMedia]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], VgMedia);
    return VgMedia;
}());



/***/ }),

/***/ "./libs/player/src/core/vg-player/vg-player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vg_fullscreen_api__ = __webpack_require__("./libs/player/src/core/services/vg-fullscreen-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vg_utils__ = __webpack_require__("./libs/player/src/core/services/vg-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vg_media_vg_media__ = __webpack_require__("./libs/player/src/core/vg-media/vg-media.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VgPlayer = /** @class */ (function () {
    function VgPlayer(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMediaReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.next(this.api);
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? __WEBPACK_IMPORTED_MODULE_3__services_vg_utils__["a" /* VgUtils */].getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    };
    VgPlayer.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgPlayer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.fullscreen'),
        __metadata("design:type", Boolean)
    ], VgPlayer.prototype, "isFullscreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.native-fullscreen'),
        __metadata("design:type", Boolean)
    ], VgPlayer.prototype, "isNativeFullscreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.controls-hidden'),
        __metadata("design:type", Boolean)
    ], VgPlayer.prototype, "areControlsHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.z-index'),
        __metadata("design:type", String)
    ], VgPlayer.prototype, "zIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgPlayer.prototype, "onPlayerReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VgPlayer.prototype, "onMediaReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_4__vg_media_vg_media__["a" /* VgMedia */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], VgPlayer.prototype, "medias", void 0);
    VgPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signal-player',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>",
            styles: [
                "\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_vg_api__["a" /* VgAPI */], __WEBPACK_IMPORTED_MODULE_2__services_vg_fullscreen_api__["a" /* VgFullscreenAPI */], __WEBPACK_IMPORTED_MODULE_5__services_vg_controls_hidden__["a" /* VgControlsHidden */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__services_vg_api__["a" /* VgAPI */],
            __WEBPACK_IMPORTED_MODULE_2__services_vg_fullscreen_api__["a" /* VgFullscreenAPI */],
            __WEBPACK_IMPORTED_MODULE_5__services_vg_controls_hidden__["a" /* VgControlsHidden */]])
    ], VgPlayer);
    return VgPlayer;
}());



/***/ }),

/***/ "./libs/player/src/overlay-play/overlay-play.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgOverlayPlayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vg_overlay_play__ = __webpack_require__("./libs/player/src/overlay-play/vg-overlay-play.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VgOverlayPlayModule = /** @class */ (function () {
    function VgOverlayPlayModule() {
    }
    VgOverlayPlayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__vg_overlay_play__["a" /* VgOverlayPlay */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__vg_overlay_play__["a" /* VgOverlayPlay */]]
        })
    ], VgOverlayPlayModule);
    return VgOverlayPlayModule;
}());



/***/ }),

/***/ "./libs/player/src/overlay-play/vg-overlay-play.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgOverlayPlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__ = __webpack_require__("./libs/player/src/core/states/vg-states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_vg_fullscreen_api__ = __webpack_require__("./libs/player/src/core/services/vg-fullscreen-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_vg_controls_hidden__ = __webpack_require__("./libs/player/src/core/services/vg-controls-hidden.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VgOverlayPlay = /** @class */ (function () {
    function VgOverlayPlay(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgOverlayPlay.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgOverlayPlay.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgOverlayPlay.prototype.onChangeFullscreen = function (fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    };
    VgOverlayPlay.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PLAYING:
                this.target.pause();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PAUSED:
            case __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PLAYING) {
                        state = __WEBPACK_IMPORTED_MODULE_2__core_states_vg_states__["a" /* VgStates */].VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    };
    VgOverlayPlay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgOverlayPlay.prototype, "vgFor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-buffering'),
        __metadata("design:type", Boolean)
    ], VgOverlayPlay.prototype, "isBuffering", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VgOverlayPlay.prototype, "onClick", null);
    VgOverlayPlay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vg-overlay-play',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "<div class=\"vg-overlay-play\"\n                    [class.native-fullscreen]=\"isNativeFullscreen\"\n                    [class.controls-hidden]=\"areControlsHidden\">\n                   <div class=\"overlay-play-container\"\n                        [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n                   </div>\n               </div>",
            styles: [
                "\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_vg_fullscreen_api__["a" /* VgFullscreenAPI */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_vg_controls_hidden__["a" /* VgControlsHidden */]])
    ], VgOverlayPlay);
    return VgOverlayPlay;
}());



/***/ }),

/***/ "./libs/player/src/player.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export playerModules */
/* unused harmony export playerProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buffering_buffering__ = __webpack_require__("./libs/player/src/buffering/buffering.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_controls__ = __webpack_require__("./libs/player/src/controls/controls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_play_overlay_play__ = __webpack_require__("./libs/player/src/overlay-play/overlay-play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__streaming_streaming__ = __webpack_require__("./libs/player/src/streaming/streaming.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signal_core__ = __webpack_require__("./libs/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function playerModules() {
    return [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__signal_core__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_3__controls_controls__["a" /* VgControlsModule */], __WEBPACK_IMPORTED_MODULE_4__overlay_play_overlay_play__["a" /* VgOverlayPlayModule */], __WEBPACK_IMPORTED_MODULE_5__streaming_streaming__["a" /* VgStreamingModule */], __WEBPACK_IMPORTED_MODULE_2__buffering_buffering__["a" /* VgBufferingModule */]];
}
function playerProviders() {
    return [];
}
var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: playerModules(),
            providers: playerProviders()
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./libs/player/src/streaming/streaming.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgStreamingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vg_dash_vg_dash__ = __webpack_require__("./libs/player/src/streaming/vg-dash/vg-dash.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vg_hls_vg_hls__ = __webpack_require__("./libs/player/src/streaming/vg-hls/vg-hls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VgStreamingModule = /** @class */ (function () {
    function VgStreamingModule() {
    }
    VgStreamingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__vg_dash_vg_dash__["a" /* VgDASH */], __WEBPACK_IMPORTED_MODULE_3__vg_hls_vg_hls__["a" /* VgHLS */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__vg_dash_vg_dash__["a" /* VgDASH */], __WEBPACK_IMPORTED_MODULE_3__vg_hls_vg_hls__["a" /* VgHLS */]]
        })
    ], VgStreamingModule);
    return VgStreamingModule;
}());



/***/ }),

/***/ "./libs/player/src/streaming/vg-dash/vg-dash.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgDASH; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgDASH = /** @class */ (function () {
    function VgDASH(ref, API) {
        this.ref = ref;
        this.API = API;
        this.subscriptions = [];
    }
    VgDASH.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgDASH.prototype.onPlayerReady = function () {
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    };
    VgDASH.prototype.ngOnChanges = function (changes) {
        if (changes['vgDash'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    };
    VgDASH.prototype.createPlayer = function () {
        if (this.dash) {
            this.destroyPlayer();
        }
        // It's a DASH source
        if (this.vgDash && (this.vgDash.indexOf('.mpd') > -1 || this.vgDash.indexOf('mpd-time-csf') > -1)) {
            var drmOptions = void 0;
            if (this.vgDRMLicenseServer) {
                drmOptions = this.vgDRMLicenseServer;
                if (this.vgDRMToken) {
                    for (var drmServer in drmOptions) {
                        drmOptions[drmServer].httpRequestHeaders = { Authorization: this.vgDRMToken };
                    }
                }
            }
            this.dash = dashjs.MediaPlayer().create();
            this.dash.getDebug().setLogToBrowserConsole(false);
            this.dash.initialize(this.ref.nativeElement);
            this.dash.setAutoPlay(false);
            if (drmOptions) {
                this.dash.setProtectionData(drmOptions);
            }
            this.dash.attachSource(this.vgDash);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgDash;
            }
        }
    };
    VgDASH.prototype.destroyPlayer = function () {
        if (this.dash) {
            this.dash.reset();
            this.dash = null;
        }
    };
    VgDASH.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.destroyPlayer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgDASH.prototype, "vgDash", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgDASH.prototype, "vgDRMToken", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VgDASH.prototype, "vgDRMLicenseServer", void 0);
    VgDASH = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[vgDash]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgDASH);
    return VgDASH;
}());



/***/ }),

/***/ "./libs/player/src/streaming/vg-hls/vg-hls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VgHLS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__ = __webpack_require__("./libs/player/src/core/services/vg-api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VgHLS = /** @class */ (function () {
    function VgHLS(ref, API) {
        this.ref = ref;
        this.API = API;
        this.subscriptions = [];
    }
    VgHLS.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgHLS.prototype.onPlayerReady = function () {
        var _this = this;
        this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
        this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.config = {
            autoStartLoad: this.preload
        };
        if (this.crossorigin === 'use-credentials') {
            this.config.xhrSetup = function (xhr, url) {
                // Send cookies
                xhr.withCredentials = true;
            };
        }
        this.createPlayer();
        if (!this.preload) {
            this.subscriptions.push(this.API.subscriptions.play.subscribe(function () {
                if (_this.hls) {
                    _this.hls.startLoad(0);
                }
            }));
        }
    };
    VgHLS.prototype.ngOnChanges = function (changes) {
        if (changes['vgHls'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    };
    VgHLS.prototype.createPlayer = function () {
        if (this.hls) {
            this.destroyPlayer();
        }
        // It's a HLS source
        if (this.vgHls && this.vgHls.indexOf('.m3u8') > -1 && Hls.isSupported()) {
            var video = this.ref.nativeElement;
            this.hls = new Hls(this.config);
            this.hls.loadSource(this.vgHls);
            this.hls.attachMedia(video);
        }
        else {
            if (this.target && !!this.target.pause) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgHls;
            }
        }
    };
    VgHLS.prototype.destroyPlayer = function () {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
    };
    VgHLS.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.destroyPlayer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VgHLS.prototype, "vgHls", void 0);
    VgHLS = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[vgHls]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__core_services_vg_api__["a" /* VgAPI */]])
    ], VgHLS);
    return VgHLS;
}());



/***/ }),

/***/ "./libs/signal/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_signal_module__ = __webpack_require__("./libs/signal/src/signal.module.ts");
/* unused harmony reexport SignalModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_service_signal_service__ = __webpack_require__("./libs/signal/src/service/signal.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_service_signal_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_service_local_service__ = __webpack_require__("./libs/signal/src/service/local.service.ts");
/* unused harmony reexport LocalService */





/***/ }),

/***/ "./libs/signal/src/service/local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signal_storage__ = __webpack_require__("./libs/storage/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalService = /** @class */ (function () {
    function LocalService(storage) {
        this.storage = storage;
        // this.node_id = this.storage.retrieve('username')
        //
        // this.storage.observe('node_id').subscribe(value => (this.node_id = value))
    }
    LocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__signal_storage__["a" /* StorageService */]])
    ], LocalService);
    return LocalService;
}());



/***/ }),

/***/ "./libs/signal/src/service/signal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignalService = /** @class */ (function () {
    function SignalService(socket) {
        this.socket = socket;
    }
    SignalService.prototype.sendMessage = function (msg) {
        this.socket.emit('send', msg);
    };
    SignalService.prototype.getMessage = function () {
        // console.log('service getMsg')
        return this.socket.fromEvent('send');
        // .pipe(
        //   map(data => data.msg),
        //   catchError(error => of(null))
        // );
    };
    SignalService.prototype.getStatus = function () {
        // console.log('getting Status')
        return this.socket.fromEvent('signal');
    };
    SignalService.prototype.sendStatus = function (status) {
        this.socket.emit('signal', status);
    };
    SignalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], SignalService);
    return SignalService;
}());



/***/ }),

/***/ "./libs/signal/src/signal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SignalModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_local_service__ = __webpack_require__("./libs/signal/src/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_signal_service__ = __webpack_require__("./libs/signal/src/service/signal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signal_storage__ = __webpack_require__("./libs/storage/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignalModule = /** @class */ (function () {
    function SignalModule() {
    }
    SignalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_signal_service__["a" /* SignalService */], __WEBPACK_IMPORTED_MODULE_2__service_local_service__["a" /* LocalService */], __WEBPACK_IMPORTED_MODULE_4__signal_storage__["a" /* StorageService */]]
        })
    ], SignalModule);
    return SignalModule;
}());



/***/ }),

/***/ "./libs/storage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_storage_service__ = __webpack_require__("./libs/storage/src/storage.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_storage_service__["a"]; });
/* unused harmony reexport DEPRECATED */
/* unused harmony reexport WEB_STORAGE_NOT_SUPPORTED */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_storage_module__ = __webpack_require__("./libs/storage/src/storage.module.ts");
/* unused harmony reexport StorageModule */




/***/ }),

/***/ "./libs/storage/src/storage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StorageModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("./libs/storage/src/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageModule = /** @class */ (function () {
    function StorageModule() {
    }
    StorageModule_1 = StorageModule;
    StorageModule.withConfig = function (userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return {
            ngModule: StorageModule_1,
            providers: [{ provide: 'WEB_STORAGE_SERVICE_CONFIG', useValue: userConfig }]
        };
    };
    StorageModule = StorageModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]]
        })
    ], StorageModule);
    return StorageModule;
    var StorageModule_1;
}());



/***/ }),

/***/ "./libs/storage/src/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEPRECATED */
/* unused harmony export WEB_STORAGE_NOT_SUPPORTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEPRECATED = 'This function is deprecated.';
var WEB_STORAGE_NOT_SUPPORTED = 'WEB_STORAGE_NOT_SUPPORTED';
var StorageService = /** @class */ (function () {
    function StorageService(config) {
        this._isSupported = false;
        if (config.mockWebStorage) {
            this.webStorage = config.mockWebStorage;
        }
        var prefix = config.prefix, storageType = config.storageType;
        this._prefix = prefix || 'ls';
        this._storageType = storageType || 'localStorage';
        this._isSupported = this.checkSupport();
    }
    Object.defineProperty(StorageService.prototype, "isSupported", {
        get: function () {
            return this._isSupported;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "storageType", {
        get: function () {
            return this._storageType;
        },
        enumerable: true,
        configurable: true
    });
    StorageService.prototype.reInit = function () {
        this._isSupported = this.checkSupport();
    };
    StorageService.prototype.deriveKey = function (key, user) {
        return user ? this.prefix + "." + user + "." + key : this.prefix + "." + key;
    };
    StorageService.prototype.get = function (key, user) {
        if (!this.isSupported) {
            console.warn('webStorageError', WEB_STORAGE_NOT_SUPPORTED);
            return null;
        }
        var item = this.webStorage ? this.webStorage.getItem(this.deriveKey(key, user)) : null;
        // FIXME: not a perfect solution, since a valid 'null' string can't be stored
        if (!item || item === 'null') {
            return null;
        }
        try {
            return JSON.parse(item);
        }
        catch (e) {
            return null;
        }
    };
    StorageService.prototype.getStorageType = function () {
        return this.storageType;
    };
    StorageService.prototype.set = function (payload) {
        if (payload === undefined) {
            return false;
        }
        var jsonPayload = JSON.stringify(payload);
        if (!this.isSupported) {
            console.warn('webStorageError', WEB_STORAGE_NOT_SUPPORTED);
            return false;
        }
        try {
            if (this.webStorage) {
                this.webStorage.setItem(this.deriveKey(payload.key, payload.user), jsonPayload);
            }
        }
        catch (e) {
            console.error('webStorageError', e.message);
            return false;
        }
        return true;
    };
    StorageService.prototype.remove = function (user) {
        var _this = this;
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var result = true;
        if (!this.isSupported) {
            console.warn('webStorageError', WEB_STORAGE_NOT_SUPPORTED);
            result = false;
        }
        keys.forEach(function (key) {
            try {
                _this.webStorage.removeItem(_this.deriveKey(key, user));
            }
            catch (e) {
                console.error('webStorageError', e.message);
                result = false;
            }
        });
        return result;
    };
    StorageService.prototype.checkSupport = function () {
        try {
            var supported = this.storageType in window && window[this.storageType] !== null;
            if (supported) {
                if (!this.webStorage) {
                    this.webStorage = window[this.storageType];
                    // When Safari (OS X or iOS) is in private browsing mode, it
                    // appears as though localStorage is available, but trying to
                    // call .setItem throws an exception.
                    //
                    // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made
                    // to add something to storage that exceeded the quota."
                    var key = this.deriveKey("__" + Math.round(Math.random() * 1e7));
                    this.webStorage.setItem(key, '');
                    this.webStorage.removeItem(key);
                }
            }
            return supported;
        }
        catch (e) {
            console.error('webStorageError', e.message);
            return false;
        }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('WEB_STORAGE_SERVICE_CONFIG')),
        __metadata("design:paramtypes", [Object])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./apps/intercept/src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
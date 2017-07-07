webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    function AppService(_http, storageService) {
        this._http = _http;
        this.storageService = storageService;
        this.ModelChoice = [];
        this._friends = null;
    }
    AppService.prototype.clearCache = function () {
        this._friends = null;
    };
    AppService.prototype.getJson = function () {
        return this._http.get('http://localhost:9001/getUploadJson');
    };
    AppService.prototype.getMultiChoice = function () {
        return this._http.get('assets/uploads/modulechoice.json')
            .map(function (res) {
            res.json();
            return res.json();
        });
    };
    AppService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    AppService.prototype.storeObjectinLocalStorage = function (userObject) {
        this.storageService.setUserObject(JSON.stringify(userObject));
        return true;
    };
    AppService.prototype.clearLocalStorage = function () {
        this.storageService.removeAll();
    };
    AppService.prototype.getAllLocalStorageValues = function () {
        var objectArray = this.storageService.getAll();
        return objectArray;
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var STORAGE_KEY = 'user_object';
var StorageService = (function () {
    //setJWTTokenExpiryTime
    function StorageService() {
    }
    StorageService.prototype.getUserObject = function () {
        return localStorage.getItem(STORAGE_KEY);
    };
    StorageService.prototype.setUserObject = function (token) {
        var s = 1;
        if (localStorage.length > 0)
            s = localStorage.length + 1;
        localStorage.setItem(STORAGE_KEY + s, token);
    };
    StorageService.prototype.removeUserObject = function () {
        localStorage.removeItem(STORAGE_KEY);
    };
    StorageService.prototype.HasKeys = function () {
        return localStorage.length > 0;
    };
    StorageService.prototype.removeAll = function () {
        localStorage.clear();
    };
    StorageService.prototype.getAll = function () {
        var selectRow = 1;
        var order = new Array();
        var pushLocalStorageValue;
        var aa;
        var counter = 0;
        if (localStorage.length > 0) {
            var totalRows = localStorage.length;
            while (totalRows > 0) {
                order[counter] = new Array();
                aa = JSON.parse(localStorage.getItem(STORAGE_KEY + selectRow));
                order[counter].push(aa);
                selectRow++;
                totalRows--;
                counter++;
            }
        }
        //    return JSON.stringify(pushLocalStorageValue);
        return order;
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    //setJWTTokenExpiryTime
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(200);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(http, appService, winRef, _friendsService) {
        this.http = http;
        this.appService = appService;
        this.winRef = winRef;
        this._friendsService = _friendsService;
        this.title = 'app works!';
        this.username = '';
        this.model = {};
        this.display = { first: true, second: true };
        this.friends = [];
        this.resultList = [];
        this.appCache = window.applicationCache;
        window.applicationCache.addEventListener('updateready', this.onUpdateReady);
        window.applicationCache.addEventListener('error', this.onError);
    }
    AppComponent.prototype.onUpdateReady = function () {
        window.applicationCache.swapCache();
        alert('onUpdateReady found new version!');
    };
    AppComponent.prototype.onError = function () {
        if (navigator.onLine == true) {
            alert("Error - Please contact the website administrator if this problem consists.");
        }
        else {
            alert("You aren't connected to the internet. Some things might not be available.");
        }
        alert(' onErrorfound new version!');
    };
    // @HostListener("applicationCache:updateready", [])
    // updateready() {
    //   console.log("coming here applicationCache");
    //  //we'll do some stuff here when the window is scrolled
    // }
    // function onUpdateReady() {
    //   alert('found new version!');
    // }
    // window.applicationCache.addEventListener('updateready', onUpdateReady);
    // if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
    //   onUpdateReady();
    // }
    // @HostListener("applicationCache:error", [])
    // onError() {
    //   console.log("coming error here applicationCache");
    //  //we'll do some stuff here when the window is scrolled
    // }
    // window.applicationCache.addEventListener():any
    // {
    //   return null;
    // }
    // appCache.addEventListener(){
    // return;
    // }
    AppComponent.prototype.clearAll = function () {
        this.appService.clearLocalStorage();
        this.retrieveValues = [];
    };
    AppComponent.prototype.onSubmit = function () {
        var x = {
            name: this.username,
            userModelChoice: this.selectedDeviceObj
        };
        this.appService.storeObjectinLocalStorage(x);
        this.username = "";
    };
    AppComponent.prototype.onRetrieve = function () {
        this.retrieveValues = this.appService.getAllLocalStorageValues();
        this.plscome = this.retrieveValues;
    };
    AppComponent.prototype.onChangeObj = function (newObj) {
        this.selectedDeviceObj = newObj;
        this.resultList = newObj.resultList;
    };
    AppComponent.prototype.loadData = function () {
        var _this = this;
        this.appService.getJson()
            .subscribe(function (data) {
            _this.model = data.text();
        }, function (error) {
            console.log(error);
        });
        this.appService.getMultiChoice()
            .subscribe(function (data) {
            _this.modelChoice = data;
            _this.selectedDeviceObj = _this.modelChoice[0];
        }, function (error) {
            console.log(error);
        });
        //  this.modelChoice = this.appService.getMultiChoice();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(353),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__friends_service__["a" /* FriendsService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WindowRef__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friends_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__friends_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__friends_list__["a" /* FriendsList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_7__friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_9__storage_service__["a" /* StorageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friends_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsList = (function () {
    function FriendsList(_friendsServce) {
        this._friendsServce = _friendsServce;
        this.friends = [];
    }
    FriendsList.prototype.loadData = function () {
        var _this = this;
        this.subscription = this._friendsServce
            .getFriends()
            .subscribe(function (res) { return _this.friends = res; }, function (error) { return console.log(error); });
    };
    FriendsList.prototype.ngOnInit = function () {
        this.loadData();
    };
    FriendsList.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        console.log('Destroyed');
    };
    return FriendsList;
}());
FriendsList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'friends-list',
        template: "\n    <div *ngFor=\"let friend of friends\">\n      {{friend}}\n    </div>\n    <button (click)=\"loadData()\">Reload</button>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__friends_service__["a" /* FriendsService */]) === "function" && _a || Object])
], FriendsList);

var _a;
//# sourceMappingURL=friends-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(104)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>\n<div>\n  {{model}}\n  </div>-->\n<!--<option value=\"\">Please select a choice</option>-->\n\n<!--<select  class=\"form-control\" [(ngModel)]=\"modelChoice\" (change)=\"changeEvent(selectedValue)\">\n  \n<option value=\"\">Please select a choice</option>\n\n  <option *ngFor=\"let c of modelChoice\" [ngValue]=\"c\" [value]=\"c\">{{c.name}}</option>\n</select>-->\n<div style=\"margin:20px\">\n\n<label> Module Choice: </label>\n<select [ngModel]=\"selectedDeviceObj\" (ngModelChange)=\"onChangeObj($event)\" name=\"sel3\">\n  <option [ngValue]=\"i\" *ngFor=\"let i of modelChoice\">{{i.name}}</option>\n</select>\n\n</div>\n<div style=\"margin:20px\">\n\n<label> User: </label>\n<input id=\"txtName\" [(ngModel)]=\"username\" placeholder=\"enter a name\" />\n\n</div>\n\n<div style=\"clear:both;margin:20px\">\n\n    <table class=\"table table-striped table-bordered text-center\" style=\"background-color:#F4F4F4 ;margin-left: 16px;width: 861px; \">\n            <thead style=\"background-color:#EBEBEB;\">\n                <tr style=\"font-weight: 700;color: #4A4A4A;\">\n                    <td>Premium</td>\n                  <td>Amount</td>\n                   <td>Type</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of resultList\" style=\"color:#4A4A4A;\">\n                    <td>{{data.premium}}</td>\n                    <td>{{data.amount}}</td>\n                    <td>{{data.type}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n  </div>\n\n\n<div style=\"clear:both;margin:20px\">\n      <button (click)=\"onSubmit()\">Store Value in LocalStorage</button>\n      <button (click)=\"onRetrieve()\">Retrieve Value in LocalStorage</button>\n        <button (click)=\"clearAll()\">Clear All Local Storage Value</button>\n</div>\n\n<div style=\"clear:both;margin:20px\">\n<p>\n  LocalStorage Values  {{retrieveValues | json}}\n</p>\n</div>\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_publishReplay__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_publishReplay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsService = (function () {
    function FriendsService(_http) {
        this._http = _http;
        this._friends = null;
    }
    FriendsService.prototype.clearCache = function () {
        this._friends = null;
    };
    FriendsService.prototype.getFriends = function () {
        if (!this._friends) {
            //./components/rxjs-caching/friends.json
            this._friends = this._http.get('src/app/friends.json')
                .map(function (res) { return res.json().friends; })
                .do(function (friends) { return console.log('fetched friends'); })
                .publishReplay(1)
                .refCount();
        }
        return this._friends;
    };
    return FriendsService;
}());
FriendsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FriendsService);

var _a;
//# sourceMappingURL=friends-service.js.map

/***/ })

},[628]);
//# sourceMappingURL=main.bundle.js.map
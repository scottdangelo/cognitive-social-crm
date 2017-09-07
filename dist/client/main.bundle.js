webpackJsonp([2,5],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
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
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Cognitive Social CRM';
        this.titleService.setTitle(this.title);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(401),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    // Use this function when you want to allow a route to be access only when the user is authenticated
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    // Use this function when a module should be loaded via lazy loading only when a user is authenticated
    AuthGuard.prototype.canLoad = function (route) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.prototype.idAdmin = function (route, state) {
        return this.authService.isInRole('admin');
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__["a" /* LoopbackLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__["a" /* LoopbackLoginService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/auth.guard.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lb_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopbackLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoopbackLoginComponent = (function () {
    function LoopbackLoginComponent(_fb, loginService) {
        this._fb = _fb;
        this.loginService = loginService;
        this.events = [];
        this.loginForm = this._fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            ttl: [3600]
        });
    }
    LoopbackLoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.credentials = this.loginForm.value;
        // Logout previous token in session storage and remove token from session storage
        var stored = this.loginService.get();
        if (stored && stored.token) {
            this.loginService.logout().subscribe(function (success) {
                if (success) {
                    _this.loginService.destroyToken();
                }
                else {
                    console.log('No Token found in session storage');
                }
            });
        }
        // Reset the error
        this.isError = false;
        var that = this;
        // Use an observable to call the server and get an async response back
        this.loginService.login(this.credentials).subscribe(function (res) {
            _this.loginForm.reset();
        }, function (err) {
            console.log('Login Error');
            _this.isError = true;
            _this.errorMsg = err.message;
        });
    };
    return LoopbackLoginComponent;
}());
LoopbackLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wsl-lb-login',
        template: __webpack_require__(402),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__lb_login_service__["a" /* LoopbackLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lb_login_service__["a" /* LoopbackLoginService */]) === "function" && _b || Object])
], LoopbackLoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/lb-login.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(403),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/page-not-found.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationService = (function () {
    function ConversationService(_http) {
        this._http = _http;
        this._url = window.location.origin + '/api/watson-conversation/send';
        this.user = String(Math.floor(Math.random() * 100000000)); // Random username to associate on server side
        this.externalMessage$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.watsonDetails$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ConversationService.prototype.sendMessage = function (message) {
        var body = {
            input: {
                text: message,
                user: this.user
            }
        };
        return this._http.post(this._url + '?access_token=' + sessionStorage.getItem('wsl-api-token'), body)
            .map(function (res) { return res.json(); });
    };
    /**
     * For sending messages from a source that is
     * NOT from the message input panel
     */
    ConversationService.prototype.sendExternalMessage = function (message, type) {
        if (type === void 0) { type = 'text'; }
        this.externalMessage$.emit({
            message: message,
            type: type
        });
    };
    ConversationService.prototype.showWatsonDetails = function () {
        this.watsonDetails$.emit(true);
    };
    return ConversationService;
}());
ConversationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ConversationService);

var _a;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/conversation.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NLUService; });
//
// Implementation of alchemy integration
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NLUService = (function () {
    function NLUService(_http) {
        this._http = _http;
        this._sentimentUrl = window.location.origin + '/api/nlu/getSentiment';
        this._emotionUrl = window.location.origin + '/api/nlu/getEmotion';
    }
    NLUService.prototype.getSentiment = function (text) {
        return this._http.get(this._sentimentUrl + '?' + __WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"]({ text: text, access_token: sessionStorage.getItem('wsl-api-token') }))
            .map(function (res) { return res.json(); });
    };
    NLUService.prototype.getEmotion = function (text) {
        return this._http.get(this._emotionUrl + '?' + __WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"]({ text: text, access_token: sessionStorage.getItem('wsl-api-token') }))
            .map(function (res) { return res.json(); });
    };
    return NLUService;
}());
NLUService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], NLUService);

var _a;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/nlu.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		677,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 199;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(228);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/main.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ANALYSIS_URL = 'api/Analysis';
var AnalysisService = (function () {
    function AnalysisService(authService) {
        this.authService = authService;
    }
    AnalysisService.prototype.listByPostDate = function (limit, skip) {
        var url = ANALYSIS_URL + '/listByPostDate';
        return this.authService.makeAuthenticatedHttpGet(url, [{ name: 'skip', value: skip }, { name: 'limit', value: limit }]);
    };
    AnalysisService.prototype.classificationSummary = function () {
        var url = ANALYSIS_URL + '/classificationSummary';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.emotionalToneOvertime = function () {
        var url = ANALYSIS_URL + '/emotionalToneOvertime';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.sentimentSummary = function () {
        var url = ANALYSIS_URL + '/sentimentSummary';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.sentimentOvertime = function () {
        var url = ANALYSIS_URL + '/sentimentOvertime';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.keywordsSummary = function () {
        var url = ANALYSIS_URL + '/keywordsSummary';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.sentimentTrend = function () {
        var url = ANALYSIS_URL + '/sentimentTrend';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    AnalysisService.prototype.destroyTweet = function (id) {
        var url = ANALYSIS_URL + '/' + id;
        return this.authService.makeAuthenticatedHttpDelete(url);
    };
    return AnalysisService;
}());
AnalysisService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__["a" /* LoopbackLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__["a" /* LoopbackLoginService */]) === "function" && _a || Object])
], AnalysisService);

var _a;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/analysis.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        // These are the colors used on the charts and can be customized.
        this.COLORS = ['#c5d86d', '#0090c1', '#ee964b', '#d1495b', '#00798c'];
        this.POSITIVE = '#c5d86d';
        this.NEGATIVE = '#d1495b';
        this.WATSON = '#0090c1';
        this.AGENT = '#c5d86d';
        // The analysis page sections is delayed to not exceed the Cloudant
        // limits.
        this.ANALYSIS_LOAD_DELAY = 1000;
        // The setting that tells the app how often to analysis page should be reloaded.
        this.STATUS_REFRESH_DELAY = 60000;
        this.TONE_ICONS = {
            anger: '<i class="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>',
            disgust: '<i class="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>',
            sadness: '<i class="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>',
            fear: '<i class="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>',
            joy: '<i class="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>'
        };
        // The Classification that will be allocated to Watson.  This drives the
        // donut chart on the first page.
        this.ALLOCATION_TO_WATSON = ['SERVICE'];
    }
    ConfigService.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/config.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        console.log('In canActivate for admin guard...');
        return this.authService.isInRole('admin');
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__["a" /* LoopbackLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__loopback_lb_login_service__["a" /* LoopbackLoginService */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/admin.guard.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nlu_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppCommService = AppCommService_1 = (function () {
    function AppCommService(_conversation, _nlu) {
        this._conversation = _conversation;
        this._nlu = _nlu;
        this.appComm$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // Send a message and show the outgoing message in the chat window.
    AppCommService.prototype.sendMessage = function (message, context, external) {
        var _this = this;
        if (external === void 0) { external = false; }
        // Conversation sent event
        this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.conversationSent, external ? AppCommService_1.subTypeEnum.conversationSent.external : AppCommService_1.subTypeEnum.conversationSent.standard, message));
        if (!external) {
            // this.getSentiment(message)
            // this.getEmotion(message)
        }
        this._conversation.sendMessage(message).subscribe(function (response) {
            // Conversation received event
            _this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.conversationReceived, '', response.text));
            // Conversation intents updated event
            // this.appComm$.emit(new AppCommEvent(AppCommService.typeEnum.conversationIntentsReceived, '', response.conversationResponse.intents))
        });
    };
    AppCommService.prototype.getSentiment = function (text) {
        var _this = this;
        this._nlu.getSentiment(text).subscribe(function (response) {
            _this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.alchemy, AppCommService_1.subTypeEnum.alchemy.sentiment, response));
            if (Number(response.sentimentScore) * 100 < -80) {
                _this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.alchemy, AppCommService_1.subTypeEnum.alchemy.veryLowSentiment, {}));
            }
        });
    };
    AppCommService.prototype.getEmotion = function (text) {
        var _this = this;
        this._nlu.getEmotion(text).subscribe(function (response) {
            _this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.alchemy, AppCommService_1.subTypeEnum.alchemy.emotion, response));
        });
    };
    AppCommService.prototype.showDetailsPopup = function () {
        this.appComm$.emit(new __WEBPACK_IMPORTED_MODULE_1__classes_appcomm_event_class__["a" /* AppCommEvent */](AppCommService_1.typeEnum.showDetailsPopup, '', {}));
    };
    return AppCommService;
}());
AppCommService.typeEnum = {
    conversationSent: 'CONVSENT',
    conversationReceived: 'CONVRECEIVED',
    alchemy: 'ALCHEMY',
    conversationIntentsReceived: 'INTENTSRECEIVED',
    showDetailsPopup: 'SHOWDETAILS'
};
AppCommService.subTypeEnum = {
    conversationSent: {
        standard: 'STANDARD',
        external: 'EXTERNAL'
    },
    alchemy: {
        sentiment: 'SENTIMENT',
        emotion: 'EMOTION',
        veryLowSentiment: 'VERYLOWSENTIMENT'
    }
};
AppCommService = AppCommService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__conversation_service__["a" /* ConversationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__conversation_service__["a" /* ConversationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__nlu_service__["a" /* NLUService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__nlu_service__["a" /* NLUService */]) === "function" && _b || Object])
], AppCommService);

var AppCommService_1, _a, _b;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/app-comm.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__twitter_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analysis_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_comm_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conversation_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nlu_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__twitter_service__["a" /* TwitterService */], __WEBPACK_IMPORTED_MODULE_4__analysis_service__["a" /* AnalysisService */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_5__app_comm_service__["a" /* AppCommService */], __WEBPACK_IMPORTED_MODULE_6__conversation_service__["a" /* ConversationService */], __WEBPACK_IMPORTED_MODULE_7__nlu_service__["a" /* NLUService */]]
    })
], SharedModule);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/shared.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TWITTER_URL = 'api/Twitter';
var TwitterService = (function () {
    function TwitterService(authService) {
        this.authService = authService;
    }
    TwitterService.prototype.listenerStatus = function () {
        var url = TWITTER_URL + '/status';
        return this.authService.makeAuthenticatedHttpGet(url);
    };
    return TwitterService;
}());
TwitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__["a" /* LoopbackLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_loopback_lb_login_service__["a" /* LoopbackLoginService */]) === "function" && _a || Object])
], TwitterService);

var _a;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/twitter.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_loopback_lb_login_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var APP_ROUTES = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__auth_loopback_lb_login_component__["a" /* LoopbackLoginComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(APP_ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/app-routing.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_alert_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__(122);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* PathLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_7__utils_alert_service__["a" /* AlertService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/app.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loopback_lb_login_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loopback_lb_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_guard__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__loopback_lb_login_component__["a" /* LoopbackLoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__loopback_lb_login_service__["a" /* LoopbackLoginService */], __WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__admin_guard__["a" /* AdminGuard */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__loopback_lb_login_component__["a" /* LoopbackLoginComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AuthModule);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/auth.module.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(119);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/index.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommEvent; });
//
// This represents a standard 'AppComm' event used for intra-app communication
//
var AppCommEvent = (function () {
    function AppCommEvent(type, subType, data) {
        this.type = type;
        this.subType = subType;
        this.data = data;
    }
    return AppCommEvent;
}());

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/appcomm.event.class.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var AlertService = (function () {
    function AlertService() {
        /*
        * This service showcases how to send a message to a parent, from a child or peer.
        */
        this.alert = {};
        // Create a subject that will be exposed as an Observable
        this._alertSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    // This function is used by the parent to subscribe to messages
    // from the client or peer.
    AlertService.prototype.getAlerted = function () {
        return this._alertSource.asObservable();
    };
    // This function is used by the client or peer to publish a message
    // to the subscribed parents or peers.
    AlertService.prototype.setAlert = function (type, msg) {
        this.alert.type = type;
        this.alert.msg = msg;
        this._alertSource.next(this.alert);
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AlertService);

//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/alert.service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/environment.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/polyfills.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, ":host .page {\n  width: 100vw;\n  height: 100vh;\n  background-image: url(\"/assets/img/twitter-1795652_1280.jpg\");\n\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: 50% 0%;\n}\n\n.warning {\n  color: #ffffff;\n}\n\ninput.form-control {\n  background-color: #cccccc;\n  color: #444249;\n  font-weight: bold;\n}\n\n.form-control:focus {\n    border-color: #49b0fb;\n}\n\ninput.btn {\n  background-color: #49b0fb;\n  color: #ffffff;\n  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.50);\n}\n\n.input-group-addon {\n  background-color: #cccccc;\n}\n\n.panel-heading {\n  background-color: #444249;\n  color: #3784BC;\n}\n\n.panel {\n  width: 400px;\n  height: 260px;\n\n  position: absolute;\n  top:0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  margin: auto;\n\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.30);\n\n  background-color: #444249;\n  border-color: #444249;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n<div *ngIf=\"isError\" class=\"alert alert-danger\">\n  <p>{{errorMsg}}</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <strong> Welcome to Cognitive Social CRM</strong>\n        </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitLogin()\">\n            <fieldset>\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-10  col-md-offset-1 \">\n                  <div class=\"form-group\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                      <i class=\"glyphicon glyphicon-user\"></i>\n                    </span>\n                      <input class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" id=\"username\" name=\"username\" type=\"text\" autofocus>\n                    </div>\n                    <small [hidden]=\"loginForm.controls.username.valid || (loginForm.controls.username.pristine && !submitted)\" class=\"warning\">\n                      Username is required.\n                    </small>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"glyphicon glyphicon-lock\"></i>\n                      </span>\n                      <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" type=\"password\" value=\"\">\n                    </div>\n                    <small [hidden]=\"loginForm.controls.password.valid || (loginForm.controls.password.pristine && !submitted)\" class=\"warning\">\n                      Password is required.\n                    </small>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Sign in\" [disabled]=\"!loginForm.valid\">\n                  </div>\n                </div>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:100px\">\n  <div class=\"row\">\n    <div class=\"col-xs-4\"></div>\n    <div class=\"col-xs-4\">\n      <div class=\"error-template center-block\">\n        <h1>Oops!</h1>\n        <h2>404 Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!<br>\n        </div>\n        <div class=\"error-actions\">\n          <a class=\"btn btn-primary\" routerLink=\"/home\">\n            <i class=\"icon-home icon-white\"></i> Take Me Home </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopbackLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import RxJs required methods


var LoopbackLoginService = (function () {
    // Resolve HTTP using the constructor
    function LoopbackLoginService(http, router) {
        this.http = http;
        this.router = router;
        // private instance variable to hold base url
        this.loginUrl = '/api/auth/login';
        this.logoutUrl = '/api/auth/logout';
        this.findByIdUrl = '/api/auth';
        this.isInRoleUrl = '/api/auth/isInRole';
        // key used for saving the token in session storage
        this.TOKEN_KEY = 'wsl-api-token';
        this.USER_ID_KEY = 'wsl-userid';
    }
    // Function that will indicate if a user is logged in or not.
    LoopbackLoginService.prototype.isAuthenticated = function () {
        var _this = this;
        var stored = this.get();
        var authenticated;
        if (stored && stored.token && stored.id) {
            var url = this.findByIdUrl + '/' + stored.id + '/accessTokens/' + stored.token + '?access_token=' + stored.token;
            return this.http.get(url)
                .map(function (res) {
                return true;
            })
                .catch(function (error) {
                _this.destroyToken();
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].create(function (observer) {
                    _this.router.navigate(['/login']);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].create(function (observer) {
                _this.router.navigate(['/login']);
                observer.next(false);
                observer.complete();
            });
        }
    };
    // Returns an Observable that will make the login request to the server and return the json containing the token
    LoopbackLoginService.prototype.login = function (credentials) {
        var _this = this;
        var bodyString = JSON.stringify(credentials); // Stringify credentials payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.loginUrl, credentials, options) // ...using post request
            .map(function (res) {
            _this.save(res.json());
            _this.router.navigate(['/']);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    // Returns an Observable that will make the logout request to the server with the token in session storage
    LoopbackLoginService.prototype.logout = function () {
        var _this = this;
        var stored = this.get();
        if (stored && stored.token) {
            var url = this.logoutUrl + '?access_token=' + stored.token;
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({}); // Create a request option
            return this.http.post(url, {}, options)
                .map(function (res) {
                _this.destroyToken();
                _this.router.navigate(['login']);
                return true;
            })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw('Logout Error: ' + err); });
        }
    };
    LoopbackLoginService.prototype.isInRole = function (role) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('access_token', this.get().token);
        params.set('role', role);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            search: params
        });
        return this.http.get(this.isInRoleUrl, requestOptions)
            .map(function (res) { return res.json().isInRole; })
            .catch(function (error) {
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    // Remove the token from session storage.
    LoopbackLoginService.prototype.destroyToken = function () {
        var stored = this.get();
        if (stored) {
            sessionStorage.removeItem(this.TOKEN_KEY);
            sessionStorage.removeItem(this.USER_ID_KEY);
            return true;
        }
        return false;
    };
    // Function that will make an authenticated GET request to the server.  If an Unauthenicated is returned by
    // the server, then it will route to the login page.
    // You need a URL and an array of objects that contains a name and value for example [ { name: 'id', value: 1 }]
    LoopbackLoginService.prototype.makeAuthenticatedHttpGet = function (url, queryParams) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('access_token', this.get().token);
        if (queryParams && queryParams.length > 0) {
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var qp = queryParams_1[_i];
                params.set(qp.name, qp.value.toString());
            }
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            search: params
        });
        return this.http.get(url, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    // Function that will make an authenticated POST request to the server.  If an Unauthenicated is returned by
    // the server, then it will route to the login page.
    // You need a URL and an array of objects that contains a name and value for example [ { name: 'id', value: 1 }]
    LoopbackLoginService.prototype.makeAuthenticatedHttpPost = function (url, formData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('access_token', this.get().token);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        requestOptions.search = params;
        return this.http.post(url, formData, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    LoopbackLoginService.prototype.makeAuthenticatedHttpJsonPost = function (url, data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('access_token', this.get().token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: headers,
            search: params,
            body: JSON.stringify(data)
        });
        return this.http.post(url, {}, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    LoopbackLoginService.prototype.makeAuthenticatedHttpDelete = function (url, queryParams) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('access_token', this.get().token);
        if (queryParams && queryParams.length > 0) {
            for (var _i = 0, queryParams_2 = queryParams; _i < queryParams_2.length; _i++) {
                var qp = queryParams_2[_i];
                params.set(qp.name, qp.value.toString());
            }
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            search: params
        });
        return this.http.delete(url, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    // Retrieve the api token from the session storage and null if not found
    LoopbackLoginService.prototype.get = function () {
        return {
            token: sessionStorage.getItem(this.TOKEN_KEY),
            id: sessionStorage.getItem(this.USER_ID_KEY)
        };
    };
    // Save the token returned from the login response in session storage
    LoopbackLoginService.prototype.save = function (credentials) {
        if (credentials && credentials.id) {
            sessionStorage.setItem(this.TOKEN_KEY, credentials.id);
            sessionStorage.setItem(this.USER_ID_KEY, credentials.userId);
        }
    };
    return LoopbackLoginService;
}());
LoopbackLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoopbackLoginService);

var _a, _b;
//# sourceMappingURL=/Users/scottda/GitRepos/Forkscottdangelo/cognitive-social-crm/client/src/lb-login.service.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200);


/***/ })

},[674]);
//# sourceMappingURL=main.bundle.js.map
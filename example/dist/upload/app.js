(function(e) {
    var n = {};
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            exports: {},
            id: o,
            loaded: false
        };
        e[o].call(a.exports, a, a.exports, t);
        a.loaded = true;
        return a.exports;
    }
    t.m = e;
    t.c = n;
    t.p = "./dist/";
    return t(0);
})({
    0: function(e, n, t) {
        "use strict";
        var o = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(n, t, o) {
                if (t) e(n.prototype, t);
                if (o) e(n, o);
                return n;
            };
        }();
        var a = t(248);
        var r = u(a);
        var i = t(249);
        var l = u(i);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var c = function() {
            function e() {
                s(this, e);
                return {
                    "/upload": [ this.index, this.tabs ],
                    "/upload/:tabs": [ this.index, this.tabs ]
                };
            }
            o(e, [ {
                key: "index",
                value: function e() {
                    this.viewObj = HBY.create(r.default, {
                        el: HBY.config.pageEl,
                        scrollbar: {},
                        currentTab: 0
                    });
                }
            }, {
                key: "tabs",
                value: function e() {
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.viewObj.options.currentTab = n || 0;
                    var t = [ l.default ];
                    HBY.create(t[n], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return e;
        }();
        HBY.router(new c());
    },
    248: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var t = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(n, t, o) {
                if (t) e(n.prototype, t);
                if (o) e(n, o);
                return n;
            };
        }();
        var o = a([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function a(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function r(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function i(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function l(e, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            }
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n;
        }
        var u = function(e) {
            l(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, n);
                var t = {
                    currentTab: 0
                };
                Object.assign(t, e);
                return i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            t(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options;
                    var t = hx(o, n.currentTab == 0 ? "active" : "");
                    return t;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = u;
    },
    249: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var t = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(n, t, o) {
                if (t) e(n.prototype, t);
                if (o) e(n, o);
                return n;
            };
        }();
        var o = a([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n          </div>\n        </div>\n        ' ]);
        function a(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function r(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function i(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function l(e, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            }
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n;
        }
        var u = function(e) {
            l(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, n);
                var t = {
                    components: [ {
                        el: "#upload1",
                        name: "uploadname",
                        multiple: true,
                        onComplete: function e(n, t) {
                            console.warn("上传成功了", t);
                        }
                    }, {
                        el: "#upload2",
                        name: "uploadname2",
                        buttonText: "单文件",
                        multiple: false,
                        onComplete: function e(n, t) {
                            console.warn("上传成功了2", t);
                        }
                    }, {
                        el: "#upload3",
                        name: "uploadname3",
                        readonly: true,
                        value: [ {
                            id: 100124028001,
                            extension: "png",
                            height: 474,
                            mime_type: "image/png",
                            name: "2017-01-10_183019.png",
                            size: 124290,
                            url: "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png",
                            width: 473
                        }, {
                            id: 100124028002,
                            extension: "png",
                            height: 474,
                            mime_type: "image/png",
                            name: "2017-01-10_183018.png",
                            size: 124290,
                            url: "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681068.png",
                            width: 473
                        } ],
                        onComplete: function e(n) {
                            console.warn("上传成功了3", n);
                        }
                    } ]
                };
                Object.assign(t, e);
                return i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            t(n, [ {
                key: "render",
                value: function e() {
                    var n = hx(o);
                    return n;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = u;
    }
});
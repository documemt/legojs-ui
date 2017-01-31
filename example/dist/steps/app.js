(function(e) {
    var n = {};
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        e[i].call(r.exports, r, r.exports, t);
        r.loaded = true;
        return r.exports;
    }
    t.m = e;
    t.c = n;
    t.p = "./dist/";
    return t(0);
})({
    0: function(e, n, t) {
        "use strict";
        var i = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var r = t(240);
        var a = c(r);
        var s = t(241);
        var o = c(s);
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function l(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = function() {
            function e() {
                l(this, e);
                return {
                    "/steps": [ this.index, this.tabs ],
                    "/steps/:tabs": [ this.index, this.tabs ]
                };
            }
            i(e, [ {
                key: "index",
                value: function e() {
                    this.viewObj = HBY.create(a.default, {
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
                    var t = [ o.default ];
                    HBY.create(t[n], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return e;
        }();
        HBY.router(new u());
    },
    240: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var t = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var i = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function r(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function a(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function s(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function o(e, n) {
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
        var c = function(e) {
            o(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                a(this, n);
                var t = {
                    currentTab: 0
                };
                Object.assign(t, e);
                return s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            t(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options;
                    var t = hx(i, n.currentTab == 0 ? "active" : "");
                    return t;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = c;
    },
    241: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var t = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var i = r([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        ' ]);
        function r(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function a(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function s(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function o(e, n) {
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
        var c = function(e) {
            o(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                a(this, n);
                var t = {
                    events: {
                        "click #collapseBtn": function e(n) {
                            Lego.UI.collapse("#collapseExample", function(e, n) {
                                console.warn(e, n);
                            });
                        },
                        "click #collapseBtn2": function e(n) {
                            Lego.UI.collapse({
                                target: "#collapseExample2",
                                restHeight: 20,
                                onChange: function e(n, t) {
                                    console.warn(n, t);
                                }
                            });
                        }
                    },
                    components: [ {
                        el: "#steps1",
                        data: [ {
                            title: "步骤一",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤二",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤三",
                            description: "这是描述内容这是描述内容"
                        } ],
                        onNext: function e(n, t) {
                            console.warn("下一步", t);
                        },
                        onPrevious: function e(n, t) {
                            console.warn("上一步", t);
                        }
                    }, {
                        el: "#steps2",
                        titleWidth: 40,
                        showDescription: false,
                        showIcon: false,
                        showNum: false,
                        data: [ {
                            title: "步骤一",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤二",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤三",
                            description: "这是描述内容这是描述内容"
                        } ],
                        onNext: function e(n, t) {
                            console.warn("下一步", t);
                        },
                        onPrevious: function e(n, t) {
                            console.warn("上一步", t);
                        }
                    }, {
                        el: "#button1",
                        text: "上一步",
                        onClick: function e(n) {
                            var t = Lego.getView("#steps1");
                            if (t) t.previous();
                        }
                    }, {
                        el: "#button2",
                        text: "下一步",
                        onClick: function e(n) {
                            var t = Lego.getView("#steps1");
                            if (t) t.next();
                        }
                    }, {
                        el: "#button3",
                        text: "上一步",
                        onClick: function e(n) {
                            var t = Lego.getView("#steps2");
                            if (t) t.previous();
                        }
                    }, {
                        el: "#button4",
                        text: "下一步",
                        onClick: function e(n) {
                            var t = Lego.getView("#steps2");
                            if (t) t.next();
                        }
                    }, {
                        el: "#reply1",
                        onSubmit: function e(n, t) {
                            console.warn("回复框", n, t);
                        }
                    } ]
                };
                Object.assign(t, e);
                var i = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
                i.$("#content").attr("contenteditable", true);
                return i;
            }
            t(n, [ {
                key: "render",
                value: function e() {
                    var n = hx(i);
                    return n;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = c;
    }
});
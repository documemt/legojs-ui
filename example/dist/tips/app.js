(function(t) {
    var n = {};
    function e(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            exports: {},
            id: o,
            loaded: false
        };
        t[o].call(i.exports, i, i.exports, e);
        i.loaded = true;
        return i.exports;
    }
    e.m = t;
    e.c = n;
    e.p = "./dist/";
    return e(0);
})({
    0: function(t, n, e) {
        "use strict";
        var o = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(n, e, o) {
                if (e) t(n.prototype, e);
                if (o) t(n, o);
                return n;
            };
        }();
        var i = e(242);
        var r = c(i);
        var a = e(243);
        var s = c(a);
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t, n) {
            if (!(t instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = function() {
            function t() {
                l(this, t);
                return {
                    "/tips": [ this.index, this.tabs ],
                    "/tips/:tabs": [ this.index, this.tabs ]
                };
            }
            o(t, [ {
                key: "index",
                value: function t() {
                    this.viewObj = HBY.create(r.default, {
                        el: HBY.config.pageEl,
                        scrollbar: {},
                        currentTab: 0
                    });
                }
            }, {
                key: "tabs",
                value: function t() {
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.viewObj.options.currentTab = n || 0;
                    var e = [ s.default ];
                    HBY.create(e[n], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return t;
        }();
        HBY.router(new u());
    },
    242: function(t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var e = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(n, e, o) {
                if (e) t(n.prototype, e);
                if (o) t(n, o);
                return n;
            };
        }();
        var o = i([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tips/0" class="', '">Tips 提示框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tips/0" class="', '">Tips 提示框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function i(t, n) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function r(t, n) {
            if (!(t instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function a(t, n) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : t;
        }
        function s(t, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            }
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (n) Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n;
        }
        var c = function(t) {
            s(n, t);
            function n() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, n);
                var e = {
                    currentTab: 0
                };
                Object.assign(e, t);
                return a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            }
            e(n, [ {
                key: "render",
                value: function t() {
                    var n = this.options;
                    var e = hx(o, n.currentTab == 0 ? "active" : "");
                    return e;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = c;
    },
    243: function(t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var e = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(n, e, o) {
                if (e) t(n.prototype, e);
                if (o) t(n, o);
                return n;
            };
        }();
        var o = i([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification1">系统提示1</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification2">系统提示2</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification3">系统提示3</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification4">系统提示4</button>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification1">系统提示1</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification2">系统提示2</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification3">系统提示3</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification4">系统提示4</button>\n            </div>\n          </div>\n        </div>\n        ' ]);
        function i(t, n) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function r(t, n) {
            if (!(t instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function a(t, n) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : t;
        }
        function s(t, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            }
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (n) Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n;
        }
        var c = function(t) {
            s(n, t);
            function n() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, n);
                var e = {
                    events: {
                        "click #notification1": function t() {
                            Lego.UI.message("success", "系统提示1");
                        },
                        "click #notification2": function t() {
                            Lego.UI.message("info", "系统提示2");
                        },
                        "click #notification3": function t() {
                            Lego.UI.message("warning", "系统提示3");
                        },
                        "click #notification4": function t() {
                            Lego.UI.message("error", "系统提示4");
                        }
                    }
                };
                Object.assign(e, t);
                var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                Lego.UI.tooltip({
                    el: "#tooltip1",
                    title: "提示1",
                    placement: "top",
                    onHidden: function t() {
                        console.warn("隐藏提示1");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip2",
                    title: "提示2",
                    placement: "bottom",
                    onHidden: function t() {
                        console.warn("隐藏提示2");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip3",
                    title: "提示3",
                    placement: "left",
                    onHidden: function t() {
                        console.warn("隐藏提示3");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip4",
                    title: "提示4",
                    placement: "right",
                    onHidden: function t() {
                        console.warn("隐藏提示4");
                    }
                });
                Lego.UI.popover({
                    el: "#popover1",
                    title: "提示1",
                    content: "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。",
                    placement: "top",
                    onHidden: function t() {
                        console.warn("隐藏提示1");
                    }
                });
                Lego.UI.popover({
                    el: "#popover2",
                    title: "提示2",
                    content: "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。",
                    placement: "bottom",
                    onHidden: function t() {
                        console.warn("隐藏提示2");
                    }
                });
                Lego.UI.popover({
                    el: "#popover3",
                    title: "提示3",
                    content: "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。",
                    placement: "left",
                    onHidden: function t() {
                        console.warn("隐藏提示3");
                    }
                });
                Lego.UI.popover({
                    el: "#popover4",
                    title: "提示4",
                    content: "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。",
                    placement: "right",
                    container: "body",
                    onHidden: function t() {
                        console.warn("隐藏提示4");
                    }
                });
                return o;
            }
            e(n, [ {
                key: "render",
                value: function t() {
                    var n = hx(o);
                    return n;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = c;
    }
});
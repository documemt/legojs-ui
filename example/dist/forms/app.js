(function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = n[r] = {
            exports: {},
            id: r,
            loaded: false
        };
        e[r].call(a.exports, a, a.exports, t);
        a.loaded = true;
        return a.exports;
    }
    t.m = e;
    t.c = n;
    t.p = "./dist/";
    return t(0);
})([ function(e, n, t) {
    "use strict";
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, t, r) {
            if (t) e(n.prototype, t);
            if (r) e(n, r);
            return n;
        };
    }();
    var a = t(8);
    var o = u(a);
    var i = t(9);
    var s = u(i);
    var c = t(10);
    var l = u(c);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function d(e, n) {
        if (!(e instanceof n)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var f = function() {
        function e() {
            d(this, e);
            return {
                "/forms": [ this.index, this.tabs ],
                "/forms/:tabs": [ this.index, this.tabs ]
            };
        }
        r(e, [ {
            key: "index",
            value: function e() {
                this.viewObj = HBY.create(o.default, {
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
                var t = [ s.default, l.default ];
                HBY.create(t[n], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new f());
}, , , , , , , , function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var t = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, t, r) {
            if (t) e(n.prototype, t);
            if (r) e(n, r);
            return n;
        };
    }();
    var r = a([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function a(e, n) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function o(e, n) {
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
    function s(e, n) {
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
        s(n, e);
        function n() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            o(this, n);
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
                var t = hx(r, n.currentTab == 0 ? "active" : "", n.currentTab == 1 ? "active" : "");
                return t;
            }
        } ]);
        return n;
    }(Lego.UI.Baseview);
    n.default = c;
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var t = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, t, r) {
            if (t) e(n.prototype, t);
            if (r) e(n, r);
            return n;
        };
    }();
    var r = o([ '<i class="anticon anticon-setting"></i>' ], [ '<i class="anticon anticon-setting"></i>' ]), a = o([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ]);
    function o(e, n) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function i(e, n) {
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
    function c(e, n) {
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
    var l = function(e) {
        c(n, e);
        function n() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, n);
            var t = [ {
                key: "0",
                value: "不限"
            }, {
                key: "so1",
                value: "选项一"
            }, {
                key: "so2",
                value: "选项二选项二选项二fffdf"
            }, {
                key: "so3",
                value: "选项三"
            } ];
            var a = {
                components: [ {
                    el: "#search1",
                    hasSelect: true,
                    onSearch: function e(n, t) {
                        console.warn("点击了搜索框", t, this);
                    },
                    data: $.extend(true, [], t)
                }, {
                    el: "#search2",
                    placeholder: "输入关键字",
                    onSearch: function e(n, t) {
                        console.warn("点击了搜索框2", t);
                    }
                }, {
                    el: "#select3",
                    placeholder: "请选择",
                    onChange: function e(n, t) {
                        console.warn("点击了选项框1", t);
                    },
                    data: $.extend(true, [], t)
                }, {
                    el: "#select4",
                    placeholder: "请选择",
                    eventName: "click",
                    onChange: function e(n, t) {
                        console.warn("点击了选项框2", t);
                    },
                    value: {
                        key: "so2",
                        value: "选项二选项二选项二"
                    },
                    data: $.extend(true, [], t)
                }, {
                    el: "#select5",
                    placeholder: "请选择",
                    multiple: true,
                    onChange: function e(n, t) {
                        console.warn("点击了选项框3", t);
                    },
                    data: $.extend(true, [], t)
                }, {
                    el: "#select6",
                    placeholder: "请选择",
                    multiple: true,
                    onChange: function e(n, t) {
                        console.warn("点击了选项框4", t);
                    },
                    value: [ {
                        key: "so2",
                        value: "选项二选项二选项二"
                    }, {
                        key: "so3",
                        value: "选项三"
                    } ],
                    data: $.extend(true, [], t)
                }, {
                    el: "#datepicker7",
                    type: "date",
                    name: "datepicker1",
                    onChange: function e(n, t) {
                        console.warn("点击了时间选项框5", t);
                    }
                }, {
                    el: "#datepicker8",
                    type: "range",
                    startName: "datepicker2",
                    endName: "datepicker3",
                    onChange: function e(n, t) {
                        console.warn("点击了时间选项框6", t);
                    }
                }, {
                    el: "#datepicker9",
                    inline: true,
                    onChange: function e(n, t) {
                        console.warn("点击了时间选项框7", t);
                    }
                }, {
                    el: "#input10",
                    placeholder: "这是输入框",
                    onChange: function e(n, t) {
                        console.warn("点击了输入框1", t);
                    },
                    style: {
                        marginBottom: 20
                    }
                }, {
                    el: "#input11",
                    placeholder: "这是输入框",
                    addonBefore: true,
                    addonAfter: true,
                    prefix: "Http://",
                    suffix: hx(r),
                    onChange: function e(n, t) {
                        console.warn("点击了输入框2", t);
                    },
                    style: {
                        marginBottom: 20
                    }
                }, {
                    el: "#input12",
                    type: "textarea",
                    placeholder: "这是文本框",
                    rows: 10,
                    onChange: function e(n, t) {
                        console.warn("点击了文本框2", t);
                    }
                } ]
            };
            Object.assign(a, e);
            return s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
        }
        t(n, [ {
            key: "render",
            value: function e() {
                var n = hx(a);
                return n;
            }
        } ]);
        return n;
    }(Lego.UI.Baseview);
    n.default = l;
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var t = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, t, r) {
            if (t) e(n.prototype, t);
            if (r) e(n, r);
            return n;
        };
    }();
    var r = a([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ]);
    function a(e, n) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function o(e, n) {
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
    function s(e, n) {
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
        s(n, e);
        function n() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            o(this, n);
            var t = [ {
                key: "0",
                value: "不限"
            }, {
                key: "so1",
                value: "选项一"
            }, {
                key: "so2",
                value: "选项二选项二选项二fffdf"
            }, {
                key: "so3",
                value: "选项三"
            } ];
            var r = {
                components: [ {
                    el: "#form1",
                    layout: "inline",
                    data: [ {
                        label: "名称",
                        text: "静态内容"
                    }, {
                        label: "名称1",
                        help: "注意事项",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称"
                        },
                        component: {
                            comName: "inputs",
                            name: "name",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称2"
                        },
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框2", t);
                            }
                        }
                    }, {
                        label: "名称3",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称3"
                        },
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框", t);
                            },
                            data: $.extend(true, [], t)
                        }
                    }, {
                        label: "名称4",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称4"
                        },
                        component: {
                            comName: "selects",
                            name: "time",
                            placeholder: "请选择",
                            onChange: function e(n, t) {
                                console.warn("点击了选项框2", t);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], t)
                        }
                    } ],
                    onSubmit: function e(n, t) {
                        console.warn("点击了提交", t);
                        return false;
                    }
                }, {
                    el: "#form2",
                    data: [ {
                        label: "名称",
                        help: "注意事项",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "name",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框2", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(n, t) {
                                console.warn("点击了搜索框", t);
                            },
                            data: $.extend(true, [], t)
                        }
                    }, {
                        label: "名称3",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "time",
                            placeholder: "请选择",
                            onChange: function e(n, t) {
                                console.warn("点击了选项框2", t);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], t)
                        }
                    } ],
                    onSubmit: function e(n, t) {
                        console.warn("点击了提交2", t);
                        return false;
                    }
                } ]
            };
            Object.assign(r, e);
            return i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r));
        }
        t(n, [ {
            key: "render",
            value: function e() {
                var n = hx(r);
                return n;
            }
        } ]);
        return n;
    }(Lego.UI.Baseview);
    n.default = c;
} ]);
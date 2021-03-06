/**
 * editcom.js v0.3.21
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ], [ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ]);

var _templateObject3 = _taggedTemplateLiteral([ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ], [ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Editcom = function(_Lego$UI$Baseview) {
    _inherits(Editcom, _Lego$UI$Baseview);
    function Editcom() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Editcom);
        var options = {
            events: {
                "click i.edit": "onClick",
                "click i.cancel": "onClose"
            },
            text: "",
            html: "",
            template: "",
            width: "auto",
            clicked: false,
            readonly: false,
            data: [],
            icon: "edit",
            size: "",
            onEdit: function onEdit() {},
            onCancel: function onCancel() {},
            onFinish: function onFinish() {},
            components: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Editcom.__proto__ || Object.getPrototypeOf(Editcom)).call(this, options));
    }
    _createClass(Editcom, [ {
        key: "renderBefore",
        value: function renderBefore() {
            var options = this.options;
            if (options.components.length) {
                options.components.forEach(function(item) {
                    item.key = item.key + options.vid;
                    item.el = "#" + item.key;
                    item.size = options.size;
                    if (options.width) {
                        item.style = item.style || {};
                        item.style.width = options.width;
                    }
                    item.value = options.value || options.text;
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.size, options.clicked ? options.template ? val(options.template) : options.components.map(function(item) {
                return hx("<" + item.comName + " id=" + item.key + "></" + item.comName + ">");
            }) : val(options.html || options.text), !options.readonly && !options.clicked ? hx(_templateObject2, val(options.icon)) : "", !options.readonly && options.clicked ? hx(_templateObject3) : "");
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            this.options.clicked = true;
            if (typeof this.options.onEdit == "function") this.options.onEdit(this, event);
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            this.close();
            if (typeof this.options.onCancel == "function") this.options.onCancel(this, event);
        }
    }, {
        key: "close",
        value: function close() {
            this.options.clicked = false;
            if (typeof this.options.onFinish == "function") this.options.onFinish(this);
        }
    } ]);
    return Editcom;
}(Lego.UI.Baseview);

Lego.components("editcom", Editcom);

module.exports = Editcom;

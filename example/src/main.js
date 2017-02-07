// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import Lego from 'lego-core';
import lo from 'lodash';
import "../ux/util/util";
// import { Baseview } from '../../dist/common';
import '../../dist/legoui';
import '../../dist/css/legoui.css';
// import { Baseview } from 'lego-ui/dist/Common';
// import 'lego-ui/dist/css/legoui.css';
import showdown from 'showdown';
window.markdown = new showdown.Converter();
markdown.setFlavor('github');

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css';
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
window.hljs = hljs;
window._ = lo;

// 设置全局参数，初始化应用
Lego.init({
    alias: 'HBY', //框架实例别名
    version:  _.now(), //版本号'2016' ||
    pageEl: '#page-container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //系统根目录
    serviceUri: '',		//后台根地址
    faceIconUri: '/example/dist/img/face_icons/f0', //表情图标地址
    downloadUri: window.location.protocol + '//dn-openwinbons.qbox.me/', //七牛文件下载地址
    saveUri: '/upload/complete',
    avatarUri: 'http://192.168.2.165:8080/upload', //头像地址
});
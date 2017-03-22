/**
 * 穿梭框
 * ronghui Yu
 * 2017/1/10
 */
import './asset/index.scss';
import Listgroup from '../listgroup/index';
import Tree from '../tree/index';
import Search from '../search/index';

class Transfer extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click h5 > button': 'showSearch'
            },
            // type: 'list',   //类型tree
            titles: [], //标题
            value: [], //设置值
            data: [],
            width: 450, //宽度
            height: 400, //高度
            treeSetting: {},
            keyNames: ['id', 'name', 'type'],
            scrollbar: {},
            showSearch: false, //是否显示搜索框
            searchPlaceholder: '请输入搜索内容', //搜索框
            notFoundContent: '列表为空', //列表为空时显示的内容
            onChange() {}, //更改值时触发的事件
            components: []
        };
        Object.assign(options, opts);
        function loopItem(data){
            data.map(item => {
                if(item.checked){
                    options.value.push({
                        key: item[options.keyNames[0]],
                        value: item[options.keyNames[1]],
                        type: item[options.keyNames[2]]
                    });
                    if(item.children){
                        loopItem(item.children);
                    }
                }
            });
        }
        loopItem(options.data);
        options.components.push({
            el: '#transfer_' + options.vid + '_tree',
            setting: $.extend(true, {
                check: {
                    enable: true,
                    chkboxType: { "Y": "ps", "N": "ps" }
                }
            }, options.treeSetting || {}),
            onChecked(self, result) {
                const parentView = this.context;
                const listView = Lego.getView('#transfer_' + options.vid + '_list');
                if(listView){
                    listView.options.data = result;
                    listView.refresh();
                }
                if (typeof options.onChange === 'function') options.onChange(parentView, result);
            },
            dataSource: options.dataSource,
            data: options.data
        }, {
            el: '#transfer_' + options.vid + '_list',
            removeAble: true,
            onClose(self, result) {
                const parentView = this.context;
                const treeView = $.fn.zTree.getZTreeObj('transfer_' + options.vid + '_tree');
                if(treeView){
                    const treeNode = treeView.getNodeByParam('id', result, null);
                    treeView.checkNode(treeNode, !treeNode.checked, null, true);
                }
            },
            data: options.value
        });
        if(options.showSearch){
            options.components.push({
                el: '#transfer_' + options.vid + '_search',
                style: {
                    display: 'none'
                },
                onSearch(self, result) {
                    console.warn('点击了搜索框2', result);
                }
            });
        }
        super(options);
    }
    render() {
        const options = this.options || {},
            theId = 'transfer_' + options.vid;
        const vDom = hx `
        <div class="row transfer">
            <div class="col-sm-6">
                <div class="transfer-col">
                    <h5>
                        ${options.showSearch ? hx`<button class="btn btn-link float-right">搜索</button>` : ''}
                        <span>${val(options.titles[0])}</span>
                    </h5>
                    ${options.showSearch ? hx`<search id="${theId + '_search'}"></search>` : ''}
                    <div class="transfer-col-content">
                        <div class="scrollbar">
                            <tree id="${theId + '_tree'}"></tree>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="transfer-col">
                    <h5><span>${val(options.titles[1])}</span></h5>
                    <div class="transfer-col-content">
                        <div class="scrollbar">
                            <listgroup id="${theId + '_list'}"></listgroup>
                        </div>
                    </div>
                </div>
            </div>
            <i class="anticon anticon-double-right"></i>
            <i class="anticon anticon-double-left"></i>
        </div>
        `;
        return vDom;
    }
    showSearch(event){
        const target = $(event.currentTarget);
        this.$el.find('.lego-search').toggle(0, function(){
            target.text(target.text() == '取消' ? '搜索' : '取消');
        });
    }
    renderAfter() {
        const options = this.options || {};
        this.$el.css({
            width: options.width,
            height: options.height
        });
    }
    getValue(){
        const listView = Lego.getView('#transfer_' + this.options.vid + '_list');
        if(listView){
            return listView.options.data;
        }
        return null;
    }
}
Lego.components('transfer', Transfer);
export default Transfer;

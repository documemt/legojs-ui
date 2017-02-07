// import Tables from '../../../../dist/tables';

class TableView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        function getData(currentPage = 1){
            const theData = [];
            for(let i = (currentPage - 1) * 20; i < currentPage * 20; i++){
                theData.push({
                    key: i,
                    name: '胡彦斌' + i,
                    age: 32 + i,
                    // disabled: true,
                    address: '西湖区湖底公园1号',
                    // render(value, row, col){
                    // }
                });
            }
            return theData;
        }
        const options = {
            components: [{
                el: '#theTable',
                className: 'table-striped',
                rowSelection: {
                    type: 'checkbox'
                },
                pagination: {
                    total: 300,
                    pageRang: 5,
                    pageSize: 20,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    onChange(self, num){
                        const theView = Lego.getView('#theTable');
                        theView.options.data = getData(num);
                        theView.refresh();
                        // Lego.getView('#table1').fetch();
                    }
                },
                // bordered: true,
                showHeader: true, //是否显示表头
                colSetting(){
                    console.warn('点击了列设置');
                },
                // showFooter: true, //是否显示表尾
                title(){
                    return '表格标题';
                },
                // footer(){
                //     return '表格尾部';
                // },
                style: {
                    height: '100%'
                },
                data: getData(),
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    width: '200px',
                    filter(col){
                        console.warn('点击了筛选', col);
                    },
                    // isHide: true
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    width: '200px',
                    onCellClick(row, col){
                        console.warn(row, col);
                    },
                    filter(col){
                        console.warn('点击了筛选', col);
                    },
                    sorter(col){
                        console.warn('点击了排序', col);
                    }
                }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                    width: '200px',
                }],
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" style="height:100%">
            <tables id="theTable"></tables>
        </div>
        `;
        return vDom;
    }
}
export default TableView;

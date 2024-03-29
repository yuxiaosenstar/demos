import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-table/src/bootstrap-table.scss';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.css';
import 'bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns';
import 'bootstrap-table/dist/extensions/auto-refresh/bootstrap-table-auto-refresh.js';
import 'font-awesome/css/font-awesome.css';
// @ts-ignore
import htmlStr from './1.html';
import {aaaa, bbbb} from './tree-shaking';
aaaa();

console.log(htmlStr);

// @ts-ignore
$('#table').bootstrapTable({
    height: 300,
    columns: [
        {
            radio: true
        },
        {
            field: 'id',
            title: 'ID',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },{
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'opt',
            title: '操作',
            align: 'center',
            formatter: function () {
                return '<span class="fa fa-plus icon"></span> ' + 
                '<span class="fa fa-minus icon" style="color: red"></span>'
            },
            events: {
                'click .icon': function (_e, _value, row) {
                    alert(JSON.stringify(row));
                }
            }
        }
    ],
    clickToSelect: true,
    fixedColumns: true,
    fixedNumber: 1,
    fixedRightNumber: 1,
    url: '/api/table-data/',
    autoRefresh: true,
    autoRefreshStatus: true,
    autoRefreshSilent: false,
    autoRefreshInterval: 3,
    icons: {
        autoRefresh: 'fa fa-refresh'
    }
});

let btn = document.getElementById('reload_btn');
btn.onclick = () => {
    $('#table').bootstrapTable('refreshOptions', {});
}
// setTimeout(function () {
//     $('#table').bootstrapTable('load', [
//         {
//             id: 1,
//             name: 'ycc' 
//         },
//         {
//             id: 2,
//             name: 'yu'
//         },
//         {
//             id: 2,
//             name: 'yu'
//         },
//         {
//             id: 2,
//             name: 'yu'
//         },
//         {
//             id: 2,
//             name: 'yu'
//         },
//     ])
// }, 1000)
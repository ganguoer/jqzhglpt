<template>
  <div>
    <div class="lf emergencyEvent w67 ml mt12" id="emergencyTable">
      <title-h3 :titlemsg="titlemsg"></title-h3>
      <div class="inner-wrap">
        <div class="argument-warp">
            <div class="emergencyTable fl">
              <GeminiScrollbar class="content">
                <div class="clearfix scrolltable">
                  <!--列表-->
                  <el-row>
                    <el-table
                      :data="tableData"
                      v-loading.body="loading"
                      border
                      @selection-change="selectionChange"
                      style="width: 100%;">
                      <el-table-column
                        type="selection"
                        style="width: 5.1%">
                      </el-table-column>
                      <el-table-column
                        prop="birth"
                        label="事件"
                        style="width: 12.79%">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="时间"
                        style="width: 20.74%">
                      </el-table-column>
                      <el-table-column
                        prop="province"
                        label="地点"
                        style="width: 20.79%">
                      </el-table-column>
                      <el-table-column
                        prop="city"
                        label="是否启动预案"
                        style="width: 21.91%">
                      </el-table-column>
                      <el-table-column
                        prop="measures"
                        label="措施">
                      </el-table-column>
                    </el-table>
                  </el-row>
                </div>
              </GeminiScrollbar>
            </div>
            <div class="emergencyMap fl">
                  wode map
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  //引入jQuery
  import '../../assets/js/jquery-1.9.1.min.js'
  import title from '../title'
  export default{
    name:'scenicStatistics',
    data(){
      return{
        titlemsg:'应急事件选择',
        tableData: [
        {
          birth: '走失',
          name: '2018-04-10',
          province: '泸沽湖景区',
          city: '是',
          measures:'联系管理人员'
        },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          },
          {
            birth: '走失',
            name: '2018-04-10',
            province: '泸沽湖景区',
            city: '是',
            measures:'联系管理人员'
          }
        ],
        //显示加载中样式
        loading:false,
        //搜索表单
        searchForm: {
          id: '',
          name: '',
          state: ''
        },
        //多选值
        multipleSelection: [],
        //当前页
        currentPage:3,
        //分页大小
        pageSize:100,
        //总记录数
        total:800,
        //删除的弹出框
        deleteVisible:false,
        //编辑界面是否显示
        editFormVisible: false,
        editLoading: false,
        editFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        //编辑界面数据
        editForm: {
          id: 0,
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          address: ''
        }
      }
    },

    components:{
      'title-h3':title
    }
  }

</script>

<style>
  .emergencyEvent{width: 40%;height:4.14rem;}
  .emergencyEvent .inner-wrap{height: 3.64rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .08rem;overflow:hidden}
  .emergencyEvent .argument-warp{width: 98.4%;background: #173881;height: 3.54rem;margin: 0 auto;border-radius: 4px;}
  .w67{width:65.7%}

  .emergencyTable{width: 49%;height: 3rem;border: 1px solid #3b72ee;border-radius: 4px;margin-left: 1%;margin-top:2%;}
  .emergencyMap{width: 48%;height: 100%;margin-left: 1%;}
/*表格样式*/
  #emergencyTable .el-table th, .el-table tr {
    background-color: #0e3883!important;
    border: 1px solid #1b49a2;
    text-align: center;
    border-bottom:none;
  }
  #emergencyTable .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #002c6a;
  }
  #emergencyTable .el-table--border, .el-table--group {
    border: 1px solid #3b72ee;
  }
  #emergencyTable .el-table thead {
    font-size: 0.12rem;
    color: #fff;
    font-weight: 500;
    background: blue!important;
    text-align: center;
    border-bottom: none;
  }
  #emergencyTable table th {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    text-align: center;
    border:none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  #emergencyTable .el-table__body, .el-table__footer, .el-table__header {
    border-bottom: none;
  }
  #emergencyTable .el-table th, .el-table tr{background: none;}
  #emergencyTable .el-table td, .el-table th {
    padding:  0;
  }
  #emergencyTable .el-table {
    font-size:  0.12rem;
    color: #81b2ff;
    text-align: center;
  }
  #emergencyTable .el-checkbox__inner {
    border: 1px solid #1b49a2;
    border-radius: 2px;
    width:  0.12rem;
    height:  0.12rem;
    background-color: #0e3883;
  }
  #emergencyTable .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #1b49a2;
  }
  #emergencyTable .el-table--border::after, .el-table--group::after {  width:0}
  #emergencyTable .el-table::before {  height: 0px;  }
  #emergencyTable .el-table td, .el-table th.is-leaf{border-bottom:none}
  #emergencyTable table td{border-left:none;border-top:1px solid #1b49a2;float: none;}
  .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{border-right:none}
  .el-table__body, .el-table__footer, .el-table__header{
    border-collapse:collapse;
  }

  #emergencyTable a{color: #81b2ff;padding: 0.03rem 0.6rem;display: inline-block;}
</style>


<template>
  <div class="content-wrap synergeticOffice mt22" id="tableView">
    <div class="infoRelease mtt">
      <title-h3 :titlemsg="titlemsg"></title-h3>
      <div class="infoRelease-wrap">
          <div class="infoRelease-inner">
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
                    label="媒体设备类型"
                    style="width: 12.79%">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="位置"
                    style="width: 20.74%">
                  </el-table-column>
                  <el-table-column
                    prop="province"
                    label="发布内容类型"
                    style="width: 20.79%">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="内容地址"
                    style="width: 21.91%">
                  </el-table-column>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.birth }}</p>
                        <p>住址: {{ scope.row.province }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">
                              <span class="icon-eyes"></span> 预览
                             </el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
            </div>
          </GeminiScrollbar>
          </div>
      </div>
        <!--列表底部工具条和分页符-->
      <div class="footpage clearfix">
          <el-row class="mypage" style="margin-top:0.3rem;background:#002c6a;border-radius: 4px;font-size: 0.12rem;color: #fff;" type="flex" justify="end">
            <el-col :span="18" >
              <el-pagination
                style="float: right;margin-right: 0.2rem;"
                @size-change="pageSizeChange"
                @current-change="currentPageChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </el-col>
          </el-row>
        </div>
    </div>
  </div>
</template>

<script>
  //引入jQuery
  import '../../assets/js/jquery-1.9.1.min.js'
import title from '../title';
export default{
    name:'infoRelease',
    data(){
        return{
          titlemsg:'信息发布',
          tableData: [{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '景区公交',
            province: '文字信息',
            city: 'http://letter.baidu.com'
          }, {
            birth: '电子屏',
            name: '服务中心',
            province: '多彩图片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          },{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '景区公交',
            province: '文字信息',
            city: 'http://letter.baidu.com'
          }, {
            birth: '电子屏',
            name: '服务中心',
            province: '多彩图片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          },{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '景区公交',
            province: '文字信息',
            city: 'http://letter.baidu.com'
          }, {
            birth: '电子屏',
            name: '服务中心',
            province: '多彩图片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          },{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '景区公交',
            province: '文字信息',
            city: 'http://letter.baidu.com'
          }, {
            birth: '电子屏',
            name: '服务中心',
            province: '多彩图片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          },{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '景区公交',
            province: '文字信息',
            city: 'http://letter.baidu.com'
          }, {
            birth: '电子屏',
            name: '服务中心',
            province: '多彩图片',
            city: 'http://image.baidu.com'
          }, {
            birth: '广播',
            name: '环同线路',
            province: '自拍录像',
            city: 'http://image.baidu.com'
          },{
            birth: '电子屏',
            name: '游客中心',
            province: '影视碟片',
            city: 'http://image.baidu.com'
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
    mounted(){
   //    this.change();
    },
   methods:{
     //表格重新加载数据
     loadingData:function() {
       var _self = this;
       _self.loading = true;
       setTimeout(function(){
         console.info("加载数据成功");
         _self.loading = false;
       },300);
     },
     //表格编辑事件
     editClick:function(row) {
       this.editFormVisible = true;
       this.editForm = Object.assign({}, row);
     },
     //表格删除事件
     deleteClick:function(row) {
       var _self = this;
       this.$confirm('确认删除' + row.name +'吗?', '提示', {
         type: 'warning'
       }).then(function(){
         _self.$message({
           message: row.name + '删除成功',
           type: 'success'
         });
         _self.loadingData();//重新加载数据
       }).catch(function(e){
         if(e != "cancel")
           console.log("出现错误：" + e);
       });
     },
     //新建事件
     addClick:function() {
       var _self = this;
       this.editFormVisible = true;
       //_self.loadingData();//重新加载数据
     },
     //表格查询事件
     searchClick:function() {
       alert("搜索");
       var _self = this;
       _self.loadingData();//重新加载数据
     },
     //表格勾选事件
     selectionChange:function(val) {
       for(var i=0;i<val.length;i++) {
         var row = val[i];
       }
       this.multipleSelection = val;
       console.info(val);
     },
     //删除所选，批量删除
     removeSelection:function() {
       var _self = this;
       var multipleSelection = this.multipleSelection;
       if(multipleSelection.length < 1) {
         _self.$message({
           message: '请至少选中一条记录',
           type: 'error'
         });
         return;
       }
       var ids = "";
       for(var i=0;i<multipleSelection.length;i++) {
         var row = multipleSelection[i];
         ids += row.name + ","
       }
       this.$confirm('确认删除' + ids +'吗?', '提示', {
         type: 'warning'
       }).then(function(){
         _self.$message({
           message: ids + '删除成功',
           type: 'success'
         });
         _self.loadingData();//重新加载数据
       }).catch(function(e){
         if(e != "cancel")
           console.log("出现错误：" + e);
       });
     },
     //分页大小修改事件
     pageSizeChange:function(val) {
       console.log('每页 ' + val +' 条');
       this.pageSize = val;
       var _self = this;
       _self.loadingData();//重新加载数据
     },
     //当前页修改事件
     currentPageChange:function(val) {
       this.currentPage = val;
       console.log('当前页: ' + val);
       var _self = this;
       _self.loadingData();//重新加载数据
     },
     //保存点击事件
     editSubmit:function(){
       console.info(this.editForm);
     }
   },
   components:{
        'title-h3':title
   }
}

</script>

<style >
#tableView .infoRelease{height: 7.76rem;width: 99%; margin: 0 auto;}
#tableView .infoRelease-wrap{height: 7.1rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: 0.1rem}
#tableView .infoRelease-inner{height: 6.98rem; margin: 0 0.08rem; }
.mtt{margin-top:0.12rem;}
#tableView span.icon-eyes{font-size: 0.14rem;position: absolute;left:1.15rem;top: 0.09rem;}
#tableView .el-tag {background: none;border: 0;color: #81b2ff;padding: 0.03rem 0.6rem;}
.el-popover{
  position: absolute;
  background: #3b72ee!important;
  min-width: 150px;
  border: 0!important;
  padding: 12px;
  z-index: 2000;
  color: #fff!important;
  line-height: 1.4;
  text-align: justify;
  font-size: 0.12rem;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
#tableView .el-table th, .el-table tr {
  background-color: #0e3883!important;
  border: 1px solid #1b49a2;
  text-align: center;
  border-bottom:none;
}
#tableView .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: #002c6a;
}
#tableView .el-table--border, .el-table--group {
  border: 1px solid #3b72ee;
}
  #tableView .el-table thead {
    font-size: 0.12rem;
    color: #fff;
    font-weight: 500;
    text-align: center;
    border-bottom: none;
  }
#tableView table th {
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.12rem;
  text-align: center;
  border:none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#tableView .el-table__body, .el-table__footer, .el-table__header {
  border-bottom: none;
}
#tableView .el-table th, .el-table tr{background: none;}
  #tableView .el-table td, .el-table th {
    padding:  0;
  }
  #tableView .el-table {
    font-size:  0.12rem;
    color: #81b2ff;
    text-align: center;
  }
  #tableView .el-checkbox__inner {
    border: 1px solid #1b49a2;
    border-radius: 2px;
    width:  0.12rem;
    height:  0.12rem;
    background-color: #0e3883;
  }
  #tableView .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
     border-right: 1px solid #1b49a2;
   }
 #tableView .el-table--border::after, .el-table--group::after {  width:0}
 #tableView .el-table::before {  height: 0px;  }
#tableView .el-table td, .el-table th.is-leaf{border-bottom:none}
#tableView table td{border-left:none;border-top:1px solid #1b49a2;float: none;}
.el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{border-right:none}
.el-table__body, .el-table__footer, .el-table__header{
  border-collapse:collapse;
}
/*#tableView .el-table__row:hover{background: red}*/
#tableView a{color: #81b2ff;padding: 0.03rem 0.6rem;display: inline-block;}

/*分页样式*/
  .mypage .el-pagination{color: #81b2ff}
  .mypage .el-pagination__total{color: #fff;}
  .mypage .el-input__inner{background: #002c6a;border: 1px solid #3b72ee;color: #fff;}
  .mypage .el-pagination .btn-prev,.mypage .el-pagination .btn-next {
    background: center center no-repeat #002c6a;background-size: 16px;cursor: pointer;margin: 0; color: #81b2ff;
  }
  .mypage .el-pager li{background: none;}
  .mypage .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {line-height: 28px;color: #81b2ff;
  }
  .mypage .el-pagination__jump{color: #81b2ff}
  .mypage .el-pager li.active {color: #ffd452;cursor: default;}
  .mypage .el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    font-weight: 400;
  }
</style>


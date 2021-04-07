<template>
  <div class="controlTemplate">
    <el-row :gutter="15">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>文件数</span>
            <i class="el-icon-files" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{basicinfo.data.all.filecount}}</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>文件大小</span>
            <i class="el-icon-folder-opened" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{(basicinfo.data.all.filesize/1048576).toFixed(2)}}MB</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>文件数(30天)</span>
            <i class="el-icon-files" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{basicinfo.data.all_30.filecount}}</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>文件大小(30天)</span>
            <i class="el-icon-folder-opened" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{(basicinfo.data.all.filesize/1048576).toFixed(2)}}MB</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>磁盘用量</span>
            <i class="el-icon-receiving" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{(basicinfo.data.disk.size/1073741824).toFixed(2)}}GB</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>磁盘剩余容量</span>
            <i class="el-icon-pie-chart" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{(basicinfo.data.disk.remainsize/1073741824).toFixed(2)}}GB</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>索引节点使用数(Linux)</span>
            <i class="el-icon-link" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{basicinfo.data.index.num}}</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>剩余索引节点(Linux)</span>
            <i class="el-icon-connection" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div>{{basicinfo.data.index.remainnum}}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>快捷方式</span>
            <i class="el-icon-s-tools" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div class="quickbutton">
            <el-button v-for="item in quickbutton">
              <el-image src="item.imgsrc"></el-image>
              <div>item.text</div>
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>版本信息</span>
            <i class="el-icon-info" style="float: right;margin-top: 2px;color: deepskyblue"></i>
          </div>
          <div class="versioninfo">
            <el-table :data="tableData" border style="width: 100%" :show-header=false >
              <el-table-column prop="title">
              </el-table-column>
              <el-table-column prop="value">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <ve-histogram :data="chartData"></ve-histogram>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Control',
    data(){
      return{
        basicinfo:{
          data:{
            all: {
              "fileCount": 0,
              "totalSize": 0
            },
            all_30:{
              "fileCount": 0,
              "totalSize": 0
            },
            disk:{
              "size":0,
              "remainsize":0
            },
            index:{
              "num":0,
              "remainnum":0
            }
          }
        },
        tableData:[{
          title:"当前版本",
          value:"v1.3.14"
        },{
          title: "发布日期",
          value: "2019年10月14日"
        },{
          title: "操作系统",
          value: "Linux"
        },{
          title: "系统架构",
          value: "amd64"
        }],
        chartData:{
          columns: ['日期','文件大小', '文件数量'],
          rows: [
            { '日期': '1/1', '文件大小': 1393, '文件数量': 1093 },
            { '日期': '1/2', '文件大小': 3530, '文件数量': 3230 },
            { '日期': '1/3', '文件大小': 2923, '文件数量': 2623 },
            { '日期': '1/4', '文件大小': 1723, '文件数量': 1423 },
            { '日期': '1/5', '文件大小': 3792, '文件数量': 3492 },
            { '日期': '1/6', '文件大小': 4593, '文件数量': 4293 }
          ]
        }
      }
    },
    methods:{
        GetBasicInfo(){
          console.log('run')
          this.$http.get(this.GLOBAL.serverurl+'api/basicinfo').then(
            function (res) {
              console.log(res)
              if (res.data.data.state=="success"){
                this.basicinfo = res.data
              }else {
                this.$message.error("服务器请求数据失败")
                this.$router.push({path:"home"})
              }
            },
            function (res) {
              this.$message.error("服务器请求数据失败")
              this.$router.push({path:"home"})
            }
          )
        }
    },
    created () {
      console.log('1')
      this.GetBasicInfo()
    }
  }
</script>

<style scoped>
  .controlTemplate{
    width: 98%;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

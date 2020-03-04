<template>
    <div class="body">
      <el-container id="Home" class="home-container">
        <el-aside class="aside" :width="Aside.isCollapse?'50px':'200px'">
          <el-menu class="el-menu-vertical-demo" @select="handleMenuSelect" :collapse="Aside.isCollapse">
            <el-menu-item index="control">
              <i class="el-icon-menu"></i>
              <span slot="title">控制面板</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">文件管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="fileupload">文件上传</el-menu-item>
                <el-menu-item index="filelist">文件列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-cpu"></i>
                <span slot="title">集群管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="grouplist">集群列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span slot="title">系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="accountset">账户设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header class="header">
            <div class="left">
              <el-button-group>
                <el-tooltip class="item" effect="dark" content="展开菜单" placement="bottom">
                  <el-button icon="el-icon-s-fold" plain @click="Collapse"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击刷新" placement="bottom">
                  <el-button icon="el-icon-refresh" plain></el-button>
                </el-tooltip>
              </el-button-group>
            </div>
            <div class="right">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <el-dropdown>
						<span class="el-dropdown-link">
							1131482051@qq.com<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                  <el-dropdown-item>捐赠作者</el-dropdown-item>
                  <el-dropdown-item>帮助中心</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-header>
          <el-main class="main">
            <el-tabs v-model="Tabs.editableTabsValue" type="card" closable @tab-click="handleTabSelect" @tab-remove="handleTabRemove">
              <el-tab-pane
                :key="item.name"
                v-for="(item, index) in Tabs.editableTabs"
                :name="item.name" class="Tab"
              >
                <span slot="label"><i :class="item.icon"></i> {{item.title}}</span>
                <router-view></router-view>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'Home.vue',
    data(){
      return{
        asidewidth:"50px",
        Tabs:{
          ontabs:['control'],
          editableTabsValue: 'control',
          editableTabs: [{
            title: '控制面板',
            name: 'control',
            icon:'el-icon-s-platform'
          }]
        },
        Aside:{
          isCollapse:false
        },
        ControlData:{
          VersionInfo:[{
            title:"当前版本",
            value:"v1.3.4"
          },{
            title:"发布日期",
            value:"2019年10月11日"
          },{
            title:"操作系统",
            value:"Linux"
          },{
            title:"系统架构",
            value:"amd64"
          }]
        }
      }
    },
    methods:{
        Collapse(){
          this.Aside.isCollapse=!this.Aside.isCollapse
        },
        handleMenuSelect(index,indexpath){
          console.log(this.Tabs.ontabs)
          var flag = false
          for (var a in this.Tabs.ontabs){
            if (this.Tabs.ontabs[a] == index){
              flag = true
            }
          }
          if (flag){
            console.log('exist')
            this.Tabs.editableTabsValue = index
            this.$router.push({path:index})
          }else{
            switch (index){
              case "fileupload":
                this.Tabs.editableTabs.push({
                  title: '文件上传',
                  name: index,
                  icon: 'el-icon-upload'
                });
                this.Tabs.editableTabsValue = index;
                this.Tabs.ontabs.push(index)
                this.$router.push({path:index})
                break;
              case "filelist":
                this.Tabs.editableTabs.push({
                  title: '文件列表',
                  name: index,
                  icon: 'el-icon-folder-opened'
                });
                this.Tabs.editableTabsValue = index;
                this.Tabs.ontabs.push(index)
                this.$router.push({path:index})
                break;
              case "grouplist":
                this.Tabs.editableTabs.push({
                  title: '集群列表',
                  name: index,
                  icon: 'el-icon-connection'
                });
                this.Tabs.editableTabsValue = index;
                this.Tabs.ontabs.push(index)
                this.$router.push({path:index})
                break;
              case "accountset":
                this.Tabs.editableTabs.push({
                  title: '账户设置',
                  name: index,
                  icon: 'el-icon-s-home'
                });
                this.Tabs.editableTabsValue = index;
                this.Tabs.ontabs.push(index)
                this.$router.push({path:index})
                break;
              default:
                console.log('fail')
            }
          }
        },
        handleTabSelect(res){
          this.$router.push({path:res.name})
        },
        handleTabRemove(res){
          if (res=='control'){
            console.log('no')
            return
          }
          for (var a=0;a<this.Tabs.ontabs.length;a++){
            if (this.Tabs.ontabs[a]==res && a!=0){
              console.log(this.Tabs.ontabs.splice(a,1))
              this.Tabs.editableTabs.splice(a,1)
              break;
            }
          }
          if (a==this.Tabs.ontabs.length){
            this.Tabs.editableTabsValue=this.Tabs.ontabs[a-1]
            this.$router.push({path:this.Tabs.editableTabsValue})
          }else{
            this.Tabs.editableTabsValue=this.Tabs.ontabs[a]
            this.$router.push({path:this.Tabs.editableTabsValue})
          }
        }
    }
  }
</script>

<style scoped>
 .body{
    height: 100%;
    overflow: hidden;
  }
  .Tab{
    height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .aside{
    overflow: hidden;
  }
  .main{
    overflow: hidden;
  }
  .home-container{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .right{
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: space-evenly;
    align-items: center;
  }
  .el-dropdown-link{
    width: 100px;
    text-align: center;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

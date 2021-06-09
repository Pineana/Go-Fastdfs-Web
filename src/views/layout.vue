<template>
  <div id = "layout">
    <el-container>
      <el-aside width="250px">
        <div class="tilte">
          <img alt class="logoimg" src="../assets/logo.png" />
          <h2 class="tit-text">Go-Fast-DFS管理</h2>
        </div>
        <div class="menu">
          <el-menu :default-active="activePage" class="el-menu" @select="selectMenu">
            <el-menu-item index="1">
              <template #title>
                <i class="el-icon-data-analysis" ></i>
                <span>基础面板</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-folder-opened" ></i>
                <span>文件管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <template #title>
                    <i class="el-icon-s-operation" ></i>
                    <span>文件列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <template #title>
                    <i class="el-icon-upload" ></i>
                    <span>文件上传</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template #title>
                <i class="el-icon-s-grid"></i>
                <span>集群管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <template #title>
                    <i class="el-icon-menu" ></i>
                    <span>集群列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <template #title>
                    <i class="el-icon-s-platform" ></i>
                    <span>修改集群</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <template #title>
                <i class="el-icon-s-tools"></i>
                <span>系统设置</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5">
              <template #title>
                <i class="el-icon-document"></i>
                <span>账户设置</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header height="60px">
          <div style="display: flex;flex-direction: row;justify-content: flex-end;">
            <el-avatar style="margin-right: 20px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-link type="primary" @click="logout">退出</el-link>
          </div>
        </el-header>
        <el-main>
          <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" @tab-click="clickTab">
            <el-tab-pane v-bind:closable="item.name!='1'"
                :key="item.name"
                v-for="item in editableTabs"
                :label="item.title"
                :name="item.name"
            >
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import router from "@/router";
export default {
  name: "layout",
  components: {
  },
  data(){
    return {
      activeName:"one",
      activePage:"1",
      editableTabsValue: '1',
      exitTab : new Set(['1']),
      editableTabs: [{
        title: '基础面板',
        name: '1',
        content: '基础面板信息'
      }],
      tabIndex: 1
    }
  },
  methods:{
    logout(){
      router.push({name:"login"})
    },
    selectMenu(index){
      if (this.exitTab.has(index)) {
        this.editableTabsValue = index
        return
      }else{
        this.exitTab.add(index)
        this.editableTabsValue = index
      }
      switch (index){
        case "1":
          this.editableTabs.push({
            title: '基础面板',
            name: index,
            content: index})
          break;
        case "2-1":
          this.editableTabs.push({
            title: '文件列表',
            name: index,
            content: index})
          break;
        case "2-2":
          this.editableTabs.push({
            title: '文件上传',
            name: index,
            content: index})
          break;
        case "3-1":
          this.editableTabs.push({
            title: '集群列表',
            name: index,
            content: index})
          break;
        case "3-2":
          this.editableTabs.push({
            title: '修改集群',
            name: index,
            content: index})
          break;
        case "4":
          this.editableTabs.push({
            title: '系统设置',
            name: index,
            content: index})
          break;
        case "5":
          this.editableTabs.push({
            title: '账户设置',
            name: index,
            content: index})
          break;
      }
    },
    removeTab(targetName){
      this.editableTabs.forEach((tab,index)=>{
        if (tab.name == targetName){
            this.editableTabs.splice(index,1)
            this.exitTab.delete(tab.content)
            this.editableTabsValue = this.editableTabs[index-1].name
            this.activePage = this.editableTabs[index-1].name
        }
      })
    },
    clickTab(tab){
        this.activePage = tab.props.name
    }
  }
}
</script>

<style>
#layout{
  width: 100%;
  height: 100%;
}
.logoimg {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 50%;
  padding: 3px;
}
.tit-text{
  display: inline-block;
  color: #000;
  font-weight: 600;
  font-size: 20px;
  vertical-align: middle;
}
.aside{
  height: 100%;
}
</style>
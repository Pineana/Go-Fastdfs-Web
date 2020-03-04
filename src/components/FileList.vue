<template>
  <div class="filelist">
    <el-card>
      <div slot="header">
        <span>文件列表</span>
        <el-button style="float: right; padding: 5px 5px" type="primary">上传文件</el-button>
      </div>
      <div class="bottom">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table>
          <el-table-column label="文件名" width="300" prop="FileName">
          </el-table-column>
          <el-table-column label="大小" width="150">
          </el-table-column>
          <el-table-column label="创建时间" width="250">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini" type="primary"
                @click="handleEdit(scope.$index, scope.row)">详情</el-button>
              <el-button
                size="mini"
                type="success"
                @click="handleDelete(scope.$index, scope.row)">下载</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'FileList'
  }
</script>

<style scoped>

</style>

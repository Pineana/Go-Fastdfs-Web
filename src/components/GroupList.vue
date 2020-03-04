<template>
  <div class="grouplist">
    <el-card>
      <div slot="header" class="clearfix">
        <span>集群列表</span>
        <el-button style="float: right; padding: 5px 5px" type="primary">添加集群</el-button>
      </div>
      <div>
        <el-table>
          <el-table-column label="ID" width="100" prop="FileName">
          </el-table-column>
          <el-table-column label="名称" width="100">
          </el-table-column>
          <el-table-column label="组名" width="100">
          </el-table-column>
          <el-table-column label="管理地址" width="200">
          </el-table-column>
          <el-table-column label="访问域名" width="200">
          </el-table-column>
          <el-table-column label="添加时间" width="150">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini" type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    name: 'GroupList'
  }
</script>

<style scoped>

</style>

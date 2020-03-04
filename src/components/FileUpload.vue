<template>
  <div class="fileupload">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>上传配置</span>
          </div>
          <div class="inputlist">
            <div class="input">
              <div class="title">场景：</div>
              <el-input placehold="请输入场景"></el-input>
            </div>
            <div class="input">
              <div class="title">路径：</div>
              <el-input></el-input>
            </div>
            <div class="input">
              <div class="title">url前缀：</div>
              <el-input></el-input>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" class="fileupload-bottom">
        <el-card>
          <div class="buttonline">
              <el-button type="primary">选择文件</el-button>
              <el-button type="success">上传全部</el-button>
          </div>
          <div class="table">
            <el-table>
              <el-table-column label="文件名" width="220" prop="FileName">
              </el-table-column>
              <el-table-column label="大小" width="150">
              </el-table-column>
              <el-table-column label="状态" width="150">
              </el-table-column>
              <el-table-column label="上传进度" width="250">
                <template slot-scope="scope">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">上传</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">取消</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Fileupload'
  }
</script>

<style scoped>
  .fileupload{
    width: 98%;
  }
  .input{
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .title{
    width: 10%;
    line-height: 8vh;
    text-align: end;
  }
  .inputlist{
    display: flex;
    flex-direction: column;
  }
  .fileupload-bottom{
    margin-top: 10px;
  }
</style>

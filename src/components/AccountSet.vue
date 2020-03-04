<template>
  <div class="accountset">
    <el-card>
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="form">
        <el-form :model="FormData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账户：" prop="account">
            <div>1131482051@163.com</div>
          </el-form-item>
          <el-form-item label="昵称：" prop="nickname">
            <el-input v-model="FormData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="FormData.email"></el-input>
          </el-form-item>
          <el-form-item label="原密码：" prop="oldpassword">
            <el-input v-model="FormData.oldpassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="newpassword">
            <el-input v-model="FormData.newpassword"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="button" @click="submitForm">确认提交</el-button>
        <el-button type="plain" class="button" @click="resetForm">重置信息</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'AccountSet',
    data(){
      return{
        FormData:{
            nickname:"",
            email:"",
            oldpassword:"",
            newpassword:""
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email',message: '请输入正确的邮箱地址',trigger: 'blur'}
          ],
          oldpassword: [
            { required: true, message: '请输入旧密码', trigger: 'blur' }
          ],
          newpassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if(this.FormData.newpassword==this.FormData.oldpassword){
              alert('same password')
            }else{
              alert('submit!');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs.ruleForm.resetFields();
      }
    }
  }
</script>

<style scoped>
  .accountset{
    width: 98%;
  }
  .form{
    width: 400px;
  }
  .button{
    margin-left: 120px;
  }
</style>

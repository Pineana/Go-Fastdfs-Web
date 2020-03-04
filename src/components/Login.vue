<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">Go-Fastdfs-Admin</div>
      <el-form id="FormTable" class="formtable" :model="Form" :rules="rules">
        <el-form-item class="input_box" prop="username">
          <el-input v-model="Form.username" prefix-icon="el-icon-user-solid" class="input" placeholder="请输入用户名"></el-input>
        </el-form-item >
        <el-form-item class="input_box" prop="password">
          <el-input v-model="Form.password" prefix-icon="el-icon-lock" class="input" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="buts">
          <el-button type="primary" @click="signin">注册</el-button>
          <el-button type="primary" @click="Login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Form: {
        username: '123',
        password: '13'
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 8, max: 32, message: '长度在 8 到 32 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signin () {
      this.$http.post('http://127.0.0.1:8080/user/signin' , this.Form , {emulateJSON:true}).then(
        function (res) {
          console.log('success')
          console.log(res)
        },
        function () {
          console.log('fail')
        }
      )
    }
  }

}
</script>

<style lang="less" scoped>
.login_container{
  background-image: linear-gradient(-90deg, #26D9B3 0%, #5984FC 100%);
  height: 100%;
}
.formtable{
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input_box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.title{
  height: 100px;
  width: 100%;
  line-height: 80px;
  font-size: 30px;
  font-weight:700;
  text-align: center;
}
.login_box{
  height: 300px;
  width: 450px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.buts{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.input{
  width: 350px;
}

</style>

<template>
  <div class="box">
    <div class="container">
      <div class="top">
        <div class="desc">
          <img class="logo_login" src="@/assets/logo.png" alt="" />
        </div>
        <div class="header">
          <span class="title">GoFastDFS文件管理系统</span>
        </div>
      </div>
      <div class="main">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="loginForm.username" suffix-icon="el-icon-user">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" style="width:100%">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <div class="copyright">
          Copyright &copy; {{ curYear }} 💖 Pineana
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Post} from "../utils/requests";
import router from "../router";
import { ElMessage } from "element-plus";
export default {
  name: "login",
  data(){
    const checkUsername = (rule, value, callback) => {
      if (value.length < 1 ) {
        return callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const checkPassword = (rule, value, callback) => {
      if (value.length < 6 || value.length > 12) {
        return callback(new Error("请输入正确的密码"));
      } else {
        callback();
      }
    };
    return {
      curYear: 0,
      lock: "lock",
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
      logVerify: "",
      picPath: "",
    }
  },
  created() {
    var time = new Date()
    this.curYear =  time.getFullYear().toString()+ "-" + time.getMonth().toString() + "-" + time.getDate().toString()
  },
  methods:{
    submitForm(){
      Post("/base/login",this.loginForm).then(
          res=>{
            if (res.status==200){
              ElMessage.success({
                message:"登陆成功",
                type:"success"
              })
              router.push({name:"layout"})
            }
          }
      ).catch(function (){
        ElMessage.error('账号或者密码错误')
      })
    }
  }
}
</script>

<style scoped>
.box{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);
}
.container{
  margin: auto;
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.top{
  width: 100%;
  height: 50%;
}
.desc{
  display: flex;
  justify-content: center;
  height: 60%;
  width: 100%;
}
.header{
  margin-top: 40px;
  height: 40%;
  display: flex;
  justify-content: center;
  line-height: 44px;
}
.title{
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.main{
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}
.footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20%;
  width: 100%;
}
</style>
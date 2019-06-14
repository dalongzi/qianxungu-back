<template>
  <div class="login">
    <div class="login-form">
      <div class="form-contain">
        <el-form :model="dataForm" :rules="rules" ref="dataForm">
          <el-form-item prop="username">
            <el-input v-model="dataForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="dataForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input v-model="dataForm.captcha" placeholder="验证码"></el-input>
            <div class="captcha-img" v-html="captchaHTML" @click="refreshCaptcha"></div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('dataForm')">登入</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        username: "",
        password: "",
        captcha: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      captchaHTML: "",
      captchaText: ""
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid){
          let data = {};
          let captchaInput = this.dataForm.captcha;
          let captcha = this.captchaText;
          data.username = this.dataForm.username;
          data.password = this.dataForm.password;
          if(captchaInput.toLowerCase() === captcha.toLowerCase()){
            this.$myaxios.post(this.$api.signin,data).then(resp=>{
              console.log(resp.data.data.permissions);
              localStorage.setItem("token",resp.data.token);
              localStorage.setItem("permissionData",JSON.stringify(resp.data.data.permissions));
              if(!this.$route.query.higherRouting){
                this.$router.replace({ path: '/' });
              }else{
                this.$router.replace({ path: this.$route.query.higherRouting });
              }
              
            }).catch(error=>{
              this.dataForm.password = "";
              this.dataForm.captcha = "";
              this.refreshCaptcha();
              this.$message.error("用户名或密码错误")
            })
          }else{
            this.dataForm.captcha = "";
            this.$message.error("验证码错误")
          }
        }else{
          console.log('error submit');
          false;
        }
      })
    },
    // 刷新验证码
    refreshCaptcha(){
      this.$myaxios.get(this.$api.checkDynamicCode).then(resp=>{
        this.captchaHTML = resp.data.data.data;
        this.captchaText = resp.data.data.text;
      }).catch(error=>{
        console.log(error);
      })
    }
  },

  mounted(){
    this.refreshCaptcha();
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 50%;
    height: 50%;
    min-width: 500px;
    min-height: 400px;
    box-shadow: 0 0 50px 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-contain{
      width: 80%;
      text-align: center;
      .captcha-img{
        margin-top: 10px;
      }
    }
  }
}
</style>

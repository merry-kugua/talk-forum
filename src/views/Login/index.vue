<template>
  <div style="display: flex;align-items: center;justify-content: center;height: 100vh">
    <div class="w-25">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;height: 100%">登录</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')" style="width: 100%;height: 100%;margin-top: 10px;margin-left: -1px">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginWeb } from "@/api/adminApi";

export default {
  name: "index",
  data() {
    // 账号
    var validatePass = (rule, value, callback) => {
      if(!value){
        return  callback(new Error('请输入账号'))
      }
    }
      // 密码
    var checkAge = (rule, value, callback) => {
      if(!value){
        return  callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        // 账号
        pass: [
          { validator: validatePass, trigger: "blur" }
        ],
        // 密码
        checkPass: [
          { validator: checkAge, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 提交
    submitForm(formName) {
      console.log(this.$md5(this.$refs[formName].model.checkPass))
      console.log(this.$refs[formName].model)
      // this.$router.push({path:'Home'})
      // loginWeb().then(res => {
      //   console.log(res);
      // });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    aaa() {
      loginWeb().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>

</style>

<template>
  <div id="NavMenu">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="permission">权限管理</el-menu-item>
        <el-menu-item index="role">角色管理</el-menu-item>
        <el-menu-item index="admin">用户管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="daily">
        <i class="el-icon-location"></i>
        <span slot="title">日历管理</span>
      </el-menu-item>
      <el-menu-item index="message">
        <i class="el-icon-location"></i>
        <span slot="title">留言管理</span>
      </el-menu-item>
      <el-menu-item index="musicType">
        <i class="el-icon-location"></i>
        <span slot="title">类型管理</span>
      </el-menu-item>
      <el-menu-item index="music">
        <i class="el-icon-location"></i>
        <span slot="title">音频管理</span>
      </el-menu-item>
    </el-menu>

    <div class="nav-footer">
      <el-button type="danger" @click="quitBtn">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      defaultActive: '',
      permissionData: []
    }
  },
  methods: {
    // 退出按钮
    quitBtn(){
      localStorage.removeItem("token");
      localStorage.removeItem("permissionData");
      this.$router.push({name: "login", query: {higherRouting: this.$route.fullPath} });
    }
  },

  mounted(){
    this.defaultActive = this.$route.fullPath.split("/home/")[1];
    this.permissionData = JSON.parse(localStorage.getItem("permissionData"));
  }
};
</script>

<style lang="scss" scoped>
#NavMenu {
  width: 200px;
  height: 100%;
  background: #545c64;
  position: relative;
  .nav-footer{
    height: 100px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
</style>

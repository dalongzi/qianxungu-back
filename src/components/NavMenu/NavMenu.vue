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
      <template v-for="item in data">
        <el-submenu v-if="item.children" :index="item.permissionName">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.permissionDesc}}</span>
          </template>
          <el-menu-item
            v-for="(value,index) in item.children"
            :key="index"
            :index="value.permissionName"
          >{{value.permissionDesc}}</el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.permissionName">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.permissionDesc}}</span>
        </el-menu-item>
      </template>

    </el-menu>

    <div class="nav-footer">
      <el-button type="danger" @click="quitBtn">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "",
      permissionData: [],
      data: []
    };
  },
  methods: {
    // 退出按钮
    quitBtn() {
      localStorage.removeItem("token");
      localStorage.removeItem("permissionData");
      this.$router.push({
        name: "login",
        query: { higherRouting: this.$route.fullPath }
      });
    }
  },
  watch: {
    permissionData(newQuestion, oldQuestion) {
      const data = [];
      const dataLeve2 = [];
      for (var key in newQuestion) {
        if (newQuestion[key].permissionLeve === 1) {
          data.push(newQuestion[key]);
        } else if (newQuestion[key].permissionLeve === 2) {
          dataLeve2.push(newQuestion[key]);
        }
      }
      for (var index in dataLeve2) {
        for (var j in data) {
          if (dataLeve2[index].parentid === data[j]._id) {
            if (data[j].children) {
              data[j].children.push(dataLeve2[index]);
            } else {
              data[j].children = [dataLeve2[index]];
            }
          }
        }
      }
      this.data = data;
    }
  },

  mounted() {
    this.defaultActive = this.$route.fullPath.split("/home/")[1];
    this.permissionData = JSON.parse(localStorage.getItem("permissionData"));
    this.$store.dispatch("getPermissionData",this.permissionData);
  }
};
</script>

<style lang="scss" scoped>
#NavMenu {
  width: 200px;
  height: 100%;
  background: #545c64;
  position: relative;
  .nav-footer {
    height: 100px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
</style>

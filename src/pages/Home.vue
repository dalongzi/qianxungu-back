<template>
  <div id="Home">
    <NavMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    NavMenu: ()=>import('../components/NavMenu/NavMenu')
  }
}
</script>

<style lang="scss" scoped>
  #Home{
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>

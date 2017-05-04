<template>
  <div class="paper-header ">
    <div class="header-content clearfix">
      <div class="side float-left text-left clearfix">
        <h2 class="title text-center home"><router-link :to="{ name: 'home' }">数据版权</router-link></h2>
      </div>
      <div class="center float-left text-center">
        <ul>
          <li :class="{active: paper.indexOf($route.name) !== -1}">
            <div class="menu" >
              <router-link :to="{ name: 'investigate' }">论文查重</router-link>
            </div>
          </li>
          <li :class="{active: original.indexOf($route.name) !== -1}">
            <div class="menu">
              <router-link :to="{ name: 'original' }">原创追溯</router-link>
            </div>
          </li>
          <li :class="{active: tools.indexOf($route.name) !== -1}">
            <div class="menu">
              <router-link :to="{ name: 'creativeTools' }">创作工具</router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="side float-left text-right">
       <p class="float-right login">&nbsp;&nbsp;
        <router-link :to="{ name: 'login' }">登录</router-link>
       </p><span class="logo float-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        paper: ['investigate'],
        original: ['original'],
        tools: ['creativeTools']
      }
    },
    mounted () {
      console.log(this.paper.indexOf(this.$route.name))
    }
  }
</script>

<style lang="less" scoped>
  @import './Header.less';
</style>

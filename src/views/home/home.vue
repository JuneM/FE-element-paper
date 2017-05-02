<template>
  <div class="home">
    <v-search></v-search>
  </div>
</template>

<script>
import VSearch from 'components/search/search'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    VSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './home.less';
</style>

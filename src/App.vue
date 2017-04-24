<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from 'components/header/Header'
import VFooter from 'components/footer/Footer'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style scoped>
  .content {
    width: 1200px;
    min-height: 542px;
    background: #fff;
    margin: 50px auto;
  }
</style>

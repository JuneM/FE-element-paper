<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from 'components/header/Header'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    VHeader
  }
}
</script>

<style>

</style>

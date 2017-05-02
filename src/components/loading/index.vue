<template>
  <div class="loading">
    <h2>论文正在查询中</h2>
    <div class="content">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './index.less';
</style>

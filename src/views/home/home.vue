<template>
  <div class="home">
    <v-search></v-search>
    <div class="content-home">
      <div class="content-box" v-for="item in content">
        <a :href="item.url">
            <img class="box-img" :src="item.imgUrl" alt="">
            <p class="box-title">{{item.title}}</p>
            <p class="box-des">{{item.des}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VSearch from 'components/search/search'
export default {
  name: 'home',
  data () {
    return {
      content: [{
        url: '',
        title: '论文查重',
        imgUrl: require('../../assets/img/JS.jpg'),
        des: '全网比对，出具报告，安全便捷'
      }, {
        url: '',
        title: '原创追溯',
        imgUrl: require('../../assets/img/JS.jpg'),
        des: '全网比对，定位抄袭，快速维权'
      }, {
        url: '',
        title: '创作工具',
        imgUrl: require('../../assets/img/JS.jpg'),
        des: '只能分析，错字语法，创作建议'
      }]
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

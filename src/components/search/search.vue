<template>
  <div class="v-search">
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': isSearch}" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search" style="cursor:pointer" @click="searchKeyword"></i>
                <input type="search" class="weui-search-bar__input" v-model="keyword" id="searchInput" :placeholder="placeholder" required="" @keyup.enter="searchKeyword">
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText" 
                   @click.stop="showSearch"
                   style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <i class="weui-icon-search"></i>
                <span>{{placeholder}}</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click.stop="hideSearch">取消</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        default () {
          return '搜索'
        }
      }
    },
    data () {
      return {
        isSearch: false,
        keyword: ''
      }
    },
    mounted () {
    },
    methods: {
      showSearch () {
        this.isSearch = true
      },
      hideSearch () {
        this.isSearch = false
        this.keyword = ''
      },
      searchKeyword () {
        this.$emit('search', this.keyword)
      }
    }
  }
</script>

<style lang="less" scoped>
 @import './search.less'; 
</style>

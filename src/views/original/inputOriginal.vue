<template>
  <div class="input-original">
    <div class="body">
      <div class="title">
        <v-search placeholder="请输入文章的 url 网址快速查找全网相似内容源"></v-search>
      </div>
      <div class="content">
        <textarea placeholder="请输入你的文章或片段"></textarea>
      </div>
      <div class="des">
        <a>上传 word / PDF 文档</a>
      </div>
      <div class="confirm">
        <p class="button">确认</p>
      </div>
    </div>
   
  </div>
</template>

<script>
import VSearch from 'components/search/search'

export default {
  name: 'input-original',
  data () {
    return {
    }
  },
  components: {
    VSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.input-original {
  width: 1200px;
  height: 542px;
  background: #EEECEC;
  border-radius: 2px;
  .body {
    margin: 0 auto;
    width: 677px;
    overflow: hidden;
    .title {
      margin: 25px 0; 
      width: 100%;
      ul {
        display: flex;
        justify-content: center;
        text-align: center;
        li {
          font-family: PingFangSC-Regular;
          font-size: 20px;
          color: #121111;
          width: 223px;
        }
      }
    }
    .content {
      textarea {
        width: 93%;
        height: 316px;
        background: #F7F7F7;
        border: 1px solid #979797;
        resize: inherit;
        box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.50);
        padding: 15px 20px;
      }
    }
    .des {
      text-align: right;
      a {
        border-bottom: 1px solid #3A6AAC;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #477ECB;
        cursor: pointer;
      }
    }
    .confirm {
      text-align: center;
      .button {
        width: 120px;
        height: 55px;
        line-height: 55px;
        font-size: 24px;
        color: #FFFFFF;
        background: #B6BAC0;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        border-radius: 8px;
        margin: 5px auto;
        cursor: pointer;
      }
    }
  }
  
}
</style>

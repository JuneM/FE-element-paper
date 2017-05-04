<template>
  <div class="input-tools">
    <div class="body">
      <div class="result">
        <div class="same left float-left">
          <p>文章分析结果</p>
        </div>
        <div class="same right float-right">
          <p>推荐参考文章</p>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'result-tools',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.input-tools {
  width: 1200px;
  height: 542px;
  background: #EEECEC;
  border-radius: 2px;
  .body {
    margin: 0 auto;
    width: 918.5px;
    padding: 5px;
    overflow: hidden;
    .result {
      width: 99%;
      .same {
        margin-top: 20px;
        background: #F7F7F7;
        border: 1px solid #979797;
        box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.50);
        height: 495px;
        p {
          font-size: 20px;
          color: #232222;
          text-align: center;
          margin: 15px 0;
        }
      }
      .left {
        width: 610px;
      }
      .right {
        width: 262px;
      }
    }
  }
  
}
</style>

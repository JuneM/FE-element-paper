<template>
  <div class="input-original">
    <div class="body">
      <div class="title">
        <p>分析结果仅供参考，版权归原创者所有</p>
      </div>
      <div class="content">
        <div class="tips">
          <p>相似文章：10 处，您的文章很可能被抄袭侵权了</p>
          <p>相似文章：1 处，看样子你的文章还很安全</p>
        </div>
       
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'result-original',
  data () {
    return {
    }
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
    width: 648px;
    padding: 5px;
    overflow: hidden;
    .title {
      margin: 25px 0; 
      width: 100%;
      p {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #121111;
        margin: 7px auto;
      }
    }
    .content {
      width: 99%;
      min-height: 440px;
      background: #F7F7F7;
      border: 1px solid #979797;
      box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.50);
      .tips {
        margin: 25px auto;
        width: 385px;
        p {
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #555555;
        }
      }
      
    }
  }
  
}
</style>

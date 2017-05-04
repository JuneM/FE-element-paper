<template>
  <div class="input-paper">
    <div class="body">
      <div class="title">
        <p>分析结果仅供参考，不保证准确率，务必以学校推荐查重网站结果为准</p>
      </div>
      <div class="content">
        <p>论文：计算机文字处理在论文查重方面的应用</p>
        <ul>
          <li>重复率：35%</li>
          <li>相似字段：15 处</li>
          <li>相似字数：1500字</li>
        </ul>
      </div>
      <div class="result">
        <div class="same left float-left"></div>
        <div class="same right float-right"></div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'result-paper',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.input-paper {
  width: 1200px;
  height: 542px;
  background: #EEECEC;
  border-radius: 2px;
  .body {
    margin: 0 auto;
    width: 918.5px;
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
      text-align: center;
      min-height: 84px;
      background: #F7F7F7;
      border: 1px solid #979797;
      box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.50);
      p {
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #1C1B1B;
      }
       ul {
        display: flex;
        justify-content: center;
        li {
          font-family: PingFangSC-Regular;
          font-size: 20px;
          color: #1C1B1B;
          width: 223px;
        }
      }
    }
    .result {
      width: 99%;
      .same {
        margin-top: 20px;
        background: #F7F7F7;
        border: 1px solid #979797;
        box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.50);
        height: 325px;
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

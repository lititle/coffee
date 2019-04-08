<template>
  <div>
    <footer>
      <div class="py-foot">
        <div class="foot">
          <span class="logoImg">
            <img src="static/images/home/logo.png">
          </span>
          <div>
            <p>免责声明：本站意在传播咖啡文化，若侵权请告知删除。</p>
            <p> @author: 计本151班 黎晓晴</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'footArea',
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  @import "../style/basic";
  .py-foot{
    width:100%;
    height:100px;
    border-top:3px solid #E1E1E1;
    background: #FFFFFF;
    margin-top: 10px;
  }
  .foot{
    width:980px;
    height:100px;
    margin: 0 auto;
    color: #666;
    @include flex(row,center,center);
    .logoImg{
      margin-right: 20px;
      padding-right: 15px;
    }
    p{
      margin-top: 8px;
    }
  }
</style>

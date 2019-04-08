<template>
  <div>
    <header>
      <div class="py-shortTop">
        <div class="shortTop">
          <span>
            <i class="el-icon-caret-right"></i>
            <span>欢迎您来到中国咖啡网！</span>
          </span>
          <span>
            <a @click="login">登录网站</a>
            <span>|</span>
            <router-link to="/register">新用户注册</router-link>
          </span>
        </div>
      </div>
      <div class="py-top">
        <div class="top">
          <img src="../../static/images/home/logo.png">
          <div class="search">
           <input type="text" placeholder="请输入搜索内容"/>
            <span><i class="el-icon-search"></i></span>
          </div>
        </div>
      </div>
      <div class="py">
        <div class="nav">
          <ul>
            <li><router-link to="/homePage">首页</router-link><span>|</span></li>
            <li><a>咨讯</a><span>|</span></li>
            <li><a>文化</a><span>|</span></li>
            <li><a>周边</a><span>|</span></li>
            <li><a>视频、配方</a><span>|</span></li>
            <li><a>论坛</a><span>|</span></li>
            <li><a>问答</a><span>|</span></li>
            <li><a>求职招聘</a><span>|</span></li>
            <li><a>调酒</a><span>|</span></li>
            <li><a>西餐</a><span>|</span></li>
            <li><a>加入QQ群</a></li>
          </ul>
        </div>
      </div>
      <div class="py">
        <div class="menu">
          <ul>
            <li>咖啡视频配方</li>
            <li>咖啡入门知识</li>
            <li>调酒综合讨论</li>
            <li>咖啡拉花视频</li>
            <li>西餐技术交流</li>
            <li>咖啡视频配方</li>
            <li>心得经验分享</li>
            <li>调酒技术探讨</li>
            <li>吧台冰饮杂谈</li>
            <li>咖友生活八卦</li>
            <li>求职招聘专栏</li>
            <li>时尚特色餐厅</li>
            <li>经典菜谱资源</li>
            <li>咖啡周边信息</li>
            <li>名酒雪茄介绍</li>
            <li>品茶论茶咨讯</li>
            <li>美食天下周边</li>
            <li>咖啡文化知识</li>
            <li>入驻联盟咖啡</li>
            <li>咖啡品牌加盟</li>
            <li>周边其他咨讯</li>
            <li>心得经验分享</li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'headerArea',
  data () {
    return {}
  },
  methods: {
    login () {
      this.$emit('userLogin')
    }
  }
}
</script>
<style lang="scss">
  @import "../style/basic";
  .py-shortTop{
    width:100%;
    background: linear-gradient(to bottom, #FFFFFF, #EEEEEE);
  }
  .shortTop{
    width: 980px;
    height: 35px;
    margin: 0 auto;
    @include flex(row,space-between,center);
    color:#A97D4E;
    &>span:first-child{
      font-size: 12px;
    }
    &>span:last-child{
      span{
        color:#ccc;
        margin:0 5px 0 5px;
      }
      a{
        color: #795130;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  .py-top{
    width:100%;
    background: url(../../static/images/home/topBg.jpg) center no-repeat,linear-gradient(to bottom,#B3998A,#DBCEC6);
  }
  .top{
    width:980px;
    height:81px;
    margin: 0 auto;
    @include flex(row,space-between,center);
    .search{
      width:250px;
      height:32px;
      border:1px solid #9F7449;
      background: #FAFAFA;
      @include flex(row,space-between,center);
      input{
        width:212px;
        height:32px;
        border: none;
        background: none;
        outline:none;
      }
      span{
        height:26px;
        width: 35px;
        border-left:1px solid #CDCDCD;
        @include flex(row,center,center);
        .el-icon-search{
          font-size: 20px;
        }
      }
    }
  }
  .py{
    width: 100%;
  }
  .nav{
    margin: 0 auto;
    width: 980px;
    height: 40px;
    background: url(http://www.coffee.cn/images/nav_bg.png) no-repeat left top;
    overflow: hidden;
    ul>li>{
      a{
        color: #fff;
        width: 87px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
      }
      span{
        color:#A97D4E;
        font-size:15px;
      }
    }
  }
  .menu{
    width:980px;
    margin: 0 auto;
    border: 1px solid #E2E2E2;
    border-top:none;
    padding-bottom: 12px;
    background: #FFFFFF;
    ul{
     li{
       color: #666;
       cursor: pointer;
       line-height: 15px;
       font-size: 12px;
       height:15px;
       width:85px;
       text-align: center;
       margin: 15px 0px 2px 0;
       border-right: 1px solid #CCCCCC;
       &:hover{
         color:#795130;
       }
     }
   }
  }
</style>

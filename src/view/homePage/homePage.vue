<template>
  <div class="py">
    <headerArea v-on:userLogin="log"></headerArea>
    <div>
      <div class="bg" ref="bgColor"></div>
      <div class="container">
        <div class="f1">
          <div class="rotation">
            <img src="static/images/home/banner1.jpg">
          </div>
          <div class="newInfo">
            <p>
              <strong>最新资讯</strong>
              <span>查看更多>></span>
            </p>
            <ul>
              <li><a >洪水导致印度咖啡大减产，咖农损失超11.5亿美元</a></li>
              <li><a >将破1000亿的咖啡市场，瑞幸难拔头筹</a></li>
              <li><a >咖啡价格接连下挫，连番会议收效甚微</a></li>
              <li><a >咖啡大师的50000杯品尝积淀</a></li>
              <li><a >连咖啡“关店潮”下，对2019年咖啡行业的“3大猜想”</a></li>
              <li><a >瑞幸咖啡“烧钱”占据市场，抗衡星巴克咖啡地位</a></li>
          </ul>
          </div>
          <div class="releaseInfo">
            <p><i class="iconfont icon-xiaoxi"></i><strong>免费发布信息</strong></p>
            <p><i class="iconfont icon-lianmengchengyuan"></i><strong>联盟</strong><span>league</span></p>
            <p><i class="iconfont icon-shequ"></i><strong>社区</strong><span>Community</span></p>
            <p><i class="iconfont icon-tougao"></i><strong>投稿</strong><span>Submission</span></p>
          </div>
        </div>
        <div class="longImg">
          <img src="static/images/home/longImg.jpg">
        </div>
        <div class="content-box">
          <div class="f2">
            <div class="culture">
              <p class="subTitle">
                <span><i class="el-icon-caret-right"></i><strong>咖啡文化</strong></span>
                <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
              </p>
              <div class="culture-box">
                <div class="subImg">
                  <img src="static/images/home/f2-culture1.jpg">
                </div>
                <ul>
                  <li><a>茶与咖啡，你好哪一口？</a></li>
                  <li><a >一粒咖啡种子的成长——云南咖啡寻求突围走上世界舞台</a></li>
                  <li><a >咖啡是怎么逆袭成为全球三大饮料的？</a></li>
                  <li><a >世界咖啡地图|阿拉伯都有什么好喝的？</a></li>
                  <li><a >咖啡生豆处理法的演变历史</a></li>
                  <li><a >咖啡是怎么从一颗种子变成可以喝的饮料的呢？</a></li>
                </ul>
                <div class="imgArea">
                  <img src="static/images/home/f2-Black.jpg">
                </div>
              </div>
            </div>
            <div class="tecAndMagazine">
              <div class="technology">
                <p class="subTitle">
                  <span><i class="el-icon-caret-right"></i><strong>咖啡技术</strong></span>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <ul>
                  <li><a>DEAN LUNG 丁龙咖啡招募合伙人</a><span>[03-25]</span></li>
                  <li><a>冲一壶冰咖啡你需要不一样的新姿势</a><span>[03-22]</span></li>
                  <li><a>法压壶也能做出好咖啡！</a><span>[03-22]</span></li>
                  <li><a>在中国如何选择鲜奶双研磨智能咖啡售卖机的...</a><span>[12-26]</span></li>
                  <li><a>品咖啡的意境</a><span>[12-18]</span></li>
                  <li><a>揭秘100分的手冲咖啡技巧</a><span>[12-17]</span></li>
                </ul>
              </div>
              <div class="Magazine">
                <p class="subTitle">
                  <span><i class="el-icon-caret-right"></i><strong>咖啡杂志</strong></span>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <div>
                  <span>
                    <img src="static/images/home/f2-book.jpg">
                  </span>
                  <div>
                    <p>中国咖啡杂志_1期</p>
                    <p>《中国咖啡网》杂志是中国咖啡网</p>
                    <p>（www.coffee.cn）旗下的免费电子杂志，杂志涉及咖啡、美酒、美食等多方...</p>
                  </div>
                </div>
                <p>
                  <span>中国咖啡网杂志第1期</span>
                  <span>中国咖啡网杂志第1期</span>
                </p>
              </div>
            </div>
            <div class="chAndExpert">
              <div >
                <p class="subTitle">
                  <strong>咖啡杂志</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <ul>
                  <li><a>一杯咖啡、一块法甜，与古城的下午来一次浪漫的法式约会</a></li>
                  <li><a>沈阳藤崎寿司怎么样</a></li>
                  <li><a>藤崎寿司加盟标准</a></li>
                  <li><a>测试！早餐吃什么可以反映出你是怎样的人</a></li>
                  <li><a>论巴厘岛精品餐厅与景点</a></li>
                </ul>
              </div>
              <span><img src="static/images/home/f2-change.jpg"></span>
              <div >
                <p class="subTitle">
                  <strong>咖啡杂志</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <ul>
                  <li><a>一杯咖啡、一块法甜，与古城的下午来一次浪漫的法式约会</a></li>
                  <li><a>沈阳藤崎寿司怎么样</a></li>
                  <li><a>藤崎寿司加盟标准</a></li>
                  <li><a>测试！早餐吃什么可以反映出你是怎样的人</a></li>
                  <li><a>论巴厘岛精品餐厅与景点</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="longImg">
          <img src="static/images/home/longImg.jpg">
        </div>
        <div class="content-box">
          <div class="f3">
            <div class="f3-content">
              <div>
                <p class="subTitle">
                  <strong>咖啡杂谈</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <div class="image-text">
                  <div>
                    <p>
                      <img src="static/images/home/f3-demo1.jpg">
                    </p>
                    <p>这里所说的倒茶学问既适用于客户来公司拜访，同样也适用于商务餐桌。</p>
                  </div>
                  <div>
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                    国际咖啡组织第124届理事会回...雅致生活 | 咖啡，是一种饮品...
                    瑞幸咖啡融资租赁获4500万资...非洲咖啡种植者面临全球咖啡豆
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                  </div>
                </div>
              </div>
              <div>
                <p class="subTitle">
                  <strong>西餐八卦</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <div class="image-text">
                  <div>
                    <p>
                      <img src="static/images/home/f3-demo1.jpg">
                    </p>
                    <p>这里所说的倒茶学问既适用于客户来公司拜访，同样也适用于商务餐桌。</p>
                  </div>
                  <div>
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                    国际咖啡组织第124届理事会回...雅致生活 | 咖啡，是一种饮品...
                    瑞幸咖啡融资租赁获4500万资...非洲咖啡种植者面临全球咖啡豆
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                  </div>
                </div>
              </div>
              <div>
                <p class="subTitle">
                  <strong>美食天下</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <div class="image-text">
                  <div>
                    <p>
                      <img src="static/images/home/f3-demo1.jpg">
                    </p>
                    <p>这里所说的倒茶学问既适用于客户来公司拜访，同样也适用于商务餐桌。</p>
                  </div>
                  <div>
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                    国际咖啡组织第124届理事会回...雅致生活 | 咖啡，是一种饮品...
                    瑞幸咖啡融资租赁获4500万资...非洲咖啡种植者面临全球咖啡豆
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                  </div>
                </div>
              </div>
              <div>
                <p class="subTitle">
                  <strong>经典菜谱</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <div class="image-text">
                  <div>
                    <p>
                      <img src="static/images/home/f3-demo1.jpg">
                    </p>
                    <p>这里所说的倒茶学问既适用于客户来公司拜访，同样也适用于商务餐桌。</p>
                  </div>
                  <div>
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                    国际咖啡组织第124届理事会回...雅致生活 | 咖啡，是一种饮品...
                    瑞幸咖啡融资租赁获4500万资...非洲咖啡种植者面临全球咖啡豆
                    摩卡、拿铁、卡布奇诺……六大咖...被制约太深？研究指只要看到咖啡...
                  </div>
                </div>
              </div>
            </div>
            <div class="job">
              <p class="subTitle">
                <strong>求职招聘</strong>
                <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
              </p>
              <ul>
                <li><a>2018海南咖啡展  找个海口的兼职咖啡师</a></li>
                <li><a> 海南咖啡展   招个海口的兼职咖啡师</a></li>
                <li><a>招聘咖啡师和西点师，快到碗里来~</a></li>
                <li><a>海淀西二旗招聘咖啡师无经验4K起</a></li>
                <li><a>高薪招聘大客户代表岗位</a></li>
                <li><a>咖啡师招聘</a></li>
                <li><a>广州新造美术馆内书吧招咖啡师一名</a></li>
                <li><a>广州新造美术馆内书吧招咖啡师一名</a></li>
                <li><a>求职，有招修贝泽拉机子的吗</a></li>
                <li><a>求职，有招修贝泽拉机子的吗</a></li>
                <li><a>云南玉溪市溪湖小镇客栈诚意聘请咖啡师一名（分得七成利润</a></li>
              </ul>
              <span><img src="static/images/home/f3-demo2.jpg"></span>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="f4">
            <div class="f4-content">
              <p class="f4-title">
                <strong>联盟店面 <i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i></strong>
                <span :class="{ 'f4-titleAttive':cafe === true}" @click="changeTitle(true)">精品咖啡馆</span>
                <span :class="{ 'f4-titleAttive':cafe === false}" @click="changeTitle(false)">精品西餐厅</span>
              </p>
              <div class="imageText">
                <ul v-show="cafe===true">
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo1.jpg">
                    </span>
                    <p>意浓咖啡南阳店</p>
                  </li>
                </ul>
                <ul v-show="cafe===false">
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                  <li>
                    <span>
                      <img src="static/images/home/f4-demo2.jpg">
                    </span>
                    <p>意浓咖啡西餐厅</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content-right">
              <div>
                <p class="subTitle">
                  <strong>周边最新</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <ul>
                  <li><a>摩卡、拿铁、卡布奇诺……六大咖啡口味的小科普与趣点评</a></li>
                  <li><a>被制约太深？研究指只要看到咖啡提示大脑就会突然清醒</a></li>
                  <li><a>国际咖啡组织第124届理事会回顾与总结——咖啡价格危机问题贯穿会议始终</a></li>
                  <li><a>雅致生活 | 咖啡，是一种饮品，更是一种生活态度！</a></li>
                  <li><a>瑞幸咖啡融资租赁获4500万资金 盘活资产凸显轻资产运营思路</a></li>
                  <li><a>非洲咖啡种植者面临全球咖啡豆低价的风险</a></li>
                </ul>
              </div>
              <div>
                <p class="subTitle">
                  <strong>名酒雪茄</strong>
                  <span>查看更多<i class="el-icon-d-arrow-right"></i></span>
                </p>
                <ul>
                  <li><a>摩卡、拿铁、卡布奇诺……六大咖啡口味的小科普与趣点评</a></li>
                  <li><a>被制约太深？研究指只要看到咖啡提示大脑就会突然清醒</a></li>
                  <li><a>国际咖啡组织第124届理事会回顾与总结——咖啡价格危机问题贯穿会议始终</a></li>
                  <li><a>雅致生活 | 咖啡，是一种饮品，更是一种生活态度！</a></li>
                  <li><a>瑞幸咖啡融资租赁获4500万资金 盘活资产凸显轻资产运营思路</a></li>
                  <li><a>非洲咖啡种植者面临全球咖啡豆低价的风险</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-show="loginShow===true" class="login">
          <p class="lo-title">
            <span>用户登录</span>
            <i class="el-icon-close" @click="closeLogin"></i>
          </p>
          <p class="lo-info">
            <span>用户名：</span>
            <input type="text"/>
          </p>
          <p class="lo-info">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
            <input type="text"/>
          </p>
          <p class="userReg">
            <span>注册用户</span>
            <span>忘记密码</span>
          </p>
          <p>
            <span>登录</span>
            <span>取消</span>
          </p>
        </div>
      </div>
    </div>
    <footArea></footArea>
  </div>
</template>
<script>
import headerArea from '../../components/headerArea'
import footArea from '../../components/footArea'
export default {
  name: 'homePage',
  components: {headerArea, footArea},
  data () {
    return {
      bannerList: [
        {pic: '../../../../static/images/home/banner1.jpg', url: 'http://www.baidu.com'},
        {pic: '../../../../static/images/home/banner2.jpg', url: 'http://www.baidu.com'},
        {pic: '../../../../static/images/home/banner3.jpg', url: 'http://www.baidu.com'}
      ],
      cafe: true,
      loginShow: false
    }
  },
  methods: {
    changeTitle (val) {
      this.cafe = val
    },
    closeLogin () {
      this.loginShow = false
      this.$refs.bgColor.style.display = 'none'
    },
    log () {
      this.loginShow = true
      this.$refs.bgColor.style.display = 'block'
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then((res) => {
        console.log('res', res)
      })
    }
  }
}
</script>
<style lang="scss">
  @import '../../style/basic.scss';
  .py{
    width: 100%;
    background: #F2F2F2;
  }
  .container{
    position: relative;
    .subTitle{
      color: #795130;
      height:29px;
      border-bottom: $border;
      background: #F8F8F8;
      padding:0 7px 0 7px;
      @include flex(row,space-between,center);
      strong{
        color:#333;
        margin-left: 5px;
      }
      margin-bottom: 10px;
    }
    font-size: 12px;
  }
  .f1,.f2,.f3,.f4{
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  .f1{
    margin-top:10px;
    &>div{
      border: 1px #E2E2E2 solid;
      height:210px;
      background: #FFFFFF;
    }
    .rotation{
      width:330px;
      padding:2px 2px 2px 2px;
      img{
        width:100%;
        height:100%;
      }
    }
    .newInfo{
      width: 392px;
      padding:10px 20px 20px 20px;
      color: #795130;
      p{
        border-bottom: 1px #e8e8e8 solid;
        @include flex(row,space-between,center);
        height:35px;
        &>strong:first-child{
          width: 250px;
          height:18px;
          padding-left: 5px;
          color: #333;
          font-size: 14px;
          line-height: 18px;
          background:linear-gradient(to right,#E8E8E8,#FFFFFF);
        }
      }
      ul{
        margin-top: 10px;
        line-height: 23px;
        li:before{
          content: "\2022";
          color: red;
          font-size: 16px;
          margin-right: 10px;
        }
        li a{
          font-size: 12px;
        }
      }
    }
    .releaseInfo{
      text-align: center;
      width:235px;
      padding: 5px 0 0 5px;
      &>p{
        width: 210px;
        display: flex;
        align-items: center;
      }
      &>p:first-child{
        width: 210px;
        height: 41px;
        @include flex(row,center,center);
        background:linear-gradient(to top,#E8E8E8,#FFFFFF);
        border-radius: 7px;
        .icon-xiaoxi{
          color:#BABABA;
          font-size: 30px;
          margin-right: 10px;
        }
        strong{
          font-size: 16px;
          color:#784824;
          letter-spacing:5px
        }
      }
      &>p:not(:first-child){
        margin-left: 5px;
        width: 210px;
        height: 50px;
        border-bottom: 2px solid ;
        border-image: linear-gradient( #E8E8E8, #FFFFFF) 30 30;
        .iconfont{
          font-size: 25px;
        }
        .icon-lianmengchengyuan{
          color:#4E504F;
        }
        strong{
          margin: 0 15px 0 15px;
          font-size: 16px;
        }
        span{
          color:#B5B5B5;
        }
      }
      &>p:nth-last-child(2){
        .icon-shequ{
          color:#9E6659;
        }
        strong{
          color:#787878;
        }
      }
      &>p:last-child{
        border-bottom: none;
        .icon-tougao{
          color:#D7DBDC;
        }
        strong{
          color:#787878;
        }
      }
    }
  }
  .content-box{
    width: 980px;
    margin-top: 10px;
    background: #FFFFFF;
    padding:10px 10px 10px 10px;
    border: 1px #E2E2E2 solid;
    background: #FFFFFF;
  }
  .longImg{
    width: 980px;
    margin-top: 10px;
    @include flex(row,center,center);
    height: 108px;
    border: 1px #E2E2E2 solid;
  }
  .f2{
    .culture{
      height:408px;
      width:238px;
      border:$border;
      .culture-box{
        padding-left: 10px;
        .subImg{
          width: 216px;
          height: 140px;
          padding: 4px;
          border: 1px #eee solid;
          border-bottom: 1px #ddd solid;
          img{
            width:206px;
            height:130px;
          }
        }
        ul{
          color: #666;
          list-style-type:square !important;
          margin:15px 0 15px 0;
          li:before{
            content: "\2022";
            color: #666666;
            font-size: 16px;
            margin-right: 10px;
          }
         li{
           width:225px;
           cursor: pointer;
           overflow: hidden;
           white-space: nowrap;
           text-overflow:ellipsis;
           padding-right: 10px;
           a{
             font-size: 12px;
           }
         }
        }
        .imgArea{
          img{
            width:220px;
            height:60px;
          }
        }
      }
    }
    .tecAndMagazine{
      width:460px;
      height:430px;
      .subTitle{
        border:$border;
      }
      .technology{
        ul{
          margin:10px 0 10px 0;
          li:before{
            content: "\2222";
            color: #666666;
            font-size: 12px;
            margin-right: 10px;
          }
          li{
            width:460px;
            padding: 0 10px 0 10px;
            color: #666;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            line-height: 20px;
            align-items: center;
            a{
              width:292px;
              font-size: 12px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow:ellipsis;
            }
            span{
              margin-left: 82px;
            }
          }
        }
      }
      .Magazine{
        &>div{
          display: flex;
          span{
            width:96px;
            height:105px;
            border:$border;
            text-align: center;
            margin-right: 15px;
            img{
              width:90px;
              height:100px;
            }
          }
          div>p:first-child{
            color: #795130;
            font-size: 12px;
            margin-bottom: 10px;
          }
          div>p:not(:first-child){
            color:#999999;
            font-size: 12px;
            line-height: 20px;
          }
        }
        &>p:last-child{
          margin-top:10px;
          padding-top: 20px;
          width:450px;
          border-top:1px dashed rgba(153,153,153,0.5);
          span:before{
            content: "\2022";
            color: red;
            font-size: 16px;
            margin-right: 10px;
          }
          span{
            color:#795130;
            margin-right:50px;
          }
        }
      }
    }
    .chAndExpert{
      width:238px;
      height:431px;
      &>div{
        border: 1px #DBC6B0 solid;
        border-radius: 4px;
        background: #f7f7f7;
        padding:5px 5px 5px 5px;
        .subTitle{
          background: #855A36;
          border-radius: 4px;
          color:#FFFFFF !important;
          strong{
            color:#FFFFFF !important;
          }
        }
        ul{
          li:before{
            content: "\2022";
            color: #666666;
            font-size: 14px;
            margin-right: 10px;
            line-height: 20px;
          }
          li{
            padding:0 10px 0 10px;
            width:220px;
            cursor: pointer;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
            a{
              font-size: 12px;
              color:#795130;
            }
          }
        }
        }
      span{
        img{
          margin:10px 0 10px 0;
          width:239px;
          height:51px;
        }
      }
    }
  }
  .f3{
    .f3-content{
      display: flex;
      width:720px;
      flex-wrap: wrap;
      &>div{
        cursor: pointer;
        margin:0 10px 10px 0px;
        width:349px;
        height:190px;
        border:$border;
        .image-text{
          padding: 0 10px 10px 10px;
          display: flex;
          &>div:first-child{
            margin-right: 18px;
            &>p:first-child{
              width:126px;
              height:96px;
              border:$border;
              padding:3px 3px 3px 3px;
              img{
                width:120px;
                height:90px
              }
            }
            &>p:last-child{
              margin-top: 10px;
              color: #795130;
              font-size: 12px;
              width:120px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              white-space: normal;
              text-overflow: ellipsis;
            }
          }
          &>div:last-child{
            width:190px;
            height:135px;
            overflow:hidden;
            text-overflow:ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            color: #666;
            font-size: 12px;
            line-height: 23px;
          }
        }
      }
    }
    .job{
      width:238px;
      height:392px;
      border:$border;
      ul{
        padding:0 10px 10px 10px;
        li:before{
        content: "\2022";
        color: #666666;
        font-size: 14px;
        margin-right: 10px;
        line-height: 20px;
      }
        li{
          width:210px;
          line-height: 21px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          a{
            color:#999;
            font-size: 12px;
          }
        }
      }
      span{
        margin:10px 0 0 10px;
      }
    }
  }
  .f4{
    .f4-content{
      width:706px;
      height:410px;
      border:$border;
      .f4-title{
        display: flex;
        align-items: center;
        height:30px;
        border-bottom: $border;
        &>strong:first-child{
          padding-left: 15px;
          width: 120px;
          background: #F3F3F3;
          line-height: 30px;
          height:30px;
          color: #795130;
          .iconfont{
            margin-left: 10px;
            color: #E0E0E0;
            font-size: 32px;
            float: right;
          }
        }
        span{
          color: #795130;
          font-size: 12px;
          margin-left:15px;
          cursor: pointer;
        }
        .f4-titleAttive{
          height:20px;
          padding: 0 15px 0 15px;
          border-radius: 5px;
          color:#FFFFFF;
          line-height: 20px;
          background: #8B5F3A;
        }
      }
      .imageText{
        padding: 15px 0 15px 15px;
        ul{
          li{
            margin:0 8px 22px 0;
            span{
              width:126px;
              height:126px;
              border: 3px #eee solid;
              @include flex(row,center,center);
              margin-bottom: 10px;
              img{
                width:100px;
                height:100px;
              }
            }
            p{
              width:120px;
              text-align: center;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .content-right{
      &>div{
        width:238px;
        height:200px;
        border:$border;
        margin-bottom: 10px;
        ul{
          padding-left: 10px;
          li:before{
            content: "\2022";
            color: #666666;
            font-size: 14px;
            margin-right: 10px;
            line-height: 20px;
          }
          li {
            width: 210px;
            line-height: 21px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;

            a {
              color: #795130;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .login{
    position: absolute;
    left:250px;
    top:0;
    z-index: 1000;
    width:414px;
    height:244px;
    border:$border;
    background: #FFFFFF;
    .lo-title{
      padding: 0 10px;
      @include flex(row,space-between,center);
      color:#FFFFFF;
      height: 30px;
      background: #9E7348;
      border: 1px solid #FFFFFF;
      .el-icon-close{
        cursor: pointer;
      }
    }
    .lo-info{
      margin: 20px 0 0  50px;
      span{
        color: #999;
        width:80px;
        margin-right: 5px;
        text-align: right;
      }
      input{
        width: 192px;
        padding: 2px 0 0 9px;
        height: 22px;
        border:1px solid #A1764C;
        border-radius: 5px;
        background: rgba(250,250,250,0.7);
      }
    }
    .userReg{
      margin: 15px 0 15px 120px;
      span{
        color: #795130;
        text-decoration: none;
        cursor: pointer;
        margin-left: 20px;
      }
    }
    &>p:last-child{
      width:380px;
      margin-left: 15px;
      border-top:$border;
      border-color:#CCCCCC;
      text-align: center;
      span{
        width:84px;
        height:26px;
        line-height: 26px;
        text-align: center;
        margin: 20px 0 0 10px;
        border-radius: 5px;
      }
      &>span:first-child{
        background: #875B37;
        color:#FFFFFF;
        border:1px solid #5D3E26;
        margin-left: 50px;
      }
      &>span:last-child{
        background:#E8E8E8;
        border:1px solid #CDCDCD;
        color:black;
      }
    }
  }
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #7A7A7A;
    opacity: 0.7;
    z-index: 100;
    display: none;
  }
</style>

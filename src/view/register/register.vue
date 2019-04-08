<template>
  <div class="py">
    <headerArea></headerArea>
    <div class="container">
      <p class="title">
        <span><i class="el-icon-caret-right"></i><strong>新用户注册</strong></span>
      </p>
      <div class="regAres">
        <div class="left">
          <p>
            <i class="iconfont icon-zhuce"></i>
            <strong>{{ regText }}</strong>
          </p>
          <p><strong>欢迎您加入咖啡网</strong></p>
        </div>
        <div class="right">
          <div class="regInfo" v-if="showTermCenter===false">
            <p>
              <label class="star">真实姓名：</label>
              <input type="text" />
            </p>
            <p class="sex">
              <label class="star">性别：</label>
              <span><input type="radio" name="sex"/>男</span>
              <span><input type="radio" name="sex"/>女</span>
              <span><input type="radio" name="sex"/>保密</span>
            </p>
            <p>
              <label class="star">密码：</label>
              <input type="text" />
            </p>
            <p>
              <label class="star">密码确认：</label>
              <input type="text" />
            </p>
            <p>
              <label>验证码：</label>
              <input type="text" class="code" />
              <span>4356</span>
            </p>
            <p class="inputCode">
              <span>请输入以上验证码，</span>
              <span>看不清，换一张</span>
            </p>
            <p class="agree">
              <span><input type="checkbox" />我已阅读并接受</span>
              <span @click="itemServer">《服务条款》</span>
            </p>
            <p class="operation">
              <span>注册用户</span>
              <span>取消注册</span>
            </p>
          </div>
          <div class="termCenter" v-else>
            <p>
              1、在本站注册的会员，必须遵守《互联网电子公告服务管理规定》，不得在本站发表诽谤他人，
              侵犯他人隐私，侵犯他人知识产权，传播病毒，政治言论，商业讯息等信息。
            </p>
            <p>
              2、在所有在本站发表的文章，本站都具有最终编辑权，并且保留用于印刷或向第三方发表的权利 ，
              如果你的资料不齐全，我们将有权不作任何通知使用你在本站发布的作品。
            </p>
            <p>
              3、在登记过程中，您将选择注册名和密码。注册名的选择应遵守法律法规及社会公德。您必须对您的密码保密，
              您将对您注册名和密码下发生的所有活动承担责任。
            </p>
            <p>
              4、在本站注册的会员，必须遵守《互联网电子公告服务管理规定》，不得在本站发表诽谤他人，
              侵犯他人隐私，侵犯他人知识产权，传播病毒，政治言论，商业讯息等信息。
            </p>
            <p>
              5、在所有在本站发表的文章，本站都具有最终编辑权，并且保留用于印刷或向第三方发表的权利，
              如果你的资料不齐全，我们将有权不作任何通知使用你在本站发布的作品。
            </p>
            <p>
              6、在登记过程中，您将选择注册名和密码。注册名的选择应遵守法律法规及社会公德。
              您必须对您的密码保密，您将对您注册名和密码下发生的所有活动承担责任。
            </p>
            <p>
              7、在所有在本站发表的文章，本站都具有最终编辑权，并且保留用于印刷或向第三方发表的权利，
              如果你的资料不齐全，我们将有权不作任何通知使用你在本站发布的作品。注册名的选择应遵守法律法规及社会公德。
            </p>
        </div>
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
  name: 'register',
  components: {headerArea, footArea},
  data () {
    return {
      regText: '新用户注册',
      showTermCenter: false
    }
  },
  methods: {
    itemServer () {
      this.showTermCenter = true
      this.regText = '服务条款'
      console.log(0)
    }
  }
}
</script>
<style lang="scss">
  @import '../../style/basic.scss';
  $border:1px #ddd solid;
  .py{
    width: 100%;
    background: #F2F2F2;
  }
  .container{
    height:514px;
    border:$border;
    margin-top: 15px;
    background: #FFFFFF;
  }
  .star:before{
    content: "*";
    color:#FF6600;
    margin-right: 5px;
  }
  .title{
    height:30px;
    line-height: 30px;
    background: #FAFAFA;
    border-bottom: $border;
    .el-icon-caret-right{
      font-size: 15px;
      margin: 0 10px 0 10px;
      color:#95653E;
    }
  }
  .regAres{
    display: flex;
    .left{
      width:256px;
      height:443px;
      margin-top: 20px;
      border-right:$border;
      padding-top: 30px;
      text-align: center;
      .iconfont{
        font-size: 25px;
        color:#BEBEBE;
        margin-right: 10px;
      }
      p{
        margin-bottom: 10px;
      }
      &>p:first-child{
        strong{
          color: #B2653F;
          font-size: 20px;
        }
      }
      &>p:last-child{
        strong{
          color: #7F7F7F;
          font-size: 14px;
          margin-left: 50px;
        }
      }
    }
    .right{
      padding:50px 0px 0 50px;
      width:626px;
      .regInfo{
        p{
          margin-bottom: 15px;
          label{
            width:80px;
            text-align: right;
            height:20px;
            color: #666;
          }
          input[type="text"]{
            width:300px;
            height:22px;
            border-top: 1px #C0C0C0 solid;
            border-left: 1px #C0C0C0 solid;
            border-right: 1px #EDEDED solid;
            border-bottom: 1px #EDEDED solid;
          }
          input[type="radio"],input[type="checkbox"]{
            vertical-align:middle;
            margin-right: 3px;
            cursor: pointer;
          }
          .code{
            width:80px !important;
          }
        }
        .inputCode,.agree{
          margin-left: 85px;
          &>span:first-child{
            color:#999999;
          }
          &>span:last-child{
            color:#795130;
            margin-left: -5px;
            cursor: pointer;
          }
        }
        .sex{
          span{
            margin-right: 10px;
          }
        }
        .operation{
          width:588px;
          height:40px;
          border-top:$border;
          margin-top: 40px;
          padding: 20px 0 0 80px;
          span{
            width: 86px;
            text-align: center;
            border-top: 1px #CDA583 solid;
            border-left: 1px #CDA583 solid;
            border-right: 1px #5E3511 solid;
            border-bottom: 1px #5E3511 solid;
            background: #A26C41;
            height: 24px;
            margin-left: 3px;
            color: #fff;
          }
        }
      }
      .termCenter{
        p{
          margin-bottom: 12px;
          color:#333;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
</style>

<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/solve_img.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">常态教室解决方案</h1>
        <h3 class="banner_h3 animated fadeInLeft">以信息化技术助力提升教学质量</h3>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img src="../../../static/common/images/s1.png" alt="">
              <h6>简洁设计</h6>
              <p>一键式操作可快速上手、高效上课</p>
            </li>
            <li>
              <img src="../../../static/common/images/s2.png" alt="">
              <h6>全能助手</h6>
              <p>多种教学工具，满足教学所有</p>
            </li>
            <li>
              <img style="margin-top: 25px" src="../../../static/common/images/s3.png" alt="">
              <h6>健康保护</h6>
              <p>激光投影方案，实现无尘化无辐射教学</p>
            </li>
          </ul>
          <ul class="animated fadeInRight" style="margin-top: -40px;animation-delay: .5s;">
            <li>
              <img src="../../../static/common/images/s4.png" alt="">
              <h6>硬核性能</h6>
              <p>优质航空蜂窝铝和微瓷材质，不易破坏 </p>
              <p>嵌入式设计+双系统，响应速度≤4ms </p>
              <p>激光投影，杜绝灵敏性问题</p>
            </li>
            <li>
              <img src="../../../static/common/images/s5.png" alt="">
              <h6>安全稳定</h6>
              <p>5V供电电压安全稳定</p>
              <p>防火、抗打击性能好</p>
            </li>
            <li>
              <img src="../../../static/common/images/s6.png" alt="">
              <h6>成本低廉</h6>
              <p>模块化设计，零件机器拆卸运输方便</p>
              <p>降低后期维护成本</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/cb1.png" alt="">
          </div>
          <div class="leftRiBoxR">
            <h5 class="cbh5">教学，从此不再复杂</h5>
            <p class="cbp">一键开启板书/课件/视频/作业/扫描/批注六合一功能</p>
            <p class="cbp">板书自动分类保存，随时随地分享回顾 </p>
            <p class="cbp">保护师生健康，从一块电子白板开始</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR">
            <h5 class="cbh5">板书，从此不再繁琐</h5>
            <p class="cbp">八大功能点选择，书写省心省力省时</p>
            <p class="cbp">各类学科工具应有尽有，随时满足教师需求 </p>
            <p class="cbp">保存分享板书，学生课后复习回顾不再愁</p>
          </div>
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/cb2.png" alt="">
          </div>
        </div>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>案例介绍</h2>

          <ul class="showLines">
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>海南省海口新埠中心小学</h6>
              <p>花费与传统多媒体设备不相上下的成本，建立无尘化无辐射的教学环境，全面保护师生健康，并辅助提高教学效率，丰富教学内容，让学生学习更加积极有效。</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>山西省长治市沁源县太岳中学</h6>
              <p>从传统教学迈入信息化教学，改善师生教学环境，为教学提质减负。</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>合肥市常春藤实验学校</h6>
              <p>国际化教学配备先进的信息化技术教学设备，让教学更显卓越质量。
              </p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img class="sdsd" src="../../../static/common/images/s_newsMord.png" alt="">
            </li>
          </ul>

        </div>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'solve',
    data() {
      return {
      }
    },
    mounted() {
      this._jq();
    },
    methods: {
      _jq() {
        $('.showLines li').hover(function () {
          $(this).addClass('animated bounce');
          $('.lines_bottom').eq($(this).index()).show();
        }, function () {
          $(this).removeClass('animated bounce')
          $('.lines_bottom').eq($(this).index()).hide();
        })
      },
    },
    computed: {
//      count(){
//        return this.$store.state.count
//      },
    }
  }
</script>

<style scoped>
  .solve {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .solve_main {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .solve_img {
    width: 100%;
    height: 532px;
    background: url('../../../static/common/images/solve_img.png') center no-repeat;
    position: relative;
    overflow: hidden;
    background-size: cover;
  }

  /*.solve_img img {*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-size: cover;*/
  /*}*/

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    margin: 208px 0 0 20%;
    font-weight: normal;
  }

  .banner_h3 {
    font-size: 22px;
    color: #fff;
    margin: 10px 0 0 20%;
    font-weight: normal;
    animation-delay: .5s;
  }

  .solve_imgList {
    width: 100%;
    height: 730px;
    overflow: hidden;
  }

  .solve_imgListMian {
    height: 100%;
  }

  .solve_imgListMian ul {
    width: 100%;
    height: 50%;
    /*background: red;*/
    display: flex;
    justify-content: center;
  }

  .solve_imgListMian ul li {
    text-align: center;
    margin: 80px 0 0 90px;
    color: #555;
    width: 312px;
  }

  .solve_imgListMian ul li img {
    margin-bottom: 30px;
  }

  .solve_imgListMian ul li h6 {
    font-size: 24px;
    margin-bottom: 10px;
font-weight: normal;
  }

  .solve_imgListMian ul li p {
    font-size: 18px;
  }
  .leftRi{
    width: 100%;
    height: 600px;
    overflow: hidden;
    background: #F9F9F9;
  }
  .leftRiBox{
    height: 100%;
  }
  .leftRiBoxL{
    width: 50%;
    height: 100%;
    float: left;
  }
  .leftRiBoxR{
    width: 50%;
    height: 100%;
    float: left;
  }
  .cbimg{
    margin-top: 136px;
  }
  .cbh5{
    font-size: 30px;
    font-weight: normal;
    color: #4081F4;
    margin:226px 0 10px 0 ;
  }
  .cbp{
    color: #555555;
    font-size: 23px;
  }

  .information{
    width: 100%;
    height: 560px;
    background: #FBFBFB;
    overflow: hidden;
  }
  .information_box h2{
    font-size: 30px;
    color: #545454;
    text-align: center;
    margin: 46px 0;
  }

  .information_box ul{
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    /*background: red;*/
  }
  .information_box ul li{
    width: 220px;
    height: 341px;
    background: white;
    padding: 10px;
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    margin-left:44px ;
    box-sizing: border-box;
    text-align: center;
  }
  .information_box ul li img{
    width: 177px;
    height: 177px;
    background-size: cover;
    margin-top: 10px;
  }
  .information_box ul li h6{
    font-size: 15px;
    color: #535353;
    margin-bottom: 10px;
  }
  .information_box ul li p{
    font-size: 16px;
    color: #535353;
    text-align: left;
    text-indent: 16px;
    margin-bottom: 12px;
    height: 88px;
    width: 100%;
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
  }
  .lines{
    position: absolute;
    left: 10px;
    top: 10px;
    background: #4081F4;
    height: 1px;
    width: 6px;
  }
  .lines_bottom{
    width: 100%;
    height: 6px;
    background: #4081f4;
    position: absolute;
    left: 0;
    bottom: 0;
    display: none;
    transition: .5s;
  }
  .sdsd{
    position: absolute;
    left: 0;
    top: 0;
    width: 220px!important;
    height: 341px!important;
    background-size: cover;
    margin: 0!important;
    cursor: pointer;
  }
</style>

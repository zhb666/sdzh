<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/xy_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">智慧校园解决方案</h1>
        <h3 class="banner_h3 animated fadeInLeft">重新定义“学校”的未来形态</h3>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img style="margin-top: 20px" src="../../../static/common/images/xLixt1.png" alt="">
              <h6>智慧图书馆</h6>
            </li>
            <li>
              <img style="margin-top: 26px" src="../../../static/common/images/xLixt2.png" alt="">
              <h6>智慧宿舍</h6>
            </li>
            <li>
              <img style="margin-top: 22px" src="../../../static/common/images/xLixt3.png" alt="">
              <h6>智慧食堂</h6>
            </li>
            <li>
              <img style="margin-top: 22px" src="../../../static/common/images/xLixt4.png" alt="">
              <h6>校园安防系统</h6>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/x_img1.png" alt="">
          </div>
          <div class="leftRiBoxR">
            <h5 class="cbh5">智慧图书馆</h5>
            <p class="cbp">通过云端平台，实现人脸识别打卡、自动记录学生读书喜好</p>
            <p class="cbp">和读书历史，对学生进行阅读行为轨迹分析与个性化推荐图</p>
            <p class="cbp">书清单，并为同样爱好的学生组建交流社群，从线下的个人</p>
            <p class="cbp">阅读行为联动至线上的公阅读交流社区，让图书馆真正变成</p>
            <p class="cbp">读书爱好者的天堂。</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR">
            <h5 class="cbh5">智慧宿舍</h5>
            <p class="cbp">定时定位人脸识别打卡，保障学生晚上安全危急时刻自动向</p>
            <p class="cbp">家人/教师通报，保证家校消息互通，让家长放心学生的安全。</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img class="cbimg" src="../../../static/common/images/x_img2.png" alt="">
          </div>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/x_img3.png" alt="">
          </div>
          <div class="leftRiBoxR">
            <h5 class="cbh5">智慧食堂</h5>
            <p class="cbp">以自助餐化形式为学生提供自主选菜与称重扫码付款服务，</p>
            <p class="cbp">通过学生的扫码记录自动生成并分析学生每日/月/年的食用</p>
            <p class="cbp">通过提醒功能来全面保障学生健康与便捷生活；</p>
            <p class="cbp">食堂可通过AI自主学习功能，智能监测每样菜品的每日不同</p>
            <p class="cbp">需求量，做到控质控量，达到环保、节约粮食的目的。</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR">
            <h5 class="cbh5">校园安防系统</h5>
            <p class="cbp">对校园进行智能监控与人脸识别，并具备紧急报警系统功能，</p>
            <p class="cbp">可有效预防及制止校园暴力，防范危险性行为，保证校园师生安全。</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img class="cbimg" src="../../../static/common/images/x_img4.png" alt="">
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'campus',
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
    background: url('../../../static/common/images/xy_bg.png') center no-repeat;
    position: relative;
    overflow: hidden;
    background-size: cover;
  }

  .solve_img img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    margin: 208px 0 0 18%;
    font-weight: normal;
  }

  .banner_h3 {
    font-size: 22px;
    color: #fff;
    margin: 10px 0 0 18%;
    font-weight: normal;
    animation-delay: .5s;
  }

  .solve_imgList {
    width: 100%;
    height: 430px;
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
    color: #555;
    padding: 110px 80px;
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
    margin-top: 56px;
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

<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img class="cnmbs" src="../../../static/common/images/js_bg.png" alt=""/>-->
        <img class="banner_h1img animated fadeInRightBig" src="../../../static/common/images/js_logo.png" alt=""/>
        <h1 class="banner_h1 animated fadeInLeft">助学精灵</h1>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img style="margin-top: 30px" src="../../../static/common/images/jsList1.png" alt="">
              <h6>简约设计</h6>
            </li>
            <li>
              <img style="margin-top: 30px" src="../../../static/common/images/jsList2.png" alt="">
              <h6 style="margin-top: 8px">海量工具</h6>
            </li>
            <li>
              <img style="margin-top: 16px" src="../../../static/common/images/jsList3.png" alt="">
              <h6 style="margin-top: -5px">智能教学</h6>
            </li>
            <li>
              <img style="margin-bottom: 16px" src="../../../static/common/images/jsList4.png" alt="">
              <h6 style="margin-top: -4px">高频互动</h6>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/jsimg1.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 100px;box-sizing: border-box;">
            <h5 class="cbh5" style="margin-top: 180px;">跨域互动，并没那么难</h5>
            <p class="cbp">除了兼具常态智慧教室解决方案功能优势</p>
            <p class="cbp">还支持跨地域、跨空间互动</p>
            <p class="cbp">学生问题多、老师顾不来</p>
            <p class="cbp">互动直播教学系统</p>
            <p class="cbp">满足双师远程互动、名师远程教学等各类需求</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR" style="padding-left: 60px;box-sizing: border-box;">
            <h5 class="cbh5" style="margin-top: 180px;">实时直播，也可以很简单</h5>
            <p class="cbp">一个系统，一个云平台</p>
            <p class="cbp">随时直播分享重要课程</p>
            <p class="cbp">老师、学生、板书镜头画面灵活调整</p>
            <p class="cbp">PC、手机、平板</p>
            <p class="cbp">随心所欲地观看，淋漓尽致地分享</p>
            <p class="cbp">领导还可进行远程督学</p>
            <p class="cbp">外出也不误校园管理</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/jsimg2.png" alt="">
          </div>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/jsimg3.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 110px;box-sizing: border-box;">
            <h5 class="cbh5">自制微课，共享优质资源</h5>
            <p class="cbp">实时录播课堂，自动生成并上传精品微课</p>
            <p class="cbp">不受时间、地域限制</p>
            <p class="cbp">让其他师生家长均可一睹课堂风采</p>
          </div>
        </div>
      </div>

      <div class="imgBtonns">
        <router-link to="/download" tag="p">
          <div>立即下载体验</div>
        </router-link>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'Introduce',
    data() {
      return {}
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

        $('.imgBtonns div').on('click', function () {
          $(document).scrollTop(0);
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
    background: url('../../../static/common/images/js_bg.png') center no-repeat;
    position: relative;
    overflow: hidden;
    background-size: cover;
    text-align: center;
  }

  .cnmbs {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
  }

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    font-weight: normal;
  }

  .banner_h1img {
    width: 240px !important;
    height: 240px !important;
    margin: 100px auto 0 auto;
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
    padding: 110px 90px;
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

  .leftRi {
    width: 100%;
    height: 600px;
    overflow: hidden;
    background: #F9F9F9;
  }

  .leftRiBox {
    height: 100%;
  }

  .leftRiBoxL {
    width: 50%;
    height: 100%;
    float: left;
  }

  .leftRiBoxR {
    width: 50%;
    height: 100%;
    float: left;
  }

  .cbimg {
    margin-top: 56px;
  }

  .cbh5 {
    font-size: 30px;
    font-weight: normal;
    color: #4081F4;
    margin: 226px 0 10px 0;
  }

  .cbp {
    color: #555555;
    font-size: 23px;
  }

  .information {
    width: 100%;
    height: 560px;
    background: #fff;
    overflow: hidden;
  }

  .information_box h2 {
    font-size: 30px;
    color: #545454;
    text-align: center;
    margin: 46px 0;
  }

  .information_box ul {
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    /*background: red;*/
  }

  .information_box ul li {
    width: 220px;
    height: 341px;
    background: white;
    padding: 10px;
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    margin-left: 44px;
    box-sizing: border-box;
    text-align: center;
  }

  .information_box ul li img {
    width: 177px;
    height: 177px;
    background-size: cover;
    margin-top: 10px;
  }

  .information_box ul li h6 {
    font-size: 15px;
    color: #535353;
    margin-bottom: 10px;
  }

  .information_box ul li p {
    font-size: 16px;
    color: #535353;
    margin-bottom: 12px;
    height: 88px;
    width: 100%;
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
  }

  .imgBtonns {
    width: 100%;
    height: 446px;
    background: url('../../../static/common/images/js_bImg.png') no-repeat;
    overflow: hidden;
  }

  .imgBtonns div {
    width: 255px;
    height: 56px;
    line-height: 56px;
    background: #FFBD6B;
    color: #464646;
    font-size: 30px;
    margin: 200px auto;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
  }
</style>

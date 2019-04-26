<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/hd_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">互动教室解决方案</h1>
        <h3 class="banner_h3 animated fadeInLeft">致力于解决校区、城乡之间 </h3>
        <h3 class="banner_h3 animated fadeInLeft">教育资源不均衡问题</h3>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img src="../../../static/common/images/hdList1.png" alt="">
              <h6>互动</h6>
            </li>
            <li>
              <img style="margin-top: 12px" src="../../../static/common/images/hdList2.png" alt="">
              <h6 style="margin-top: 4px">共享</h6>
            </li>
            <li>
              <img style="margin-top: -8px" src="../../../static/common/images/hdList3.png" alt="">
              <h6>留存</h6>
            </li>
            <li>
              <img style="margin-top: 2px" src="../../../static/common/images/hdList4.png" alt="">
              <h6 style="margin-top: 2px">督学</h6>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/hdImg1.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 100px;box-sizing: border-box">
            <h5 class="cbh5" style="margin-top: 180px;">跨域互动，并没那么难</h5>
            <p class="cbp">除了兼具常态智慧教室解决方案功能优势</p>
            <p class="cbp">还支持跨地域、跨空间互动</p>
            <p class="cbp">互动直播教学系统</p>
            <p class="cbp">满足双师远程互动、名师远程教学等各类需求</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR">
            <h5 class="cbh5"  style="margin-top: 180px;">实时直播，也可以很简单</h5>
            <p class="cbp">一个系统，一个云平台 </p>
            <p class="cbp">随时直播分享重要课程</p>
            <p class="cbp">老师、学生、板书镜头画面灵活调整</p>
            <p class="cbp">PC、手机、平板</p>
            <p class="cbp">随心所欲地观看，淋漓尽致地分享</p>
            <p class="cbp">领导还可进行远程督学</p>
            <p class="cbp">外出也不误校园管理</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/hdImg2.png" alt="">
          </div>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img style="margin-top: 150px" class="cbimg" src="../../../static/common/images/hdImg3.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 100px;box-sizing: border-box">
            <h5 class="cbh5">自制微课，共享优质资源</h5>
            <p class="cbp">实时录播课堂，自动生成并上传精品微课</p>
            <p class="cbp">不受时间、地域限制</p>
            <p class="cbp">让其他师生家长均可一睹课堂风采</p>
          </div>
        </div>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>案例介绍</h2>

          <ul class="showLines">
            <li>

              <img class="showLines_liImg" src="../../../static/common/images/al_list/h_1.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../../static/common/images/al_list/h_11.png" alt="">
                <h6>安徽建筑大学</h6>
                <p>在常态教室的基础上，增设校区互动、 智能化数据采集 、 物联网监控、自动直录播等功能，提高南北校区之间的互动频率与各类专业课的课堂效率。</p>
              </div>

            </li>
            <li>

              <img class="showLines_liImg" src="../../../static/common/images/al_list/h_2.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../../static/common/images/al_list/h_22.png" alt="">
                <h6>中国劳动关系学院</h6>
                <p>以现代信息技术代替传统黑板，并加入互动直录播设备，不仅是对课堂环境的优化，更是互动教学的进步。</p>
              </div>

            </li>
            <li>

              <img class="showLines_liImg" src="../../../static/common/images/al_list/h_3.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../../static/common/images/al_list/h_33.png" alt="">
                <h6>湖南师范大学</h6>
                <p>搭建双师互动系统、录播教室等设备，解决教师间的课堂互动交流问题。</p>
              </div>

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
    name: 'Interaction',
    data() {
      return {
      }
    },
    mounted() {
      // this._jq();
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
    background: url('../../../static/common/images/hd_bg.png') center no-repeat;
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
    padding: 110px 130px;
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
    background: #fff;
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
    height: 382px;
    display: flex;
    justify-content: center;
    /*background: red;*/
  }
  .information_box ul li{
    width: 266px;
    height: 382px;
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    box-sizing: border-box;
    text-align: center;
    transition: .5s;
  }
  .showLines_liImg{
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    transition: .3s;
  }
  .information_box ul li:hover{
    transform: scale(1.1);
  }
  .showLines_liDiv{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /*text-align: center;*/
    padding: 0 31px;
    box-sizing: border-box;
    /*background: red;*/
    /*z-index: 100;*/
  }
  .showLines_liDiv h6{
    font-size: 17px;
    color: white;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .showLines_liDiv p{
    font-size: 12px;
    color: white;
    text-align: left;
  }

  .imgsheed{
    width: 78px;
    height: 78px;
    margin: 82px auto 28px auto ;
  }

  .sdsd{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0!important;
    cursor: pointer;
  }
</style>

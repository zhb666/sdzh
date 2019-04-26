<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/gy_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">关于我们</h1>
        <h3 class="banner_h3 animated fadeInLeft">ABOUT AS</h3>
        <p class="banner_h1 animated fadeInRightBig">
          水滴智慧科技（深圳）有限公司于2013年05月30日成立，是一家智慧校园解决方案与工具提供商。其研发团队主要由原谷歌和华为研发人员组建，致力从事智慧教室一体化解决方案的研发、生产和销售，为全国大中专院校、中小学、教育机构、企业培训等信息化发展需求提供技术支持。</p>
        <p class="banner_h1 animated fadeInRightBig">
          在转型做互联网智慧教育市场不到一年的时间里，水滴智慧已建立深圳、东莞、北京、海南、山西、湖南、安徽等营销中心，服务客户逾两百家。</p>
        <div @click="videoFUn" class="Btns animated fadeInLeft"></div>
      </div>

      <div class="aboutList">
        <div class="aboutListMian w1200">

          <h6 class="animated fadeInRightBig">企业品牌</h6>
          <p>愿景：打造“互联网+教育”生态圈，让千万师生享受智慧教学</p>
          <p>使命：用科技的力量改变传统教育方式</p>
          <p>价值观：团结、勇敢、创新、挑战</p>

          <h6 class="animated fadeInRightBig">企业荣誉</h6>
          <ul class="aboutImgList">
            <li>
              <img src="../../../static/common/images/aboutImg1.png" alt="">
              <p>企业信用等级证书</p>
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg2.png" alt="">
              <p>ISO认证证书</p>
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg2.png" alt="">
              <p>ISO认证证书</p>
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg3.png" alt="">
              <p>OHSAS认证证书</p>
            </li>
          </ul>

        </div>
      </div>

      <div class="about_lishi">
        <div class="about_lishiMain w1200">
          <h6>发展历史</h6>

          <div class="about_lianxi">
            <ul>
              <li>
                <div class="about_liline"></div>
                <h5>联系我们</h5>
                <p>电话：0755-26640295</p>
                <p>邮箱：waterdrop@shuidizhihui.com </p>
                <p>微信:</p>
                <img src="../../../static/common/images/l_erweima.png" alt="" class="dinwgeis">
              </li>
              <li>
                <div class="about_liline"></div>
                <h5 style="margin-bottom: 20px;">全国地址</h5>
                <p>深圳（总部）：南山区高新科技园虚拟大学院综合楼C区2楼202室</p>
                <p>深圳（工厂）：龙岗区布澜路21号联创科技园2期30栋</p>
                <p>北京：海淀区清华科技园玉泉慧谷10栋A座1楼</p>
                <p>海南：海口市美兰区海南科技职业学院图书馆9楼</p>
                <p>东莞：南城区中天联科国际信息产业园8栋303</p>
                <p>山西：太原市小店区平阳南路天鑫花园一单元1401</p>
                <p>安徽：合肥市庐阳区颖上路505号领域花园1,2幢商261</p>
                <p>湖北：武汉市洪山区鲁磨路306号中建大厦1902号</p>
              </li>
            </ul>
          </div>
        </div>
        <!--<div class="about_line"></div>-->

        <!--<div class="about_date about_s1">-->
        <!--<h4>2013</h4>-->
        <!--<p>公司成立</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s2">-->
        <!--<h4>2018</h4>-->
        <!--<p>北京营销中心成立</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s3">-->
        <!--<h4>2018</h4>-->
        <!--<p>负责海南科技职业学校</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s4">-->
        <!--<h4>2018</h4>-->
        <!--<p>山西营销中心成立</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s5">-->
        <!--<h4>2018</h4>-->
        <!--<p>东莞营销中心成立</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s6">-->
        <!--<h4>2018</h4>-->
        <!--<p>进军智慧教育市场</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s7">-->
        <!--<h4>2018</h4>-->
        <!--<p>山西展会</p>-->
        <!--</div>-->
        <!--<div class="about_date about_s8">-->
        <!--<h4>2018</h4>-->
        <!--<p>向海南小学捐赠</p>-->
        <!--</div>-->
      </div>


    </div>

    <div class="video_box" v-if="videoOFF">
      <div class="viBoxs">
        <video autoplay="autoplay" poster="" controls="controls">
          <source src="../../../static/common/video.mp4" type="video/mp4">
          <!-- <source src="/path/to/video.webm" type="video/webm">-->
          <!-- Captions are optional -->
        </video>
      </div>
      <div class="hide_video" @click="videoOFF = false;">关闭</div>
    </div>

  </div>

</template>

<script>
  // import '../../../static/common/js/plyr'
  export default {
    name: 'Interaction',
    data() {
      return {
        videoOFF: false
      }
    },
    mounted() {
      this._jq();
      // plyr.setup();
    },
    methods: {
      videoFUn() {
        this.videoOFF = true;
        // plyr.setup();
      },
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
  @import url('../../../static/common/css/plyr.css');

  .video_box {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    /*opacity: .8;*/
    position: fixed;
    left: 0;
    top: 0;
    /*padding: 10% 10%;*/
    box-sizing: border-box;
    z-index: 100;
  }
  .viBoxs{
    width: 60%;
    height: auto;
    /*background: red;*/
    margin: 100px auto;
  }

  .video_box video {
    width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
  }

  .hide_video {
    position: fixed;
    right: 21%;
    top: 118px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    z-index: 10000;
  }

  .hide_video:hover {
    color: #007aff;
  }

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
    background: url('../../../static/common/images/gy_bg.png') center no-repeat;
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
    z-index: -1;
  }

  .solve_img p {
    color: white;
    font-size: 20px;
    text-indent: 45px;
    font-family: PingFangSC-Regular;
    width: 888px;
    margin: 20px auto;
    text-align: left;
  }

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    color: #fff;
    margin: 66px 0 20px 0;
    font-weight: normal;
    text-align: center;
  }

  .banner_h3 {
    font-size: 19px;
    color: #fff;
    font-weight: normal;
    animation-delay: .5s;
    text-align: center;
  }

  .Btns {
    width: 148px;
    height: 41px;
    background: url('../../../static/common/images/gy_gk.png') no-repeat;
    margin: 50px auto;
    cursor: pointer;
  }

  .aboutList {
    width: 100%;
    height: 1024px;
    background: url('../../../static/common/images/gy_listiMG1.png') no-repeat;
    overflow: hidden;
  }

  .aboutListMian > h6 {
    font-size: 30px;
    color: #373737;
    font-family: ArialMT;
    text-align: center;
    margin: 118px 0 30px 0;
  }

  .aboutListMian > p {
    font-size: 26px;
    color: #373737;
    font-family: ArialMT;
    margin-left: 200px;
    margin-top: 10px;
  }

  .aboutImgList {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: left;
    margin-top: 60px;
  }

  .aboutImgList li {
    width: 269px;
    height: 398px;
    margin-left: 16px;
  }

  .aboutImgList li p {
    color: #454545;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }

  .about_lishi {
    width: 100%;
    height: 1282px;
    background: url('../../../static/common/images/about_bgs.png') center no-repeat;
    overflow: hidden;
    position: relative;
  }

  .about_lishiMain {
    position: relative;
  }

  .about_lishiMain > h6 {
    color: white;
    font-size: 39px;
    text-align: center;
    font-family: ArialMT;
    margin: 75px 0 150px 0;
  }

  .about_line {
    width: 994px;
    height: 21px;
    background: url('../../../static/common/images/about_line.png') no-repeat;
    position: absolute;
    top: 434px;
    left: 480px;
  }

  .about_date {
    width: 190px;
    height: 80px;
    position: absolute;
    /*background: red;*/
  }

  .about_date h4 {
    color: white;
    font-size: 39px;
    font-family: Arial-BoldMT;
  }

  .about_date p {
    color: white;
    font-size: 18px;
    font-family: PingFangSC-Regular;
  }

  .about_s1 {
    left: 450px;
    top: 480px;
  }

  .about_s2 {
    left: 560px;
    top: 320px;
  }

  .about_s3 {
    left: 820px;
    top: 320px;
  }

  .about_s4 {
    left: 1120px;
    top: 320px;
  }

  .about_s5 {
    left: 720px;
    top: 480px;
  }

  .about_s6 {
    left: 1000px;
    top: 480px;
  }

  .about_s7 {
    left: 1280px;
    top: 480px;
  }

  .about_s8 {
    left: 1420px;
    top: 480px;
  }

  .about_lianxi {
    width: 100%;
    height: 380px;
    /*background: red;*/
    margin-top: 680px;
  }

  .about_lianxi ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
  }

  .about_lianxi ul li {
    width: 550px;
    height: 372px;
    border-radius: 8px;
    background: rgba(64, 129, 244, .6);
    margin-right: 52px;
    position: relative;
    padding: 42px;
    box-sizing: border-box;
  }

  .about_liline {
    height: 3px;
    width: 50px;
    background: white;
  }

  .about_lianxi ul li h5 {
    font-size: 26px;
    color: white;
    margin: 52px 0 40px 0;
    font-weight: normal;
  }

  .about_lianxi ul li p {
    font-size: 15px;
    color: white;
    line-height: 24px;
    font-family: ArialMT;
  }

  .dinwgeis {
    position: absolute;
    right: 60px;
    top: 116px;
  }
</style>

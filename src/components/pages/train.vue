<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/sx-bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">实训智慧教室解决方案</h1>
        <h3 class="banner_h3 animated fadeInLeft">让实操教学更便捷 更智能 更高效</h3>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img src="../../../static/common/images/sx1.png" alt="">
              <h6>校企互动</h6>
            </li>
            <li>
              <img style="margin-top: 10px" src="../../../static/common/images/sx2.png" alt="">
              <h6>示范教学</h6>
            </li>
            <li>
              <img style="margin-top: 10px" src="../../../static/common/images/sx3.png" alt="">
              <h6>多组实训</h6>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/sx_list1.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 100px;box-sizing: border-box">
            <h5 class="cbh5">传统围观式教学</h5>
            <p class="cbp">学生看不清、老师教不细</p>
            <p class="cbp">学生问题多、老师顾不来</p>
            <p class="cbp">利用实训摄影机与大屏幕</p>
            <p class="cbp">同步示范教学、录制与回放齐用</p>
            <p class="cbp">一一解决传统实训教学弊端</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR" style="padding-left: 100px;box-sizing: border-box">
            <h5 class="cbh5">传统实训教学</h5>
            <p class="cbp">教学指导不到位、实操时间不足、教学效果差</p>
            <p class="cbp">通过学生分组实训</p>
            <p class="cbp">实时录制、回放、标注、点评、上传</p>
            <p class="cbp">让学生的实操跟上进度</p>
            <p class="cbp" style="box-sizing: ">同时还可远程互动</p>
            <p class="cbp">实现校企远程教学需求</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img class="cbimg" src="../../../static/common/images/sx_list2.png" alt="">
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
              <h6>海南科技职业学院</h6>
              <p>针对医护专业的师生打造实训智慧教室，成倍提高教师的师范教学效率，一个学期后，学生均能无盲点熟练掌握各种护理技能。</p>
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
    name: 'Interaction',
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
    background: url('../../../static/common/images/sx-bg.png') center no-repeat;
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
    font-size: 20px!important;
    font-weight: normal;
    color: #555555;
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
    text-align: left;
    text-indent: 16px;
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

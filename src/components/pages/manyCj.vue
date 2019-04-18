<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/sx_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">企业多场景解决方案</h1>
        <h3 class="banner_h3 animated fadeInLeft">倾其所有 为你造最特别的会议室</h3>
      </div>

      <div class="solve_imgList">
        <div class="solve_imgListMian w1200">
          <ul class="animated fadeInLeft" style="animation-delay: 1s;">
            <li>
              <img src="../../../static/common/images/d_list1.png" alt="">
              <h6>简洁高效</h6>
            </li>
            <li>
              <img style="margin-top: 22px" src="../../../static/common/images/d_list2.png" alt="">
              <h6>场地四合一</h6>
            </li>
            <li>
              <img style="margin-top: 22px" src="../../../static/common/images/d_list3.png" alt="">
              <h6>多媒体空间</h6>
            </li>
          </ul>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/d_img1.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 200px;box-sizing: border-box;">
            <h5 class="cbh5">高效的会议室场地</h5>
            <p class="cbp">一个白板，尽情书写天马行空的想法</p>
            <p class="cbp">一个话筒，开启高频互动的讨论空间 </p>
            <p class="cbp">一个助手，满足所有会议内容云同步</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR" style="padding-left: 200px;box-sizing: border-box;">
            <h5 class="cbh5">专业的电影院</h5>
            <p class="cbp">激光超短焦投影机</p>
            <p class="cbp">101寸大型高清晰度屏幕</p>
            <p class="cbp">顶级震撼声音音效</p>
            <p class="cbp">来桶爆米花加杯可乐</p>
            <p class="cbp">看场完美的私人电影</p>
            <p class="cbp">工作动力又有了</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img class="cbimg" src="../../../static/common/images/d_img2.png" alt="">
          </div>
        </div>
      </div>

      <div class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxL">
            <img class="cbimg" src="../../../static/common/images/d_img3.png" alt="">
          </div>
          <div class="leftRiBoxR" style="padding-left: 200px;box-sizing: border-box;">
            <h5 class="cbh5">也可秒变KTV</h5>
            <p class="cbp">再也不用考虑去哪唱k</p>
            <p class="cbp">下班直奔会议室</p>
            <p class="cbp">MV 画面、音响和麦全开</p>
            <p class="cbp">今晚麦霸决战到底</p>
            <p class="cbp">明天满血复活来上班</p>
          </div>
        </div>
      </div>

      <div style="background: white;" class="leftRi">
        <div class="leftRiBox w1200">
          <div class="leftRiBoxR" style="padding-left: 200px;box-sizing: border-box;">
            <h5 class="cbh5">还是员工活动中心</h5>
            <p class="cbp">智能化的多媒体设备</p>
            <p class="cbp">可以让你玩一场王者荣耀</p>
            <p class="cbp">你画我猜也不错</p>
            <p class="cbp">文化活动想要啥，就有啥</p>
          </div>
          <div class="leftRiBoxL" style="padding-left: 100px;box-sizing: border-box">
            <img class="cbimg" src="../../../static/common/images/d_img4.png" alt="">
          </div>
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
    background: url('../../../static/common/images/sx_bg.png') center no-repeat;
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

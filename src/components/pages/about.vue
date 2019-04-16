<template>

  <div class="solve">

    <div class="solve_main animated fadeInLeft">

      <div class="solve_img">
        <img src="../../../static/common/images/gy_bg.png" alt=""/>
        <h1 class="banner_h1 animated fadeInLeft">关于我们</h1>
        <h3 class="banner_h3 animated fadeInLeft">ABOUT AS</h3>
        <p class="banner_h1 animated fadeInRightBig">
          水滴智慧科技（深圳）有限公司于2013年05月30日成立，是一家智慧校园解决方案与工具提供商。其研发团队主要由原谷歌和华为研发人员组建，致力从事智慧教室一体化解决方案的研发、生产和销售，为全国大中专院校、中小学、教育机构、企业培训等信息化发展需求提供技术支持。</p>
        <p class="banner_h1 animated fadeInRightBig">在转型做互联网智慧教育市场不到一年的时间里，水滴智慧已建立深圳、东莞、北京、海南、山西、湖南、安徽等营销中心，服务客户逾两百家。</p>
        <div class="Btns"></div>
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
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg2.png" alt="">
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg2.png" alt="">
            </li>
            <li>
              <img src="../../../static/common/images/aboutImg3.png" alt="">
            </li>
          </ul>

        </div>
      </div>

      <div class="about_lishi">
        <div class="about_lishiMain w1200">
          <h6>发展历史</h6>
        </div>
        <div class="about_line"></div>
      </div>


    </div>

  </div>

</template>

<script>
  export default {
    name: 'Interaction',
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
    height: 669px;
    position: relative;
    overflow: hidden;
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

  .solve_img p{
    color: white;
    font-size: 24px;
    text-indent: 45px;
    font-family:PingFangSC-Regular;
    width: 888px;
    margin: 20px auto;
    text-align: left;
  }

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    color: #fff;
    margin: 150px 0 20px 0;
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
  .Btns{
    width: 148px;
    height: 41px;
    background: url('../../../static/common/images/gy_gk.png') no-repeat;
    margin: 50px auto;
    cursor: pointer;
  }
  .aboutList{
    width: 100%;
    height: 1024px;
    background: url('../../../static/common/images/gy_listiMG1.png') no-repeat;
    overflow: hidden;
  }
  .aboutListMian >h6{
    font-size: 30px;
    color: #373737;
    font-family:ArialMT;
    text-align: center;
    margin: 136px 0 30px 0;
  }
  .aboutListMian >p{
    font-size: 30px;
    color: #373737;
    font-family:ArialMT;
    margin-left: 200px;
    margin-top: 10px;
  }
  .aboutImgList{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: left;
    margin-top: 60px;
  }
  .aboutImgList li{
    width: 269px;
    height: 354px;
    margin-left: 16px;
  }
  .about_lishi{
    width: 100%;
    height: 1282px;
    background: url('../../../static/common/images/about_bgs.png') no-repeat;
    overflow: hidden;
    position: relative;
  }
  .about_lishiMain{
    position: relative;
  }
  .about_lishiMain >h6{
    color: white;
    font-size: 39px;
    text-align: center;
    font-family:ArialMT;
    margin:75px 0 150px 0 ;
  }
  .about_line{
    width: 994px;
    height: 21px;
    background: url('../../../static/common/images/about_line.png') no-repeat;
    position: absolute;
    top: 434px;
    left: 480px;
  }
</style>

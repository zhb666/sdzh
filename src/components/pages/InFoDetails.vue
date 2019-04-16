<template>

  <div class="solve">

    <div class="solve_main animated fadeInLeft">

      <div class="solve_img">
        <img src="../../../static/common/images/zx_bg.png" alt=""/>
        <h1 class="banner_h1 animated fadeInLeft">案例展示</h1>
        <h3 class="banner_h3 animated fadeInLeft">CASE PRESENTATION</h3>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>企业资讯</h2>

          <!--显示新闻-->
          <div class="newsBox w1200"></div>


        </div>
      </div>


    </div>

  </div>

</template>

<script>
  export default {
    name: 'information',
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
    height: 532px;
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
  }

  .banner_h1 {
    font-size: 49px;
    color: #fff;
    margin: 208px 0 0 300px;
    font-weight: normal;
  }

  .banner_h3 {
    font-size: 22px;
    color: #fff;
    margin: 10px 0 0 300px;
    font-weight: normal;
    animation-delay: .5s;
  }


  .information{
    width: 100%;
    height: auto;
    background: #FBFBFB;
    padding-bottom: 150px;
    overflow: hidden;
    position: relative;
  }
  .information_box{
    position: relative;
  }
  .information_box h2{
    font-size: 30px;
    color: #545454;
    text-align: left;
    margin: 108px 0 30px 160px;
  }

.newsBox{
  height: auto;
}

</style>

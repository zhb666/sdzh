<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/zx_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">资讯中心</h1>
        <h3 class="banner_h3 animated fadeInLeft">INFORMATION CENTER </h3>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>资讯中心</h2>
          <div class="ulLists">
            <ul>
              <li>全部</li>
              <li>企业资讯</li>
              <li>媒体报道</li>
            </ul>
          </div>
          <ul class="showLines">
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
            <li>
              <img src="../../../static/common/images/news1.png" alt="">
              <h6>扶智海南，海南科技职业...</h6>
              <p>又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···）的又一教学扶贫计划实现了。为帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市···</p>
              <div class="lines"></div>
              <div class="lines_bottom"></div>
            </li>
          </ul>


        </div>
      </div>

      <div class="hezuo"></div>

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
    background: url('../../../static/common/images/zx_bg.png') center no-repeat;
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

  .information_box >ul{
    width: 80%;
    height: auto;
    /*display: flex;*/
    /*justify-content: center;*/
    /*background: red;*/
    padding-bottom: 20px;
    margin: 0 auto;
    overflow: hidden;
  }
  .information_box> ul li{
    width: 220px;
    height: 341px;
    background: white;
    padding: 10px;
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    margin:30px 0 0 56px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    float: left;
  }
  .information_box> ul li img{
    width: 177px;
    height: 177px;
    background-size: cover;
    margin-top: 10px;
  }
  .information_box> ul li h6{
    font-size: 15px;
    color: #535353;
    margin-bottom: 10px;
  }
  .information_box> ul li p{
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
  .hezuo{
    width: 100%;
    height: auto;
    overflow: hidden;
    background: white;
  }
  .hezuo h3{
    font-size: 30px;
    color: #454545;
    text-align: center;
  }
  .ulLists{
    width: 260px;
    height: 30px;
    position: absolute;
    right: 220px;
    top: 0;
  }
  .ulLists ul{
    width: 100%;
    display: flex;
    justify-content: left;
  }
  .ulLists ul li{
    margin-left: 20px;
    color: #4081F4;
    font-size: 18px;
    cursor: pointer;
  }
  .ulLists ul li:hover{
    color: #007aff;
  }
</style>

<template>
  <div id="box">
    <div class="boxMian">

      <!--banner-->
      <div class="banner">
        <el-carousel :height="height">
          <el-carousel-item>
            <div class="boxImgs">
              <h1 class="banner_h1 animated fadeInLeft">水滴智慧</h1>
              <h3 class="banner_h3 animated fadeInRight">未来教育智造者</h3>
              <!--<img src="../../../static/common/images/banner_1.png" alt="">-->
            </div>
          </el-carousel-item>
        </el-carousel>

      </div>

      <!--解决方案-->
      <div class="Solve_box">
        <div class="Solve_box_box w1200">
          <h2>智慧教室解决方案优势</h2>
          <h2>智慧教室解决方案优势</h2>

          <div class="Solve_box_box_img1 Solve_box_box_img">
            <router-link to="/solve" tag="div">
              <img src="../../../static/common/images/1.png" alt="">
              <p>常态智慧教室</p>
            </router-link>
          </div>

          <div class="Solve_box_box_img2 Solve_box_box_img">
            <router-link to="/Interaction" tag="div">
              <img src="../../../static/common/images/2.png" alt="">
              <p>互动智慧教室</p>
            </router-link>
          </div>

          <div class="Solve_box_box_img3 Solve_box_box_img">
            <router-link to="/train" tag="div">
              <img src="../../../static/common/images/3.png" alt="">
              <p>实训智慧教室</p>
            </router-link>
          </div>

          <div class="Solve_box_box_img4 Solve_box_box_img">
            <router-link to="/manyCj" tag="div">
              <img src="../../../static/common/images/4.png" alt="">
              <p>多场景智慧会议室</p>
            </router-link>
          </div>

          <div class="Solve_box_box_img5 Solve_box_box_img">
            <router-link to="/campus" tag="div">
              <img src="../../../static/common/images/5.png" alt="">
              <p>智慧校园</p>
            </router-link>
          </div>

          <div class="po1 po animated zoomIn">
            具备常态教室基本功能；<br>
            实时/远程直播教学互动，教学资源共享；<br>
            远程督学功能，实时查看上课情况；<br>
            实时直播录播，自动生成微课云端分享<br>
          </div>

          <div class="po2 po animated zoomIn">
            具备常态教室基本功能；<br>
            校企实时远程互动；<br>
            同步示范教学；<br>
            多组实训录制视频回放/标注/点评/上传<br>
          </div>

          <div class="po3 po animated zoomIn">
            具备常态教室基本功能；<br>
            实时/远程直播教学互动，教学资源共享；<br>
            远程督学功能，实时查看上课情况；<br>
            实时直播录播，自动生成微课云端分享 <br>
          </div>

          <div class="po4 po animated zoomIn">
            极致高速的会议工具；<br>
            极致快速的会议内容同步工具；<br>
            极致震撼的视听多媒体软硬件结合；<br>
            智能会议室+KTV+电影院+员工活动中心<br>
            极大提升场地利用率和员工幸福指数<br>
          </div>

          <div class="po5 po animated zoomIn">
            智慧图书馆、智慧宿舍、智慧食堂、校园安防系统<br>
            基于大数据、人工智能、物联网等技术的软硬件加持<br>
            让学校真正迈入智慧校园时代<br>
          </div>

        </div>
      </div>

      <!--了解更多-->
      <div class="more_div">
        <div class="more_div_box w1200">
          <h3>助学精灵</h3>
          <ul>
            <li>
              <span>简约</span>
              <p>一键式设计，傻瓜式操作 </p>
              <p>让教师更易上手</p>
            </li>
            <li>
              <span>海量</span>
              <p>多样化教学工具，满足不 </p>
              <p>同学科教师上课需求</p>
            </li>
            <li>
              <span>智能</span>
              <p>直录播、投屏、扫描、 云 </p>
              <p>平台，应有尽有</p>
            </li>
            <li>
              <span>高效</span>
              <p>便捷的教学工具，丰富教</p>
              <p>学 形式，提高教学效率</p>
            </li>
          </ul>
          <router-link to="/Introduce" tag="div">
            <div id="genduos" class="genduos">了解更多</div>
          </router-link>
        </div>
      </div>

      <!--地图-->
      <div class="Map_box">
        <div class="Map_boxMian w1200">
          <h3>全国7大营销中心 : <span>深圳、北京、东莞、海南、武汉、安徽、山西</span></h3>
          <h3>逾两百家客户的选择 : <span>覆盖大中专院校、基础教育、教培机构、企业培训、职业技能培训等众多领域</span></h3>
          <img src="../../../static/common/images/ditu.png" alt="">
          <!--<div id="mChart" style="width: 1200px;height: 400px;"></div>-->
        </div>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>资讯中心</h2>
          <span>阅读更多></span>

          <ul class="showLines">
            <li>
              <img src="../../../static/common/images/banner_1.png" alt="">
              <h6>扶智海南，海南科技职业学院捐赠百万智慧教室设备</h6>
              <p>“两所小学12套智慧教室设备正式投入使用了！” 2019年2月底...</p>
              <div class="date">2019.18.18</div>
            </li>
            <li>
              <img src="../../../static/common/images/banner_1.png" alt="">
              <h6>扶智海南，海南科技职业学院捐赠百万智慧教室设备</h6>
              <p>“两所小学12套智慧教室设备正式投入使用了！” 2019年2月底...</p>
              <div class="date">2019.18.18</div>
            </li>
            <!--<li v-for="(item,index) in data" v-if="index<3" @click="getID(item.id)" >-->
              <!--<img :src="item.image" alt="">-->
              <!--<h6>{{item.title}}</h6>-->
              <!--<p>{{item.introduction}}</p>-->
              <!--<div class="date">{{item.create_time}}</div>-->
            <!--</li>-->
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // import '../../../static/common/js/china.js'
  // import '../../../static/common/js/world.js'
  // import Swiper from '../../../static/common/js/swiper.min'
  export default {
    name: 'mainPage',
    data() {
      return {
        data: [],//数据
        height: '1014px;'
      }
    },
    mounted() {
      // this.getNews();
      // this.drawLine();
      this._jq();
    },
    methods: {

      getID(id) {
        this.$router.push({
          path: '/InFoDetails', query: {
            id: id
          }
        });
      },

      _jq() {
        $('.Solve_box_box_img').hover(function () {
          $(this).addClass('animated tada');
          $('.po').hide();
          $('.po').eq($(this).index() - 1).show();
        }, function () {
          $(this).removeClass('animated tada')
          $('.po').eq($(this).index() - 1).hide();
        })

        // $('.showLines ').on('mouseenter','li',function () {
        //   console.log(1111)
        //   $(this).addClass('animated pulse');
        // })
        //
        // $('.showLines ').on('mouseout','li',function () {
        //   $(this).removeClass('animated pulse')
        // })

        $('.Solve_box_box_img').add('.genduos').add('.showLines li').on('click', function () {
          $(document).scrollTop(0);
        })
      },

      //接口数据
      getNews() {

        let url = this.ApiUrl + '/information/getinformationlistbypage'
        //登录
        this.$http({
          method: 'post',
          url: url,
          // data: qs.stringify({
          //   type:
          // })
        }).then((response) => {
          if (response.data.code == 0) {

            this.data = response.data.data.data;

          } else {
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          console.log(error);
        });

      },

    },
    computed: {
//      count(){
//        return this.$store.state.count
//      },
    },
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .boxMian {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .banner {
    width: 100%;
    height: 1014px;
  }

  .boxImgs {
    width: 100%;
    height: 100%;
    background: url('../../../static/common/images/banner_1.png') center no-repeat;
    position: relative;
    overflow: hidden;
    background-size: cover;
  }

  .boxImgs img {
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: block;
    margin: auto;
  }

  .banner_h1 {
    text-align: center;
    font-size: 65px;
    color: #fff;
    margin-top: 158px;
  }

  .banner_h3 {
    text-align: center;
    font-size: 37px;
    color: #fff;
    margin-top: 10px;
    font-weight: normal;
    /*-webkit-animation-delay: 5s;//延迟*/
    animation-delay: .5s;
  }

  .Solve_box {
    width: 100%;
    height: 1014px;
    background: white;
  }

  .Solve_box_box {
    position: relative;
    /*background: red;*/
  }

  .Solve_box_box h2 {
    font-size: 30px;
    color: #454545;
    text-align: center;
    margin-top: 44px;
  }

  .Solve_box_box_img1 {
    left: 480px;
    top: 130px;
  }

  .Solve_box_box_img2 {
    left: 820px;
    top: 338px;
  }

  .Solve_box_box_img3 {
    left: 710px;
    top: 670px;
  }

  .Solve_box_box_img4 {
    left: 272px;
    top: 690px;
  }

  .Solve_box_box_img5 {
    left: 180px;
    top: 350px;
  }

  .Solve_box_box_img {
    position: absolute;
    color: #4081F4;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }

  .po {
    width: auto;
    height: auto;
    overflow: hidden;
    position: absolute;
    background: #CBDEFF;
    color: #454545;
    font-size: 17px;
    padding: 8px 12px;
    border-radius: 8px;
    display: none;
  }

  .po1 {
    left: 430px;
    top: 450px;
    display: block;
  }

  .po2 {
    left: 430px;
    top: 450px;
    /*display: block;*/
  }

  .po3 {
    left: 426px;
    top: 450px;
    /*display: block;*/
  }

  .po4 {
    left: 430px;
    top: 450px;

  }

  .po5 {
    left: 392px;
    top: 450px;
  }

  .more_div {
    width: 100%;
    height: 465px;
    background: url("../../../static/common/images/gengduo.png") no-repeat;
    overflow: hidden;
    background-size: cover;
  }

  .more_div_box h2 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }

  .more_div_box h3 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 50px 0px 50px 0;
    font-weight: normal;
  }

  .more_div_box ul {
    display: flex;
    justify-content: center;
  }

  .more_div_box ul li {
    margin-right: 30px;
    text-align: center;
  }

  .more_div_box ul li span {
    color: #fff;
    font-size: 50px;
    margin-bottom: 16px;
    display: block;
  }

  .more_div_box ul li p {
    color: #fff;
    font-size: 16px;
  }

  .genduos {
    width: 156px;
    height: 38px;
    background: #FFBD6B;
    color: #1A1A1A;
    font-size: 16px;
    margin: 70px auto;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    border-radius: 6px;
  }

  .Map_box {
    width: 100%;
    height: 720px;
    /*background: #eae7e7;*/
    overflow: hidden;
  }

  .Map_boxMian {
    position: relative;
  }

  .Map_boxMian img {
    width: 985px;
    height: auto;
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -493px;
  }

  .Map_boxMian h3 {
    font-size: 30px;
    font-weight: normal;
    color: #4887F1;
    margin-top: 30px;
    text-align: center;
  }

  .Map_boxMian h3 span {
    font-size: 24px;
    font-weight: normal;
    color: #444;
    margin-top: 30px;
    text-align: center;
  }

  .Map_boxMian h4 {
    font-size: 25px;
    font-weight: normal;
    color: #444;
    margin-top: 10px;
    text-align: center;
  }

  .information {
    width: 100%;
    height: 550px;
    background: #FBFBFB;
    overflow: hidden;
  }

  .information_box h2 {
    font-size: 30px;
    color: #545454;
    text-align: center;
    margin: 46px 0 46px -20px;
  }


  .information_box ul {
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    /*background: red;*/
  }

  .information_box ul li {
    width: 584px;
    height: 310px;
    background: white;
    /*padding: 40px 30px;*/
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    margin-right: 32px;
    /*box-sizing: border-box;*/
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    transition: .3s;
  }

  .showLines li:hover{
    transform: scale(1.05);
  }

  .information_box ul li img {
    width: 584px;
    height: 226px;
  }

  .information_box ul li h6 {
    width: 410px;
    font-size: 16px;
    color: #535353;
    margin: 10px 0 10px 23px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }

  .information_box ul li p {
    width: 410px;
    font-size: 12px;
    color: #535353;
    height: 126px;
    margin: 0 0 0 23px ;
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
  }

  .information_box > span {
    font-size: 10px;
    color: #4081F4;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: -30px 0 40px -20px;
  }
.showLines .date{
  font-size: 12px;
  color: #C3C3C3;
  position: absolute;
  right: 20px;
  bottom: 30px;
}

</style>

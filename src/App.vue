<template>
  <div id="app">

    <div class="boxsMian">

      <!--head-->
      <div class="headerBox">

        <div class="headerBox_center">
          <div class="headerBox_center_l">
            <router-link to="/" tag="p" exact>
              <img src="../static/common/images/logo.png" alt="">
            </router-link>
          </div>
          <div class="headerBox_center_R">
            <ul class="headerBoxmenu">
              <li>
                <router-link to="/" tag="p" exact>首页</router-link>
              </li>
              <li class="po_weizhi">
                <ul class="menu_ul">
                  <li>
                    <router-link to="/solve" tag="p">常态智慧</router-link>
                  </li>
                  <li>
                    <router-link to="/Interaction" tag="p">互动智慧</router-link>
                  </li>
                  <li>
                    <router-link to="/train" tag="p">实训智慧</router-link>
                  </li>
                  <li>
                    <router-link to="/manyCj" tag="p">多场景智慧</router-link>
                  </li>
                  <li>
                    <router-link to="/campus" tag="p">智慧校园</router-link>
                  </li>
                </ul>
                <div>解决方案</div>
              </li>
              <li class="po_weizhi">
                <ul class="menu_ul">
                  <li>
                    <router-link to="/Introduce" tag="p">产品介绍</router-link>
                  </li>
                  <li>
                    <router-link to="/download" tag="p">下载中心</router-link>
                  </li>
                </ul>
                <div>助学精灵</div>
              </li>
              <li>
                <router-link to="/exhibition" tag="p">案例展示</router-link>
              </li>
              <li>
                <router-link to="/information" tag="p">资讯中心</router-link>
              </li>
              <!--<li>服务支持</li>-->
              <li>
                <router-link to="/about" tag="p">关于我们</router-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <!--head-->

      <!--路由-->
      <div class="MianBox_main">

        <router-view></router-view>

      </div>
      <!--路由-->

      <!--侧边栏-->
      <div class="index_sidebar">
        <div class="index_sidebar_box">

          <ul>
            <li class="sidebar_show"></li>
            <li class="sidebar_show"></li>
            <li>
              <a href="https://weibo.com/p/1006067032452023/home?from=page_100606&mod=TAB&is_all=1#place"></a>
            </li>
            <li class="stops"></li>
          </ul>

          <div class="tpl_phone sidebar_list">0755-26640295</div>
          <div class="wx_ewm sidebar_list">
            <img src="../static/common/images/l_erweima.png" alt="">
          </div>
        </div>
      </div>

      <!--footer-->
      <div class="footerBox">
        <div class="footerBox_main w1200">
          <div class="footerBox_main_t">
            <ul>
              <li>
                <h3>解决方案</h3>
                <router-link to="/solve" tag="p">常态智慧</router-link>
                <router-link to="/Interaction" tag="p">互动智慧</router-link>
                <router-link to="/train" tag="p">实训智慧</router-link>
                <router-link to="/manyCj" tag="p">多场景智慧</router-link>
                <router-link to="/campus" tag="p">智慧校园</router-link>
              </li>
            </ul>

            <ul>
              <li>
                <h3>助学精灵</h3>
                <router-link to="/Introduce" tag="p">产品介绍</router-link>
                <router-link to="/download" tag="p">下载中心</router-link>
              </li>
            </ul>

            <ul>
              <li>
                <h3>资讯中心</h3>
                <router-link to="/information" tag="p">媒体报道</router-link>
                <router-link to="/information" tag="p">企业资讯</router-link>
              </li>
            </ul>

            <ul>
              <li>
                <h3>服务支持</h3>
                <p>售后服务</p>
                <p>使用手册</p>
              </li>
            </ul>

            <ul>
              <li>
                <h3>关于我们</h3>
                <router-link to="/about" tag="p">联系我们</router-link>
              </li>
            </ul>

          </div>
          <div class="footerBox_main_b">
            <p>0755-26640295</p>
            <p>waterdrop@shuidizhihui.com</p>
            <p>备案号：粤ICP备18102002号</p>
            <p>水滴智慧科技（深圳）有限公司</p>
          </div>
        </div>
      </div>
      <!--footer-->

    </div>


  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    mounted() {
      this._jq();
    },
    methods: {
      _jq() {
        $('.po_weizhi').hover(function () {
          $(this).find('ul').show();
          // $(this).find('ul').addClass('animated slideInUp');
        }, function () {
          // $(this).find('ul').removeClass('animated slideInUp');
          $(this).find('ul').hide();
        });

        //侧边栏出现电话二维码
        $('.sidebar_show').hover(function () {
          $('.sidebar_list').eq($(this).index()).show().addClass('animated fadeInLeft');
        }, function () {
          $('.sidebar_list').eq($(this).index()).hide().removeClass('animated fadeInLeft');
        });

        //监听滚动
        $(window).scroll(function (event) {
          // console.log($(document).scrollTop())
          if ($(document).scrollTop() > 1) {
            $('.headerBox').css('background', 'rgba(75,140,246,.8)')
          } else {
            $('.headerBox').css('background', 'rgba(75,140,246,0)')
          }

          if ($(document).scrollTop() > 1000) {
            $('.index_sidebar').show(300)
          } else {
            $('.index_sidebar').hide(300)
          }
        });

        //底部点击之后位置变化
        $('.footerBox_main_t ul li p').on('click', function () {
          $(document).scrollTop(0);
        });

        //顶部点击位置变化
        $('.headerBoxmenu li').add('.headerBox_center_l img').on('click', function () {
          $(document).scrollTop(0);
        });

        //点击回到顶部
        $('.stops').on('click', function () {
          $('html,body').animate({scrollTop: '0px'}, 800);
        })

      },
    },
//    computed :{
//
  }
</script>

<style>
  #app {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
  }

  /*.MianBox_main{*/
  /*margin-top: -46px;*/
  /*}*/

  .boxsMian {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .headerBox {
    width: 100%;
    height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .headerBox_center {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .headerBox_center_l {
    width: 10%;
    height: 100%;
    float: left;
    /*margin-left: 8%;*/
  }

  .headerBox_center_l img {
    margin-top: 8px;
    cursor: pointer;
  }

  .headerBox_center_R {
    width: 554px;
    height: 100%;
    float: right;
  }

  .headerBoxmenu {
    width: 554px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .headerBoxmenu li {
    color: #fff;
    font-size: 14px;
    line-height: 42px;
    transition: .2s;
    cursor: pointer;
  }

  .headerBoxmenu li a {
    color: #fff;
    font-size: 14px;
    line-height: 42px;
    /*border-bottom: 2px solid #fff;*/
    transition: .2s;
    cursor: pointer;
    display: block;
  }

  .headerBox_center_R .active {
    border-bottom: 2px solid #fff;
  }


  .footerBox {
    width: 100%;
    height: 310px;
    background: #041329;
  }

  .footerBox_main_t {
    width: 100%;
    height: 220px;
    border-bottom: 1px solid #979797;
    display: flex;
    justify-content: space-between;
  }

  .footerBox_main_t ul {
    margin-top: 50px;
    height: 100%;
  }

  .footerBox_main_t ul li {
    height: 100%;
    color: #fff;
    cursor: pointer;
  }

  .footerBox_main_t ul li h3 {
    font-size: 22px;
  }

  .footerBox_main_t ul li p {
     font-size: 16px;
     line-height: 28px;
     opacity: .9;
    transition: .5s;
   }

  .footerBox_main_b {
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
  }

  .footerBox_main_b p {
    font-size: 16px;
    color: #fff;
    margin-right: 60px;
    line-height: 88px;
  }

  .po_weizhi {
    position: relative;
  }

  .po_weizhi .active {
    border-bottom: 2px solid #fff;
  }

  .menu_ul {
    width: 100px;
    height: auto;
    position: absolute;
    left: -25px;
    top: 46px;
    padding: 6px;
    background: rgba(75,140,246,.8);
    border-radius: 6px;
    display: none;
  }

  .menu_ul li {
    height: 30px;
    width: 100%;
    text-align: center;
    color: white;
    line-height: 30px;
    color: white;
    border-bottom: 1px solid rgba(209, 209, 209, .3);
    cursor: pointer;
  }

  .menu_ul li p:hover {
    color: #000;
  }

  .headerBox_center_R ul li p:hover {
    border-bottom: 2px solid #fff;
  }

  .headerBox_center_R ul li div:hover {
    border-bottom: 2px solid #fff;
  }

  .index_sidebar {
    width: 92px;
    height: 388px;
    background: url('../static/common/images/index_rigit.png') no-repeat;
    position: fixed;
    right: 0;
    top: 30%;
    transform:scale(.5);
    display: none;
  }

  .index_sidebar_box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .tpl_phone {
    width: 210px;
    height: 68px;
    line-height: 68px;
    text-align: center;
    color: #5B5B5B;
    font-size: 20px;
    position: absolute;
    left: -220px;
    top: 20px;
    background: #DCDCDC;
    border-radius: 8px;
    display: none;
  }

  .wx_ewm {
    width: 122px;
    height: 122px;
    padding: 8px;
    box-sizing: border-box;
    background: #DCDCDC;
    border-radius: 8px;
    position: absolute;
    left: -132px;
    top: 93px;
    display: none;

  }

  .wx_ewm img {
    width: 106px;
    height: 106px;
    background-size: cover;
  }

  .index_sidebar_box ul li {
    width: 100%;
    height: 100px;
    cursor: pointer;
  }
  .index_sidebar_box ul li a{
    width: 100%;
    height: 100px;
    display: block;
  }

  /*.headerBox_center_R ul li :hover {*/
  /*border-bottom: 2px solid #fff;*/
  /*}*/

  /*全局*/
  /*.el-carousel__item:nth-child(2n) {*/
  /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
  /*background-color: #d3dce6;*/
  /*}*/

  .banner .el-carousel .el-carousel__container {
    height: 1014px!important;
  }

  .el-carousel__container {
    height: 100%;
  }

  .el-carousel {
    height: 100%;
    position: relative;
  }

  .el-carousel__item img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .cbh5{
    font-size: 28px!important;
  }
  .cbp{
    font-size: 20px!important;
  }
  .information_box ul li p{
    font-size: 11px!important;
    height: 82px!important;
  }
  .information_box ul li h6{
    font-weight: bold;
  }

</style>

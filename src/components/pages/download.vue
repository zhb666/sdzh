<template>

  <div class="solve">

    <div class="solve_main animated fadeInLeft">

      <div class="solve_img">
        <img src="../../../static/common/images/xz_bg.png" alt=""/>
        <h1 class="banner_h1 animated fadeInLeft">下载中心</h1>
        <h3 class="banner_h3 animated fadeInLeft">DOWNLOAD CENTER</h3>
      </div>

      <div class="downloadMain">
        <div class="downloadMainMain w1200 animated fadeInLeft">
          <h6 class="cnimbs animated fadeInRight">助学精灵</h6>
          <p class="yopP">
            助学精灵是一款由水滴智慧自主研发，针对信息化教学需求设计的一键式板书教学工具。其以多媒体交互白板工具为应用核心，提供板书/课件/视频/图片/作业/扫描/批注六合一功能、自动分类保存和分享板书、基础教学工具、直录播、投屏、云平台资源留存共享等多种教学功能，可兼容一切专业软件，丰富教学形式，提高教学效率。</p>
          <img src="../../../static/common/images/xz_dh1.png" alt="" class="xz_img1">
          <img src="../../../static/common/images/xz_dh2.png" alt="" class="xz_img2">
          <img src="../../../static/common/images/xz_dh3.png" alt="" class="xz_img3">

          <div class="down_pc">
            <h3>助学精灵（PC）</h3>
            <p>
              更新日期：
              <span>2019-04-01</span>
            </p>
            <p>
              版本：
              <span style="margin-left: 35px">2019</span>
            </p>
            <p>
              大小：
              <span style="margin-left: 35px">2019M</span>
            </p>
            <p>
              兼容性：
              <span style="margin-left: 16px">windows</span>
            </p>
            <p>
              语言：
              <span style="margin-left: 34px">中文</span>
            </p>
            <div class="download_btn">点击下载</div>
          </div>

          <div class="down_pc" style="margin-top: 100px">
            <h3>助学精灵（APP）</h3>
            <p>
              更新日期：
              <span>2019-04-01</span>
            </p>
            <p>
              版本：
              <span style="margin-left: 35px">2019</span>
            </p>
            <p>
              大小：
              <span style="margin-left: 35px">2019M</span>
            </p>
            <p>
              兼容性：
              <span style="margin-left: 16px">windows</span>
            </p>
            <p>
              语言：
              <span style="margin-left: 34px">中文</span>
            </p>
            <div class="download_btn">点击下载</div>
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
      return {}
    },
    mounted() {
      this._jq();
    },
    methods: {
      _jq() {
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

  .downloadMain {
    width: 100%;
    height: 2080px;
    background: url('../../../static/common/images/xz_Main_bg.png') no-repeat;
    overflow: hidden;
    position: relative;
  }

  .downloadMainMain {
    height: auto;
    /*overflow: hidden;*/
  }

  .cnimbs {
    color: #4081F4;
    font-size: 38px;
    margin-top: 122px;
    text-align: center;
    animation-delay: .5s;
  }

  .yopP {
    color: #4A4A4A;
    font-size: 27px;
    margin-top: 30px;
    animation-delay: .5s;
  }

  .xz_img1 {
    position: absolute;
    top: 450px;
    left: -150px;
  }

  .xz_img2 {
    position: absolute;
    top: 350px;
    right: 100px;
  }

  .xz_img3 {
    position: absolute;
    left: -300px;
    top: 1400px;
  }

  .down_pc {
    width: 840px;
    height: 372px;
    background: white;
    margin: 418px auto 100px auto;
    border-radius: 6px;
    position: relative;
    padding: 72px 87px;
    box-sizing: border-box;
  }

  .down_pc h3 {
    color: #555;
    font-size: 27px;
  }

  .down_pc p {
    color: #555;
    font-size: 18px;
    margin-top: 15px;
    font-family: Arial-BoldMT;
  }

  .down_pc span {
    color: #555;
    font-size: 18px;
    margin-top: 15px;
    font-family: PingFangSC-Regular;
  }

  .download_btn {
    width: 140px;
    height: 38px;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 18px;
    position: absolute;
    top: 176px;
    right: 172px;
    background: #5198F9;
    line-height: 38px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>

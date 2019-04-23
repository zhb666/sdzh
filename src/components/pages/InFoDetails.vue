<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/zx_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">案例展示</h1>
        <h3 class="banner_h3 animated fadeInLeft">CASE PRESENTATION</h3>
      </div>

      <!--资讯-->
      <div class="information" v-loading="loading">
        <div class="information_box w1200">
          <h2>企业资讯</h2>

          <!--显示新闻-->
          <div class="newsBox w1200" v-html="data"></div>


        </div>
      </div>


    </div>

  </div>

</template>

<script>
  import qs from 'qs'
  export default {
    name: 'information',
    data() {
      return {
        id:this.$route.query.id,
        data:'',
        loading: true
      }
    },
    mounted() {
      this.getNews(this.id)
    },
    methods: {

      getNews(id) {

        let url = this.ApiUrl + '/information/getinformationbyid'
        //登录
        this.$http({
          method: 'post',
          url: url,
          data: qs.stringify({
            id:id
          })
        }).then((response) => {
          if (response.data.code == 0) {
            this.data = response.data.data.article;
            this.loading = false;
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
    height: auto;
    position: relative;
    overflow: hidden;
  }
  .information_box h2{
    font-size: 30px;
    color: #545454;
    text-align: left;
    margin: 108px 0 40px 0;
  }
  .information_box img{
    width: 100%;
    height: auto;
  }

.newsBox{
  height: auto;
}

</style>

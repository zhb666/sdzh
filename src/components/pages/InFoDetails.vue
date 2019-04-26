<template>

  <div class="solve">

    <div class="solve_main">

      <div class="solve_img">
        <!--<img src="../../../static/common/images/zx_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">资讯中心</h1>
        <h3 class="banner_h3 animated fadeInLeft">INFORMATION CENTER </h3>
      </div>

      <!--资讯-->
      <div class="information" v-loading="loading">
        <div class="information_box w1200">
          <h2>企业资讯</h2>

          <div class="titles">{{title}}</div>
          <div class="zuozhes">
            <p>
              <img src="../../../static/common/images/zuozge.png" alt=""> {{name}}
            </p>
            <p>{{date}}</p>
          </div>



          <!--显示新闻-->
          <div class="newsBox w1200 ql-editor"  v-html="data"></div>


        </div>
      </div>


    </div>

  </div>

</template>

<script>
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import qs from 'qs'
  export default {
    name: 'information',
    data() {
      return {
        id:this.$route.query.id,
        data:'',
        loading: true,
        title:'',
        name:'',
        date:'',
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
            this.title = response.data.data.title;
            this.name = response.data.data.publisher;
            this.date = response.data.data.create_time;
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
    },
    updated() {
      $('.newsBox').find('img').each(function (index,element) {
        $(element).css('max-width','1180px')
      })

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
  .titles{
    color: #454545;
    font-size: 28px;
    text-align: center;
    margin: 52px 0 30px 0;
    border-bottom: #979797;
  }
  .zuozhes{
    width: 300px;
    height: 30px;
    /*background: red;*/
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .newsBox img{
    max-width: 1200px;
  }

  .zuozhes img{
    width: 19px;
    height: 18px;
  }
  .zuozhes p{
    color: #454545;
    font-size: 13px;
    vertical-align: top;
    /*width: 80px;*/
    margin-right: 20px;
  }
  .zuozhes img{
    vertical-align: top;
  }

</style>

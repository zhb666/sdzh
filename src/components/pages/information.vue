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
          <h2>资讯中心</h2>
          <div class="ulLists">
            <ul>
              <li @click="getNews">全部</li>
              <li @click="getNewsType('企业资讯')">企业资讯</li>
              <li @click="getNewsType('媒体报道')">媒体报道</li>
            </ul>
          </div>
          <ul class="showLines">
            <!--<li v-for="item in data" @click="getID(item.id)">-->
              <!--<img :src="item.image" alt="">-->
              <!--<h6>{{item.title}}</h6>-->
              <!--<p>{{item.introduction}}</p>-->
              <!--<span>阅读更多></span>-->
              <!--<div class="lines"></div>-->
              <!--<div class="lines_bottom"></div>-->
            <!--</li>-->

            <!--<li class="showLines_li">-->
              <!--<div class="showLines_li_l">-->
                <!--<div class="title">-->
                  <!--<span>企业资讯 | </span>-->
                  <!--<span> 2019-04-25</span>-->
                <!--</div>-->
                <!--<h6 class="showLines_li_lH6">扶智海南，海南科技职业学院捐赠百万智慧教室设备</h6>-->
                <!--<p class="showLines_li_lTEXT">“两所小学12套智慧教室设备正式投入使用了！”2019年2月底，随着这令人激动的消息传来， 海南科技职业学院 （本科） （以下简称“海科院”）的又一教学扶贫计划实现了。 帮助海南基础教育提升质量，强化基础教育设备与教学的融合，海科院分别与海口市美兰区新埠中心小学、保亭黎族苗族自治县响水镇毛岸学校签署捐赠协议，</p>-->
              <!--</div>-->
              <!--<div class="showLines_li_R">-->
                <!--<img src="../../../static/common/images/sx_bg.png" alt="">-->
              <!--</div>-->
            <!--</li>-->

            <li class="showLines_li" v-for="item in data" @click="getID(item.id)">
              <div class="showLines_li_l">
                <div class="title">
                  <span>{{item.type}} | </span>
                  <span> {{item.create_time}}</span>
                </div>
                <h6 class="showLines_li_lH6">{{item.title}}</h6>
                <p class="showLines_li_lTEXT">{{item.introduction}}</p>
              </div>
              <div class="showLines_li_R">
                <img :src="item.image" alt="">
              </div>
            </li>


          </ul>

          <div v-show="totalRecords>6" class="pageBox" style="float: right;margin:50px 160px 0 0;">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="page"
              :page-size="6"
              layout="prev, pager, next, jumper"
              :total="totalRecords">
            </el-pagination>
          </div>

        </div>
      </div>

      <div class="hezuo"></div>

    </div>

  </div>

</template>

<script>
  import qs from 'qs'
  export default {
    name: 'information',
    data() {
      return {
        data:[],//数据
        totalRecords: 0,//总页数
        page: 1,//当前页码
        types:'',
        loading:false,
      }
    },
    mounted() {
      this.getNews();
      // this._jq();
    },
    methods: {

      getNews() {
        this.types = '';
        this.loading = true;
        let url = this.ApiUrl + '/information/getinformationlistbypage'
        //登录
        this.$http({
          method: 'post',
          url: url,
          data: qs.stringify({
            pageNum: 1, //页码   默认1
            pageSize: 6, //每页条数 默认20
          })
        }).then((response) => {
          if (response.data.code == 0) {

            this.data = response.data.data.data;
            this.totalRecords = response.data.data.totalCount;
            this.loading = false;

          } else {
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          console.log(error);
        });

      },

      getNewsType(type) {
        this.types = type;
        this.loading = true;
        let url = this.ApiUrl + '/information/getinformationlistbypage'
        //登录
        this.$http({
          method: 'post',
          url: url,
          data: qs.stringify({
            type:type,
            pageNum: 1, //页码   默认1
            pageSize: 6, //每页条数 默认20
          })
        }).then((response) => {
          if (response.data.code == 0) {

            this.data = response.data.data.data;
            this.totalRecords = response.data.data.totalCount;
            this.loading = false;

          } else {
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          console.log(error);
        });

      },

      getID(id){
        this.$router.push({path: '/InFoDetails',query: {
            id: id
          }});
      },

      handleCurrentChange(val) {
        this.loading = true;
        let url = this.ApiUrl + '/information/getinformationlistbypage'
        this.$http({
          method: 'post',
          url: url,
          data: qs.stringify({
            type:this.types,
            pageNum: val, //页码   默认1
            pageSize: 6, //每页条数 默认20
          })
        }).then((response) => {

          if (response.data.code == 0) {
            this.loading = false;
            this.data = response.data.data.data;
            this.totalRecords = response.data.data.totalCount;
          } else {
            if (response.data.code == '403') {
              this.Signout();
            }
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          console.log(error);
        });
      },

      _jq() {

        // $('.showLines ').on('mouseenter','li',function () {
        //   // $(this).addClass('animated bounce');
        //   $('.lines_bottom').eq($(this).index()).show();
        // })
        //
        // $('.showLines ').on('mouseout','li',function () {
        //   // $(this).removeClass('animated bounce')
        //   $('.lines_bottom').eq($(this).index()).hide();
        // })

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

  /*.information_box ul li span{*/
    /*font-size: 10px;*/
    /*color: #4081F4;*/
    /*cursor: pointer;*/
    /*text-align: left;*/
    /*display: block;*/
    /*margin-left: 15px;*/
  /*}*/

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


  .information {
    width: 100%;
    height: auto;
    background: #FBFBFB;
    padding-bottom: 150px;
    overflow: hidden;
    position: relative;
  }

  .information_box {
    position: relative;
  }

  .information_box h2 {
    font-size: 30px;
    color: #545454;
    text-align: left;
    margin: 108px 0 30px 160px;
  }

  .information_box > ul {
    width: 80%;
    height: auto;
    /*display: flex;*/
    /*justify-content: center;*/
    /*background: red;*/
    padding-bottom: 20px;
    margin: 0 auto;
    overflow: hidden;
    opacity: 1;
  }

  .showLines_li{
    width: 872px;
    height: 252px;
    background: red;
    margin-bottom: 40px;
    background: #DCE7EE;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    transition: .3s;
  }

  .showLines li:hover{
    /*transform: scale(1.05);*/
    background: #fff;
  }

  .showLines_li_l{
    width: 483px;
    height: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    float: left;
    /*background: red;*/
  }
  .showLines_li_R{
    width: 387px;
    height: 100%;
    float: right;
    /*background: yellow;*/
  }
  .title{
    color: #A3A3A3;
    font-size: 14px;
  }
.showLines_li_lH6{
  color: #535353;
  font-size: 18px;
  font-weight: normal;
  margin-top: 10px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.showLines_li_lTEXT{
  color: #535353;
  font-size: 14px;
  text-overflow:ellipsis;
  margin-top: 10px;
  /*white-space: nowrap;*/
}
.showLines_li_R img{
  width: 100%;
  height: 100%;
}


  .hezuo {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: white;
  }

  .hezuo h3 {
    font-size: 30px;
    color: #454545;
    text-align: center;
  }

  .ulLists {
    width: 260px;
    height: 30px;
    position: absolute;
    right: 220px;
    top: 0;
  }

  .ulLists ul {
    width: 100%;
    display: flex;
    justify-content: left;
  }

  .ulLists ul li {
    margin-left: 20px;
    color: #4081F4;
    font-size: 18px;
    cursor: pointer;
  }

  .ulLists ul li:hover {
    color: #105de4;
  }
  /*.showLines li:hover{*/
    /*opacity: 1;*/
    /*background: #efeeee;*/
  /*}*/
</style>

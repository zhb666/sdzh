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
            无尘化与无辐射的硬核白板，保护师生健康；<br>
            一键实现板书/课件/视频/作业/扫描/批注六合一功能；<br>
            板书自动保存与分享<br>
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
              <p>学形式，提高教学效率</p>
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
          <!--<img src="../../../static/common/images/ditu.png" alt="">-->
          <div id="mChart" style="width: 1200px;height: 750px;"></div>
        </div>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>资讯中心</h2>
          <span class="toubus" @click="sendPage">阅读更多></span>

          <ul class="showLines">
            <!--<li>-->
            <!--<img src="../../../static/common/images/banner_1.png" alt="">-->
            <!--<h6>扶智海南，海南科技职业学院捐赠百万智慧教室设备</h6>-->
            <!--<p>“两所小学12套智慧教室设备正式投入使用了！” 2019年2月底...</p>-->
            <!--<div class="date">2019.18.18</div>-->
            <!--</li>-->
            <!--<li>-->
            <!--<img src="../../../static/common/images/banner_1.png" alt="">-->
            <!--<h6>扶智海南，海南科技职业学院捐赠百万智慧教室设备</h6>-->
            <!--<p>“两所小学12套智慧教室设备正式投入使用了！” 2019年2月底...</p>-->
            <!--<div class="date">2019.18.18</div>-->
            <!--</li>-->
            <li class="toubus" v-for="(item,index) in data" v-if="index<3" @click="getID(item.id)">
              <img :src="item.image" alt="">
              <h6>{{item.title}}</h6>
              <p>{{item.introduction}}</p>
              <div class="date">{{item.create_time}}</div>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import '../../../static/common/js/china.js'
  import '../../../static/common/js/world.js'
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
      this.getNews();
      this.drawLine();
      this._jq();
    },
    methods: {

      getID(id) {
        $(document).scrollTop(550);
        this.$router.push({
          path: '/InFoDetails', query: {
            id: id
          }
        });
      },

      sendPage(){
        $(document).scrollTop(0);
        this.$router.push({
          path: '/information', query: {}
        });
      },

      //绘制
      drawLine() {

        let myChart = this.$echarts.init(document.getElementById('mChart'))
        $(window).resize(function () {
          myChart.resize();
        });

        var app = {};

        var geoCoordMap = {
          "海门": [121.15, 31.89],
          "鄂尔多斯": [109.781327, 39.608266],
          "招远": [120.38, 37.35],
          "舟山": [122.207216, 29.985295],
          "齐齐哈尔": [123.97, 47.33],
          "盐城": [120.13, 33.38],
          "赤峰": [118.87, 42.28],
          "青岛": [120.33, 36.07],
          "乳山": [121.52, 36.89],
          "金昌": [102.188043, 38.520089],
          "泉州": [118.58, 24.93],
          "莱西": [120.53, 36.86],
          "日照": [119.46, 35.42],
          "胶南": [119.97, 35.88],
          "南通": [121.05, 32.08],
          "拉萨": [91.11, 29.97],
          "云浮": [112.02, 22.93],
          "梅州": [116.1, 24.55],
          "文登": [122.05, 37.2],
          "上海": [121.48, 31.22],
          "攀枝花": [101.718637, 26.582347],
          "威海": [122.1, 37.5],
          "承德": [117.93, 40.97],
          "厦门": [118.1, 24.46],
          "汕尾": [115.375279, 22.786211],
          "潮州": [116.63, 23.68],
          "丹东": [124.37, 40.13],
          "太仓": [121.1, 31.45],
          "曲靖": [103.79, 25.51],
          "烟台": [121.39, 37.52],
          "福州": [119.3, 26.08],
          "瓦房店": [121.979603, 39.627114],
          "即墨": [120.45, 36.38],
          "抚顺": [123.97, 41.97],
          "玉溪": [102.52, 24.35],
          "张家口": [114.87, 40.82],
          "阳泉": [113.57, 37.85],
          "莱州": [119.942327, 37.177017],
          "湖州": [120.1, 30.86],
          "汕头": [116.69, 23.39],
          "昆山": [120.95, 31.39],
          "宁波": [121.56, 29.86],
          "湛江": [110.359377, 21.270708],
          "揭阳": [116.35, 23.55],
          "荣成": [122.41, 37.16],
          "连云港": [119.16, 34.59],
          "葫芦岛": [120.836932, 40.711052],
          "常熟": [120.74, 31.64],
          "东莞": [113.75, 23.04],
          "河源": [114.68, 23.73],
          "淮安": [119.15, 33.5],
          "泰州": [119.9, 32.49],
          "南宁": [108.33, 22.84],
          "营口": [122.18, 40.65],
          "惠州": [114.4, 23.09],
          "江阴": [120.26, 31.91],
          "蓬莱": [120.75, 37.8],
          "韶关": [113.62, 24.84],
          "嘉峪关": [98.289152, 39.77313],
          "广州": [113.23, 23.16],
          "延安": [109.47, 36.6],
          "太原": [112.53, 37.87],
          "清远": [113.01, 23.7],
          "中山": [113.38, 22.52],
          "昆明": [102.73, 25.04],
          "寿光": [118.73, 36.86],
          "盘锦": [122.070714, 41.119997],
          "长治": [113.08, 36.18],
          "深圳": [114.07, 22.62],
          "珠海": [113.52, 22.3],
          "宿迁": [118.3, 33.96],
          "咸阳": [108.72, 34.36],
          "铜川": [109.11, 35.09],
          "平度": [119.97, 36.77],
          "佛山": [113.11, 23.05],
          "海口": [110.35, 20.02],
          "江门": [113.06, 22.61],
          "章丘": [117.53, 36.72],
          "肇庆": [112.44, 23.05],
          "大连": [121.62, 38.92],
          "临汾": [111.5, 36.08],
          "吴江": [120.63, 31.16],
          "石嘴山": [106.39, 39.04],
          "沈阳": [123.38, 41.8],
          "苏州": [120.62, 31.32],
          "茂名": [110.88, 21.68],
          "嘉兴": [120.76, 30.77],
          "长春": [125.35, 43.88],
          "胶州": [120.03336, 36.264622],
          "银川": [106.27, 38.47],
          "张家港": [120.555821, 31.875428],
          "三门峡": [111.19, 34.76],
          "锦州": [121.15, 41.13],
          "南昌": [115.89, 28.68],
          "柳州": [109.4, 24.33],
          "三亚": [109.511909, 18.252847],
          "自贡": [104.778442, 29.33903],
          "吉林": [126.57, 43.87],
          "阳江": [111.95, 21.85],
          "泸州": [105.39, 28.91],
          "西宁": [101.74, 36.56],
          "宜宾": [104.56, 29.77],
          "呼和浩特": [111.65, 40.82],
          "成都": [104.06, 30.67],
          "大同": [113.3, 40.12],
          "镇江": [119.44, 32.2],
          "桂林": [110.28, 25.29],
          "张家界": [110.479191, 29.117096],
          "宜兴": [119.82, 31.36],
          "北海": [109.12, 21.49],
          "西安": [108.95, 34.27],
          "金坛": [119.56, 31.74],
          "东营": [118.49, 37.46],
          "牡丹江": [129.58, 44.6],
          "遵义": [106.9, 27.7],
          "绍兴": [120.58, 30.01],
          "扬州": [119.42, 32.39],
          "常州": [119.95, 31.79],
          "潍坊": [119.1, 36.62],
          "重庆": [106.54, 29.59],
          "台州": [121.420757, 28.656386],
          "南京": [118.78, 32.04],
          "滨州": [118.03, 37.36],
          "贵阳": [106.71, 26.57],
          "无锡": [120.29, 31.59],
          "本溪": [123.73, 41.3],
          "克拉玛依": [84.77, 45.59],
          "渭南": [109.5, 34.52],
          "马鞍山": [118.48, 31.56],
          "宝鸡": [107.15, 34.38],
          "焦作": [113.21, 35.24],
          "句容": [119.16, 31.95],
          "北京": [116.46, 39.92],
          "徐州": [117.2, 34.26],
          "衡水": [115.72, 37.72],
          "包头": [110, 40.58],
          "绵阳": [104.73, 31.48],
          "乌鲁木齐": [87.68, 43.77],
          "枣庄": [117.57, 34.86],
          "杭州": [120.19, 30.26],
          "淄博": [118.05, 36.78],
          "鞍山": [122.85, 41.12],
          "溧阳": [119.48, 31.43],
          "库尔勒": [86.06, 41.68],
          "安阳": [114.35, 36.1],
          "开封": [114.35, 34.79],
          "济南": [117, 36.65],
          "德阳": [104.37, 31.13],
          "温州": [120.65, 28.01],
          "九江": [115.97, 29.71],
          "邯郸": [114.47, 36.6],
          "临安": [119.72, 30.23],
          "兰州": [103.73, 36.03],
          "沧州": [116.83, 38.33],
          "临沂": [118.35, 35.05],
          "南充": [106.110698, 30.837793],
          "天津": [117.2, 39.13],
          "富阳": [119.95, 30.07],
          "泰安": [117.13, 36.18],
          "诸暨": [120.23, 29.71],
          "郑州": [113.65, 34.76],
          "哈尔滨": [126.63, 45.75],
          "聊城": [115.97, 36.45],
          "芜湖": [118.38, 31.33],
          "唐山": [118.02, 39.63],
          "平顶山": [113.29, 33.75],
          "邢台": [114.48, 37.05],
          "德州": [116.29, 37.45],
          "济宁": [116.59, 35.38],
          "荆州": [112.239741, 30.335165],
          "宜昌": [111.3, 30.7],
          "义乌": [120.06, 29.32],
          "丽水": [119.92, 28.45],
          "洛阳": [112.44, 34.7],
          "秦皇岛": [119.57, 39.95],
          "株洲": [113.16, 27.83],
          "石家庄": [114.48, 38.03],
          "莱芜": [117.67, 36.19],
          "常德": [111.69, 29.05],
          "保定": [115.48, 38.85],
          "湘潭": [112.91, 27.87],
          "金华": [119.64, 29.12],
          "岳阳": [113.09, 29.37],
          "长沙": [113, 28.21],
          "衢州": [118.88, 28.97],
          "廊坊": [116.7, 39.53],
          "菏泽": [115.480656, 35.23375],
          "合肥": [117.27, 31.86],
          "武汉": [114.31, 30.52],
          "大庆": [125.03, 46.58]
        };

        var data = [
          {name: "北京", value: 200, address: '海淀区清华科技园玉泉慧谷10栋A座1楼'},
          {name: "太原", value: 230, address: '太原市小店区平阳南路天鑫花园一单元1401'},
          {name: "合肥", value: 200, address: '合肥市庐阳区颖上路505号领域花园1,2幢商261'},
          {name: "东莞", value: 230, address: '南城区中天联科国际信息产业园8栋303'},
          {name: "武汉", value: 260, address: '武汉市洪山区鲁磨路306号中建大厦1902号'},
          {name: "深圳", value: 350, address: '南山区高新科技园虚拟大学院综合楼C区2楼202室'},
          {name: "海口", value: 360, address: '海口市美兰区海南科技职业学院图书馆9楼'},
          // {name: "成都", value: 100,address:''},

        ];

        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                address: data[i].address,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };

        // 绘制图表
        myChart.setOption({
          backgroundColor: '#fff',
          title: {
            text: '',
            subtext: '',
            sublink: '',
            x: 'center',
            textStyle: {
              color: '#333'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              // console.log(params)
              // return
              return params.name + ' : ' + params.data.address;
            }
          },
          legend: {
            show: false,
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
              color: '#fff'
            }
          },
          visualMap: {
            show: false,//显示侧边栏
            min: 0,
            max: 300,
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#dbfefe', '#4081f4'] // 蓝绿
            },
            textStyle: {
              color: '#333'
            }
          },
          geo: {
            map: 'china',
            label: {
              normal: {
                show: true, //显示省份
                color: '#3c8dbc',
              },
              emphasis: {
                show: true,
                color: '#000'
              },
            },
            itemStyle: {
              normal: {
                areaColor: '#D7EEEF', // 没有值得时候颜色
                borderColor: '#097bba',
              },
              emphasis: {
                areaColor: '#D7EEEF', // 鼠标滑过选中的颜色
              }
            }
          },
          series: [
            {
              name: 'pm2.5',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(data),
              symbolSize: 10,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'purple'
                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 6)),
              symbolSize: function (val) {
                return val[2] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'purple',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
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
    left: 380px;
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
    height: 920px;
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

  .showLines li:hover {
    transform: scale(1.05);
  }

  .information_box ul li img {
    width: 370px;
    height: 226px;
  }

  .information_box ul li h6 {
    width: 252px;
    font-size: 16px;
    color: #535353;
    margin: 10px 0 10px 23px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }

  .information_box ul li p {
    width: 252px;
    font-size: 12px;
    color: #535353;
    height: 126px;
    margin: 0 0 0 23px;
    overflow: hidden;
    white-space: nowrap;
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

  .showLines .date {
    font-size: 12px;
    color: #C3C3C3;
    position: absolute;
    right: 20px;
    bottom: 30px;
  }

</style>

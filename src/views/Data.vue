<template>
  <v-container class="pa-0 ma-0 box fill-height d-flex justify-space-between align-start">
    <div id="map"></div>
    <div id="tooltips-left">
      <v-card class="ma-4" color="primary" width="300" dark>
        <v-card-text class="d-flex flex-column justify-space-around align-center white--text">
          <div class="d-flex flex-column justify-center align-center">
            <span class="display-1 font-weight-black">2759</span>
            <span class="title">僵尸企业数量</span>
          </div>
          <div class="d-flex flex-column justify-center align-center mt-4">
            <span class="display-1 font-weight-black">7241</span>
            <span class="title">正常企业数量</span>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="ma-4 pt-n4" width="300" height="280">
        <div id="c1"></div>
      </v-card>

      <v-card class="ma-4 pt-n4" width="300" height="280">
        <div id="c2"></div>
      </v-card>
    </div>
    <div id="tooltips-map">
      <v-card>
        <v-card-title>{{hoverType?'非':''}}僵尸企业数量:{{hoverValue}}</v-card-title>
      </v-card>
      <v-btn color="primary" class="mt-4" large @click="download">下载</v-btn>
    </div>
    <div id="tooltips-right">
      <v-card class="ma-4 pt-n4" width="400" height="280">
        <div id="c3"></div>
      </v-card>
      <v-card class="ma-4 pt-n4" width="400" height="280">
        <div id="c4"></div>
      </v-card>
      <v-card class="ma-4 pt-n4" width="400" height="280">
        <div id="c5"></div>
      </v-card>
      <v-card class="ma-4 pt-n4" width="400" height="280">
        <div id="c6"></div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { Scene, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { Pie } from "@antv/g2plot";
import { GroupedColumn } from "@antv/g2plot";
export default {
  name: "",
  data() {
    return {
      hoverType: false,
      hoverValue: 0
    };
  },
  mounted() {
    this.draw();
    this.drawPieC1();
    this.drawPieC2();
    this.drawColumnC3();
    this.drawColumnC4();
    this.drawColumnC5();
    this.drawColumnC6();
    // this.download();
  },
  methods: {
    download() {
      let downloadFile = (fileName, url) => {
        // if (isIE()) {
        //   ieDown(url);
        // } else {
        const aLink = document.createElement("a");
        const evt = document.createEvent("MouseEvents");
        // var evt = document.createEvent("HTMLEvents")
        evt.initMouseEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        aLink.download = fileName;
        aLink.href = url;
        aLink.dispatchEvent(evt);
      };
      const name = "测试结果.csv";
      downloadFile(name, `http://${window.location.host}/${name}`);
    },
    draw() {
      const scene = new Scene({
        id: "map",
        map: new GaodeMap({
          pitch: 0,
          type: "amap",
          style: "light",
          center: [120.21201, 30.2084],
          zoom: 5.32,
          maxZoom: 10
        })
      });
      scene.on("loaded", () => {
        const data = [
          {
            type: 1,
            coord: [114.02919, 30.58203],
            value: 1089
          },
          {
            type: 1,
            coord: [116.75199, 36.55358],
            value: 1083
          },
          {
            type: 1,
            coord: [113.27324, 23.15792],
            value: 1031
          },
          {
            type: 1,
            coord: [110.30188, 25.31402],
            value: 1026
          },
          {
            type: 1,
            coord: [115.9442, 28.54538],
            value: 1012
          },
          {
            type: 1,
            coord: [119.27345, 26.04769],
            value: 1012
          },
          {
            type: 1,
            coord: [112.98626, 28.25591],
            value: 988
          },
          {
            type: 0,
            coord: [113.27324, 23.15792],
            value: 420
          },
          {
            type: 0,
            coord: [112.98626, 28.25591],
            value: 410
          },
          {
            type: 0,
            coord: [119.27345, 26.04769],
            value: 410
          },
          {
            type: 0,
            coord: [116.75199, 36.55358],
            value: 388
          },
          {
            type: 0,
            coord: [115.9442, 28.54538],
            value: 385
          },
          {
            type: 0,
            coord: [110.30188, 25.31402],
            value: 373
          },
          {
            type: 0,
            coord: [114.02919, 30.58203],
            value: 373
          }
        ];
        const pointLayer = new PointLayer({})
          .source(data, {
            parser: {
              type: "json",
              coordinates: "coord"
            }
          })
          .shape("circle")
          .size("value", [10, 50])
          .color("type", type => {
            return type === 1 ? "#5B8FF9" : "#5CCEA1";
          })
          .active(true)
          .style({
            opacity: 0.3,
            strokeWidth: 1
          });
        pointLayer.on("mousemove", e => {
          console.log(e.feature.value);
          this.hoverType = e.feature.type === 1;
          this.hoverValue = e.feature.value;
        });
        // pointLayer.animate(false);
        scene.addLayer(pointLayer);
      });
    },
    drawPieC1() {
      const data = [
        {
          type: "零售业",
          value: 1199
        },
        {
          type: "交通运输业",
          value: 1208
        },
        {
          type: "商业服务业",
          value: 1219
        },
        {
          type: "工业",
          value: 1274
        },
        {
          type: "服务业",
          value: 1188
        },
        {
          type: "社区服务",
          value: 1153
        }
      ];
      //   for (let i = 1; i < 10; i++) {
      //     data.push({
      //       type: `分类 ${i}`,
      //       value: (Math.random() * 10).toFixed(0) + 1
      //     });
      //   }

      const piePlot = new Pie(document.getElementById("c1"), {
        width: 300,
        height: 280,
        title: {
          visible: true,
          text: "非僵尸企业中各行业分布"
        },
        radius: 0.8,
        data,
        angleField: "value",
        colorField: "type",
        label: {
          visible: false,
          type: "outer-center",
          formatter: (text, item) =>
            `${item._origin.type}: ${item._origin.value}`
        }
      });

      piePlot.render();
    },
    drawPieC2() {
      const data = [
        {
          type: "零售业",
          value: 475
        },
        {
          type: "交通运输业",
          value: 459
        },
        {
          type: "商业服务业",
          value: 467
        },
        {
          type: "工业",
          value: 451
        },
        {
          type: "服务业",
          value: 466
        },
        {
          type: "社区服务",
          value: 441
        }
      ];

      const piePlot = new Pie(document.getElementById("c2"), {
        width: 300,
        height: 280,
        title: {
          visible: true,
          text: "僵尸企业中各行业分布"
        },
        radius: 0.8,
        data,
        angleField: "value",
        colorField: "type",
        label: {
          visible: false,
          type: "outer-center",
          formatter: (text, item) =>
            `${item._origin.type}: ${item._origin.value}`
        }
      });

      piePlot.render();
    },
    drawColumnC3() {
      const data = [
        {
          name: "僵尸企业",
          负债: "0-500",
          公司个数: 9
        },
        {
          name: "僵尸企业",
          负债: "500-5000",
          公司个数: 102
        },
        {
          name: "僵尸企业",
          负债: "5000-1亿",
          公司个数: 104
        },
        {
          name: "僵尸企业",
          负债: "1亿-10亿",
          公司个数: 1227
        },
        {
          name: "僵尸企业",
          负债: "10亿以上",
          公司个数: 1326
        },
        {
          name: "非僵尸企业",
          负债: "0-500",
          公司个数: 9
        },
        {
          name: "非僵尸企业",
          负债: "500-5000",
          公司个数: 252
        },
        {
          name: "非僵尸企业",
          负债: "5000-1亿",
          公司个数: 308
        },
        {
          name: "非僵尸企业",
          负债: "1亿-10亿",
          公司个数: 3166
        },
        {
          name: "非僵尸企业",
          负债: "10亿以上",
          公司个数: 3506
        }
      ];

      const columnPlot = new GroupedColumn(document.getElementById("c3"), {
        title: {
          visible: true,
          text: "2017年负债总额"
        },
        width: 400,
        height: 280,
        data,
        xField: "负债",
        yField: "公司个数",
        yAxis: {
          min: 0
        },
        label: {
          visible: true
        },
        groupField: "name",
        color: ["#90CAF9", "#000"]
      });

      columnPlot.render();
    },
    drawColumnC4() {
      const data = [
        {
          name: "僵尸企业",
          负债: "0-500",
          公司个数: 23
        },
        {
          name: "僵尸企业",
          负债: "500-5000",
          公司个数: 273
        },
        {
          name: "僵尸企业",
          负债: "5000-1亿",
          公司个数: 219
        },
        {
          name: "僵尸企业",
          负债: "1亿-10亿",
          公司个数: 1307
        },
        {
          name: "僵尸企业",
          负债: "10亿以上",
          公司个数: 937
        },
        {
          name: "非僵尸企业",
          负债: "0-500",
          公司个数: 48
        },
        {
          name: "非僵尸企业",
          负债: "500-5000",
          公司个数: 584
        },
        {
          name: "非僵尸企业",
          负债: "5000-1亿",
          公司个数: 523
        },
        {
          name: "非僵尸企业",
          负债: "1亿-10亿",
          公司个数: 3699
        },
        {
          name: "非僵尸企业",
          负债: "10亿以上",
          公司个数: 2387
        }
      ];

      const columnPlot = new GroupedColumn(document.getElementById("c4"), {
        title: {
          visible: true,
          text: "2017年利润总额"
        },
        width: 400,
        height: 280,
        data,
        xField: "负债",
        yField: "公司个数",
        yAxis: {
          min: 0
        },
        label: {
          visible: true
        },
        groupField: "name",
        color: ["#90CAF9", "#000"]
      });

      columnPlot.render();
    },

    drawColumnC5() {
      const data = [
        {
          name: "僵尸企业",
          负债: "0-500",
          公司个数: 2759
        },
        {
          name: "僵尸企业",
          负债: "500-5000",
          公司个数: 0
        },
        {
          name: "僵尸企业",
          负债: "5000-1亿",
          公司个数: 0
        },
        {
          name: "僵尸企业",
          负债: "1亿-10亿",
          公司个数: 0
        },
        {
          name: "僵尸企业",
          负债: "10亿以上",
          公司个数: 0
        },
        {
          name: "非僵尸企业",
          负债: "0-500",
          公司个数: 3506
        },
        {
          name: "非僵尸企业",
          负债: "500-5000",
          公司个数: 217
        },
        {
          name: "非僵尸企业",
          负债: "5000-1亿",
          公司个数: 230
        },
        {
          name: "非僵尸企业",
          负债: "1亿-10亿",
          公司个数: 1744
        },
        {
          name: "非僵尸企业",
          负债: "10亿以上",
          公司个数: 1533
        }
      ];

      const columnPlot = new GroupedColumn(document.getElementById("c5"), {
        title: {
          visible: true,
          text: "2017年纳税总额"
        },
        width: 400,
        height: 280,
        data,
        xField: "负债",
        yField: "公司个数",
        yAxis: {
          min: 0
        },
        label: {
          visible: true
        },
        groupField: "name",
        color: ["#90CAF9", "#000"]
      });

      columnPlot.render();
    },
    drawColumnC6() {
      const data = [
        {
          name: "僵尸企业",
          负债: "0-500",
          公司个数: 0
        },
        {
          name: "僵尸企业",
          负债: "500-5000",
          公司个数: 59
        },
        {
          name: "僵尸企业",
          负债: "5000-1亿",
          公司个数: 99
        },
        {
          name: "僵尸企业",
          负债: "1亿-10亿",
          公司个数: 1169
        },
        {
          name: "僵尸企业",
          负债: "10亿以上",
          公司个数: 1432
        },
        {
          name: "非僵尸企业",
          负债: "0-500",
          公司个数: 1
        },
        {
          name: "非僵尸企业",
          负债: "500-5000",
          公司个数: 139
        },
        {
          name: "非僵尸企业",
          负债: "5000-1亿",
          公司个数: 211
        },
        {
          name: "非僵尸企业",
          负债: "1亿-10亿",
          公司个数: 3161
        },
        {
          name: "非僵尸企业",
          负债: "10亿以上",
          公司个数: 3729
        }
      ];

      const columnPlot = new GroupedColumn(document.getElementById("c6"), {
        title: {
          visible: true,
          text: "2017年资产总额"
        },
        width: 400,
        height: 280,
        data,
        xField: "负债",
        yField: "公司个数",
        yAxis: {
          min: 0
        },
        label: {
          visible: true
        },
        groupField: "name",
        color: ["#90CAF9", "#000"]
      });

      columnPlot.render();
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
}
#map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
#tooltips-left {
  z-index: 2;
}
#tooltips-right {
  z-index: 2;
}
#tooltips-map {
  position: sticky;
  top: 80vh;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
</style>
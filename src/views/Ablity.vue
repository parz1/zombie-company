<template>
  <v-app>
    <v-container>
      <v-row class="mx-4">
        <v-col cols="4">
          <v-card height="180" color="info" dark ripple>
            <v-card-title class="body-1">正常</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">8</p>
                <p class="mt-2">描述信息</p>
              </div>
              <div>
                <v-icon size="80">mdi-home</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="180" color="error" dark ripple>
            <v-card-title class="body-1">关注</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">3</p>
                <p class="mt-2">描述信息</p>
              </div>
              <div>
                <v-icon size="80">mdi-account</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="180" color="success" dark ripple>
            <v-card-title class="body-1">风险</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">6</p>
                <p class="mt-2">条风险</p>
              </div>
              <div>
                <v-icon size="80">mdi-application</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mx-4">
        <v-col cols="6">
          <v-card height="400">
            <v-card-title class="mb-n12">雷达图</v-card-title>
            <div id="c1"></div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="400">
            <v-card-title class="">具体分析</v-card-title>
            <v-card-text class="px-12">
              <p class="body-1 my-4 black--text">负债水平较高，该企业很可能存在较高的债务风险，无法在短期内偿还高额度的债务</p>
              <p class="body-1 my-4 black--text">补贴依赖程度一般，该企业目前可以脱离政策补贴独立运营，但需要持续关注</p>
              <p class="body-1 my-4 black--text">企业盈利水平一般，该企业盈利能力可以维持目前的运营，但向上发展存在阻力</p>
              <p class="body-1 my-4 black--text">纳税指标一般，该企业为当地发展贡献水平维持平均值，不会对当地发展形成阻碍，但也不会提高当地政府收入</p>
              <p class="body-1 my-4 black--text">资产回报水平较差，该企业的实际回报人难以通过该企业的营运获得较高的利益。</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mx-4">
        <v-col cols="6">
          <v-card height="400">
            <div id="c2"></div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <div id="c3"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Radar } from "@antv/g2plot";
import { Pie } from "@antv/g2plot";
import { GroupedColumn } from "@antv/g2plot";
export default {
  name: "",
  // components: {
  //   Process
  // },
  data() {
    return {};
  },
  mounted() {
    this.drawRadar();
    this.drawPieC2();
    this.drawColumnC3();
  },
  methods: {
    drawRadar() {
      const data = [
        {
          item: "负债水平",
          score: 2
        },
        {
          item: "补贴依赖程度",
          score: 3
        },
        {
          item: "企业盈利水平",
          score: 3
        },
        {
          item: "纳税指标",
          score: 3
        },
        {
          item: "资产回报水平",
          score: 2
        }
      ];
      const radarPlot = new Radar(document.getElementById("c1"), {
        title: {
          visible: false,
          text: "基础雷达图"
        },
        data,
        angleField: "item",
        radiusField: "score",
        radiusAxis: {
          grid: {
            alternateColor: ["rgba(0, 0, 0, 0.04)", null]
          },
          max: 5
        },
        area: {
          visible: true
        },
        point: {
          visible: true
        }
      });
      radarPlot.render();
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
        forceFit: true,
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
        forceFit: true,
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

<style lang="" scoped>
</style>
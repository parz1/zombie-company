<template>
  <div class="fill-height" id="stuff"></div>
</template>

<script>
import { Column } from "@antv/g2plot";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const data = [
        {
          type: "家具家电",
          sales: 38
        },
        {
          type: "粮油副食",
          sales: 52
        },
        {
          type: "生鲜水果",
          sales: 61
        },
        {
          type: "美容洗护",
          sales: 145
        },
        {
          type: "母婴用品",
          sales: 48
        },
        {
          type: "进口食品",
          sales: 38
        },
        {
          type: "食品饮料",
          sales: 38
        },
        {
          type: "家庭清洁",
          sales: 38
        }
      ];

      const columnPlot = new Column(document.getElementById("stuff"), {
        title: {
          visible: true,
          text: "注册资本"
        },
        padding: "auto",
        data,
        xField: "type",
        yField: "sales",
        meta: {
          type: {
            alias: "类别"
          },
          sales: {
            alias: "销售额(万)"
          }
        }
      });

      columnPlot.render();
    }
  }
};
</script>

<style lang="less" scoped>
</style>
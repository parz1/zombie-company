<template>
  <div class="fill-height" id="c1"></div>
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
          负债: "0-500",
          公司个数: 9
        },
        {
          负债: "500-5000",
          公司个数: 102
        },
        {
          负债: "5000-1亿",
          公司个数: 104
        },
        {
          负债: "1亿-10亿",
          公司个数: 1227
        },
        {
          负债: "10亿以上",
          公司个数: 1326
        }
      ];

      const columnPlot = new Column(document.getElementById("c1"), {
        title: {
          visible: true,
          text: "在库企业注册资本分布"
        },
        data,
        xField: "负债",
        yField: "公司个数",
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
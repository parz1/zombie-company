<template>
  <div class="fill-height" id="stuff"></div>
</template>

<script>
import { GroupedColumn } from "@antv/g2plot";
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

      const columnPlot = new GroupedColumn(document.getElementById("stuff"), {
        title: {
          visible: true,
          text: "2017年负债总额分布"
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

<style lang="less" scoped>
</style>
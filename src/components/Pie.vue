<template>
  <div class="fill-height" id="c2"></div>
</template>

<script>
import { Pie } from "@antv/g2plot";
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

      const piePlot = new Pie(document.getElementById("c2"), {
        forceFit: true,
        title: {
          visible: true,
          text: "僵尸企业行业类别分布"
        },
        description: {
          visible: false,
          text:
            "当把饼图label的类型设置为outer-center时，标签在切片外部拉线显示。outer-center布局的label发生遮挡会直接隐藏而不偏移躲避，相对于outer label布局来说，更美观"
        },
        radius: 0.8,
        data,
        angleField: "value",
        colorField: "type",
        label: {
          visible: true,
          type: "outer-center",
          formatter: (text, item) =>
            `${item._origin.type}: ${item._origin.value}`
        }
      });

      piePlot.render();
    }
  }
};
</script>

<style lang="less" scoped>
</style>
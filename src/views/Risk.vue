<template>
  <v-container>
    <div id="container"></div>
    <v-row>
      <v-col cols="3">
        <v-card height="380">
          <v-card-title>负债率高</v-card-title>
          <v-card-text>
            <div>
              <div class="warning--text d-flex justify-start align-center">
                <span class="title">问题</span>
                <v-icon color="warning" class="mx-2">mdi-alert</v-icon>
              </div>
              <p class="body-1">资产负债率是衡量负债水平及风险程度的重要标志。资产负债率过高，会影响企业的筹资能力</p>

              <div class="primary--text d-flex justify-start align-center">
                <span class="title">对策</span>
                <v-icon color="primary" class="mx-2">mdi-tools</v-icon>
              </div>
              <p class="body-1">
                "1.在筹资时,合理安排负债比率。
                2.合理配置和使用资源,提高资源配置效率。"
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="380">
          <v-card-title>营业利润率低</v-card-title>
          <v-card-text>
            <div>
              <div class="warning--text d-flex justify-start align-center">
                <span class="title">问题</span>
                <v-icon color="warning" class="mx-2">mdi-alert</v-icon>
              </div>
              <p class="body-1">营业利润率的高低反映了企业的盈利能力的强弱。营业利润率越低，说明企业盈利能力越弱，经营风险越大。</p>

              <div class="primary--text d-flex justify-start align-center">
                <span class="title">对策</span>
                <v-icon color="primary" class="mx-2">mdi-tools</v-icon>
              </div>
              <p class="body-1">
                "1.把握好盈亏平衡点，即控制好实现盈亏平衡的保本销售收入。
                2.严格控制费用的增长比例，使其低于收入的增长，并且不断扩大销售规模。"
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card height="380">
          <v-card-title>资本收益率低</v-card-title>
          <v-card-text>
            <div>
              <div class="warning--text d-flex justify-start align-center">
                <span class="title">问题</span>
                <v-icon color="warning" class="mx-2">mdi-alert</v-icon>
              </div>
              <p class="body-1">资本收益率,是指企业净利与平均资本的比率，用以反映企业运用资本获得收益的能力。资金收益率过低反映出的问题是资金使用效率的明显不足。</p>

              <div class="primary--text d-flex justify-start align-center">
                <span class="title">对策</span>
                <v-icon color="primary" class="mx-2">mdi-tools</v-icon>
              </div>
              <p class="body-1">
                "1.创新商业模式和创新技术。
                2.改善成本基础并不断审查资本支出。"
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="380">
          <v-card-title>负债总额高</v-card-title>
          <v-card-text>
            <div>
              <div class="warning--text d-flex justify-start align-center">
                <span class="title">问题</span>
                <v-icon color="warning" class="mx-2">mdi-alert</v-icon>
              </div>
              <p
                class="body-1"
              >企业负债规模大，利息费用支出增加，由于收益降低而导致丧失偿付能力或破产的可能性也增大。同时，负债比重越高，企业的财务杠杆系数越大。所以负债规模越大，财务风险也越大。</p>

              <div class="primary--text d-flex justify-start align-center">
                <span class="title">对策</span>
                <v-icon color="primary" class="mx-2">mdi-tools</v-icon>
              </div>
              <p class="body-1">
                "1.优化企业部分的债务资金配置，在经济体内部进行债务的重新分配，使得企业负债总额下降。
                2.有计划地调减企业部门过快的债务增长速度。"
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import G6 from "@antv/g6";
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
      const width = document.getElementById("container").scrollWidth;
      const height = document.getElementById("container").scrollHeight || 500;
      const graph = new G6.Graph({
        container: "container",
        width,
        defaultNode: {
          type: "circle",
          size: [160],
          color: d => d.color,
          style: {
            fill: "#f7f7f7",
            lineWidth: 5
          },
          labelCfg: {
            style: {
              fill: "#000",
              fontSize: 14
            }
          }
        },
        height,
        layout: {
          type: "force",
          preventOverlap: true,
          linkDistance: d => {
            if (d.source.id === "node0") {
              return 200;
            }
            return 30;
          },
          nodeStrength: d => {
            if (d.isLeaf) {
              return -50;
            }
            return -10;
          },
          edgeStrength: d => {
            if (
              d.source.id === "node1" ||
              d.source.id === "node2" ||
              d.source.id === "node3"
            ) {
              return 0.7;
            }
            return 0.1;
          }
        },
        defaultEdge: {
          size: 1,
          color: "#666"
        }
      });
      const data = {
        nodes: [
          { id: "node0", size: 180, label: "ID:8010006", color: "#000" },
          {
            id: "node4",
            size: 80,
            isLeaf: true,
            label: "负债率",
            color: "#F44336"
          },
          {
            id: "node5",
            size: 80,
            isLeaf: true,
            label: "营业利润率",
            color: "#F44336"
          },
          {
            id: "node6",
            size: 80,
            isLeaf: true,
            label: "资本收益率",
            color: "#F44336"
          },
          {
            id: "node7",
            size: 80,
            isLeaf: true,
            label: "负债总额",
            color: "#F44336"
          },
          {
            id: "node8",
            size: 80,
            isLeaf: true,
            label: "纳税总额",
            color: "#F44336"
          },
          {
            id: "node9",
            size: 80,
            isLeaf: true,
            label: "产权数量",
            color: "#F44336"
          },
          {
            id: "node10",
            size: 80,
            isLeaf: true,
            label: "政府补贴",
            color: "#F44336"
          },
          {
            id: "node11",
            size: 80,
            isLeaf: true,
            label: "融资额度",
            color: "#FF9800"
          },
          {
            id: "node12",
            size: 80,
            isLeaf: true,
            label: "融资成本",
            color: "#FF9800"
          },
          {
            id: "node13",
            size: 80,
            isLeaf: true,
            label: "注册资本",
            color: "#FF9800"
          },
          {
            id: "node14",
            size: 80,
            isLeaf: true,
            label: "营业总收入",
            color: "#03A9F4"
          },
          {
            id: "node15",
            size: 80,
            isLeaf: true,
            label: "利润总额",
            color: "#03A9F4"
          },
          {
            id: "node16",
            size: 80,
            isLeaf: true,
            label: "净利润",
            color: "#03A9F4"
          },
          {
            id: "node14",
            size: 80,
            isLeaf: true,
            label: "从业人数",
            color: "#03A9F4"
          },
          {
            id: "node15",
            size: 80,
            isLeaf: true,
            label: "主营业务收入",
            color: "#03A9F4"
          },
          {
            id: "node16",
            size: 80,
            isLeaf: true,
            label: "资产总额",
            color: "#03A9F4"
          },
          {
            id: "node16",
            size: 80,
            isLeaf: true,
            label: "所有者权益合计",
            color: "#03A9F4"
          }
        ],
        edges: [
          { source: "node0", target: "node1" },
          { source: "node0", target: "node2" },
          { source: "node0", target: "node3" },
          { source: "node0", target: "node4" },
          { source: "node0", target: "node5" },
          { source: "node0", target: "node6" },
          { source: "node0", target: "node7" },
          { source: "node0", target: "node8" },
          { source: "node0", target: "node9" },
          { source: "node0", target: "node10" },
          { source: "node0", target: "node11" },
          { source: "node0", target: "node12" },
          { source: "node0", target: "node13" },
          { source: "node0", target: "node14" },
          { source: "node0", target: "node15" },
          { source: "node0", target: "node16" }
        ]
      };
      const nodes = data.nodes;
      graph.data({
        nodes,
        edges: data.edges.map(function(edge, i) {
          edge.id = "edge" + i;
          return Object.assign({}, edge);
        })
      });
      graph.render();

      graph.on("node:dragstart", function(e) {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on("node:drag", function(e) {
        refreshDragedNodePosition(e);
      });
      graph.on("node:dragend", function(e) {
        e.item.get("model").fx = null;
        e.item.get("model").fy = null;
      });

      function refreshDragedNodePosition(e) {
        const model = e.item.get("model");
        model.fx = e.x;
        model.fy = e.y;
      }
    }
  }
};
</script>

<style lang="" scoped>
</style>
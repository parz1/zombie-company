<template>
  <v-app>
    <v-container>
      <!-- <v-row>
      <v-col cols="12">
        <v-card height="100" class="mx-8 mt-4" elevation="0">12321321321</v-card>
      </v-col>
      </v-row>-->
      <v-row>
        <v-col cols="6">
          <v-card class="ml-4 mt-4" height="400">
            <v-card-text>
              <v-row>
                <v-col cols="5">
                  <p class="title black--text">企业信息</p>
                  <p
                    v-for="(item, i) in columns"
                    :key="i"
                    class="my-1"
                  >{{item.label}} : {{item.value}}</p>
                </v-col>
                <v-col cols="7">
                  <div class="d-flex justify-center">
                    <v-avatar
                      color="error"
                      size="128"
                      class="d-flex flex-column justify-center align-center elevation-4"
                    >
                      <span class="white--text body-2">评级</span>
                      <span class="white--text title font-weight-bold">僵尸企业</span>
                    </v-avatar>
                  </div>
                  <div class="mt-4">
                    <p class="title black--text">企业标签</p>
                    <div>
                      <v-chip
                        class="ma-1"
                        small
                        color="error"
                        v-for="text in redChips"
                        :key="text"
                      >{{text}}</v-chip>
                      <v-chip
                        class="ma-1"
                        small
                        color="info"
                        v-for="text in yellowChips"
                        :key="text"
                      >{{text}}</v-chip>
                      <v-chip
                        class="ma-1"
                        small
                        color="success"
                        v-for="text in greenChips"
                        :key="text"
                      >{{text}}</v-chip>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <div>
            <v-card class="mr-4 mt-4" height="400">
              <v-card-text>
                <column></column>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="400" class="ml-4">
            <v-card-text>
              <pie></pie>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400">
            <v-card-text>
              <stuff-column></stuff-column>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400" class="mr-4">
            <process></process>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Column from "@/components/Column";
import Pie from "@/components/Pie";
import StuffColumn from "@/components/StuffColumn";
import Process from "@/components/Process";
export default {
  name: "",
  components: {
    Column,
    Pie,
    StuffColumn,
    Process
  },
  data() {
    return {
      columns: [
        {
          label: "企业ID",
          value: "8010006"
        },
        {
          label: "注册时间",
          value: "2006"
        },
        {
          label: "注册资本",
          value: "370万"
        },
        {
          label: "行业",
          value: "交通运输业"
        },
        {
          label: "区域",
          value: "江西"
        },
        {
          label: "行业类型",
          value: "集体所有制企业"
        },
        {
          label: "控制人类型",
          value: "自然人"
        },
        {
          label: "控制人持股比例",
          value: "80%"
        },
        {
          label: "专利",
          value: 0
        },
        {
          label: "商标",
          value: 0
        },
        {
          label: "著作权",
          value: 0
        }
      ],
      redChips: [
        "负债率",
        "营业利润率",
        "资本收益率",
        "负债总额",
        "纳税总额",
        "产权数量"
      ],
      yellowChips: ["政府补贴程度", "融资额度", "融资成本"],
      greenChips: [
        "注册资本",
        "营业总收入",
        "利润总额",
        "净利润",
        "从业人数",
        "资产总额",
        "所有者权益合计",
        "主营业务收入"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>
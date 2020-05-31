<template>
  <v-app>
    <v-container class="pa-0 ma-0">
      <input v-show="false" ref="upload" type="file" @change="delay" />
      <v-carousel
        cycle
        height="500"
        class="fill-width"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i" class="elevation-4">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="banner[i]" contain>
                <div class="cover-title d-flex flex-column juntify-center align-end black--text">
                  <div class="display-4 font-weight-black">Zombie Hunter</div>
                  <div class="display-1 font-weight-light">AI人工智能企业画像系统</div>
                </div>
              </v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row class="mx-4">
        <v-col cols="2">
          <v-card
            height="150"
            class="ma-4 d-flex flex-column justify-center align-center pointer"
            color="primary"
            dark
            ripple
            @click="upload('multiple')"
          >
            <v-icon x-large>mdi-upload</v-icon>
            <span class="headline font-weight-light">批量导入</span>
          </v-card>

          <v-card
            height="150"
            class="ma-4 d-flex flex-column justify-center align-center pointer"
            color="info"
            dark
            ripple
            @click="upload('single')"
          >
            <v-icon x-large>mdi-upload</v-icon>
            <span class="headline font-weight-light">单个导入</span>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="316" class="my-4">
            <v-card-title>常用工具</v-card-title>
            <v-card-text class="black--text d-flex justify-start">
              <div class="d-flex flex-column justify-space-around align-center mx-4">
                <v-icon color="primary" size="80">mdi-chart-donut</v-icon>
                <span class="body-1">数据分析</span>
              </div>
              <div class="d-flex flex-column justify-space-around align-center mx-4">
                <v-icon color="primary" size="80">mdi-star-box</v-icon>
                <span class="body-1">用户收藏</span>
              </div>
              <div class="d-flex flex-column justify-space-around align-center mx-4">
                <v-icon color="primary" size="80">mdi-account-circle</v-icon>
                <span class="body-1">登陆</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="316" class="ma-4 d-flex flex-column justify-center align-center">
            <div id="c1"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-overlay :value="overlay">
        <v-progress-circular size="64" width="8" :indeterminate="inf" color="indigo lighten-5"></v-progress-circular>
      </v-overlay>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { Line } from "@antv/g2plot";
import banner1 from "@/assets/banner-3.jpg";
import banner2 from "@/assets/banner-2.jpg";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      overlay: false,
      progress: 0,
      inf: true,
      banner: [banner1, banner2],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second"]
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    delay() {
      this.overlay = true;
      setTimeout(() => {
        this.$router.push("/" + this.goto);
      }, 1500);
    },
    upload(e) {
      if (e === "multiple") this.goto = "data";
      else this.goto = "intro";
      this.$refs.upload.click();
    },
    draw() {
      const data = [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 }
      ];

      const linePlot = new Line(document.getElementById("c1"), {
        title: {
          visible: true,
          text: "活跃量"
        },
        forceFit: true,
        data,
        xField: "year",
        yField: "value",
        smooth: true
      });

      linePlot.render();
    }
  }
};
</script>

<style scope>
.cover-title {
  position: absolute;
  top: 100px;
  right: 240px;
}
#c1 {
  width: 100%;
  height: 100%;
}
.point {
  cursor: pointer;
}
</style>
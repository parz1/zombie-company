<template>
  <v-app id="app">
    <v-app-bar v-if="!isLogin" app color="white">
      <div class="d-flex align-center">
        <v-btn icon @click="miniVariant=!miniVariant">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <span class="title font-weight-light">ZombieHunter企业画像系统</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-if="!isLogin"
      v-model="drawer"
      color="primary"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      dark
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <span class="title font-weight-light">
              Zombie Hunter
              <br />企业画像系统
            </span>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          color="blue lighten-3"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="body-1">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group prepend-icon="mdi-account-circle" color="blue lighten-3" value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="white--text body-1">全量统计</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(item, i) in stat" :key="i" link :to="item.link">
            <v-list-item-title v-text="item.title" class="body-2"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view class="routerview"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,
    items: [
      { title: "首页", icon: "mdi-view-dashboard", link: "home" },
      { title: "数据分析", icon: "mdi-image", link: "data" },
      { title: "用户主页", icon: "mdi-image", link: "user" }
    ],
    stat: [
      { title: "企业概览", icon: "mdi-image", link: "intro" },
      { title: "经营能力", icon: "mdi-image", link: "ablity" },
      {
        title: "风险指标",
        icon: "mdi-image",
        link: "risk"
      }
    ],
    miniVariant: false,
    bg: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  }),
  computed: {
    isLogin() {
      return this.$route.name === "Login";
    }
  }
};
</script>

<style>
#app {
  background-color: #f7f7f7;
  padding: 0;
  margin: 0;
}
.routerview {
  background-color: #f7f7f7;
}
</style>

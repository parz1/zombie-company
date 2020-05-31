<template>
  <v-app>
    <v-container>
      <v-row class="mx-4">
        <v-col cols="3">
          <v-card height="180" color="info" dark ripple>
            <v-card-title class="body-1">正常</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">298</p>
                <p class="mt-2">描述信息</p>
              </div>
              <div>
                <v-icon size="80">mdi-home</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card height="180" color="error" dark ripple>
            <v-card-title class="body-1">正常</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">1400</p>
                <p class="mt-2">描述信息</p>
              </div>
              <div>
                <v-icon size="80">mdi-account</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card height="180" color="success" dark ripple>
            <v-card-title class="body-1">正常</v-card-title>
            <v-card-text class="white--text d-flex justify-space-between align-end">
              <div>
                <p class="display-3 font-weight-black my-0">5</p>
                <p class="mt-2">描述信息</p>
              </div>
              <div>
                <v-icon size="80">mdi-application</v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
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
import Process from "@/components/Process";
export default {
  name: "",
  components: {
    Process
  },
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
</style>
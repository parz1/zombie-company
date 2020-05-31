<template>
  <v-container>
    <v-row class="mx-4">
      <v-col cols="3">
        <v-card height="200" class="point pt-4" ripple to="/intro">
          <!-- <v-card-title class="primary--text">企业ID8010006</v-card-title> -->
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">企业ID : 8010006</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip color="error" label class="ma-1">风险指标:6条</v-chip>
                <v-chip color="info" label class="ma-1">风险指标:6条</v-chip>
                <v-chip color="success" label class="ma-1">风险指标:6条</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar size="80" color="error" class="white--text">僵尸企业</v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style  scoped>
.point {
  cursor: pointer;
}
</style>
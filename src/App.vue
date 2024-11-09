<script>
import Header from "./components/partials/Header.vue";

export default {
  components: {
    Header,
  },

  data() {
    return {};
  },
  methods: {},

  mounted() {},
};
</script>

<template>
  <div class="container">
    <Header />
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>

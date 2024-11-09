<script>
import { store } from "../data/store";
import axios from "axios";
import Main from "../components/Main.vue";
import Loader from "../components/partials/Loader.vue";

export default {
  components: {
    Main,
    Loader,
  },

  data() {
    return {
      store,
      loading: true,
    };
  },
  methods: {
    getApi(apiUrl, parameter = "") {
      this.loading = true;
      axios
        .get(store.apiUrl + parameter)
        .then((result) => {
          this.loading = false;

          switch (parameter) {
            case "tecnologies":
              this.store.tecnologies = result.data;
              break;

            case "types":
              this.store.types = result.data;
              break;

            default:
              this.store.projects = result.data;
              break;
          }

          // console.log(result.data);
          // this.store.projects = result.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi(store.apiUrl, "projects");
    this.getApi(store.apiUrl, "tecnologies");
    this.getApi(store.apiUrl, "types");
  },
  name: "Projects",
};
</script>

<template>
  <Main v-if="!loading" />
  <Loader v-else />
</template>

<style lang="scss" scoped></style>

<script>
import axios from "axios";
import { store } from "../data/store";
import Loader from "../components/partials/Loader.vue";
export default {
  name: "projectDetail",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
      project: {},
    };
  },
  methods: {
    getApi() {
      const slug = this.$route.params.slug;
      axios
        .get(store.apiUrl + "project-by-slug/" + slug)
        .then((result) => {
          this.loading = false;
          this.project = result.data.project;
          console.log(result.data.project);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error.message);
        });
    },
  },
  computed: {
    // tecnology(){
    //     if(!this.project.tecnology){
    //         return 'Nessun linguaggio'
    //     }
    //     return this.project.tecnology.title;
    // },
    type() {
      if (!this.project.type) {
        return "Nessun tipo";
      }
      return this.project.type.title;
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="container">
      <div class="box has-background-dark has-text-white">
        <h1 class="title has-text-white mb-5">{{ project.title }}</h1>

        <div class="tags mb-4">
          <span
            v-for="tecnology in project.tecnologies"
            class="tag is-warning is-medium"
          >
            {{ tecnology.title }}
          </span>
          <span class="tag is-success is-medium">{{ type }}</span>
        </div>

        <figure class="image is-16by9 mb-5">
          <img :src="project.image" :alt="project.title" />
        </figure>

        <div class="content has-text-white">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  max-width: 800px;
  margin: 2rem auto;
  background-color: rgba(13, 25, 48, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

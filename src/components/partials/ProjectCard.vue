<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  
   
  <div class="col">
    <div class="card mt-5" style="width: 18rem">
        <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <span v-for="tecnology in project.tecnologies" class="badge text-bg-warning mx-2 mb-4">{{ tecnology.title }}</span>
        <!-- <p class="card-text">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p> -->
        <router-link :to="{ name: 'projectDetail', params:{slug: project.slug} }" class="btn btn-warning">Vai al progetto</router-link>
      </div>
    </div>
  </div>


  
</template>


<style lang="scss" scoped></style>


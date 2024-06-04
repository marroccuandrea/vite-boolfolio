<script>
import { store } from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';

export default {
  components:{
    ProjectCard,
  },
  data(){
    return{
      store,
    };
  },
}
</script>

<template>
    <div class="container mt-5">
      <h1 class="mb-3">I miei progetti</h1>
      <div class="technologies mb-3">
        <span v-for="tecnology in store.tecnologies" :key="`t-${tecnology.id}`" class="badge text-bg-warning mx-2">{{ tecnology.title }}</span>
      </div>
      <div class="types">
        <span v-for="type in store.types" :key="`t-${type.id}`" class="badge text-bg-success mx-2">{{ type.title }}</span>    
      </div>
        <div class="row row-cols-4">           
            <ProjectCard v-for="project in store.projects" :key="project.id" :project="project"/>                   
        </div>
        
    </div>
</template>


<style lang="scss" scoped>

</style>

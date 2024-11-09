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
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title is-4 has-text-white">{{ project.title }}</p>

        <div class="tags are-medium mb-4">
          <span
            v-for="tecnology in project.tecnologies"
            class="tag is-warning is-light"
          >
            {{ tecnology.title }}
          </span>
        </div>

        <router-link
          :to="{ name: 'projectDetail', params: { slug: project.slug } }"
          class="button is-warning is-outlined"
        >
          <span>Vai al progetto</span>
          <span class="icon">
            <i class="fas fa-arrow-right"></i>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

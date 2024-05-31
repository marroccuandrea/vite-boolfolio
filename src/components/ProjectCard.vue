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
  <h2>{{ project.title }}</h2>
</template>

<style lang="scss" scoped></style>

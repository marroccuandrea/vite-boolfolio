<script>
import { store } from "../data/store";
import ProjectCard from "./partials/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Titolo con effetto spaziale -->
      <h1 class="title has-text-centered has-text-white mb-6 cosmic-title">
        I miei progetti
        <span class="icon">
          <i class="fas fa-rocket"></i>
        </span>
      </h1>

      <!-- Tecnologie -->
      <div class="tags is-centered mb-5">
        <span
          v-for="tecnology in store.tecnologies"
          :key="`t-${tecnology.id}`"
          class="tag is-medium is-warning is-light has-glow"
        >
          {{ tecnology.title }}
        </span>
      </div>

      <!-- Tipi di progetto -->
      <div class="tags is-centered mb-6">
        <span
          v-for="item in store.types"
          :key="`t-${item.id}`"
          class="tag is-medium is-success is-light has-glow"
        >
          {{ item.title }}
        </span>
      </div>

      <!-- Griglia progetti -->
      <div class="columns is-multiline">
        <ProjectCard
          v-for="project in store.projects"
          :key="project.id"
          :project="project"
          class="column is-one-quarter"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 3rem 1.5rem;
}

.cosmic-title {
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 2rem !important;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  .icon {
    margin-left: 0.5rem;
    color: #64ffda;
  }
}

.has-glow {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
  }
}

// Animazione per i tag
.tags {
  .tag {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
    &:hover {
      cursor: pointer;
    }

    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  .column.is-one-quarter {
    width: 50%;
  }
}

@media screen and (max-width: 480px) {
  .column.is-one-quarter {
    width: 100%;
  }

  .cosmic-title {
    font-size: 2rem;
  }
}
</style>

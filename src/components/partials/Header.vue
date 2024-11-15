<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false;
    },
  },
};
</script>

<template>
  <nav
    class="navbar is-transparent mb-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="../../assets/black-hole.png"
          alt="Icona Spaziale"
          class="mr-2"
          style="width: 55px; height: 55px"
        />
        <span class="has-text-weight-bold is-size-4">Portfolio Spaziale</span>
      </a>

      <!-- Hamburger button -->
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isMenuActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-end">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-item"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="navbar-item"
          @click="closeMenu"
        >
          About
        </router-link>
        <router-link
          :to="{ name: 'contacts' }"
          class="navbar-item"
          @click="closeMenu"
        >
          Contacts
        </router-link>
        <router-link
          :to="{ name: 'projects' }"
          class="navbar-item"
          @click="closeMenu"
        >
          Projects
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(10px);

  // Stile per il burger menu
  .navbar-burger {
    color: #ffffff;
    height: auto;

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
    }

    span {
      height: 2px;
      width: 16px;
      left: calc(50% - 8px);
    }
  }

  // Stile per il menu mobile
  .navbar-menu {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(10px);

    &.is-active {
      animation: slideIn 0.3s ease;
    }
  }
}

.navbar-item {
  color: #ffffff;
  transition: all 0.3s ease;
  img {
    max-height: 55px;
  }

  &:hover {
    color: #64ffda !important;
    background-color: rgba(100, 255, 218, 0.1) !important;
  }

  &.is-active {
    color: #64ffda !important;
    background-color: transparent !important;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Stili per dispositivi mobile
@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    box-shadow: 0 8px 16px rgba(10, 25, 47, 0.1);

    .navbar-item {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>

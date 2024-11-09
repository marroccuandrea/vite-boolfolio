<script>
export default {
  name: "Header",
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
        <i class="fas fa-galaxy fa-2x mr-2"></i>
        <span class="has-text-weight-bold is-size-4">Portfolio Spaziale</span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link :to="{ name: 'home' }" class="navbar-item"
          >Home</router-link
        >
        <router-link :to="{ name: 'about' }" class="navbar-item"
          >About</router-link
        >
        <router-link :to="{ name: 'contacts' }" class="navbar-item"
          >Contacts</router-link
        >
        <router-link :to="{ name: 'projects' }" class="navbar-item"
          >Projects</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-item {
  color: #ffffff;

  &:hover {
    color: #64ffda !important;
    background-color: rgba(100, 255, 218, 0.1) !important;
  }

  &.is-active {
    color: #64ffda !important;
    background-color: transparent !important;
  }
}
</style>

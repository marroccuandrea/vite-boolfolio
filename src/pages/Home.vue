<script>
export default {
  name: "Home",
};
</script>

<template>
  <section class="hero is-large" aria-label="Homepage Hero Section">
    <div class="hero-body">
      <div class="card">
        <h1 class="title has-text-white">
          Benvenuto nel mio universo digitale!
        </h1>
        <h2 class="content has-text-grey-lighter">
          Mi chiamo Andrea Marroccu, sono uno sviluppatore full stack con una
          passione per il design spaziale e la creazione di esperienze web
          coinvolgenti. <br />
          Su questo sito potrete trovare una raccolta dei miei progetti che ho
          sviluppato.. Beh date una occhiata!
        </h2>
        <div class="buttons">
          <router-link
            :to="{ name: 'projects' }"
            class="button is-primary is-outlined"
          >
            Scopri i miei progetti
          </router-link>
          <router-link
            class="button is-link is-outlined"
            :to="{ name: 'contacts' }"
            >Contattami
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-white">Progetti in Evidenza</h2>
      <p class="content has-text-grey-lighter">
        Dai un'occhiata ai miei progetti più recenti e scopri come posso
        aiutarti a realizzare la tua idea.
      </p>
      <!-- Puoi aggiungere qui una griglia di card per i progetti -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  // background-size: cover;
  // background-position: center;
  .card {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 40px;
    border-radius: 0.55rem;
  }
}
.buttons {
  margin-top: 2rem;
}
</style>

<template>
  <section id="home-section">
    <app-header />
    <home />
  </section>
  <section id="despre-section">
    <despre />
  </section>

</template>

<script>
import AppHeader from './components/Header.vue';
import Home from './components/Home.vue';
import Despre from './components/Despre.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    Despre,
  },
};
</script>

<template>
  <section id="home-section">
    <app-header />
    <home />
  </section>
  <section id="despre-section">
    <despre />
  </section>
  <section id="story-section">
    <story />
  </section>
  <section class="evenimente-section">
    <evenimente />
  </section>
  <section class="end-section">
    <multumiri />
  </section>

</template>

<script>
import AppHeader from './components/Header.vue';
import Home from './components/Home.vue';
import Despre from './components/Despre.vue';
import Story from './components/Story.vue';
import Evenimente from './components/Evenimente.vue';
import Multumiri from './components/Multumiri.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    Despre,
    Story,
    Evenimente,
    Multumiri,
  },
};
</script>

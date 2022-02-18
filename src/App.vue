<template>
  <app-header />
  <section id="home-section" class="spacer-one-top-lg">
    <home class="full-screen-height"/>
    <curved-decoration />
  </section>
  <section id="despre-section" class="spacer-one-top-lg">
    <despre class="full-screen-height"/>
    <curved-decoration />
  </section>
  <section id="story-section" class="spacer-one-top-lg">
    <story class="full-screen-height"/>
    <curved-decoration />
  </section>
  <section id="evenimente-section" class="spacer-one-top-lg">
    <evenimente />
  </section>
  <section id="end-section" class="spacer-one-top-lg">
    <confirmare />
  </section>

</template>

<script>
import AppHeader from './components/Header.vue';
import Home from './components/Home.vue';
import Despre from './components/Despre.vue';
import Story from './components/Story.vue';
import Evenimente from './components/Evenimente.vue';
import Confirmare from './components/Confirmare.vue';
import CurvedDecoration from './components/CurvedDecoration.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    Despre,
    Story,
    Evenimente,
    Confirmare,
    CurvedDecoration,
  },
};
</script>

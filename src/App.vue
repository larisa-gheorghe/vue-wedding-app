<template>
  <app-header />
  <despre />

</template>

<script>
import AppHeader from './components/Header.vue';
import Despre from './components/Despre.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Despre,
  },
};
</script>

<template>
  <div class="col-sm">
  <div class="card text-center">
    <div class="card-block">
      <h4 class="card-title">{{time.time}}</h4>
    </div>
    <div class="card-text text-black-50">
      {{time.text}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TimeItem',
  props: ['time'],
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-lg-between align-items-center">
      <div class="col-md-6 mb-5 mb-md-0">
        <div class="pr-md-4 text-center">
          <h1 class="font-secondary display-4">Ne căsătorim!</h1>
          <p class="lead font-weight-300 text-dark-gray opacity-8">Te invităm la nunta noastră!</p>
          <p class="mb-4">
           Ne dorim din suflet să ne poţi fi alături şi să marcăm împreună ziua în care destinele
           noastre vor merge pe acelaşi drum.
          </p>
          <div class="row text-center" id="timer">
            <time-item class="row" v-for="times in times" v-bind:time="times" :key="times.id">
            </time-item>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="pr-md-4">
          <img class="" id="timer-photo" src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80">
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import TimeItem from './Timer.vue';

export default {
  name: 'Despre',
  components: {
    TimeItem,
  },
  data() {
    return {
      endTime: 'July 2, 2022 12:00:00',
      times: [
        { id: 0, text: 'Days', time: 1 },
        { id: 1, text: 'Hours', time: 1 },
        { id: 2, text: 'Minutes', time: 1 },
        { id: 3, text: 'Seconds', time: 1 },
      ],
      timeinterval: undefined,
    };
  },
  methods: {
    updateTimer() {
      if (
        this.times[3].time > 0
        || this.times[2].time > 0
        || this.times[1].time > 0
        || this.times[0].time > 0
      ) {
        this.getTimeRemaining();
      } else {
        clearTimeout(this.timeinterval);
      }
    },
    getTimeRemaining() {
      const endDate = new Date(this.endTime);
      const startDate = new Date();
      const timeRemaining = Date.parse(endDate) - Date.parse(startDate);
      if (timeRemaining >= 0) {
        this.times[3].time = Math.floor((timeRemaining / 1000) % 60); // seconds
        // eslint-disable-next-line no-mixed-operators
        this.times[2].time = Math.floor(timeRemaining / 1000 / 60 % 60); // minutes
        // eslint-disable-next-line no-mixed-operators
        this.times[1].time = Math.floor(timeRemaining / (1000 * 60 * 60) % 24); // hours
        this.times[0].time = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // days
      } else {
        // eslint-disable-next-line no-multi-assign
        this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
      }
    },
  },
  created() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-lg-between align-items-center">
      <div class="col-md-6 mb-5 mb-md-0">
        <div class="pr-md-4 text-center justify-content-center">
          <h1 class="font-secondary display-4">Ne căsătorim!</h1>
          <p class="lead font-weight-300 text-dark-gray opacity-8">Te invităm la nunta noastră!</p>
          <p class="mb-4">
           Ne dorim din suflet să ne poţi fi alături şi să marcăm împreună ziua în care destinele
           noastre vor merge pe acelaşi drum.
          </p>
          <div class="row text-center pl-4" id="timer">
            <time-item class="row" v-for="times in times" v-bind:time="times" :key="times.id">
            </time-item>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="pr-md-4">
          <svg version="1.1" id="p.svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 980.2914 884.5557" enable-background="new 0 0 980.2914 884.5557"
            xml:space="preserve">
            <path opacity="0.05" fill="#a68a64"
              d="M 444.5898 117.1114 L 444.5898 117.1114 C 377.5836 4.3173 232.0566
              -33.5966 118.4564 32.5181 C 3.8756 99.2042 -33.7721 247.0118 32.9453
              361.5028 l 194.2581 333.3585 c 25.3048 43.4245 81.021 58.1135 124.4456
              32.8087 l 331.5704 -193.2161 c 114.5662 -66.7612 155.4376 -216.1331
              88.8353 -330.7919 C 705.5784 89.2203 558.9022 50.4982 444.5898 117.1114 z" />
            <path fill="none" stroke="#a68a64" stroke-width="3.1978" stroke-miterlimit="10"
              d="M151.0414,716.6817L151.0414,716.6817
              c-2.6854-4.5204-8.5175-6.0399-13.0702-3.3902c-4.592,2.6725-6.1008,8.5961-3.427,
              13.1844l7.7851,13.3598
              c1.0141,1.7403,3.247,2.3289,4.9873,1.3148l13.2881-7.7433c4.5914-2.6756,
              6.2294-8.6618,3.5602-13.257
              C161.5008,715.5639,155.6226,714.0121,151.0414,716.6817z" />
            <path fill="none" stroke="#a68a64" stroke-width="2.7402" stroke-miterlimit="10"
              d="M186.6779,44.1803L186.6779,44.1803
              c-1.4613-2.4599-4.635-3.2867-7.1125-1.8449c-2.4988,1.4543-3.3199,4.6778-1.8649,
              7.1747l4.2365,7.2701
              c0.5519,0.947,1.767,1.2674,2.714,0.7155l7.2311-4.2138c2.4985-1.456,3.3899-4.7136,
              1.9374-7.2141
              C192.3697,43.572,189.1709,42.7276,186.6779,44.1803z" />
            <g  transform="translate(600 300) scale(2) rotate(45)">
              <path fill="none" stroke="#a68a64" stroke-width="1.7402" stroke-miterlimit="10"
              d="M186.6779,44.1803L186.6779,44.1803
              c-1.4613-2.4599-4.635-3.2867-7.1125-1.8449c-2.4988,1.4543-3.3199,4.6778-1.8649,
              7.1747l4.2365,7.2701
              c0.5519,0.947,1.767,1.2674,2.714,0.7155l7.2311-4.2138c2.4985-1.456,3.3899-4.7136,
              1.9374-7.2141
              C192.3697,43.572,189.1709,42.7276,186.6779,44.1803z" />
            </g>
            <defs>
              <mask id="mask">
                <path fill="#ffffff"
                  d="M 475.637 173.1507 L 475.637 173.1507 C 408.6306 60.3566 263.1037 22.4427
                  149.5035 88.5574 C 34.9226 155.2435 -2.7249 303.0512 63.9924 417.5422 L
                  258.2505 750.9007 c 25.3048 43.4245 81.021 58.1135 124.4456 32.8087 l 331.5704
                  -193.2161 c 114.5662 -66.7613 155.4376 -216.1331 88.8353 -330.7919 C 736.6255
                  145.2596 589.9493 106.5375 475.637 173.1507 z" />
              </mask>
            </defs>
            <image mask="url(#mask)" width="1200" height="3553" x="-150" y="-1350"
              xlink:href="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2069&amp;q=80" />
            <g>
              <path fill="none" stroke="#a68a64" stroke-width="7" stroke-linecap="round"
              stroke-miterlimit="10"
                d="M747.8805,524.349 c108.1955-68.637,139.1927-213.677,70.5558-321.8725S606.4696,
                62.2462,498.2741,130.8832l0,0" />
            </g>
          </svg>
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

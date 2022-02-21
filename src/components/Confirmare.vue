<template>
  <div class="container">
    <div class="row min-vh-80 align-items-center position-relative text-center pb-5">
      <div class="col-12">
        <h1 class="display-2 text-white mb-4">De aici începe totul...</h1>
        <p class="font-weight-300 text-white lead mb-5">
          "Nu știu unde duce drumul meu, dar merg mai bine când te țin de mână." - Alfred de Musset
        </p>
      </div>
    </div>
    <div class="row pb-4 shadow-bg">
      <div class="col-12">
        <p class="font-weight-300 text-white lead mb-2">
          Vă rugăm să ne confirmați prezența <br>până pe data de 18 iunie 2022:
        </p>
      </div>
      <div class="col-6">
        <p class="font-weight-300 text-white mb-2 text-right">
          Alexandru:
          <br>
          <span id="alex">0766636217</span>
          <button class="btn btn-sm"
            @click.prevent="copyText('#alex')">
            <i class="fa-solid fa-copy text-white-50"></i>
          </button>
          <br>
          Iulian Zaharia:
          <br>
          <span id="iulian">0736655540</span>
          <button class="btn btn-sm"
            @click.prevent="copyText('#iulian')">
            <i class="fa-solid fa-copy text-white-50"></i>
          </button>
          </p>
      </div>
      <div class="col-6">
        <p class="font-weight-300 text-white mb-2 text-left">
          Larisa:
          <br>
          <span id="larisa">0720058199</span>
          <button class="btn btn-sm"
            @click.prevent="copyText('#larisa')">
            <i class="fa-solid fa-copy text-white-50"></i>
          </button>
          <br>
          Emil Gheorghe:
          <br>
          <span id="emil">0722391520</span>
          <button class="btn btn-sm"
            @click.prevent="copyText('#emil')">
            <i class="fa-solid fa-copy text-white-50"></i>
          </button>
        </p>
      </div>
      <div class="col-12">
        <p class="font-weight-300 text-white mb-2">
          <br>
          Mulţumim!
          <br>
          Larisa &#38; Alexandru
        </p>
      </div>
    </div>
  </div>
  <footer class="text-white-50 text-right">
    <i class="fa-solid fa-copyright text-white-50"></i>
    2022, by LCG
  </footer>
</template>

<script>
export default {
  name: 'Confirmare',
  methods: {
    copyText(id) {
      const str = document.querySelector(id);
      const text = str.textContent;
      navigator.clipboard.writeText(text).then(() => {
      /* clipboard successfully set */
      }, () => {
      /* clipboard write failed */
      });
    },
  },
};
</script>

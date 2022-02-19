<template>
  <div class="container">
    <div class="row min-vh-80 align-items-center position-relative text-center">
      <div class="col-12">
        <h1 class="display-2 text-black mb-4">De aici începe totul...</h1>
        <p class="font-weight-300 text-black lead mb-5">
          "Nu știu unde duce drumul meu, dar merg mai bine când te țin de mână." - Alfred de Musset
          <br><br>
          Mulţumim!
          <br>
          Larisa &#38; Alexandru
        </p>
      </div>
    </div>
    <div class="row pb-4">
      <div class="col-12">
        <p class="font-weight-300 text-white lead mb-2">
          Vă rugăm să ne confirmați prezența <br>până pe data de 18 iunie 2022:
        </p>
      </div>
      <div class="col-12">
        <!-- Modal Close Button -->
        <div class="font-weight-300 text-white mb-2">
          <p id="custom-tooltip">copied!</p>
          <button id="close" class="btn btn-sm text-white-50" @click.prevent="closeButton">
            <i class="fas fa-times"></i></button>
        </div>
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
      console.log(text);
      navigator.clipboard.writeText(text).then(() => {
      /* clipboard successfully set */
      }, () => {
      /* clipboard write failed */
      });
      document.getElementById('custom-tooltip').style.display = 'inline';
      document.getElementById('close').style.display = 'inline';
    },
    closeButton() {
      document.getElementById('custom-tooltip').style.display = 'none';
      document.getElementById('close').style.display = 'none';
    },
  },
};
</script>

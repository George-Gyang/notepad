<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="">
    <div class="position-relative">
      <div>
        <img
          src="../../assets/images/pexels.jpg"
          class="img-fluid main_img"
          alt=""
        />
      </div>
    </div>
    <div
      class="position-absolute top-50 start-50 translate-middle col-11 col-md-8"
    >
      <div
        class="d-flex align-tems-center justify-content-center p-md-5 py-4 px-2 bg-success bg-opacity-75 rounded"
      >
        <div class="m-md-5 m-0">
          <h1 class="text-light text-center">
            Welcome back to your Jotter Pad
          </h1>
          <RouterLink
            to="/note"
            class="fs-2 mt-4 text-center text-primary nav-link animate_charcter"
            >Proceed to Your notes</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main_img {
  width: 100%;
  height: 100vh !important;
}

.animate_charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ffffff 0%,
    #231557 20%,
    #44107a 29%,
    #ff1361 67%,
    #00ff00 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 6s linear infinite;
  display: block;
  font-size: 1rem;
}

@keyframes textclip {
  to {
    background-position: 400% center;
  }
}
</style>

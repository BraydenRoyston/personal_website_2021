<template>
    <div class="loaderWrapper">
        <div class="loader">
            <img src="../../assets/logo/gradient_clean.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.loaderWrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: var(--background);
}

.loader {
    z-index: 4000;

    background: var(--background);
    /* background-image: url('../../assets/wave4_dark.svg'); */
    /* background-size: cover; */

    width: 100vw;
    height: 100vh;
    position: relative;
    perspective: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
}
.loader img {
  position: absolute;
  height: 300px;
  width: 300px;
  animation: logoFlip 3s linear infinite;
  transform-origin: center;
}

@keyframes logoFlip {
  0% { transform: rotateX(0) rotateY(0); }
  25% { transform: rotateX(90deg) rotateY(90deg); }
  50% { transform: rotateX(180deg) rotateY(180deg); }
  75% { transform: rotateX(270deg) rotateY(270deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
</style>
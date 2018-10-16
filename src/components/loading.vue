<template>
    <div class="loading-mask">
        <div class="loading-container">
        </div>
    </div>
</template>

<script>
export default {
  name: 'loading',
}
</script>

<style scoped>
.loading-mask{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.5);
}
.loading-container {
  position: fixed;
  bottom: calc(50% - 0.35rem);
  left: calc(50% - 0.35rem);
  border-top: 0.06rem solid #ff9728;
  border-left: 0.06rem solid #ff9728;
  border-bottom: 0.06rem solid #fff;
  border-right: 0.06rem solid #fff;
  border-radius: 0.7rem;
  width: 0.7rem;
  height: 0.7rem;
  animation: nprogress-spinner .8s linear infinite;
}
@keyframes nprogress-spinner{
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

</style>

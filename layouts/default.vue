<template>
  <div class="layout-wrapper max-w-[56rem] m-auto">
      <div class="layout-main-container ">
          <div class="layout-main">
              <slot />
          </div>
      </div>
      <div class="layout-mask"></div>
  </div>
  <Toast />
</template>

<script setup>
</script>

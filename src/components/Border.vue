<template>
  <div id="borders">
    <div class="border hor top"></div>
    <div class="border hor bot"></div>
    <div class="border vert left"></div>
    <div class="border vert right"></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import '../stylesheets/variables';

  #borders {
    .border {
      position: fixed;
      pointer-events: none;
      z-index: 20;
      background-color: $babyBlue;
      will-change: transform;
      transition: all $secondary-sec $secondary-ease;
      transform: translateZ(0);
      &.open { background-color: $white; }
      &.hor {
        width: 100%;
        height: $border-size;
      }
      &.vert {
        width: $border-size;
        height: 100%;
      }
      &.top { top: 0; }
      &.bot { bottom: 0; }
      &.left { left: 0; }
      &.right { right: 0; }
    }
    &.white .border { background-color: $white; }
  }

  .dark #borders .border {
    background-color: $white;
  }
</style>

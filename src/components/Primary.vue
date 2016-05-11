<template>
  <div class="primary">
    <div class="primary__content">

      <p class="test">Hej</p>

    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import '../variables';

  .primary {
    height: 100%;
    margin: 0;
    padding: $border-size;
    background-color: red;
    .primary__content {
      margin: 0;
      padding: 0;
    }
  }

  @media #{$break-medium} {
    .primary {
      padding: $border-size $border-size $border-size $nav-width;
    }
  }


</style>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Btn extends Vue {}
</script>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.btn {
  border: none;
  background-color: $d-color-primary;
}
</style>

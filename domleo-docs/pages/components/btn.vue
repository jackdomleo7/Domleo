<template>
  <d-btn>Hello</d-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { DBtn } from 'domleo-vue';

@Component({
  components: { DBtn }
})
export default class Btn extends Vue {}
</script>

<style lang="scss" scoped>

</style>

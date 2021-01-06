<template>
  <main>
    <h1>{{ pageHeader }}</h1>
    <slot />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Page extends Vue {
  @Prop({
    type: String,
    required: true
  }) private readonly pageHeader!: string;
}
</script>

<style lang="scss" scoped>

</style>

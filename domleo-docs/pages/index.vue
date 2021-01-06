<template>
  <Page page-header="Home">
    <article>
      <h2>Introduction</h2>
      <p>Welcome to Domleo, a Vue component library by <a href="https://jackdomleo.dev">Jack Domleo</a>.</p>
      <p>This component library is purely a personal project so will not be found on npm.</p>
      <p>This project is in early days but as I progress, I will be focusing on the Vue component library (domleo-vue) and the dynamic documentation of the components (domleo-docs).</p>
      <h2>Projects</h2>
      <h3>domleo-vue</h3>
    </article>
  </Page>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>

</style>

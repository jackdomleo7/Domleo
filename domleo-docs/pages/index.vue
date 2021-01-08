<template>
  <Page page-header="Home">
    <article>
      <h2>Introduction</h2>
      <p>Welcome to Domleo, a Vue component library by <a href="https://jackdomleo.dev">Jack Domleo</a>.</p>
      <p>This component library is purely a personal project so will not be found on npm.</p>
      <p>This project is in early days but as I progress, I will be focusing on the Vue component library (domleo-vue) and the dynamic documentation of the components (domleo-docs).</p>
      <h2>Projects</h2>
      <h3>domleo-vue</h3>
      <p>domleo-vue contains the source code for the Vue.js component library. It uses Rollup.js to bundle the package.</p>
      <p>It is currently written in Vue 2, but in the near future, I plan to create a branch where I go through the process of updating a Vue 2 project to a Vue 3 project.</p>
      <h3>domleo-docs</h3>
      <p>domleo-docs is a Nuxt.js project used as a static site documentation website for the domleo-vue package.</p>
      <p>domleo-docs installs the domleo-vue npm package via a relative file path, so it treats domleo-vue exactly like a hosted npm package on the npm registry.</p>
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

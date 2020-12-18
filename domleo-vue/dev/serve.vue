<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DomleoVueSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  DomleoVueSample,
  // }
});
</script>

<template>
  <div id="app">
    <domleo-vue-sample />
  </div>
</template>

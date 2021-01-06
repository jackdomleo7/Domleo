<template>
  <aside>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.url">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface navItem {
  text: string;
  url: string | object;
}

@Component
export default class Navigation extends Vue {
  private readonly navItems: navItem[] = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Button',
      url: '/components/btn'
    }
  ]
}
</script>

<style lang="scss" scoped>

</style>

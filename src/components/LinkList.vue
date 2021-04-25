<template>
  <div class="link-list">
    <h5 class="link-list__title">Gute Artikel</h5>
    <ul class="link-list__list">

      <li
        class="link-list__item"
        v-for="link of smartLinks"
        :key="link.author"
        :href="link.linkSrc"
      >
        <h6>{{link.linkTitle}}</h6>
        <small>{{link.author}}</small>
        <a
          class="link-list__link"
          :href="link.linkSrc"
        >{{link.attribution}}</a>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { smartLinks } from '@/data/data';

export default defineComponent({
  setup() {
    return { smartLinks };
  }
});
</script>

<style scoped lang="scss">
.link-list {
  @include glass-container;
  height: min-content;

  &__title {
    margin-bottom: 16px;
  }

  &__list {
    list-style: none;
    margin: 0 auto;
  }

  &__item {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
  }

  &__link {
    margin-top: 8px;
  }
}
</style>
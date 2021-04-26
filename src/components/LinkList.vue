<template>
  <div class="link-list">
    <h5 class="link-list__title">Gute Artikel</h5>
    <ul class="link-list__list">

      <li
        class="link-list__item"
        @click="openLink(link.linkSrc)"
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
    const openLink = (url: string): void => {
      window.open(url, '_blank');
    };

    return {
      smartLinks,
      openLink
    };
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
    padding: 0;
    margin: 0 auto;
    cursor: pointer;
  }

  &__item {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    transition: background-color 0.2s linear;
    padding: 8px;
    border-radius: var(--border-radius);

    &:hover {
      background-color: var(--glass-alt);
    }
  }

  &__link {
    margin-top: 8px;
  }
}
</style>
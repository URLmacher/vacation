<template>
  <ul class="stats-list">
    <div class="stats-list__title">
      <h5>{{title}}</h5>
      <a
        v-if="link"
        :href="link.linkSrc"
      >{{link.linkText}}</a>
    </div>
    <li
      v-for="listItem of list"
      :key="listItem.listValue"
      class="stats-list__list-item"
    >
      <p>{{listItem.listText}}:</p>
      <p>{{listItem.listValue}}</p>
    </li>
    <small
      v-if="smallText"
      class="stats-list__list-sub"
    >{{smallText}}</small>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    smallText: { type: String, required: false },
    link: { type: Object, required: false },
    list: { type: Array, required: true }
  }
});
</script>

<style scoped lang="scss">
.stats-list {
  @include glass-container;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  list-style: none;
  margin: 0 auto;
  margin-bottom: var(--content-spacing);

  &__title {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list-item {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px solid var(--border-color);
  }

  &__list-sub {
    margin: 8px 0 0 auto;
  }
}
</style>
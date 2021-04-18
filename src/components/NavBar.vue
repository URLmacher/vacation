<template>
  <nav class="nav-bar">
    <h4 class="nav-bar__title">Proposition Urlaub {{vacationYear}}</h4>
    <div class="nav-bar__links">
      <router-link
        class="nav-bar__button"
        v-for="route of routes"
        :key="route.name"
        :to="{name: route.name}"
      ><span class="material-icons">{{route.icon}}</span></router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { routes } from '@/router/index';
import { vacationYear } from '@/data/data';

export default defineComponent({
  setup() {
    return { routes, vacationYear };
  }
});
</script>

<style scoped lang="scss">
.nav-bar {
  @include vacation-container;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  &__title {
    margin-right: 16px;
  }

  &__links {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  &__button {
    @include glass-container;
    padding: 16px;
    background-color: var(--glass-active);
    transition: background-color 0.3s linear;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .router-link-active,
  .router-link-exact-active {
    background-color: var(--glass);
  }

  &__button:hover {
    background-color: var(--glass-alt);
  }
}
</style>
<template>
  <div id="nav">
    <router-link to="/">Kalendar-Ansicht</router-link> |
    <router-link to="/stats">Daten-Übersicht</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#nav {
  @include vacation-container;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

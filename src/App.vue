<template>
  <div id="nav">
    <router-link to="/">Calendar</router-link> |
    <router-link to="/stats">Stats</router-link>
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

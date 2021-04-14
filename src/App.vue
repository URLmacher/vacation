<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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

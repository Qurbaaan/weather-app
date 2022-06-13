<template>
  <div id="app">
    <main role="main">
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  .nav-link{
    color : #2c3e50
  }
  .router-link-active{
    background-color: #fafafa;
    color: #007bff;
  }
}
</style>

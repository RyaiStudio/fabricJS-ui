<template>
  <div id="app">
    <fabric></fabric>
  </div>
</template>

<script>
import Fabric from './components/Fabric';

export default {
  name: 'app',
  components: {
    Fabric
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
@import "./scss/fabric.scss";
</style>

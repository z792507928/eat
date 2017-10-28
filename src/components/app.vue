<template>
  <div class="hello">
    <router-view/>
  </div>
</template>

<script>
  import home from './page/Home.vue'
  import find from './page/Find.vue'
  import order from './page/Order.vue'

  export default {
    components: {
      home,
      find,
      order
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>

<template>
  <div class="container hello">
    <div class='row'>
      <div class='col'>
        <h1 class='display-1'>NPA GOS</h1>
        <p class='lead'>For test routing press button</p>
        <b-btn variant='success' size='md' to="about">About</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'NPA GOS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 60px;
}
</style>

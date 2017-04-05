<template>
  <div class="container about">
    <div class='row'>
      <div class='col'>
        <h1 class='display-1'>{{ msg }}</h1>
        <p class='lead'>O ma gosh dat worken!</p>
      </div>
      <div class='col'>
        <b-list-group>
          <b-list-group-item>Awesome list</b-list-group-item>
          <b-list-group-item to="#">
            Press Me
          </b-list-group-item>
          <b-list-group-item>
            This is a text only item
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About'
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

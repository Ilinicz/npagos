<template>
  <div>
    <header>
      <b-navbar toggleable type="inverse" variant="success">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-link class="navbar-brand" to="/">
          <span>NPA</span>
        </b-link>

        <b-collapse is-nav id="nav_collapse">

          <b-nav is-nav-bar>
            <b-nav-item to='about'>About</b-nav-item>
          </b-nav>

          <b-nav is-nav-bar class="ml-auto">

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Lang" right-alignment>
              <b-dropdown-item to="#">EN</b-dropdown-item>
              <b-dropdown-item to="#">ES</b-dropdown-item>
              <b-dropdown-item to="#">RU</b-dropdown-item>
              <b-dropdown-item to="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right-alignment>

              <!-- Using text slot -->
              <template slot="text">
                <span style="font-weight: bold;">User</span>
              </template>

              <b-dropdown-item to="#">Profile</b-dropdown-item>
              <b-dropdown-item to="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>


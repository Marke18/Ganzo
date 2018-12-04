<template>

<div class="home">
  <div class="menu">
    <b-navbar toggleable="md" style="padding: 3vh 5%;">

      <b-navbar-toggle target="nav_collapse" style="color:white;"></b-navbar-toggle>

      <b-nav-form style="float:right;">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      </b-nav-form>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#"><span style="color:white;" disabled>Profilo</span></b-nav-item>
          <b-nav-item @click="cancellaAccount()"><span style="color:white;">Elimina account</span></b-nav-item> <!-- da mettere in profilo -->
          <b-nav-item @click="pagina0()"><span style="color:white;">Logout</span></b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
  <div style="height: 8vh;margin: 0vh;color: white;" class="text-center">
    <h3>Ganzo</h3>
  </div>
</div>

</template>
<script>

// eslint-disable-next-line
var db = new restdb('5bfe68f9b83385326c1388b9')

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    cancellaAccount () {
      var query = {} // get all records
      var hints = {'$orderby': {'_id': -1}}
      db.datausers.find(query, hints, (err, res) => {
        if (!err) {
          var tro = 0
          var obj = {}
          for (var i = 0; i < res.length && tro === 0; i++) {
            if (res[i].username === window.app.user) {
              tro = 1
              obj = res[i]
              this.pagina0()
              obj.delete((err, res) => {
                if (!err) {
                }
              })
            }
          }
        }
      })
    },
    pagina0 () {
      window.app.pag = 0
      window.app.user = ''
    }
  }
}

</script>
<style scoped>

.home {
  height: 20vh;
  background-color: #4f2fcc;
  margin: 0vh;
}

.menu {
  height: 12vh;
  margin: 0vh;
  color: white;
}

</style>

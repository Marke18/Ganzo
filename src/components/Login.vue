<template>

<div class="text-center">
  <b-form-input class="input" v-model="username" placeholder="Inserisci il nome utente" required></b-form-input>
  <br><br><br>
  <b-form-input class="input" v-model="password" placeholder="Inserisci la tua password" type="password" required></b-form-input>
  <br><br><br>
  <b-btn class="btnL" @click="trova" type="submit">Login</b-btn>
  <b-btn class="btnR" @click="pagina1" variant="link">Registrati</b-btn>
</div>

</template>
<script>

// eslint-disable-next-line
var db = new restdb('5bfe68f9b83385326c1388b9')

export default {
  name: 'Login',
  data () {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    trova () {
      var query = {}
      var hints = {'$orderby': {'_id': -1}}
      db.datausers.find(query, hints, (err, res) => {
        if (!err) {
          for (var i = 0; i < res.length && this.pag !== 2; i++) {
            if (res[i].username === this.username && res[i].password === this.password) {
              window.app.user = this.username
              window.app.pag = 2
            }
          }
          if (this.pag !== 2) {
            this.username = ''
          }
          this.password = ''
        }
      })
    },
    pagina1 () {
      window.app.pag = 1
      this.password = ''
    }
  }
}

</script>
<style scoped>

.input {
  width: 90%;
  height: 5vh;
  margin-left: 5%;
}

.btnR {
  float: right;
  margin-top: 3vh;
  margin-right: 5vh;
  width: 30%;
  min-height: 22px;
  height: 6vh;
  padding: 0vh;
  color: #4f2fcc;
  text-decoration: none;
}

.btnL {
  float: left;
  margin-top: 3vh;
  margin-left: 5vh;
  width: 30%;
  height: 6vh;
  min-height: 22px;
  padding: 0vh;
  background-color: #4f2fcc;
  text-align: center;
  border: 0vh
}

</style>

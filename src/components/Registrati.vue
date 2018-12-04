<template>

<div class="text-center">
  <b-form-input class="input" v-model="account.email" placeholder="Inserisci la tua e-mail" type="email" required></b-form-input>
  <br><br>
  <b-form-input class="input" v-model="account.nome" placeholder="Inserisci il nome" required></b-form-input>
  <br><br>
  <b-form-input class="input" v-model="account.cognome" placeholder="Inserisci il cognome" required></b-form-input>
  <br><br><br><br>
  <b-form-input class="input" v-model="account.username" placeholder="Inserisci il nome utente" required></b-form-input>
  <br><br>
  <b-form-input class="input" v-model="account.password" placeholder="Inserisci la tua password" type="password" required></b-form-input>
  <br><br><br><br>
  <b-btn class="btnL" @click="creaAccount()" type="submit">Registrati</b-btn>
  <b-btn class="btnR" @click="pagina0()" variant="link">Annulla</b-btn>
</div>

</template>
<script>

// eslint-disable-next-line
var db = new restdb('5bfe68f9b83385326c1388b9')

export default {
  name: 'Registrati',
  data () {
    return {
      account: {
        nome: '',
        cognome: '',
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    creaAccount () {
      // eslint-disable-next-line
      var obj = new db.datausers(this.account)
      console.log(this.account.username)
      obj.save((err, res) => {
        if (!err) {
          window.app.pag = 2
          window.app.user = this.account.username
          this.account.username = ''
        } else {
          this.account.username = ''
        }
      })
      this.account.nome = ''
      this.account.cognome = ''
      this.account.email = ''
      this.account.password = ''
    },
    pagina0 () {
      window.app.pag = 0
      this.account.username = ''
      this.account.password = ''
      this.account.nome = ''
      this.account.cognome = ''
      this.account.email = ''
    }
  }
}

</script>
<style scoped>

.input {
  width: 90%;
  margin: 2vh 5% 0vh 5%;
  text-align: center;
  height: 5vh;
}

.btnL {
  float: left;
  margin-left: 5vh;
  width: 30%;
  height: 6vh;
  min-height: 22px;
  padding: 0vh;
  background-color: #4f2fcc;
  text-align: center;
  border: 0vh;
}

.btnR {
  float: right;
  margin-left: 5vh;
  width: 30%;
  height: 6vh;
  min-height: 22px;
  padding: 0vh;
  color: #4f2fcc;
  text-decoration: none;
}

</style>

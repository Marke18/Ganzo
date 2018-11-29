// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// eslint-disable-next-line
var db = new restdb('5bfe68f9b83385326c1388b9')
console.log(db)
// eslint-disable-next-line
var titolo = new Vue({
  el: '#titolo',
  data: {
    style: {
      color: '#4f2fcc',
      margin: '8vh 0vh 12vh 0vh',
      fontSize: '10vh',
      textAlign: 'center'
    }
  }
})
// eslint-disable-next-line
var titolo2 = new Vue({
  el: '#titolo2',
  data: {
    style: {
      color: '#4f2fcc',
      margin: '2vh 0vh 6vh 0vh',
      fontSize: '10vh',
      textAlign: 'center'
    }
  }
})
//eslint-disable-next-line
var app1 = new Vue({
  el: '#app-1',
  data () {
    // LOGIN
    db.datausers.getById('5bfe68f728f51750000042f2', (err, res) => {
      if (!err) {
        // res is a datausers instance
        console.log(res)
        this.utente = res
      }
    })
    return {
      utente: { },
      username: '',
      password: '',
      pag: 0,
      btnL: {
        float: 'left',
        marginTop: '4vh',
        marginLeft: '5vh',
        width: '30%',
        height: '6vh',
        minHeight: '22px',
        padding: '0vh',
        backgroundColor: '#4f2fcc',
        textALign: 'center',
        border: '0vh'
      },
      btnR: {
        float: 'right',
        marginTop: '4vh',
        marginRight: '5vh',
        width: '30%',
        minHeight: '22px',
        height: '6vh',
        padding: '0vh',
        textALign: 'center',
        color: '#4f2fcc',
        textDecoration: 'none'
      },
      input: {
        width: '90%',
        height: '5vh'
      },
      // REGISTRATI
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
    // LOGIN
    trova () {
      var query = {} // get all records
      var hints = {'$orderby': {'_id': -1}} // top ten, sort by creation id in descending order
      db.datausers.find(query, hints, (err, res) => {
        if (!err) {
          for (var i = 0; i < res.length && this.pag !== 2; i++) {
            if (res[i].username === this.username && res[i].password === this.password) {
              this.pag = 2
            }
          }
          if (this.pag !== 2) {
            alert('Le credenziali inserite sono errate, Riprova')
            this.username = ''
            this.password = ''
          }
          // res is an array of datausers instances
        }
      })
    },
    pagina1 () {
      this.pag = 1
    },
    // REGISTRATI
    creaAccount () {
      var obj = new db.datausers(this.account)
      obj.save((err, res) => {
        if (!err){
          this.pag = 2
        } else {
          alert("Lo username o l'e-mail inseriti appartengono già ad un altro account registrato")
        }
      })
    },
    pagina0 () {
      this.pag = 0
    }
  }
})

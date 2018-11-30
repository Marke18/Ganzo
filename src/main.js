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
// eslint-disable-next-line
var app1 = new Vue({
  el: '#app-1',
  data () {
    return {
      // LOGIN
      username: '',
      password: '',
      pag: 0,
      headerSlot: 'Pinguuuuuuuu',
      footerSlot: 'Pinguuuuuuuu',
      btnL: {
        float: 'left',
        marginTop: '3vh',
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
        marginTop: '3vh',
        marginRight: '5vh',
        width: '30%',
        minHeight: '22px',
        height: '6vh',
        padding: '0vh',
        color: '#4f2fcc',
        textDecoration: 'none'
      },
      bodyCard: {
        backgroundImage: 'url("https://www.ilgazzettino.it/photos/HIGH/00/24/3300024_1816_pinguino_adelia.jpg")',
        backgroundSize: 'cover',
        height: '30vh',
        margin: '-1.25rem'
      },
      input: {
        width: '90%',
        height: '5vh',
        marginLeft: '5%'
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
      // eslint-disable-next-line
      var obj = new db.datausers(this.account)
      obj.save((err, res) => {
        if (!err) {
          this.pag = 2
        } else {
          this.account.username = ''
          this.account.password = ''
          this.account.nome = ''
          this.account.cognome = ''
          this.account.email = ''
        }
      })
    },
    pagina0 () {
      this.pag = 0
    },
    // HOME
    cancellaAccount () {
      var query = {} // get all records
      var hints = {'$orderby': {'_id': -1}} // top ten, sort by creation id in descending order
      db.datausers.find(query, hints, (err, res) => {
        if (!err) {
          var tro = 0
          var obj = {}
          for (var i = 0; i < res.length && tro === 0; i++) {
            if (res[i].username === this.username || res[i].username === this.account.username) {
              tro = 1
              obj = res[i]
              this.pag = 0
              obj.delete((err, res) => {
                if (!err) {
                }
              })
            }
          }
          if (this.pag !== 2) {
            this.username = ''
            this.password = ''
          }
          // res is an array of datausers instances
        }
      })
    }
  }
})

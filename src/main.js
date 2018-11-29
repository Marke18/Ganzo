// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/*
var request = require('request')

var options = {
  method: 'GET',
  url: 'https://ganzo-0e2f.restdb.io/rest/data-users',
  headers: {
    'cache-control': 'no-cache',
    'x-apikey': 'a046c95522621e31cf8598fb270fd5a9f9933'
  }
}

request(options, function (error, response, body) {
  if (error) throw new Error(error)

  console.log(body)
})
*/

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
var app1 = new Vue({
  el: '#app-1',
  data () {
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
        backgroundColor: '#4f2fcc',
        textALign: 'center',
        border: '0vh'
      },
      btnR: {
        float: 'right',
        marginTop: '4vh',
        marginRight: '5vh',
        width: '30%',
        height: '3vh',
        textALign: 'center',
        color: '#4f2fcc',
        textDecoration: 'none'
      },
      input: {
        width: '90%',
        height: '5vh'
      }
    }
  },
  methods: {
    trova () {
      var query = {} // get all records
      var hints = {'$max': 10, '$orderby': {'_id': -1}} // top ten, sort by creation id in descending order
      db.datausers.find(query, hints, (err, res) => {
        if (!err) {
          console.log('find')
          console.log(res)
          console.log('ciao')
          console.log(this.b)
          for (var i = 0; i < res.length && this.pag !== 2; i++) {
            if (res[i].username === this.username && res[i].password === this.password) {
              this.pag = 2
            }
          }
          if (this.pag === 0) {
            alert('Le credenziali inserite sono errate, Riprova')
          }
          // res is an array of datausers instances
        }
      })
    },
    pagina1 () {
      this.pag = 1
    }
  }
})

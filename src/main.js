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
var app1 = new Vue({
  el: '#app-1',
  data: function () {
    db.datausers.getById('5bfe68f728f51750000042f2', (err, res) => {
      if (!err) {
        // res is a datausers instance
        console.log(res)
        this.utente = res
      }
    })
    return {
      message: 'ciao',
      utente: { },
      username: '',
      password: '',
      tro: 2
    }
  },
  methods: {
    trova () {
      var query = {} // get all records
      var hints = {'$max': 10, '$orderby': {'_id': -1}} // top ten, sort by creation id in descending order
      db.datausers.find(query, hints, function (err, res) {
        if (!err) {
          for (var i = 0; i < query.length && this.tro !== 1; i++) {
            if (query[i].username === this.username && query[i].password === this.password) {
              this.tro = 1
            } else {
              this.tro = 0
            }
          }
          // res is an array of datausers instances
        }
      })
    }
  }
})

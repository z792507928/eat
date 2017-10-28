<template>
  <section class="app-3rd0G">
    <svg onclick="history.go(-1)"
         class="app-30k0b">
      <use xmlns:xlink="http://www.w3.org/1999/xlink"
           xlink:href="#arrow">
        <svg viewBox="0 0 20 32"
             id="arrow"
             width="100%"
             height="100%">
          <path d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path>
        </svg>
      </use>
    </svg>
    <div class="app-ks58x">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABBNJREFUWAntWc9rE0EYNRujJ2lLKUJ7FrSKHgsFD15rRREJXgRr0gavosU/QS14EiRtYqVeJCdFDR4ED4VCj4rGg2dbpJS2eDNk63vb3XX229lsZ7MxCg4MM9+Ped/L7MzsN5vMAYOyuLh4rNlsXsSQs6gju7u7w5lMZhDtJto16L6hLudyuZdTU1Nf0U+tZOKQarVadmdn57pt27fgOxrnr9gblmU97Ovre5rP51uKPlG3LdFyuXweqA9QTQhKIg0oZkul0htpMJG1RPEorfn5+XsAumMCFuM7NzMzcxdLxI7x05pDRKvV6pFWq/UcZCe0I6BEsA00q/BZQ38T7SDaYejG0B9qM66ezWavFgqFH1E+UfqDqgFBrIWFhSiSnIlnqJXp6ekV3cxwPJ7EOHyKqNdQLVS/wD7hTsIF3XjfUdMJzCiCzAHstvQD6Ao2RqlYLH6Stii5UqmcwgYsA4/EZZnDmp2VynayT9TdOK+lM0g+6e/vv4md+1Pa4mScGIe2t7cfg+wNje+kyQZziPII2tra+giwwO4mSWyAgiaIkQpPqqoh2xgYGDi936PLWUM8JzUkVziTRowinInD5SPMo25codaLDlH3MFc9bK7JJI9bBfH6xCEe5MDRpInrDQm1Fl+L0MpHvmSycUKoGoWLx1NDLaNufFWn7VvuuztgxHqqBhTpCRUJpYsvfSjz0TPB8AvW0gY2kFxPvr2TDnGJLzAC8YXNF0l0xJf2OqsAC6wlYU8surirAkDGF+Y90cJj5qvPL5CZrnWtSHwZPyqwhV85qBohb6py2n2JL+NHxeOMBohBDhCPGphUL/Fl/ChczmjgUUMOLIWogUn1El/Gj8LlZuL1QS1M1ZwXgapMo+/ijgksGV+Y90QSWlYtABtyUzVVnUqfuMQXYIH4wuaLFi9ivvS7w3yyGyWEGxE/FNvJnpDifYZFfY3ayMTPpPkaZX6KpPkD4qjLqoFU72SIlUbhDOJtUdgsJr3MJ4U+kUgc4mGwSvKAJm4kvjOQV1p48LboF6ylcSa9vqKDjps8y0y/4cbdF/K/leF7P+lP3ZlwdlaRoIQ2lsdD1/ozSiPPOdxCX6Gd0DjbCLAEG4MkuoV6mMD5jnoOt9kvni6uDRClczfv9SoZU7IhogRzZ/Y+2tDVWQ1m2G/BP6uOMSEbOC48EADYeLz8nDOJGjgNPB+DluOJcwW1qY7DRBxFfY/ldkLV6/raGVUdeZVO62seXiyXgF1Dzakx9jOzsURVwDS+jyYla0RUJd1JPwnZnhDljzQl2zOipmS1u76Tx2oyFpnTC/jnUXWnwbt6vX7Yw+spUZJoQ3Z4fX39+F9DtA3Zt/gyzfzVKT2fUY8IZxbnKf8a4geQR/gkedmz/W+7MQO/ADJZA0ikosHZAAAAAElFTkSuQmCC"
           class="app-ETjEK"><input type="search"
                                    autofocus="autofocus"
                                    placeholder="请输入商品名称"
                                    class="app-2jUwX"
                                    v-model="Storage">
      <router-link to="/Shoplist"><button type="submit"
                                          class="app-1SphX"
                                          @click="search()" @keyup.enter="search()">搜索
      </button></router-link>
    </div>
  </section>
</template>
<script>
  import store from '../../Vuex/Vuex'
  import Pichash from '../../../static/js/pic'
  import axios from 'axios'
  export default{
    methods:{
      search(){
        let msg = eval(localStorage.getItem('SERCH_MSG'))
        if (this.Storage == '') {
          return
        }
        msg.push(this.Storage)
        localStorage.setItem('SERCH_MSG', JSON.stringify(msg))
        store.state.key = this.Storage
//        axios.get('/api/find?key=' + this.Storage)
        store.commit('Find')
      },
      pic(data){
        let msg = Pichash(data)
        return msg
      },

    }
  }
</script>

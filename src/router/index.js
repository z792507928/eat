import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/page/Home.vue'
import find from '../components/page/Find.vue'
import order from '../components/page/Order.vue'
import mine from '../components/page/Main.vue'
import search from '../components/page/Search.vue'
import PageTransition from '../components/app.vue'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', name: 'PageTransition', component: PageTransition,
      children: [
        {
        path: '', component: home
        },
        {
          path: '/find', component: find
        },
        {
          path: '/order', component: order
        },
        {
          path: '/mine', component: mine
        },
        {
          path: '/search', component: search
        },
      ]
    },
  ]
})

new Vue({
  router,
  data(){
    return {
      aaa: 'show'
    }
  },
  template: `
     <div id="container" >
        <!--<transition :name="PageTransition">-->
          <router-view class="top"></router-view>
        <!--</transition>-->
        <ul id="aaa" class="container-footer-list">
          <li class="active-color">
            <router-link to="/">
             <svg class="index-footerTabIcon_1EbB8wS">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60">
                  <svg viewBox="0 0 40 40" id="index-regular.b245d60" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2"><path d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path><path d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path></g></svg>
                </use>
              </svg>
              <span style="display: block">外卖</span>
            </router-link>
          </li>
          <li>
            <router-link to="/find">
              <svg class="index-footerTabIcon_1EbB8wS">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular.8ef537f">
                  <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="discover-regular.8ef537f" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><g stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)"><path id="discover-regular.8ef537f_a" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path></g><path stroke="#666" stroke-width="2" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path><path fill="#666" d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path></g></svg>
                </use>
              </svg>
              <span style="display: block">发现</span>
            </router-link>
          </li>
          <li><router-link to="/order"> <span style="display: block">订单</span></router-link></li>
          <li><router-link to="/mine">  <span style="display: block">我的</span></router-link></li>
        </ul>
     </div>
  `,
  watch:{
    '$route'(to,from){
      let none = document.getElementById('aaa')

      if(to.path == '/search'){
          none.style.display = 'none'
      }else if (from.path == '/search'){
        none.style.display=''
      }
    }
  }

  // watch: {
  //   '$route'(to, from){
  //     if (from.path){
  //       this.slide = slide
  //     }
  //   }
  // }
}).$mount('#app')




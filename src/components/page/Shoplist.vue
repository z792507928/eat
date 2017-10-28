<template>
  <div style="position: sticky; top: 0px; z-index: 1000;">
    <div>
      <Serach></Serach>
      <aside data-v-98a11d7e=""
             class="filter">
        <div data-v-98a11d7e=""
             class="filter-header"><a data-v-98a11d7e=""
                                      href="javascript:"
                                      class="filter-nav"><span data-v-98a11d7e="">分类</span>
          <svg data-v-98a11d7e=""
               viewBox="0 0 72 32">
            <path data-v-98a11d7e=""
                  d="M36 32l36-32h-72z"></path>
          </svg>
        </a><a data-v-98a11d7e=""
               href="javascript:"
               class="filter-nav"><span data-v-98a11d7e="">排序</span>
          <svg data-v-98a11d7e=""
               viewBox="0 0 72 32">
            <path data-v-98a11d7e=""
                  d="M36 32l36-32h-72z"></path>
          </svg>
        </a><a data-v-98a11d7e=""
               href="javascript:"
               class="filter-nav filter-nav-more"><span data-v-98a11d7e="">筛选</span>
          <svg data-v-98a11d7e=""
               viewBox="0 0 72 32">
            <path data-v-98a11d7e=""
                  d="M36 32l36-32h-72z"></path>
          </svg>
        </a></div>
        <section data-v-98a11d7e=""
                 class="filter-extend filter-category">
          <aside class="loading">加载中...</aside>
        </section>
        <section data-v-fd238482=""
                 data-v-98a11d7e=""
                 class="filter-extend filter-sort">
          <ul data-v-fd238482="">
            <li data-v-fd238482=""
                class="">
              <svg data-v-fd238482="">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#default"></use>
              </svg>
              <span data-v-fd238482="">综合排序</span>
              <svg data-v-fd238482=""
                   class="selected">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#selected"></use>
              </svg>
            </li>
            <li data-v-fd238482=""
                class="">
              <svg data-v-fd238482="">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#hot"></use>
              </svg>
              <span data-v-fd238482="">销量最高</span>
              <svg data-v-fd238482=""
                   class="selected">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#selected"></use>
              </svg>
            </li>
            <li data-v-fd238482=""
                class="">
              <svg data-v-fd238482="">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#price"></use>
              </svg>
              <span data-v-fd238482="">起送价最低</span>
              <svg data-v-fd238482=""
                   class="selected">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#selected"></use>
              </svg>
            </li>
            <li data-v-fd238482=""
                class="">
              <svg data-v-fd238482="">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#speed"></use>
              </svg>
              <span data-v-fd238482="">配送最快</span>
              <svg data-v-fd238482=""
                   class="selected">
                <use data-v-fd238482=""
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#selected"></use>
              </svg>
            </li>
          </ul>
        </section>
        <section data-v-98a11d7e=""
                 class="filter-extend filter-more">
          <aside class="morefilter-ohFzH_0">加载中...</aside><!---->
          <div class="morefilter-1rVOf_0"><a href="javascript:">清空</a><a href="javascript:">
            确定<!----></a></div>
        </section>
        <section data-v-98a11d7e=""
                 class="filter-modal"></section>
      </aside>
      <section v-for="(item,index) in qwe"
               class="index-container_10L_lQb shop-0"
               show-cart-quantity="true">
        <div class="logo-container_XoH2Vit_0">
          <div class="logo-main_21aInWJ_0"><img alt="绿茶餐厅(北京崇文门店)"
                                                class="logo-logo_3S1eSkn_0"
                                                :src="'//fuss10.elemecdn.com/'+pic(item.image_path)+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
            <!----> <!----></div> <!----></div>
        <div class="index-main_N3FfcSz">
          <section class="index-line_2-iYR1A"><h3 class="index-shopname_39Y7e3U index-premium_39rl0v9">
            <span>{{ item.name }}</span></h3>
            <ul class="index-supportWrap_2lTcxr2">
              <li v-if="item.supports">保</li>
            </ul>
          </section>
          <section class="index-line_2-iYR1A">
            <div class="index-rateWrap_39dWx_g">
              <div class="rating-wrapper_3sl9ijQ_0">
                <div class="rating-gray_h-5T1ij_0">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                         xlink:href="#star-gray.cc081b9">
                      <svg viewBox="0 0 60 10"
                           id="star-gray.cc081b9"
                           width="100%"
                           height="100%">
                        <path fill="#EEE"
                              fill-rule="evenodd"
                              d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z">
                        </path>
                      </svg>
                    </use>
                  </svg>
                </div>
                <div class="rating-actived_fJcqa6U_0"
                     :style="{width: (item.rating*20)+'%'}">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                         xlink:href="#star-actived.d4c54d1">
                      <svg viewBox="0 0 60 10"
                           id="star-actived.d4c54d1"
                           width="100%"
                           height="100%">
                        <path fill="yellow"
                              fill-rule="evenodd"
                              d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z">
                        </path>
                      </svg>
                    </use>
                  </svg>
                </div>
              </div>
              <span class="index-rate_WsK58g8">{{ item.rating }}</span> <span>月售{{ item.recent_order_num }}单</span></div>
            <div class="index-deliveryWrap_Mpu6t9_"><!----> <span class="index-iconDelivery_1lu0TGf index-hollow_1HrLOuT"
                                                                  v-if="item.delivery_mode">
            蜂鸟配送
        </span></div>
          </section>
          <section class="index-line_2-iYR1A">
            <div class="index-moneylimit_2fCq9W5"><span>¥{{ item.float_minimum_order_amount }}起送</span>
              <span>配送费¥{{ item.float_delivery_fee }}</span> <!----></div>
            <div class="index-timedistanceWrap_2Dp_kzY"><span class="index-distanceWrap_1EPAlti">{{ item.distance / 1000
              }}km</span>
              <span>{{ item.order_lead_time }}分钟</span></div>
          </section> <!---->
          <svg class="index-dashedline_7B79b3W">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#dashed-line.3732003"></use>
          </svg>
          <section class="index-activities_25AUDsx">
            <div class="index-activityList_1wvwwUY">
              <div class="index-actRow_2f_uNNA"
                   v-for="items in item.activities"><span class="index-icon_1fBCxBk"
                                                          :style="'background-color:'+ '#' + items.icon_color">{{ items.icon_name
                }}</span>
                <span style="display: block;"
                      class="index-desc_JLha7Vr">{{ items.description }}</span></div>
            </div>
            <div class="index-activityBtn_tMk-e1C"
                 v-if="item.activities.length>2">
              {{item.activities.length}}个活动
              <svg :class="{classa: item.is_new}"
                   @click="toggle(index)">
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#activity-more.c46fec1">
                  <svg viewBox="0 0 12 6"
                       id="activity-more.c46fec1"
                       width="100%"
                       height="100%">
                    <path fill-rule="evenodd"
                          d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path>
                  </svg>
                </use>
              </svg>
            </div>
          </section>
        </div>
      </section>

      <!--<span v-for="item in qwe">{{ item.name }}</span>-->
    </div>
  </div>
</template>
<script>
  import Serach from './SearchInput.vue'
  import Pichash from '../../../static/js/pic'
  import floor from '../../../static/js/Floor'
  import store from '../../Vuex/Vuex'
  export default{
    data(){
      return {}
    },
    components: {
      Serach
    },
    methods: {
      pic(data){
        let msg = Pichash(data)
        return msg
      },
      floornum(data){
        let msg = floor(data)
        return msg
      },
      toggle(data){
        this.submitForm[data].is_new = !this.submitForm[data].is_new
      }
  },
    mounted(){
      return store.state.con
    },
    computed: {
      qwe(){
        console.log(store.state.con)
        return store.state.con
      }
    }
  }
</script>
<style>

</style>

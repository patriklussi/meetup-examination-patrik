/*
import {shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import TopBar from "../../src/components/TopBar.vue";

//const localVue = createLocalVue()
//localVue.use(VueRouter)

const $router=  {
    path:"/myprofile"
}

let wrapper;
beforeEach(()=>{
   wrapper = shallowMount(TopBar, {
    mocks: {
        $router
      }
       
      })
})

describe("Topbar.vue",()=>{
    it("Should check if the MyProfile page with router  ", async()=>{
       
     
    
        expect(wrapper.vm.$router.path).toBe($router.path)

      });
});
*/

import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import TopBar from '../../src/components/TopBar.vue';
import MyProfile from "../../src/views/MyProfile.vue";

const localVue = createLocalVue()
localVue.use(VueRouter)

const routes = [{ path: '/myprofile', component: MyProfile }]

const router = new VueRouter({
  routes
})

const wrapper = mount(TopBar, {
  localVue,
  router
})


describe("TopBar",()=>{
    it("Should test router idk", async()=>{
    const button = wrapper.find(".buttonTwo");
    await button.trigger("")
    expect(wrapper.vm.toggleMyProfile()).toBeCalled();
    })
})

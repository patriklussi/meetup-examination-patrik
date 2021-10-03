import {mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import TopBar from "../../src/components/TopBar.vue";

//const localVue = createLocalVue()
//localVue.use(VueRouter)

const $router=  {
    path:"/myprofile"
}

let wrapper;
beforeEach(()=>{
   wrapper = mount(TopBar, {
    mocks: {
        $router
      }
       
      })
})

describe("Topbar.vue",()=>{
  it("Should check if the MyProfile page with router",async ()=> {
    const spy = jest.spyOn(TopBar.methods,"toggleMyProfile");
    const button = wrapper.find(".buttonTwo");
    await button.trigger("click")
    console.log(spy);
    expect(spy).toBeCalled();


  });
  
});
    


import{shallowMount, createLocalVue } from '@vue/test-utils'
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
  it("Should check if the MyProfile page with router",async ()=> {
   const spy = jest.spyOn(wrapper.vm,'toggleMyProfile');
  
    const button = wrapper.find(".buttonTwo");
   await button.trigger("click")

    expect(spy).toHaveBeenCalled();


  });
  
});
    


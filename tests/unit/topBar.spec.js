import{shallowMount, createLocalVue } from '@vue/test-utils'

import TopBar from "../../src/components/TopBar.vue";



let wrapper;
beforeEach(()=>{
   wrapper = shallowMount(TopBar, {})
})

describe("Topbar.vue",()=>{
  it("Should check if the toggle function is called and the components are switched",async ()=> {
   const spy = jest.spyOn(wrapper.vm,'toggleMyProfile');
  
    const button = wrapper.find(".buttonTwo");
   await button.trigger("click")

    expect(spy).toHaveBeenCalled();


  });
  
});
    


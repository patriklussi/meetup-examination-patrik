import{shallowMount, createLocalVue } from '@vue/test-utils'
import TopBar from "../../src/components/TopBar.vue";




describe("Topbar.vue",()=>{
  let wrapper,data;
  data = [{name:"Comic con",date:"2021-11-21",id:2,signedup:false,review:""}]
beforeEach(()=>{
   wrapper = shallowMount(TopBar, {propsData:{
     holderArray: data
   }
   })
})

  it("Should check if the toggle function is called and the components are switched",async ()=> {
   const spy = jest.spyOn(wrapper.vm,'toggleMyProfile');
  
    const button = wrapper.find(".buttonTwo");
   await button.trigger("click")

    expect(spy).toHaveBeenCalled();


  });

  it("Counter should be one",()=>{
    const h3Counter = wrapper.find("h3");
    const expected = "1"
    const text = h3Counter.text();
    expect(text).toBe(expected);
  })
  
});
    


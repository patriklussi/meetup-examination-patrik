import { shallowMount } from '@vue/test-utils'
import MyMeetList from "../../src/components/MyMeetList.vue"
import 'jest-localstorage-mock';






describe("MyMeetList",()=>{
    
let wrapper,data;
beforeEach(()=>{
    data = [ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""}]
    wrapper = shallowMount(MyMeetList,{
        data:()=>{
            return {
                toggler:false,
                placeHolder:data
            }
        }
    })
    
   
})


    it("Should check if there are meetups in list ",()=>{
     
        const meetupListCount = wrapper.findAll("section > article");
         const meetupList = wrapper.findAll("section > article").wrappers;
         console.log(wrapper.vm.$data.placeHolder);
          //  console.log(meetupList);
         // expect(meetupList).toContain(data);
          expect(meetupListCount.length).toBe(data.length);
      

    });

    it("should check if review component gets while section goes away", async()=>{
        const section = wrapper.find(".card-container");
    
      
        const button = wrapper.find("button");
        await button.trigger("click");

        expect(section.exists()).toBe(false);
        

    });


});
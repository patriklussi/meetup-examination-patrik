import { shallowMount } from '@vue/test-utils'
import MyMeetList from "../../src/components/MyMeetList.vue"
import 'jest-localstorage-mock';
import { json } from 'body-parser';


let wrapper,data;
beforeEach(()=>{
    data = [ {name:"My Hero con",date:"2022-05-20"},{name:"Comic con",date:"2021-11-21"},{name:"Twitch-con",date:"2022-06-12"},{name:"Worlds 2021",date:"2021-10-05"} ]
    wrapper = shallowMount(MyMeetList,{propsData:{
        meetUpList: data,
    }})

      
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
  
  // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
  localStorage.setItem.mockClear();
})



describe("MyMeetList",()=>{

    it("Should check if there are meetups in list ",()=>{

        const meetupListCount = wrapper.findAll("section > article");
         const meetupList = wrapper.findAll("section > article").wrappers;
            console.log(meetupList);
         // expect(meetupList).toContain(data);
          expect(meetupListCount.length).toBe(data.length);
      

    });

    it("should add a review to the localStorage object of the card", async()=>{
        const button = wrapper.find("mdc-button");
        await button.trigger("click");
        



    });


});
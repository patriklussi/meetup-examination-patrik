import { shallowMount } from '@vue/test-utils'
import MyMeetList from "../../src/components/MyMeetList.vue"
import 'jest-localstorage-mock';
import { json } from 'body-parser';




describe("MyMeetList",()=>{
    
let wrapper,data;
beforeEach(()=>{
    data = [ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""},
    {name:"Comic con",date:"2021-11-21",id:2,signedup:false,review:""},
    {name:"Twitch-con",date:"2022-06-12",id:3,signedup:false,review:""},
    {name:"Worlds 2021",date:"2021-10-05",id:4,signedup:false,review:""},
    {name:"Batcon",date:"2021-11-11",id:5,signedup:false,review:""},
    {name:"Superman-con",date:"2022-01-02",id:6,signedup:false,review:""},
    {name:"Ice cream con",date:"2022-02-13",id:7,signedup:false,review:""},
    {name:"Chips con", date:"2023-04-21",id:8,signedup:false,review:""} ];
    wrapper = shallowMount(MyMeetList,{
        data:()=>{
            return {
                placeHolder :data
            }
        }
    })
})


    it("Should check if there are meetups in list ",()=>{

        const meetupListCount = wrapper.findAll("section > article");
         const meetupList = wrapper.findAll("section > article").wrappers;
            console.log(meetupList);
         // expect(meetupList).toContain(data);
          expect(meetupListCount.length).toBe(data.length);
      

    });

    it("should check if review component gets while section goes away", async()=>{
        const section = wrapper.find(".card-container");
        const button = wrapper.findAll("button");
        await button.trigger("click");

        expect(section.exists()).toBe(false);
        



    });


});
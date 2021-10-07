/*Du ska bygga en Vue-app för meetups och publicera den i en
Docker-container på en molntjänst (Heroku). Användare ska kunna:
● se kommande meetups,
● anmäla sig till meetups,
● recensera en meetup man har varit på
*/

import { shallowMount,createLocalVue } from '@vue/test-utils'
import MeetList from '@/components/MeetList.vue'



describe('MeetupList', () => {
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
     wrapper = shallowMount(MeetList,{propsData:{
       meetupList:data
     }})
  })


  it('Should check if there are meetups in the list', () => {
  
    const meetupListCount = wrapper.findAll("section > article");
  //  const meetupList = wrapper.findAll("section > article").wrappers;
 
   // expect(meetupList).toContain(data);
    expect(meetupListCount.length).toBe(data.length);


  });

  it("check if emit happends", async()=>{
    const emitData = {name:"Comic con",date:"2021-11-21",id:2,signedup:false,review:""}
    const button = wrapper.find(".mdc-button");
    button.trigger("click");
    wrapper.vm.$emit('addToLs',emitData)

    
    expect(wrapper.emitted('addToLs')).toBeTruthy()
    expect(wrapper.emitted('addToLs')[1]).toEqual([emitData])

  });

 
})

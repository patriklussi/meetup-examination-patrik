/*Du ska bygga en Vue-app för meetups och publicera den i en
Docker-container på en molntjänst (Heroku). Användare ska kunna:
● se kommande meetups,
● anmäla sig till meetups,
● recensera en meetup man har varit på
*/

import { shallowMount,createLocalVue } from '@vue/test-utils'
import MeetList from '@/components/MeetList.vue'
import 'jest-localstorage-mock';

import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter);
let wrapper,data;
beforeEach(()=>{
  data = [ {name:"My Hero con",date:"2022-05-20"},{name:"Comic con",date:"2021-11-21"},{name:"Twitch-con",date:"2022-06-12",name:"Worlds 2021",date:"2021-10-05"} ]
  wrapper = shallowMount("MeetList",{
    data:()=>{
      return {
        meetupList:data,
      }
    
    },
  
  });
 
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
  
  // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
  localStorage.setItem.mockClear();

  
})

describe('MeetupList', () => {
  it('Should check if there are meetups in the list', () => {
  
    const meetupListCount = wrapper.findAll("section > article");
    const meetupList = wrapper.findAll("section > article").wrappers;
    expect(MeetupList).toContain(data);
    expect(meetupListCount.length).toBe(data.length);


  });

  it("should be able to add meetup to localstorage", async()=>{
    const KEY = "meetup";
    const VALUE = {name:"My Hero con",date:"2022-05-20"};
      const addButton = wrapper.find(".addButton");
      addButton.trigger("");
      expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY,VALUE);
      expect(localStorage.__store__[KEY]).toBe(VALUE);

  });

  it("Should go to MyProfile page with router", async()=>{
    const $route = {
      name:MyProfile,
    }
    const pageToggleButton = wrapper.find("#pageToggleButton");
    pageToggleButton.trigger("")

    expect(wrapper.vm.$route.name).toBe($route.name);
  });
})

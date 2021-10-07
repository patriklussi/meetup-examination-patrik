import { mount,createLocalVue } from '@vue/test-utils'
import 'jest-localstorage-mock';
import App from "../../src/App.vue"
import MeetList from "../../src/components/Meetlist.vue"


describe("App.vue",()=>{
    let wrapper,data;
        beforeEach(()=>{
            
            wrapper = mount(App,{
                data :[ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""},
                {name:"Comic con",date:"2021-11-21",id:2,signedup:false,review:""},
                {name:"Twitch-con",date:"2022-06-12",id:3,signedup:false,review:""},
                {name:"Worlds 2021",date:"2021-10-05",id:4,signedup:false,review:""},
                {name:"Batcon",date:"2021-11-11",id:5,signedup:false,review:""},
                {name:"Superman-con",date:"2022-01-02",id:6,signedup:false,review:""},
                {name:"Ice cream con",date:"2022-02-13",id:7,signedup:false,review:""},
                {name:"Chips con", date:"2023-04-21",id:8,signedup:false,review:""} ],
                data: () => {
                    return {
                      meets: data
                }
                }
            })
            localStorage.clear();
            // and reset all mocks
            jest.clearAllMocks();
            
            // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
            localStorage.setItem.mockClear();


        })


    it("Should check that a localStorage commit happends", async()=>{
        const KEY = "meet";
        const BALUE = [ {name:"My Hero con",date:"2019-05-20",id:1,signedup:true,review:""}];
         const VALUE = JSON.stringify(BALUE)
         const addButton = wrapper.find("#buttonBoy");
         await addButton.trigger("click");
        
         expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY,VALUE);
   
         expect(localStorage.__STORE__[KEY]).toBe(VALUE);
         expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });

    it("should check that component meetlist exists",()=>{
            const meet = wrapper.findComponent(MeetList);
            expect(meet.exists()).toBe(true);
    })

});
import { shallowMount,createLocalVue } from '@vue/test-utils'
import 'jest-localstorage-mock';
import App from "../../src/App.vue"




describe("App.vue",()=>{
    let wrapper,data;
        beforeEach(()=>{
            
            wrapper = shallowMount(App,{
                data =[ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""},
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


        })


    it("Should check that a localStorage commit happends", async()=>{
        const KEY = "meet";
        const BALUE = [ {name:"Chips con", date:"2023-04-21",id:8,signedup:false,review:""}];
         const VALUE = JSON.stringify(BALUE)
         const addButton = wrapper.find("button");
         await addButton.trigger("click");
        
         expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY,VALUE);
   
         expect(localStorage.__STORE__[KEY]).toBe(VALUE);
         expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });

});
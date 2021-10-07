import { mount, createLocalVue } from '@vue/test-utils'
import MyMeetList from "../../src/components/MyMeetList.vue"
import 'jest-localstorage-mock';
import cosh from 'core-js/fn/math/cosh';
import ReviewText from "../../src/components/ReviewText.vue"








describe("MyMeetList",()=>{
   const data = [ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""}]
    const value = JSON.stringify(data);
    localStorage.setItem("meet",value);

let wrapper,dataTwo,dataThree;
beforeEach(()=>{
let  value = localStorage.getItem("meet")
   JSON.parse(value);
   dataTwo =  {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:""}
   dataThree ={name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:"Succulent chinese meal"}
    wrapper = mount(MyMeetList,{
        data:()=>{
            return {
                toggler:false,
                placeHolder:value
            }
        },
      
    })
    

 


    
   
})
    it("Should check if there are meetups in list ",()=>{
        const meetupListCount = wrapper.findAll("section > article");
          expect(meetupListCount.length).toBe(data.length);
    });

    it("Should check that component reviewtext does not exist",()=>{
        const rText = wrapper.findComponent(ReviewText);
        expect(rText.exists()).toBe(false);

    });

  

    
});
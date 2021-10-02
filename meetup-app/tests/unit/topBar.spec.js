import { mount,shallowMount,createLocalVue} from "@vue/test-utils";
import TopBar from "../../src/components/TopBar.vue";
import VueRouter  from "vue-router";
import MyProfile from "../../src/views/MyProfile"
import { cosh } from "core-js/core/number";
import App from "../../src/App.vue"
import routes from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter);
const router = new VueRouter()
let wrapper
beforeEach(()=>{
    wrapper = shallowMount(TopBar,{
        localVue,
        router
    });
})

describe("Topbar.vue",()=>{
    it("Should go to MyProfile page with router", async()=>{
        const $route = {
          name:MyProfile,
        }
        const router = new VueRouter({ routes })

        const wrapperTwo = mount(App,{
            localVue,
            router
        })
   
        const pageToggleButton = wrapper.find(".buttonTwo");

        await pageToggleButton.trigger("")

       
   
        expect(wrapperTwo.router.push).toHaveBeenCalledTimes(1);
     
     //   expect(wrapper.vm.$route.name).toBe($route.name);
      });
});
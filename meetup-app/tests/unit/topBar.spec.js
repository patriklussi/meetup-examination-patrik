import { shallowMount,createLocalVue} from "@vue/test-utils";
import TopBar from "../../src/components/TopBar.vue";
import VueRouter  from "vue-router";

const localVue = createLocalVue()
localVue.use(VueRouter);


describe("Topbar.vue",()=>{
    it("Should go to MyProfile page with router", async()=>{
        const $route = {
          name:MyProfile,
        }
        const pageToggleButton = wrapper.find(".ButtonTwo");
        pageToggleButton.trigger("")
    
        expect(wrapper.vm.$route.name).toBe($route.name);
      });
});
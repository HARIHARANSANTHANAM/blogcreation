import { shallowMount, mount ,createLocalVue} from '@vue/test-utils'
import LoginComponent from '@/components/LoginComponent.vue'
import Vuex from 'vuex'
import store from '@/store';


describe('LoginComponent.vue', () => {

  let wrapper;

  const localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {

    wrapper = shallowMount(LoginComponent,{
      store
    });
  })

  //check whether login component is rendered
  it('renders Login Page', () => {
    expect(wrapper.get('form').exists()).toBe(true);
  });

  //now check whether username & password is empty
  it('check username and password is empty', () => {
    expect(wrapper.vm.validator).toBeTruthy();
  })

  it('click the login button', () => {

    //input for email & pwd
    let inputemail = 'hari21032001@gmail.com';
    let inputpwd = 'hariharan'

    //set the email & pwd
    wrapper.vm.email = inputemail
    wrapper.vm.password = inputpwd
    const signinSpy = jest.spyOn(wrapper.vm, 'signin').mockImplementation(
      ()=>{
        wrapper.vm.login=true;
      }
    ) 

    //signin function is called
    wrapper.vm.signin();

    expect(signinSpy).toHaveBeenCalled();
    const user={"email":"hari21032001@gmail.com","password":"hariharan"};
    wrapper.vm.$store.commit("authStore/setLogin",{"email":"hari21032001@gmail.com","password":"hariharan"});

     
    expect(wrapper.vm.$store.getters['authStore/getUser']).toMatchObject({email:wrapper.vm.email,password:wrapper.vm.password});


  })

})

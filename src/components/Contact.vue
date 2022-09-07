<template>
    <div></div>
    <div
      class="
        introduction
        flex
        sm:flex-row
        flex-col
        items-center
        justify-between
        py-28
        px-5
        text-white
      "
    >
      <p class="text-4xl font-bold sm:mb-6">CONTACT ME</p>
      <p class="text-xl font-bold">
        <router-link to="/Home">Home</router-link>/ Contact
      </p>
    </div>
  
    <!-- <div class="form">
      <input
        type="text"
        class="form-input px-4 py-3 w-full text-xl"
        placeholder="Your Name"
        :value="state.name"
      />
      <input
        type="email"
        class="form-input px-4 py-3 w-full text-xl"
        placeholder="Email"
        :value="state.email"
      />
      <select
        class="form-select px-3 py-3 w-full text-xl"
        :class="{ select: isSelect }"
        :value="state.subject"
      >
        <option value="" disabled selected>Please Select</option>
        <option value="greetings">Greetings</option>
        <option value="questions">Questions</option>
        <option value="others">Others</option>
      </select>
      <textarea
        class="w-full text-xl px-4 py-3 w-full"
        rows="10"
        placeholder="Message"
        :value="state.message"
      />
      <button class="send text-xl">Send Message</button>
    </div> -->
  </template>
  
  <script>
  import useVuelidate from "@vuelidate/core";
  import { reactive} from "vue";
  import { required, email } from "@vuelidate/validators";
  
  // const sub = computed(() => a + b)
  
  // const test1 = () => { return "" }
  // const test2 = () => {}
  
  // const test = () => { 
  //   test1()
  //   test2()
  // }
  
  export default {
    setup() {
      // const state = reactive({
      //   name: "",
      //   email: "",
      //   subject: "",
      //   message: ""
      // })
      // const rules = reactive({
      //   name: { required },
      //   email: { required },
      //   subject: { required },
      //   message: { required }
      // })
      // const v$ = useVuelidate(rules, state)
      // return { state, v$ }
    }
  }
  </script>
  
  <style scoped>
  .introduction {
    background-color: #2a4b7c;
  }
  .form {
    padding: 20px;
  }
  input,
  select {
    margin-bottom: 20px;
  }
  .select {
    color: grey;
  }
  textarea {
    margin-bottom: 10px;
  }
  .send {
    background-color: #2a4b7c;
    color: white;
    padding: 10px;
  }
  </style>
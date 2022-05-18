<template>
  <div>
    <h1>Register</h1>
    <input 
    type= "email"
    v-model="email"
    name = "email"
    placeholder = "email"/>
    <br>           <!-- v-model is used to bind the input with data from the so we can pass it to the server -->
    <input
      type= "password"
      v-model="password"   
      name = "password"
      placeholder = "password"/>
    <br>
    <input
    type = "text"
    v-model = "childName"
    name = "childName"
    placeholder = "child`s name"/>
    <br>
    <input
    type = "date"
    v-model = "childDOB"
    name = "childDOB"
    placeholder = ""/>
    <br>
    <button @click= "register">Register</button> <!-- we use register method from the script as a event handler when the Register button is clicked -->

      
  </div>
</template>
                <!-- here we import AuthentificationServices and bind values from the input to be sent to the server -->
<script> 
import AuthentificationServices from '../services/AuthenticationService'
export default {
  data(){
  return{
  email:"",
  password:"",
  childName:"",
  childDOB: ""
  }
  
  },  
  methods: {     
    async register(){
      const response = await AuthentificationServices.register({
        email:this.email,
        password:this.password,   
        childName:this.childName,
        childDOB:this.childDOB
      })
      console.log(response.data)
      
    }
  }
}
</script>  <!-- Register method imputs values from the form into variable response to be sent to the server -->


<style scoped>

</style>

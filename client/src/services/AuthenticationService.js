import Api from '@/services/Api'

// On the Axios module below method register will make POST request 
//to /register endpoint on the server side andd pass credentials
// email and password
export default {
 register(credentials){
    return Api().post('register',credentials)
 } 
 }

//AuthenticationService.register({
//email:'testing@gmail.com',
//password: '123456'
//})

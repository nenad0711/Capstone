import axios from 'axios'  //this api is used to hit differrent endpoints

export default ()=> {
    return axios.create({
        BaseURL:'http://localhost:8081'
    })

}
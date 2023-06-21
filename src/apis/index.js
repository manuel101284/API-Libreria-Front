import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:3000/api"
    // baseURL: "mongodb+ srv://manuelricardo:<password>@prueba01.yoxohxc.mongodb.net/"
})
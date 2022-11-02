import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:9494/api",
    headers:{
        "Content-type":"application/json"
    }
});
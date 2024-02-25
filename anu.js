import axios from "axios"
const baseUrl = 'http://localhost:8000/api/';
const anu = await axios.get(baseUrl+'layanan/show');

console.log(anu.data[0].logo);
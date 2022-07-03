// import { LocalStorage } from "node-localstorage";

// global.localStorage = new LocalStorage('./scratch');

// const storeToken = (value)=>{
//     localStorage.setItem('token' , value);
// }

// const getToken = ()=>{
//     let token = localStorage.getItem('token');
//     return token
// }

// const removeToken = (value)=>{
//     localStorage.removeItem(value);
// }

// export {storeToken , getToken , removeToken}

function storeToken(value){
    window.localStorage.setItem('token' , value )
}
function getToken(){
    const token = window.localStorage.getToken();
}
function removeToken(value){
    window.localStorage.removeItem(value )
}

export {storeToken , getToken , removeToken}
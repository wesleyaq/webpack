import "@babel/polyfill";
import Users from './com/Users/Users';
import '../scss/main.scss';
// import style from "../scss/main.scss";

document.addEventListener("DOMContentLoaded", function() {
    const users = new Users();
    users.listRender(document.querySelector('#users'));
});
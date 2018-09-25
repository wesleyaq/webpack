import { Get } from '../../services';

export default class User {
    constructor() {
        this.table = 'users';
    }

    setUser(data) {
        
    }

    getUsers() {
        return Get(this.table);
    }
}
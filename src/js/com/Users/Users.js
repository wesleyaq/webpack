import User from './User';

export default class Users extends User {
    constructor() {
        super();
    }

    getTableItem(user) {
        return `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
        </tr>`;
    }

    tableRender($obj, data) {
        if($obj && data && data.length) {
            let html = `<table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(it => this.getTableItem(it)).join('')}
                </tbody>
            </table>`;
            $obj.innerHTML = html;
        }
    }

    listRender($obj) {
        this.getUsers()
        .then(data => this.tableRender($obj, data));
    }
}
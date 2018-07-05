export class User {

    id: Number;
    first_name: String;
    last_name: String;
    email: String;
    password: String;

    hasPassword(password: String): Boolean {
        return this.password === password;
    }

    static fromJson(jsonData) {
        const user = new User();
        user.id = jsonData.id;
        user.first_name = jsonData.first_name;
        user.last_name = jsonData.last_name;
        user.email = jsonData.email;
        user.password = jsonData.password;
        return user;
    }
}

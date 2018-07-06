export class User {

    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;

    hasPassword(password: string): Boolean {
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

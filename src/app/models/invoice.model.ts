import { User } from './user.model';

export class Invoice {

    id: number;
    name: string;
    user_id: number;
    created_at: Date;

    // Additional property:
    user: User;

    toJSON(key) {
        return {
            id: this.id,
            name: this.name,
            user_id: this.user ? this.user.id : this.user_id,
            created_at: this.created_at
        }
    }

    static fromJson(jsonData) {
        const invoice = new Invoice();
        invoice.id = jsonData.id;
        invoice.name = jsonData.name;
        invoice.user_id = jsonData.user_id;
        invoice.created_at = jsonData.created_at;
        return invoice;
    }
}

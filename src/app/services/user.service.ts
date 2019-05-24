import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private  config: ConfigService) { }

    getAll() {
        return this.http.get<User[]>(`${this.config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.config.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.config.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.config.apiUrl}/users/${id}`);
    }
}

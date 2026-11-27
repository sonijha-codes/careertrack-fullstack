import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerApi {
    constructor(private http: HttpClient) { }
    private apiUrl = 'http://127.0.0.1:8000';

    getHealth() {
    return this.http.get(`${this.apiUrl}/healthStatus`);
    }
}

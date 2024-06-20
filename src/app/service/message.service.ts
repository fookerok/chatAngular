// src/app/services/message.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessages } from '../models/message.models';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<IMessages[]> {
    return this.http.get<IMessages[]>(`${this.baseUrl}/messages`);
  }

  getMessageById(id: number): Observable<IMessages> {
    return this.http.get<IMessages>(`${this.baseUrl}/messages/${id}`);
  }
}
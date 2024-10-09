import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Note {
   _id?: string;
   title: string;
   content: string;
}

@Injectable({
   providedIn: 'root'
})
export class NoteService {
   private apiUrl = 'http://localhost:3000/api/notes';

   constructor(private http: HttpClient) {}

   // Get All Notes
   getNotes(): Observable<Note[]> {
      return this.http.get<Note[]>(this.apiUrl);
   }

   // Create Note
   createNote(note: Note): Observable<Note> {
      return this.http.post<Note>(this.apiUrl, note);
   }

   // Update Note
   updateNote(id: string, note: Note): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, note);
   }

   // Delete Note
   deleteNote(id: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
   }
}

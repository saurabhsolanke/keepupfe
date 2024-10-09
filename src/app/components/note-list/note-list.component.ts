import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
   selector: 'app-note-list',
   templateUrl: './note-list.component.html',
   styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
   notes: any[] = [];

   constructor(private noteService: NoteService) {}

   ngOnInit(): void {
      this.noteService.getNotes().subscribe(data => {
         this.notes = data;
      });
   }

   deleteNote(id: string): void {
      this.noteService.deleteNote(id).subscribe(() => {
         this.notes = this.notes.filter(note => note._id !== id);
      });
   }
}

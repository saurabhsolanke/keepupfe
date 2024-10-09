import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
   selector: 'app-note-form',
   templateUrl: './note-form.component.html',
   styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
   note = { title: '', content: '' };

   constructor(private noteService: NoteService) {}

   addNote(): void {
      this.noteService.createNote(this.note).subscribe(() => {
         alert('Note added');
         this.note = { title: '', content: '' };
      });
   }
}

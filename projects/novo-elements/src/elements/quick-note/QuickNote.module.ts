// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoListModule } from './../list/List.module';
// APP
import { NovoLoadingModule } from './../loading/Loading.module';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
import { QuickNoteElement } from './QuickNote';

@NgModule({
  imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule],
  declarations: [QuickNoteElement, QuickNoteResults],
  exports: [QuickNoteElement, QuickNoteResults],
})
export class NovoQuickNoteModule { }

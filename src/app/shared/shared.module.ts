import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestBookComponent } from './components/guest-book/guest-book.component';

@NgModule({
  declarations: [GuestBookComponent],
  imports: [
    CommonModule,
  ],
  exports: [GuestBookComponent],
})

export class SharedModule { }

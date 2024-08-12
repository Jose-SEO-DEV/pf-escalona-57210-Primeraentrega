import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { ResaltadoDirective } from './directive/resaltado.directive';
import { RepetirDirective } from './directive/repetir.directive';
import { FullNamePipe } from './pipes/full-name.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ReversePipe,
    ResaltadoDirective,
    RepetirDirective,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ReversePipe, ResaltadoDirective, RepetirDirective, FullNamePipe, MatIconModule, MatInputModule, MatButtonModule, MatCardModule,MatFormFieldModule, ],
})
export class SharedModule { }

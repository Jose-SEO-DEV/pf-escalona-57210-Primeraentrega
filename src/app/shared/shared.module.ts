import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { ResaltadoDirective } from './directive/resaltado.directive';
import { RepetirDirective } from './directive/repetir.directive';
import { FullNamePipe } from './pipes/full-name.pipe';



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
  exports: [ReversePipe, ResaltadoDirective, RepetirDirective, FullNamePipe],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallApiService } from './call-api.service';

@NgModule({
  providers: [CallApiService],
})
export class CoreModule { }
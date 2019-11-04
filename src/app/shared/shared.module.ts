import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatButtonModule, FlexLayoutModule],
  exports: [AppLoaderComponent],
  declarations: [AppLoaderComponent],
  providers: [AppLoaderService],
  entryComponents: [AppLoaderComponent]
})
export class SharedModule {}

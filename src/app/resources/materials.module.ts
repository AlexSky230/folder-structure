import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatInputModule],
  exports: [MatButtonModule, MatDividerModule, MatIconModule, MatInputModule],
  providers: [],
  bootstrap: [],
})
export class MaterialsModule {}

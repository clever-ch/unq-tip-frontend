import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  declarations: [ErrorPageComponent]
})
export class MaterialModule {}

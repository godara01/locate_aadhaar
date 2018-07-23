import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule, MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule,
   MatMenuModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { StateComponent } from './state/state.component';
import { PincodeComponent } from './pincode/pincode.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    StateComponent,
    PincodeComponent,
    SearchboxComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatButtonModule, MatIconModule, MatOptionModule, MatSelectModule,
    MatMenuModule, BrowserAnimationsModule, MatTabsModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from  '@angular/material';

import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  loading  =  true;
  title = 'ofo-constraint';
  public  username:  string  =  "";
  public  password:  string  =  "";

  constructor(private  dialog:  MatDialog) { }

  ngOnInit():  void {
      setTimeout(() => {
          this.loading  =  false;
      }, 2000);
    }

  login() {
      this.dialog.open(ErrorComponent,{ data: {
          message:  "Your login information are incorrect!"
      }});
  }
}

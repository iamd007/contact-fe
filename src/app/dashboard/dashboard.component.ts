import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contacts;
  displayedColumns: string[] = ['name','phone','email','status','delete','edit'];
  dataSource = new MatTableDataSource();
  constructor(private service: ContactService, private dialog: MatDialog) { }
  newContact;

  ngOnInit(): void {
    this.service.getAllContacts().subscribe(res=>{
      console.table(res);
      this.contacts = res;
      this.dataSource = this.contacts;
    })
  }

  openDialog() {

    const dialogRef = this.dialog.open(ContactComponent, {
      width: '450px',
      height:'450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newContact = result;
      console.log(this.newContact)
    });
  }
 }

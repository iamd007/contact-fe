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
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newContact = result;
      console.log(this.newContact)
      this.service.addContact(this.newContact).subscribe(res => {
        console.log(res)
      });
      window.location.reload();
    });
  }

  openEditDialog(element) {

    const dialogRef = this.dialog.open(ContactComponent, {
      width: '450px',
      height:'450px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newContact = result;
      this.newContact.id = element.id;
      console.log(this.newContact)
      this.service.editContact(this.newContact).subscribe(res => {
        console.log(res);
      });
      //window.location.reload();
    });
  }

  onDelete(contact) {
    console.log(contact);
    this.service.deleteContact(contact.id).subscribe();
    window.location.reload();
  }
 }

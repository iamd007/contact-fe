import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contacts;
  displayedColumns: string[] = ['name','phone','email','status','delete','edit'];
  dataSource = new MatTableDataSource();
  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.service.getAllContacts().subscribe(res=>{
      console.table(res);
      this.contacts = res;
      this.dataSource = this.contacts;
    })
  }

}

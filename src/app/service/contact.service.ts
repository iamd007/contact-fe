import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL = environment.URL;
  constructor(private http : HttpClient) { }

  getAllContacts() {
    return this.http.get(this.URL + "/contact/all");
  }

  addContact(contact) {
    console.log(contact)
    return this.http.post(this.URL + "/contact/add", contact);
  }

  editContact(contact) {
    //String link = this.URL + "/contact/update/"+contact.id;
    return this.http.put(this.URL + "/contact/update/" + contact.id , contact);
  }

  deleteContact(id) {
    return this.http.delete(this.URL + "/contact/remove/"+id);
  }
}

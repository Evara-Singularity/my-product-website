import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  query = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  submitQuery() {
    // For now, just log the query. In a real scenario, you'd send this to a server.
    console.log(this.query);
    alert('Query submitted!');

    // Reset the form after submission.
    this.query = {
      name: '',
      email: '',
      message: ''
    };
  }
}

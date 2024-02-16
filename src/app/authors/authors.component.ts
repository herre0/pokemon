import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = ['author1' , 'author2'];
  title = 'Author page'
  constructor() { }

  ngOnInit(): void {
  }

}

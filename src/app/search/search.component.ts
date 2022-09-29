import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: any;
  userDetails: any = '';
  users: any;
  show:boolean = false;
  hide:boolean = true;
  btnGrid: boolean = false;
  btnList: boolean = true;

constructor(private http: HttpClient) { }

ngOnInit(): void {
  const url = 'https://api.github.com/search/users?q=test&page=1';
  this.http.get(url).subscribe((response => {
    this.data = response;
    console.log(this.data.total_count);
    for (let i = 0; i < this.data.items.length; i++) {
      this.users = this.data.items[i];
      console.log(this.users.login)
    }
  }));

}

search(userInput: any) {

  let user = userInput.value;
  for (let j = 0; j < this.data.items.length; j++) {
    if (user == this.data.items[j].login) {
      console.log(this.data.items[j]);
      this.show = true;
      this.hide = false;
      this.userDetails = this.data.items[j];
    }
  }
}

grid(){
  let element = document.getElementById('grid')?.hidden;
  element = true;
  this.btnGrid = false;
  this.btnList = true;
}

list(){
  let elementList = document.getElementById('list')?.hidden;
  elementList = true;
  this.btnGrid = true;
  this.btnList = false;
}



}

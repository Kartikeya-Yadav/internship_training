import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-search-component',
  standalone: false,
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  searchValue: string = '';

  //Userlist to tempeorery store users.
  UsersList: User[] = [
    {id: 1, name: 'Shri', email: 'shri@gmail'},
    {id: 2, name: 'Jayesh', email: 'jayesh@gmail'},
    {id: 3, name: 'Pratik', email: 'pratik@gmail'},
    {id: 4, name: 'Suyash', email: 'suyash@gmail'}
  ]


  //Another list to store the filtered user and show on template.
  //Initaily all the users are showed on template
  searchedUsers: User[] = this.UsersList;

  //Function to filter the users in list accourding to input.
  onSearchChange(searchInput: string) {
    this.searchedUsers = this.UsersList.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }


}

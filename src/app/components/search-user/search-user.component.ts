import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetAllUser().subscribe(
      (lol1) => {
        this.users = lol1 ?? [];
      },
      (lol2) => {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'No user found!',
        });
      }
    );
  }

  AddFriend(user: any){

  }

  DeleteFriend(user: any){

  }

  IsFriend(user: any){

  }

  GetFriend(user: any){

  }


}

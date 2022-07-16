import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: any = [];
  viewUser: any = null;
  display = 'none';

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

  AddFriend(user: any) {

  }

  DeleteFriend(user: any) {

  }

  IsFriend(user: any): boolean {
    return this.users.find((x: { friends: number[]; }) => x.friends.includes(user?.id)) ?? false;
  }

  GetUser(id: number) {
    return this.users.find((x: { id: number; }) => x?.id == id) ?? null;
  }

  openModal(user: any) {
    this.viewUser = user;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}

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
  currentUserId: number = Number(localStorage.getItem('userId') ?? 0) ?? 0;

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
    let myUser: any = this.users.find((x: { id: number; }) => x.id == this.currentUserId);
    if (myUser) {
      let friends: number[] = myUser?.friends ?? [];
      if (friends.indexOf(user?.id) == -1) {
        friends.push(user?.id);
        this.userService.AddUserAsFriend(myUser).subscribe(
          (lol1) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Friend Added!',
            });
          },
          (lol2) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Friend Add Failed!',
            });
          }
        );
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Already in friendlist!',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Invalid User!',
      });
    }
  }

  DeleteFriend(user: any) {
    let myUser: any = this.users.find((x: { id: number; }) => x.id == this.currentUserId);
    if (myUser) {
      let friends: number[] = myUser?.friends ?? [];
      if (friends.indexOf(user?.id) == -1) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Not in friendlist!',
        });
      } else {
        const index = friends.indexOf(user?.id, 0);
        if (index > -1) {
          friends.splice(index, 1);
          this.userService.AddUserAsFriend(myUser).subscribe(
            (lol1) => {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Friend Deleted!',
              });
            },
            (lol2) => {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Friend Deletion Failed!',
              });
            }
          );
        }
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Invalid User!',
      });
    }
  }

  // IsFriend(user: any): boolean {
  //   let userFriends: number[] = user?.friends ?? [];
  //   console.log(userFriends);

  //   return userFriends.indexOf(this.currentUserId) > -1;
  // }

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

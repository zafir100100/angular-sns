import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  currentUserId: number = Number(localStorage.getItem('userId') ?? 0) ?? 0;
  posts: any[] = [];
  users: any[] = [];
  validIds: number[] = [];

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.GetAllPost().subscribe(
      (lolol1: any) => {
        this.posts = lolol1
      },
      (lolol2) => {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'No post found!',
        });
      }
    );
    this.userService.GetUser(this.currentUserId).subscribe(
      (lol1: any) => {
        let p: number[] = lol1?.friends ?? [];
        p.push(this.currentUserId);
        this.validIds = p;

        this.userService.GetAllUser().subscribe(
          (lol1: any) => {
            let backup: any[] = lol1;
            for(let item of p){
              let getb: any  = backup.find(x=>x.id == item);
              if(getb){
                this.users.push(getb);
              }
            }
          },
          (lol2) => {
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'No user found!',
            });
          }
        );
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

  getUserName(userId: number) {
    for (let item of this.validIds) {
      if (this.validIds.indexOf(item)) {
        return this.users.find(x => x.id == userId)?.username ?? null;
      }
    }
    return null;
  }
}

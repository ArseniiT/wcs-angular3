import { Component } from '@angular/core';
import { User } from '../class/User';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = new User(
    'Doe',
    'John',
    25,
    'two beer or not to beer',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  )

  isUserAgeVisible = false;

  toggleAge() {
    this.isUserAgeVisible = !this.isUserAgeVisible;
  }
}

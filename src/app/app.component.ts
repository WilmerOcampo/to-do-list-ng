import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {HeaderComponent} from "./header/header.component";
import {TasksComponent} from "./tasks/tasks.component";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-list-ng';
  users;
  selectedUserId?: string;

  constructor(userService: UserService) {
    this.users = userService.getUsers();
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

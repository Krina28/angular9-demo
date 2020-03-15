import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!';
  serverName = 'Test';
  userName = '';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  isDisplayDetails = false;
  lists = [];
  totalClicks = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser() {
    this.userName = '';
  }

  onDisplayDetails() {
    this.isDisplayDetails = true;
    this.totalClicks = this.totalClicks + 1;
    this.lists.push(this.totalClicks)
  }
}

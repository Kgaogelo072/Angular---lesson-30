import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
 allowNewServer = false;
 constructor() {
  setTimeout(()=>{
    this.allowNewServer = true;
  }, 2000)
 }
}

import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['server.component.css']
})
export class ServerComponent{
    serverId: number = 20;
    serverStatus: string = 'offline';
    getServerStatus(){
        return this.serverStatus
    }
} 
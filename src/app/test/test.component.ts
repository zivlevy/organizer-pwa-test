import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SocketService} from "../services/socket.service";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    ziv: any = ''

    constructor(private http: HttpClient,
                private socketService: SocketService ) {
    }

    ngOnInit(): void {
        this.http.get("http://109.186.119.110:5999/OrganizerServices/rotem", {responseType: 'text'})
            .subscribe(res => {
                console.log(res)
                this.ziv = res
            })
    }

}

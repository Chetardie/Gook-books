import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCwziy3qqY_9CCTX2n06N7lC8quH3Tc1vQ',
            authDomain: 'gook-books.firebaseapp.com'
        });
    }
}

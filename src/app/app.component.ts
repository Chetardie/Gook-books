import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

import { environment } from '../environments/environment';

@Component({
  selector: 'gook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.initializeApp(environment.firebaseConfig);
    }
}

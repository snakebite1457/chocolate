import { Component } from '@angular/core';
import { TweetListComponent } from './tweet-list'

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TweetListComponent]
})
export class AppComponent {
}

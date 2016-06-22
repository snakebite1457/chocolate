import { Component, OnInit } from '@angular/core';
import { Tweet } from '../shared/tweets';

@Component({
  moduleId: module.id,
  selector: 'choc-tweet',
  templateUrl: 'tweet.component.html',
  styleUrls: ['tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(public tweet: Tweet) {}

  ngOnInit() {

  }

}

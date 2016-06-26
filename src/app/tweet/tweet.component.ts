import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'choc-tweet',
  templateUrl: 'tweet.component.html',
  styleUrls: ['tweet.component.css']
})

export class TweetComponent implements OnInit {

  @Input('tweet') tweet: Tweet;

  constructor() {}

  ngOnInit() {

  }

}

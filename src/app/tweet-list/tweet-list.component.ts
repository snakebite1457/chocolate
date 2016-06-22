import { Component, OnInit }  from '@angular/core';
import { Tweet }              from '../shared/tweets';
import { TweetComponent }     from '../tweet';
import { TweetService }       from '../tweet/tweet.service';


@Component({
  moduleId: module.id,
  selector: 'choc-tweet-list',
  templateUrl: 'tweet-list.component.html',
  styleUrls: ['tweet-list.component.css'],
  directives: [TweetComponent],
  providers: [ TweetService ]
})
export class TweetListComponent implements OnInit {

  private errorMessage: string;
  private mode: string = 'Observable';

  public tweets: Tweet[];

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweetService.getTweets()
                    .subscribe(
                      tweets => this.tweets = tweets,
                      error =>  this.errorMessage = <any>error);
  }


}

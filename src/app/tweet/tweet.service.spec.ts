/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TweetService } from './tweet.service';

describe('Tweet Service', () => {
  beforeEachProviders(() => [TweetService]);

  it('should ...',
      inject([TweetService], (service: TweetService) => {
    expect(service).toBeTruthy();
  }));
});

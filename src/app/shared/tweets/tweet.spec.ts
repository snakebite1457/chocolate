/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Tweet} from './tweet';

describe('Tweet', () => {
  it('should create an instance', () => {
    expect(new Tweet('', '')).toBeTruthy();
  });
});

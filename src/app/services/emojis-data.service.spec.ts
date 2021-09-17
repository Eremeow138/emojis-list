import { TestBed } from '@angular/core/testing';

import { EmojisDataService } from './emojis-data.service';

describe('EmojisDataService', () => {
  let service: EmojisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

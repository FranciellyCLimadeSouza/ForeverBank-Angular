import { TestBed } from '@angular/core/testing';

import { PixService } from './pix.service';

describe('NoteService', () => {
  let service: PixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

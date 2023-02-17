import { TestBed } from '@angular/core/testing';

import { ChessPlayerService } from './chess-player.service';

describe('ChessPlayerService', () => {
  let service: ChessPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

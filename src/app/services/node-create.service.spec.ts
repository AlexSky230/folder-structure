import { TestBed } from '@angular/core/testing';

import { NodeCreateService } from './node-create.service';

describe('NodeCreateService', () => {
  let service: NodeCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

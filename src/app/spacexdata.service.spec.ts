import { TestBed } from '@angular/core/testing';

import { SpacexdataService } from './spacexdata.service';

describe('SpacexdataService', () => {
  let service: SpacexdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

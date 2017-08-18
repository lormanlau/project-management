import { TestBed, inject } from '@angular/core/testing';

import { ProductcrudService } from './productcrud.service';

describe('ProductcrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductcrudService]
    });
  });

  it('should be created', inject([ProductcrudService], (service: ProductcrudService) => {
    expect(service).toBeTruthy();
  }));
});

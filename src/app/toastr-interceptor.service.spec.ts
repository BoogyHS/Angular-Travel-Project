import { TestBed } from '@angular/core/testing';

import { ToastrInterceptorService } from './toastr-interceptor.service';

describe('ToastrInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastrInterceptorService = TestBed.get(ToastrInterceptorService);
    expect(service).toBeTruthy();
  });
});

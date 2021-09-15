import { TestBed } from '@angular/core/testing';

import { ListEditProductInteractionService } from './list-edit-product-interaction.service';

describe('ListEditProductInteractionService', () => {
  let service: ListEditProductInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEditProductInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

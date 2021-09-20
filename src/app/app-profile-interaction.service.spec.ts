import { TestBed } from '@angular/core/testing';

import { AppProfileInteractionService } from './app-profile-interaction.service';

describe('AppProfileInteractionService', () => {
  let service: AppProfileInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppProfileInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

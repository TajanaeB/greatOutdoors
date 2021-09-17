import { TestBed } from '@angular/core/testing';

import { LoginAppInteractionService } from './login-app-interaction.service';

describe('LoginAppInteractionService', () => {
  let service: LoginAppInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAppInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

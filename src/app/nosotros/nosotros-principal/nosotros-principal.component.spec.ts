import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosPrincipalComponent } from './nosotros-principal.component';

describe('NosotrosPrincipalComponent', () => {
  let component: NosotrosPrincipalComponent;
  let fixture: ComponentFixture<NosotrosPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

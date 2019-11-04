import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoPiensoMujeresComponent } from './generic-landing';

describe('YoPiensoMujeresComponent', () => {
  let component: YoPiensoMujeresComponent;
  let fixture: ComponentFixture<YoPiensoMujeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoPiensoMujeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoPiensoMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCartComponent } from './music-cart.component';

describe('MusicCartComponent', () => {
  let component: MusicCartComponent;
  let fixture: ComponentFixture<MusicCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

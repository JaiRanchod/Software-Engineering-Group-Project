import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatchPopupComponent } from './match-popup.component';

describe('MatchPopupComponent', () => {
  let component: MatchPopupComponent;
  let fixture: ComponentFixture<MatchPopupComponent>;
  let html: DebugElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ MatchPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPopupComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
    component.matched_profile.Image = "https://images.unsplash.com/photo-1617375407361-9815100c4324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

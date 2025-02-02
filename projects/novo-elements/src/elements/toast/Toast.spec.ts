// NG2
import { async, TestBed } from '@angular/core/testing';
import { NovoLabelService } from '../../services/novo-label-service';
// App
import { NovoToastElement } from './Toast';

describe('Elements: NovoToastElement', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NovoToastElement],
      providers: [{ provide: NovoLabelService, useClass: NovoLabelService }],
    }).compileComponents();
    fixture = TestBed.createComponent(NovoToastElement);
    component = fixture.debugElement.componentInstance;
  }));

  it('should initialize correctly', () => {
    expect(component).toBeTruthy();
  });

  describe('oninit: ', () => {
    it('should be defined.', () => {
      expect(component.ngOnInit).toBeDefined();
    });

    it('should defaulr.', () => {
      component.launched = false;
      component.ngOnInit();
      expect(component.iconClass).toBeDefined();
    });
  });

  describe('close: ', () => {
    it('should be defined.', () => {
      expect(component.close).toBeDefined();
    });
  });
});

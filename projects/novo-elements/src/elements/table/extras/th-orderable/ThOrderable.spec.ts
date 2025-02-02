// NG2
import { Component, ElementRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
// App
import { ThOrderable } from './ThOrderable';

@Component({
  selector: 'test-component',
  template: `
    <table>
      <tr>
        <th novoThOrderable="right"></th>
      </tr>
    </table>
  `,
})
class TestComponent {}

describe('Elements: ThOrderable', () => {
  let fixture;
  let component;

  describe('Directive: ', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ThOrderable, TestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.debugElement.componentInstance;
    }));

    it('should initialize as a directive', () => {
      expect(component).toBeDefined();
    });
  });
  describe('Class: ', () => {
    const mockElement = new ElementRef(document.createElement('div')) as any;
    const subject = new ThOrderable(mockElement);
    mockElement.nativeElement = {
      parentNode: {
        children: [mockElement],
      },
      classList: {
        remove: () => {},
        add: () => {},
      },
    };
    it('should initialize correctly.', () => {
      expect(subject).toBeDefined();
      expect(subject.index).toBeDefined();
    });

    describe('Method: onDragStart()', () => {
      it('should be defined', () => {
        expect(subject.onDragStart).toBeDefined();
        subject.column = {
          ordering: false,
        };
        subject.onDragStart();
      });
    });

    describe('Method: deleteColumns()', () => {
      it('should delete rows from the table', () => {
        expect(subject.deleteColumns).toBeDefined();
        const mockTable = {
          rows: [],
          deleteRow: () => {},
        };
        jest.spyOn(mockTable, 'deleteRow');
        subject.deleteColumns(mockTable);
      });
    });

    describe('Method: findTable()', () => {
      it('should be defined', () => {
        const mockHTMLElement = document.createElement('div');
        expect(subject.findTable).toBeDefined();
        subject.findTable(mockHTMLElement);
      });
    });

    describe('Method: onDrag()', () => {
      it('should be defined', () => {
        expect(subject.onDrag).toBeDefined();
        subject.onDrag();
      });
    });

    describe('Method: onDragEnd()', () => {
      it('should be defined', () => {
        expect(subject.onDragEnd).toBeDefined();
        jest.spyOn(document.body, 'removeChild').mockImplementation(() => null);
        subject.onDragEnd();
      });
    });

    describe('Method: onDrop()', () => {
      it('should be defined', () => {
        expect(subject.onDrop).toBeDefined();
        subject.onDrop({
          dataTransfer: {
            getData: () => {
              return '[{}]';
            },
          },
          preventDefault: () => {},
          stopPropagation: () => {},
        });
      });
    });

    describe('Method: onDragOver()', () => {
      it('should be defined', () => {
        expect(subject.onDragOver).toBeDefined();
        subject.onDragOver({ dataTransfer: { dropEffect: '' }, preventDefault: () => {}, stopPropagation: () => {} });
      });
    });

    describe('Method: onDragEnter()', () => {
      it('should be defined', () => {
        expect(subject.onDragEnter).toBeDefined();
        subject.onDragEnter({ target: 'test' });
      });
    });

    describe('Method: onDragLeave()', () => {
      it('should be defined', () => {
        expect(subject.onDragLeave).toBeDefined();
        subject.onDragLeave();
      });
    });
  });
});

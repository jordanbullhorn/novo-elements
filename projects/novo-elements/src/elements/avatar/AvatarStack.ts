// NG2
import { Component, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NovoAvatarElement } from './Avatar';

@Component({
  selector: 'novo-avatar-stack',
  styleUrls: ['./AvatarStack.scss'],
  template: `
    <ng-content></ng-content>
    <novo-avatar *ngIf="showTotal" label="+5"></novo-avatar>
  `,
})
export class NovoAvatarStackElement implements AfterViewInit {
  @Input()
  total: number = 0;
  @ViewChildren(NovoAvatarElement)
  viewChildren!: QueryList<NovoAvatarElement>;

  showTotal: boolean = false;
  remainingCount: number = 0;
  ngAfterViewInit() {
    // viewChildren is set
    if (this.total - this.viewChildren.length > 0) {
      this.remainingCount = this.total - this.viewChildren.length;
      this.showTotal = true;
    }
  }
}

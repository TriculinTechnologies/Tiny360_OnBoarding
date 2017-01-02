import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'inline-edit',
    template: `<div>
    <span [hidden]="!isDisplay">
        {{ text }}
        <button
            (click)="beginEdit(editText)">Edit</button>
    </span>
    <span [hidden]="isDisplay">
        <input #editText type="text"
            [value]="text" (keyup.enter)="editDone(editText.value)">
        <button 
            (click)="editDone(editText.value)"></button>
    </span>
</div>`
})
export class InlineEdit {
    private isDisplay = true;

    @Input() text: string;
    @Output() edit = new EventEmitter<string>();

    beginEdit(el: HTMLElement): void {
        this.isDisplay = false;

        setTimeout(() => {
            el.focus();
        }, 100);
    }

    editDone(newText: string): void {
        this.isDisplay = true;
        this.text = newText;
        this.edit.emit(this.text);
    }
}
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import { PaginationModel } from './pagination.model';

@Component({
    selector: 'sl-pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
    public pages: Array<number> = [];
    public pagination: PaginationModel;
    @Input() public previousLabel: string;
    @Input() public nextLabel: string;
    @Output() public changePage: EventEmitter<any> = new EventEmitter();
    private searchField: string = '';
    private searchFieldControlSub: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.previousLabel = this.previousLabel || 'PAGINATION.Previous';
        this.nextLabel = this.nextLabel || 'PAGINATION.NEXT';
    }

    public handlePageChange(event) {
        this.changePage.emit(event);
    }

    @Input()
    public set setPagination(value: PaginationModel) {
        this.pagination = value || new PaginationModel({ limit: 0, total: 0 });
        this.pages = [];
        let i = 0;
        while (i * this.pagination.limit < this.pagination.total) {
            this.pages.push(i + 1);
            i++;
        }
    }

    public disablePrevious() {
        return !(this.pagination.current - 1 >= 1);
    }

    public disableNext() {
        return !(this.pagination.current * this.pagination.limit < this.pagination.total);
    }
}

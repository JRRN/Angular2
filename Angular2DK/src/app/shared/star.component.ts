import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    public ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    public onClick() {
        this.ratingClicked.emit('The rating ' + this.rating + ' was clicked!');
    }
}
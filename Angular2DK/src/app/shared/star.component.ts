import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    
    startWith: number;
    @Input() rating : number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    public ngOnChanges(): void {
        this.startWith = this.rating * 86 / 5;
    }
    
    public onClick(){
        this.ratingClicked.emit('The rating '+ this.rating +' was clicked!');
    }
}
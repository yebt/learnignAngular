import { Component, OnInit } from '@angular/core';
import {Hrs} from '../hrs';

@Component({
    selector: 'app-hrs',
    templateUrl: './hrs.component.html',
    styleUrls: ['./hrs.component.scss'],
})
export class HrsComponent implements OnInit {

    // title: string = 'usu'; //property
    // hero: string = 'Windstorm';
    // now remplace the individual properties with a interface
    hrsi: Hrs = {
        id:1,
        name: 'Windstorm'
    }

    constructor() {}

    ngOnInit(): void {}
}

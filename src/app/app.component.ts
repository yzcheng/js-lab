import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <alert dismissible="dismissible">My Heroes</alert>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
      	[class.selected]="hero === selectedHero"
      	(click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <ag-grid-ng2 class="ag-fresh" [enableSorting]="test" [enableFilter]="test"
      [enableColResize]="test"
      style="width: 100%; height: 100%;"
      [columnDefs]="columnDefs"
      [rowData] = "rowData">
    </ag-grid-ng2>
    `,
    styles: [`
	  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
	  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
	  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
	  .heroes .badge {
	    font-size: small;
	    color: white;
	    padding: 0.1em 0.7em;
	    background-color: #369;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -1px;
	  }
	  .selected { background-color: #EEE; color: #369; }
	`],
    directives: [HeroDetailComponent, Alert, ag.grid.AgGridNg2],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public title = "Tour of Heroes!";
    public selectedHero: Hero;
    public heroes: Hero[];
    public dismissible : Boolean = true;
    public columnDefs = [
      {headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" }
    ];
    public rowData = [{make:'123',model:'321'}];
    public test:Boolean = true;

    constructor(private _heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

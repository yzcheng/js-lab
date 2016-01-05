import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Logger} from './logger';
import {Http, Response} from 'angular2/http';
@Injectable()
export class HeroService {
    constructor(private _logger: Logger, private _http: Http) {
        this._logger.log("HeroService - constructor");
    }

    getHeroes() {
        this._logger.log("getHeroes start");
        return Promise.resolve(HEROES);
    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        this._logger.log("getHeroesSlowly start");
        return new Promise(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
            );
    }

    getHeroesWithRemote() {
        this._logger.log("getHeroesWithRemote start");
        return new Promise((resolve, reject) => {
            this._http.get("./MockController")
                .subscribe(res => {
                    resolve(res.json());
                })
        });
    }
}
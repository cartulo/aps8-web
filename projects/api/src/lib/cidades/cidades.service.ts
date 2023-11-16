import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Cidade} from './models/cidade';

@Injectable({providedIn: 'root'})
export class CidadesService {
    private readonly url = 'https://localhost:40000/api/cidades';

    constructor(private http: HttpClient) { }

    obterTodas(): Observable<Cidade[]> {
        return this.http.get(`${this.url}`)
            .pipe(map((o: Cidade[]) => o));
    }

    obterQualidades(): Observable<object[]> {
        return this.http.get(`${this.url}/qualidades`)
            .pipe(map((o: Object[]) => o));
    }
}

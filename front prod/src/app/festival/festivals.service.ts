import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Festivals } from "src/app/festival/festivals";

@Injectable({
    providedIn: "root"
})

export class FestivalsService {

    constructor(private http: HttpClient) { }

    public festivalsList(): Observable<Festivals[]> {
        return this.http.get<Festivals[]>("http://bariserv.net:4000/festivals");
    }
}

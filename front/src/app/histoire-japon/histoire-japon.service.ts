import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { History } from "src/app/histoire-japon/history";

@Injectable({
    providedIn: "root"
})
export class HistoryService {

    constructor(private http: HttpClient) { }

    public eventsList(): Observable<History[]> {
        return this.http.get<History[]>("http://localhost:3000/events");
    }
}

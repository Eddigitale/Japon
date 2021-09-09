import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Places } from "src/app/incontournables/places";

@Injectable({
    providedIn: "root"
})
export class PlacesService {

    constructor(private http: HttpClient) { }

    public placesList(): Observable<Places[]> {
        return this.http.get<Places[]>("http://localhost:3000/places");
    }
}

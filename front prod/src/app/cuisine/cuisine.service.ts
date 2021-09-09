import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cooking } from "src/app/cuisine/cooking";

@Injectable({
    providedIn: "root"
})
export class CookingService {

    constructor(private http: HttpClient) { }

    public recipesList(): Observable<Cooking[]> {
        return this.http.get<Cooking[]>("http://bariserv.net:4000/cooking");
    }
}

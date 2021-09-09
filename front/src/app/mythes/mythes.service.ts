import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Myths } from "src/app/mythes/myths";

@Injectable({
    providedIn: "root"
})
export class MythsService {

    constructor(private http: HttpClient) { }

    public mythsList(): Observable<Myths[]> {
        return this.http.get<Myths[]>("http://localhost:3000/myths");
    }
}

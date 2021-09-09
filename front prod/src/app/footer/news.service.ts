import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewsJapan } from "src/app/footer/news";

@Injectable({
    providedIn: "root"
})

export class NewsService {
    constructor(private http: HttpClient) { }

    public getNews(): Observable<NewsJapan> {
        return this.http.get<NewsJapan>("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nippon.com%2Ffr%2Ffeed%2F");
    }
}

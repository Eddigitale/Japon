import { Component, OnInit } from "@angular/core";
import { Item, NewsJapan } from "src/app/footer/news";
import { NewsService } from "src/app/footer/news.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})

export class FooterComponent implements OnInit {

  public getNews: Item[];
  constructor(private newsService: NewsService) { }

  public ngOnInit() {
    this.newsService.getNews().subscribe((getNews: NewsJapan) => {
      console.log(getNews);
      this.getNews = getNews.items;
    });
  }
}

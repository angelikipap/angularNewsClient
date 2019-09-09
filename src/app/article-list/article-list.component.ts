import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service/article.service';
import { Article } from '../../../model/article';
import {ArticleWrapper} from '../../../model/article-wrapper';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  // articles: Article[];
  articleWrapper: ArticleWrapper;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.findAll().subscribe((data: ArticleWrapper) => {
      this.articleWrapper = data;
    });
    /*this.articleService.findAll().subscribe(data => {
      this.articleWrapper = data;
    });*/
  }

}

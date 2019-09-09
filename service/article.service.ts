import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Article} from '../model/article';
import {Observable} from 'rxjs';
import {ArticleWrapper} from '../model/article-wrapper';

@Injectable()
export class ArticleService {

  private articlesUrl: string;

  constructor(private http: HttpClient) {

        this.articlesUrl = 'https://newsapi.org/v2/top-headlines';

  }

  public findAll(): Observable<ArticleWrapper> {

    // https://newsapi.org/v2/top-headlines?country=us&apiKey=456aa1ac87944b35b0583b79ce691be0


    console.log('CALLING');

    const params: HttpParams = new HttpParams();
    // TODO: replace apiKEy with a static
    params.set('apiKey', '456aa1ac87944b35b0583b79ce691be0');
    params.set('country', 'us');


    // Http request-
    // return this.http.get<Article[]>(this.articlesUrl, {
    //  params});
    this.articlesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=456aa1ac87944b35b0583b79ce691be0';
    // return this.http.get<Article[]>(this.articlesUrl);
    return this.http.get<ArticleWrapper>(this.articlesUrl);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Emoji } from 'src/app/models/emoji';
import { EmojisDataService } from 'src/app/services/emojis-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  public emojis: Emoji[] = [];

  private activateRouteParamsSubscription: Subscription = new Subscription();

  constructor(
    private activateRoute: ActivatedRoute,
    private emojisDataService: EmojisDataService,
  ) {}

  ngOnInit(): void {
    this.activateRouteParamsSubscription = this.activateRoute.params.subscribe(
      params => {
        this.getEmojis(params.category);
      },
    );
  }

  ngOnDestroy(): void {
    this.activateRouteParamsSubscription.unsubscribe();
  }

  getEmojis(category: string): void {
    switch (category) {
      case 'favorite':
        this.emojisDataService
          .getFavoriteEmojis()
          .pipe(take(1))
          .subscribe(emojis => {
            this.emojis = emojis;
          });
        break;
      case 'removed':
        this.emojisDataService
          .getRemovedEmojis()
          .pipe(take(1))
          .subscribe(emojis => {
            this.emojis = emojis;
          });
        break;

      default:
        this.emojisDataService
          .getAllEmojis()
          .pipe(take(1))
          .subscribe(emojis => {
            this.emojis = emojis;
          });
        break;
    }
  }

  setToFavorites(emoji: Emoji): void {
    this.emojis = this.emojis.filter(
      currentEmoji => currentEmoji.name !== emoji.name,
    );
    this.emojisDataService
      .setToFavoritesEmojis(emoji)
      .pipe(take(1))
      .subscribe();
  }
}

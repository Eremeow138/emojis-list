import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Emoji } from 'src/app/models/emoji';
import { EmojisDataService } from 'src/app/services/emojis-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  public emojis$: Observable<Emoji[]> = of([]);

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
    if (category === 'favorite') {
      this.emojis$ = this.emojisDataService.getFavoriteEmojis();
    } else {
      this.emojis$ = this.emojisDataService.getAllEmojis();
    }
  }
}

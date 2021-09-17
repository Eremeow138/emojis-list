import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';

const appRoutes: Routes = [
  { path: 'table/:category', component: TableComponent },
  { path: '', redirectTo: 'table/all', pathMatch: 'full' },
  { path: '**', redirectTo: 'table/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

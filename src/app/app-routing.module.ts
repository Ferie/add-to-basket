import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListingPageComponent,
        data: {},
        resolve: {}
    },
    {
        path: 'details/:name',
        pathMatch: 'full',
        component: DetailsPageComponent,
        data: {},
        resolve: {}
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

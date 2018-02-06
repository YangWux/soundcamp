/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueCardComponent } from './venue-card/venue-card.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HeaderComponent } from './header/header.component';

/* Routes (move to separate file?) */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchPageComponent,
    children: [
      { path: ':id', component: SearchListComponent }
    ]
  },
  { path: 'event/:id', component: EventDetailComponent },
    { path: '', component: HomeComponent },
  { path: 'venue-list', component:  VenueListComponent  },
  { path: 'venue-detail/:id', component: VenueDetailComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    VenueListComponent,
    VenueCardComponent,
    VenueDetailComponent,
    UserComponent,
    UserProfileComponent
    EventListComponent,
    EventCardComponent,
    EventDetailComponent,
    SearchListComponent,
    SearchFormComponent,
    SearchPageComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

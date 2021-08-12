/*
First, AppRoutingModule imports RouterModule and Routes so the app 
can have routing functionality. The next import, HeroesComponent, 
will give the Router somewhere to go once you configure the routes.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/*
To navigate to the dashboard, the router needs an appropriate route.
Import the DashboardComponent in the AppRoutingModule.
*/
import { DashboardComponent } from './dashboard/dashboard.component';

/*
A typical Angular Route has two properties:

path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route.

This tells the router to match that URL to path: 'heroes' and display the HeroesComponent 
when the URL is something like localhost:4200/heroes.
*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },

  // Add a route to the AppRoutingModule.routes array that matches a path to the DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },

  /*
  When the app starts, the browser's address bar points to the web site's root. That doesn't match 
  any existing route so the router doesn't navigate anywhere. 
  The space below the <router-outlet> is blank.

  To make the app navigate to the dashboard automatically, add the following route to the 
  AppRoutingModule.Routes array.

  This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.

  After the browser refreshes, the router loads the DashboardComponent and the browser address bar 
  shows the /dashboard URL.
  */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'detail/:id', component: HeroDetailComponent },
];

/*
The @NgModule metadata initializes the router and starts it listening for browser 
location changes.

The following line adds the RouterModule to the AppRoutingModule imports array and 
configures it with the routes in one step by calling RouterModule.forRoot():

The method is called forRoot() because you configure the router at the application's 
root level. The forRoot() method supplies the service providers and directives needed 
for routing, and performs the initial navigation based on the current browser URL.

Next, AppRoutingModule exports RouterModule so it will be available throughout the app.
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
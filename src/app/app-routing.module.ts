import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { ServicesModule } from './components/services/services.module';
import { BlogModule } from './components/blog/blog.module';
import { CasesModule } from './components/cases/cases.module';
import { ContactModule } from './components/contact/contact.module';
import { AppointmentModule } from './components/appointment/appointment.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => HomeModule
  },
  {
    path: 'about',
    title: 'About Us',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => AboutModule
  },
  {
    path: 'services',
    title: "Services We're Offer",
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => ServicesModule
  },
  {
    path: 'blog',
    title: 'Our Blog',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => BlogModule
  },
  {
    path: 'cases',
    title: 'Our Cases',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule )
    loadChildren: () => CasesModule
  },
  {
    path: 'contact',
    title: 'Contact Us',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => ContactModule
  },
  {
    path: 'appointment',
    title: 'Booking Appointment',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    loadChildren: () => AppointmentModule
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

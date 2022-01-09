import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',  loadChildren: () => import('./shared/components/home/home.module').then(
      module => module.HomeModule
    )
  },
  {
    path: 'about',  loadChildren: () => import('./shared/components/about/about.module').then(
      module => module.AboutModule
    )
  },
  {
    path: 'courses',  loadChildren: () => import('./shared/components/courses/courses.module').then(
      module => module.CoursesModule
    )
  },
  {
    path: 'gallery',  loadChildren: () => import('./shared/components/gallery/gallery.module').then(
      module => module.GalleryModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', scrollPositionRestoration: 'top', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { About } from './about/about';
import { Specializations } from './specializations/specializations';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { Gallery } from './gallery/gallery';
import { Article } from './article/article';


export const routes: Routes = [
       { path: 'about', component: About},
  { path: 'specializations', component: Specializations},
  { path: 'education', component: Education },
  { path: 'experience', component: Experience},
  { path: 'gallery', component: Gallery},
  { path: 'article', component: Article},
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];

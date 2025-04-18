import { Routes } from '@angular/router';
import { P9Component } from './p9/p9.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',
        redirectTo:"home",
        pathMatch:"full"
    },
    {path:"home",component:P9Component,title:"protofolio-home",},
    {path:"about",component:AboutComponent,title:"about-page",},
    {path:"projects",component:ProjectsComponent,title:"projects-page", },
    
      { 
        path: '**', 
        component: NotfoundComponent 
        
      }
];


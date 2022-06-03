import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [

  {
    path:'',component:HomeComponentComponent
  },

  {
    path:'signup',component:SignupComponent
  },
  
  {
    path:'lifestyle',component:LifestyleComponent
  },

  {
    path:'article',component:ArticleComponent
  },

  {
    path:'technology',component:TechnologyComponent
  },

  {
    path:'about', component:AboutComponent
  },

  {
    path:'contactus' , component:ContactusComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'login', component:HomeComponentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

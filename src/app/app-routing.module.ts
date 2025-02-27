import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{path:"",redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'Home'},
{path:'about',component:AboutComponent,title:'About'},
{path:'skills',component:SkillsComponent,title:'Skills'},
{path:'projects',component:ProjectsComponent,title:'Projects'},
{path:'contact',component:ContactComponent,title:'Contact'},
{path:'**',component:NotFoundComponent,title:"404"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

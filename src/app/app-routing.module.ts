import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WallComponent} from './components/wall/wall.component';
import { EventCreationComponent} from './components/event-creation/event-creation.component';
import { ProfilComponent} from './components/profil/profil.component';
import { LogoutComponent} from './components/logout/logout.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: WallComponent },
    { path: 'event', component: EventCreationComponent},
    { path: 'profil', component: ProfilComponent},
    { path: 'logout', component: LogoutComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


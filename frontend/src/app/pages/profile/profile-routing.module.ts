import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../../core/auth/auth-guard.service';
import { UserInfoResolve } from '../../core/auth/user-info-resolve.service';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		canActivate: [AuthGuard],
		resolve: {
			user: UserInfoResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [UserInfoResolve]
})

export class ProfileRoutingModule {
}

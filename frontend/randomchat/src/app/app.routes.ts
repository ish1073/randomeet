import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IcebreakerComponent } from './icebreaker/icebreaker.component';
import { EventComponent } from './event/event.component';
import { ProfileCustomizationComponent } from './profile-customization/profile-customization.component';
import { FeaturesComponent } from './features/features.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'adminlogin',component:AdminLoginComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'vfeedback',component:ViewFeedbackComponent},
    {path:'vregister',component:ViewRegisterComponent},
    {path:'pchat',component:PrivateChatComponent},
    {path: 'pchat/:receiver', component: PrivateChatComponent },
    {path:'profiles',component:ProfileComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'ib',component:IcebreakerComponent},
    {path:'tl',component:GameComponent},
    {path:'event',component:EventComponent},
    {path:'profile',component:ProfileCustomizationComponent},
    {path:'feat',component:FeaturesComponent},
    {path:'vprofile',component:ViewProfilesComponent},
    {path:'anotify',component:AdminNotificationsComponent},
    {path:'vnotify',component:UserNotificationsComponent}
];

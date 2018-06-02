import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoreModuleExampleComponent } from './core-module-example/core-module-example.component';

const routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'core-module-example',
    component: CoreModuleExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

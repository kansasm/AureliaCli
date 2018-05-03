import { inject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@inject
export class App {
  public year: number;
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router){
    this.router = router;
    config.title = 'CSC 435 Note App';
    config.map([
      { route: ['', 'defaultPage'], name: '', moduleId: PLATFORM.moduleName('./defaultPage') },
]);
    config.mapUnknownRoutes('./home');
  }

  public navigateHome(){
    this.router.navigateToRoute('home');
  }
}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const appRoutes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termin', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( appRoutes, { useHash: true } ) ],
    exports: [
        RouterModule
    ],
    providers: [],
})

export class AppRoutingModule { }



import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { MenuComponent } from './components/menu/menu';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-menu />
      <app-about />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    main { display: block; }
  `]
})
export class App {}

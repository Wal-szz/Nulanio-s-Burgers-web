import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <header [class.scrolled]="scrolled()" role="banner">
      <div class="container nav-inner">
        <a href="#inicio" class="logo" aria-label="Nulanio's Burgers - Ir al inicio">
          <img ngSrc="logo.jpg" width="60" height="60" alt="Nulanio's Burgers logo" priority />
          <span class="logo-text">Nulanio's<br><strong>Burgers</strong></span>
        </a>

        <button
          class="hamburger"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="main-nav"
          aria-label="Abrir menú de navegación"
          (click)="toggleMenu()"
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="main-nav" [class.open]="menuOpen()" aria-label="Navegación principal">
          <ul role="list">
            @for (item of navItems; track item.href) {
              <li>
                <a [href]="item.href" (click)="closeMenu()">{{ item.label }}</a>
              </li>
            }
          </ul>
          <a href="https://wa.me/56927049053?text=Hola%21+Quisiera+hacer+un+pedido+%F0%9F%8D%94" target="_blank" rel="noopener noreferrer" class="nav-cta" (click)="closeMenu()">
            Hacer pedido
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      transition: background 0.3s, box-shadow 0.3s;
      padding: 1rem 0;

      &.scrolled {
        background: rgba(17, 17, 17, 0.97);
        box-shadow: 0 2px 20px rgba(0,0,0,0.5);
      }
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;

      img {
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .logo-text {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      line-height: 1.2;
      color: var(--color-text);

      strong {
        color: var(--color-gold);
        font-size: 1.3rem;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 2rem;

      a {
        font-family: var(--font-heading);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-text);
        transition: color 0.2s;
        padding: 0.25rem 0;
        border-bottom: 2px solid transparent;

        &:hover {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        &:focus-visible {
          outline: 2px solid var(--color-gold);
          outline-offset: 4px;
          border-radius: 2px;
        }
      }
    }

    .nav-cta {
      font-family: var(--font-heading);
      font-size: 0.95rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: var(--color-red);
      color: #fff;
      padding: 0.6rem 1.4rem;
      border-radius: 4px;
      white-space: nowrap;
      transition: background 0.2s;

      &:hover { background: var(--color-red-hover); }
      &:focus-visible { outline: 3px solid var(--color-gold); outline-offset: 3px; }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 0.5rem;
      background: none;
      border: none;
      cursor: pointer;

      span {
        display: block;
        width: 26px;
        height: 2px;
        background: var(--color-text);
        border-radius: 2px;
      }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }

      nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(17,17,17,0.98);
        padding: 1.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        border-top: 1px solid #333;

        &.open { display: flex; }

        ul {
          flex-direction: column;
          gap: 1.25rem;
        }
      }
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  scrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#menu', label: 'Menú' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  private onScroll = () => {
    this.scrolled.set(window.scrollY > 50);
  };

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}

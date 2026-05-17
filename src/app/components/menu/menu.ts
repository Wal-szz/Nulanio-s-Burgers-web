import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

type Tab = 'carta' | 'burgers';

@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section id="menu" class="menu-section" aria-labelledby="menu-title">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" id="menu-title">Nuestro Menú</h2>
          <p class="section-subtitle">Todas nuestras hamburguesas incluyen papas fritas</p>
        </div>

        <div class="tabs" role="tablist" aria-label="Secciones del menú">
          <button
            role="tab"
            [attr.aria-selected]="activeTab() === 'carta'"
            [class.active]="activeTab() === 'carta'"
            (click)="setTab('carta')"
            id="tab-carta"
            aria-controls="panel-carta"
          >
            Carta completa
          </button>
          <button
            role="tab"
            [attr.aria-selected]="activeTab() === 'burgers'"
            [class.active]="activeTab() === 'burgers'"
            (click)="setTab('burgers')"
            id="tab-burgers"
            aria-controls="panel-burgers"
          >
            Nuestras burgers
          </button>
        </div>

        @if (activeTab() === 'carta') {
          <div id="panel-carta" role="tabpanel" aria-labelledby="tab-carta" class="tab-panel">
            <div class="carta-grid">
              <img ngSrc="menu2.jpg" width="600" height="900" alt="Carta de hamburguesas Nulanio's Burgers" />
              <img ngSrc="menu.jpg" width="600" height="900" alt="Agregados extra Nulanio's Burgers" />
            </div>
          </div>
        }

        @if (activeTab() === 'burgers') {
          <div id="panel-burgers" role="tabpanel" aria-labelledby="tab-burgers" class="tab-panel">
            <div class="menu-grid" role="list">
              @for (item of items; track item.name) {
                <article class="menu-card" role="listitem">
                  <div class="card-image">
                    <img [ngSrc]="item.image" width="400" height="300" [alt]="item.name" />
                    @if (item.tag) {
                      <span class="card-tag">{{ item.tag }}</span>
                    }
                  </div>
                  <div class="card-body">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                    <div class="card-footer">
                      <span class="price">{{ item.price }}</span>
                      <a
                        href="https://wa.me/56927049053"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="order-btn"
                        [attr.aria-label]="'Pedir ' + item.name + ' por WhatsApp'"
                      >
                        Pedir
                      </a>
                    </div>
                  </div>
                </article>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .menu-section {
      background: var(--color-bg-alt);
    }

    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    /* Tabs */
    .tabs {
      display: flex;
      justify-content: center;
      gap: 0;
      margin-bottom: 3rem;
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      overflow: hidden;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;

      button {
        flex: 1;
        padding: 0.9rem 1.5rem;
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--color-text-muted);
        background: var(--color-bg);
        border: none;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;

        &:first-child {
          border-right: 1px solid #2a2a2a;
        }

        &.active {
          background: var(--color-red);
          color: #fff;
        }

        &:hover:not(.active) {
          background: #222;
          color: var(--color-text);
        }

        &:focus-visible {
          outline: 3px solid var(--color-gold);
          outline-offset: -3px;
        }
      }
    }

    .tab-panel {
      animation: fadeIn 0.25s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Carta */
    .carta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        border: 1px solid #2a2a2a;
      }
    }

    /* Burgers grid */
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .menu-card {
      background: var(--color-bg);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #2a2a2a;
      transition: transform 0.25s, box-shadow 0.25s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.4);
      }
    }

    .card-image {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        transition: transform 0.4s;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .card-tag {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      background: var(--color-red);
      color: #fff;
      font-family: var(--font-heading);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.25rem 0.6rem;
      border-radius: 3px;
    }

    .card-body {
      padding: 1.25rem;

      h3 {
        font-size: 1.3rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0.4rem;
        color: var(--color-text);
      }

      p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        margin-bottom: 1rem;
        line-height: 1.5;
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      font-family: var(--font-heading);
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--color-gold);
    }

    .order-btn {
      font-family: var(--font-heading);
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: var(--color-red);
      color: #fff;
      padding: 0.45rem 1.1rem;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover { background: var(--color-red-hover); }
      &:focus-visible { outline: 3px solid var(--color-gold); outline-offset: 3px; }
    }
  `]
})
export class MenuComponent {
  activeTab = signal<Tab>('carta');

  setTab(tab: Tab) {
    this.activeTab.set(tab);
  }

  items: MenuItem[] = [
    {
      name: 'Cheddar House',
      description: 'Doble carne (250g total), triple queso cheddar y salsa coleslaw. Incluye papas fritas.',
      price: '$7.400',
      image: 'hamburguesa1.jpg',
      tag: 'N°1'
    },
    {
      name: 'Heinz Nulanios',
      description: '125g de carne, queso cheddar, cebolla morada, pepinillos, mostaza Heinz y ketchup. Incluye papas fritas.',
      price: '$6.500',
      image: 'hamburguesa4.jpg',
    },
    {
      name: 'Bacon Sweet',
      description: '125g de carne, doble queso cheddar, cebolla caramelizada y tocino crujiente. Incluye papas fritas.',
      price: '$7.500',
      image: 'hamburguesa2.jpg',
      tag: 'Popular'
    },
    {
      name: 'Nulanios Big',
      description: 'Doble carne (250g total), doble queso cheddar, pepinillos, cama de lechuga y salsa especial. Incluye papas fritas.',
      price: '$8.000',
      image: 'hamburguesa3.jpg',
      tag: 'Grande'
    },
  ];
}

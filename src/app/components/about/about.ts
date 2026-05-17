import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section id="nosotros" aria-labelledby="about-title">
      <div class="container about-grid">
        <div class="about-image">
          <img ngSrc="hamburguesa2.jpg" width="600" height="500" alt="Hamburguesa artesanal de Nulanio's Burgers" />
          <div class="about-badge" aria-hidden="true">
            <span class="badge-num">100%</span>
            <span class="badge-text">Hecho en casa</span>
          </div>
        </div>

        <div class="about-text">
          <h2 class="section-title" id="about-title">Nuestra Historia</h2>
          <p class="section-subtitle">Sabor real, hecho con amor</p>

          <p>Somos Nulanio's Burgers, un emprendimiento familiar ubicados en <strong>Los Espinos, Coihueco</strong>. Nuestra misión es simple: llevar el verdadero sabor de una burger hecha en casa directamente a tu puerta.</p>

          <p>Cada burger es preparada con ingredientes frescos y seleccionados. No hay congelados, no hay atajos — solo sabor auténtico.</p>

          <ul class="about-features" role="list">
            @for (f of features; track f.label) {
              <li>
                <span class="feature-icon" aria-hidden="true">{{ f.icon }}</span>
                <div>
                  <strong>{{ f.label }}</strong>
                  <p>{{ f.desc }}</p>
                </div>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .about-image {
      position: relative;

      img {
        width: 100%;
        height: 480px;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .about-badge {
      position: absolute;
      bottom: -1.5rem;
      right: -1.5rem;
      background: var(--color-red);
      color: #fff;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 4px solid var(--color-bg);
      text-align: center;
    }

    .badge-num {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1;
    }

    .badge-text {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.2;
    }

    .about-text {
      p {
        color: var(--color-text-muted);
        margin-bottom: 1rem;
        line-height: 1.8;

        strong { color: var(--color-text); }
      }
    }

    .about-features {
      list-style: none;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      li {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
      }

      strong {
        display: block;
        font-family: var(--font-heading);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text);
        margin-bottom: 0.2rem;
      }

      p {
        font-size: 0.875rem;
        margin: 0;
      }
    }

    .feature-icon {
      font-size: 1.6rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .about-badge {
        right: 1rem;
        bottom: 1rem;
      }
    }
  `]
})
export class AboutComponent {
  features = [
    { icon: '🥩', label: 'Ingredientes frescos', desc: 'Seleccionamos los mejores ingredientes locales para cada burger.' },
    { icon: '🏠', label: 'Hecho en casa', desc: 'Recetas propias, sin congelados ni conservantes.' },
    { icon: '🛵', label: 'Delivery', desc: 'Llevamos el sabor hasta tu puerta en el sector Los Espinos, Coihueco.' },
  ];
}

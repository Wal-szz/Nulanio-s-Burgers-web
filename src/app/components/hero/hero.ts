import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="hero" aria-label="Sección principal">
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="hero-tagline">Camino a Coihueco · Delivery</p>
        <h1>El verdadero sabor de<br><span>una burger hecha en casa</span></h1>
        <p class="hero-desc">Ingredientes frescos, sabor auténtico y el amor de siempre en cada mordida.</p>
        <div class="hero-actions">
          <a href="https://wa.me/56927049053" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.374l-.36-.213-3.728.888.936-3.618-.234-.372A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Hacer pedido por WhatsApp
          </a>
          <a href="#menu" class="btn-outline">Ver menú</a>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: url('/hamburguesa1.jpg') center center / cover no-repeat;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(0,0,0,0.85) 0%,
        rgba(17,17,17,0.6) 60%,
        rgba(192,57,43,0.2) 100%
      );
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 700px;
    }

    .hero-tagline {
      font-family: var(--font-heading);
      font-size: 0.9rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: 1rem;
    }

    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      color: #fff;

      span {
        color: var(--color-gold);
      }
    }

    .hero-desc {
      font-size: 1.15rem;
      color: rgba(240,236,228,0.85);
      margin-bottom: 2.5rem;
      max-width: 480px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .btn-outline {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      border: 2px solid rgba(255,255,255,0.5);
      padding: 0.8rem 2rem;
      border-radius: 4px;
      transition: border-color 0.2s, color 0.2s;

      &:hover {
        border-color: var(--color-gold);
        color: var(--color-gold);
      }

      &:focus-visible {
        outline: 3px solid var(--color-gold);
        outline-offset: 3px;
      }
    }

    .hero-scroll {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        display: block;
        width: 2px;
        height: 50px;
        background: linear-gradient(to bottom, var(--color-gold), transparent);
        animation: scrollLine 1.8s ease-in-out infinite;
      }
    }

    @keyframes scrollLine {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }

    @media (max-width: 600px) {
      .hero-actions { flex-direction: column; align-items: flex-start; }
    }
  `]
})
export class HeroComponent {}

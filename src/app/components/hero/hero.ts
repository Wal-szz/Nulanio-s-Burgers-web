import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="hero" aria-label="Sección principal">
      <div class="hero-bg" aria-hidden="true">
        <div class="grid-lines"></div>
      </div>

      <div class="container hero-inner">
        <div class="hero-eyebrow" aria-hidden="true">
          <span class="line"></span>
          <span class="dot"></span>
          <span class="line"></span>
        </div>

        <p class="hero-tagline">Los Espinos, Coihueco &nbsp;·&nbsp; Delivery</p>

        <h1>
          <span class="h1-top">Sabor</span>
          <span class="h1-mid">Real</span>
          <span class="h1-bot">Hecho en casa</span>
        </h1>

        <p class="hero-desc">
          Burgers artesanales con ingredientes frescos.<br>
          Sin congelados. Sin atajos. Solo sabor.
        </p>

        <div class="hero-actions">
          <a href="https://wa.me/56927049053?text=%C2%A1Hola+Nulanio%27S+Burgers%21+%F0%9F%8D%94+Vi+el+men%C3%BA+en+su+web+y+me+gustar%C3%ADa+hacer+un+pedido." target="_blank" rel="noopener noreferrer" class="btn-primary">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.374l-.36-.213-3.728.888.936-3.618-.234-.372A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Hacer pedido
          </a>
          <a href="#menu" class="btn-outline">Ver menú</a>
        </div>

        <div class="hero-stats" aria-label="Datos del negocio">
          <div class="stat">
            <span class="stat-num">4</span>
            <span class="stat-label">Burgers</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Casero</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat">
            <span class="stat-num">🛵</span>
            <span class="stat-label">Delivery</span>
          </div>
        </div>
      </div>

      <div class="hero-scroll" aria-hidden="true"><span></span></div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 50% 40%, rgba(192,57,43,0.12) 0%, transparent 70%),
        linear-gradient(160deg, #0d0d0d 0%, #111 50%, #0a0a0a 100%);
    }

    .grid-lines {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
    }

    .hero-inner {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 6rem;
      gap: 0;
    }

    .hero-eyebrow {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;

      .line {
        display: block;
        width: 60px;
        height: 1px;
        background: linear-gradient(to right, transparent, var(--color-gold));

        &:last-child {
          background: linear-gradient(to left, transparent, var(--color-gold));
        }
      }

      .dot {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--color-gold);
      }
    }

    .hero-tagline {
      font-family: var(--font-heading);
      font-size: 0.8rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
    }

    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;
      margin-bottom: 2rem;
    }

    .h1-top {
      font-family: var(--font-heading);
      font-size: clamp(4rem, 12vw, 9rem);
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      letter-spacing: -0.02em;
    }

    .h1-mid {
      font-family: var(--font-heading);
      font-size: clamp(5rem, 18vw, 14rem);
      font-weight: 700;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 2px var(--color-gold);
      letter-spacing: -0.03em;
      line-height: 0.9;
    }

    .h1-bot {
      font-family: var(--font-heading);
      font-size: clamp(1rem, 3vw, 2rem);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      color: var(--color-text-muted);
      margin-top: 0.5rem;
    }

    .hero-desc {
      font-size: 1.05rem;
      color: rgba(240,236,228,0.6);
      margin-bottom: 2.5rem;
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 4rem;
    }

    .btn-outline {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0.8rem 2rem;
      border-radius: 4px;
      transition: border-color 0.2s, color 0.2s;

      &:hover { border-color: var(--color-gold); color: var(--color-gold); }
      &:focus-visible { outline: 3px solid var(--color-gold); outline-offset: 3px; }
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 2rem;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }

    .stat-num {
      font-family: var(--font-heading);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--color-gold);
    }

    .stat-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-text-muted);
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255,255,255,0.1);
    }

    .hero-scroll {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);

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
      .hero-stats { gap: 1.5rem; }
      .h1-mid { -webkit-text-stroke-width: 1.5px; }
    }
  `]
})
export class HeroComponent {}

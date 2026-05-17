import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contacto" class="contact-section" aria-labelledby="contact-title">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" id="contact-title">Contacto</h2>
          <p class="section-subtitle">¿Listo para pedir? Escríbenos y te atendemos al tiro</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <span class="info-icon" aria-hidden="true">📍</span>
              <div>
                <h3>Ubicación</h3>
                <p>Camino a Coihueco<br>Delivery disponible</p>
              </div>
            </div>

            <div class="info-card">
              <span class="info-icon" aria-hidden="true">🕐</span>
              <div>
                <h3>Horario</h3>
                <p>Consulta disponibilidad<br>por WhatsApp</p>
              </div>
            </div>

            <div class="info-card">
              <span class="info-icon" aria-hidden="true">📱</span>
              <div>
                <h3>Instagram</h3>
                <p>
                  <a
                    href="https://www.instagram.com/nulaniosburgers"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    &#64;nulaniosburgers
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="contact-cta">
            <div class="cta-card">
              <p class="cta-emoji" aria-hidden="true">🍔</p>
              <h3>¿Tienes hambre?</h3>
              <p>Haz tu pedido directo por WhatsApp. Rápido, fácil y sin complicaciones.</p>
              <a
                href="https://wa.me/56927049053"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary whatsapp-btn"
                aria-label="Hacer pedido por WhatsApp"
              >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.374l-.36-.213-3.728.888.936-3.618-.234-.372A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: var(--color-bg-alt);
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-card {
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;
      background: var(--color-bg);
      padding: 1.25rem;
      border-radius: 8px;
      border: 1px solid #2a2a2a;
    }

    .info-icon {
      font-size: 1.8rem;
      flex-shrink: 0;
    }

    .info-card h3 {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold);
      margin-bottom: 0.3rem;
    }

    .info-card p {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .social-link {
      color: var(--color-gold);
      transition: opacity 0.2s;

      &:hover { opacity: 0.8; }
      &:focus-visible { outline: 2px solid var(--color-gold); border-radius: 2px; }
    }

    .cta-card {
      background: var(--color-bg);
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      padding: 2.5rem;
      text-align: center;

      h3 {
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-bottom: 0.75rem;
        color: var(--color-text);
      }

      p {
        color: var(--color-text-muted);
        margin-bottom: 2rem;
        line-height: 1.7;
      }
    }

    .cta-emoji {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .whatsapp-btn {
      font-size: 1rem;
      padding: 1rem 2rem;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}

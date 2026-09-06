# Proposta — Marketplace de hospedagens

Oferta comercial para agência parceira (custo de produção com margem de revenda).

- PDF: `proposta-marketplace-hospedagens.pdf`
- Fonte: `proposta-marketplace-hospedagens.html`

Para regenerar o PDF:

```bash
timeout 25s google-chrome --headless=new --disable-gpu --no-sandbox \
  --user-data-dir=/tmp/chrome-pdf \
  --no-pdf-header-footer \
  --print-to-pdf=docs/propostas/proposta-marketplace-hospedagens.pdf \
  --virtual-time-budget=5000 \
  "file://$PWD/docs/propostas/proposta-marketplace-hospedagens.html"
```

# Proposta — Marketplace de hospedagens

- PDF: `proposta-marketplace-hospedagens.pdf`
- Fonte: `proposta-marketplace-hospedagens.html`
- Protótipo (wireframes do hóspede): `prototipo-telas-hospede.pdf`

Criação: R$ 7.000,00 · 64 telas · 500 imóveis.
Mensal: manutenção R$ 300 (até 200 GB) + VPS R$ 70 + banco R$ 90.

Para regenerar o PDF:

```bash
timeout 25s google-chrome --headless=new --disable-gpu --no-sandbox \
  --user-data-dir=/tmp/chrome-pdf \
  --no-pdf-header-footer \
  --print-to-pdf=docs/propostas/proposta-marketplace-hospedagens.pdf \
  --virtual-time-budget=5000 \
  "file://$PWD/docs/propostas/proposta-marketplace-hospedagens.html"
```

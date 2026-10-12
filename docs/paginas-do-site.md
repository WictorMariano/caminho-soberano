# Páginas do Caminho Soberano

Inventário atualizado em 7 de outubro de 2026. Domínio: https://caminhosoberano.com.br

## Páginas com conteúdo próprio

| Página | Rota |
| --- | --- |
| Home | `/` |
| Workshop PNE, 31 de outubro (ingressos, Google Tag Manager) | `/workshop-pne` |
| Eventos | `/eventos` |
| Programa Nova Economia, evento de agosto (Google Tag Manager) | `/eventos/programa-nova-economia` |
| Dominando o Bitcoin na Prática | `/eventos/dominando-o-bitcoin` |
| Fila de espera / próximos encontros | `/lista-de-espera` |
| Conteúdo | `/conteudo` |
| Comunidade | `/comunidade` |
| Sobre | `/sobre` |
| Perguntas frequentes | `/faq` |
| Política de Privacidade | `/politica-de-privacidade` |
| Termos de Uso | `/termos-de-uso` |

## Endereços antigos com redirecionamento

Os dois endereços abaixo redirecionam para `/eventos/dominando-o-bitcoin`:

- `/eventos/caminho-soberano-dominando-o-bitcoin`
- `/eventos/caminho-soberano-dominando-o-bitcoin-na-pratica`

A página Projeto Nova Economia foi removida em 7 de outubro de 2026. O endereço `/projeto-nova-economia` redireciona para `/workshop-pne`.

## Arquivos técnicos

- `/sitemap.xml`: mapa do site para buscadores
- `/robots.txt`: regras para robôs de busca

Total: **12 páginas com conteúdo próprio e 3 rotas de redirecionamento**.

## Fila de espera: estado atual

A página está na etapa visual, conforme solicitado. Os campos podem ser preenchidos e as preferências selecionadas, mas o envio está desativado. Não há armazenamento em navegador, banco de dados nem envio a automações. A página comunica que os cadastros abrem em breve.

Campos preparados: nome, e-mail, WhatsApp, cidade e estado de residência, temas de interesse, cidade e estado desejados para futuros encontros, interesse no evento de 31 de outubro e consentimento de contato.

O encontro destacado é em **31 de outubro de 2026, São Paulo, SP**. Local específico e programação ainda serão divulgados. Os dados compartilhados entre a home, a listagem de eventos e a página de captura ficam em `lib/waitlist.ts`.

Para ativar a captura futuramente: conectar o formulário a um destino real de leads, validar os dados no servidor, implementar estados de envio/erro/confirmação e atualizar os avisos de disponibilidade e a pergunta frequente correspondente. Só confirmar o cadastro depois que o destino aceitar os dados.

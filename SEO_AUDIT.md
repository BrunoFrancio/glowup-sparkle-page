# Relatório técnico de SEO, desempenho e acessibilidade

## Visão geral
Aplicação construída com React + Vite (SPA) e estilo com Tailwind/shadcn. Navegação principal funciona via anchors internos (#) dentro de um único documento. O bundle depende de execução de JavaScript para montar todo o conteúdo na página inicial.

## Rastreamento e indexação
- **Positivo:** `public/robots.txt` libera o rastreamento para todos os agentes, sem bloqueios específicos. 【F:public/robots.txt†L1-L12】
- **Risco:** Não há `sitemap.xml` para orientar descoberta de URLs. Mesmo sendo one-page, um sitemap e referência em `robots.txt` ajudariam a rastreabilidade e futuras rotas.
- **Risco:** O app é SPA puro (`BrowserRouter`) e toda a página é renderizada via JavaScript. Motores que renderizam mais lentamente podem demorar a indexar, e faltam rotas HTML estáticas/prerender. 【F:src/main.tsx†L1-L6】【F:src/App.tsx†L6-L30】
- **Risco:** Links principais usam âncoras (`href="#..."`) e alguns apontam para `#` vazio (CTA secundária do hero, links de rodapé), gerando experiências sem destino e desperdício de PageRank interno. 【F:src/components/Hero.tsx†L77-L104】【F:src/components/Footer.tsx†L8-L34】

**Recomendações práticas**
- Gerar um `sitemap.xml` com URLs absolutas e referenciá-lo em `robots.txt`.
- Considerar SSR/SSG ou prerender (ex.: Vite SSR, Astro, SSG do React Router) para entregar HTML inicial indexável sem JS.
- Substituir links `href="#"` por destinos válidos ou removê-los até existirem páginas; manter âncoras descritivas e funcionais.

## Renderização e conteúdo
- **Positivo:** Conteúdo textual principal (hero, seções de benefícios) está presente no markup React e não depende de chamadas assíncronas.
- **Risco:** Sem prerenderização, todo o HTML chega vazio com `<div id="root">`, exigindo hidratação JS completa, o que pode prejudicar LCP e indexação de bots com recursos limitados. 【F:index.html†L1-L30】

**Recomendações práticas**
- Habilitar geração estática do HTML inicial ou usar `vite-plugin-ssr`/`@remix-run/router` com pré-render para conteúdo crítico.
- Para uma landing estática, exportar HTML estático pós-build ou usar `npm run build && npm run preview` + captura estática.

## Metadados
- **Positivo:** `index.html` define `lang="pt-BR"`, charset UTF-8, viewport responsivo, título e meta description bem alinhados com a proposta. Também inclui Open Graph e Twitter Card básicos. 【F:index.html†L1-L25】
- **Risco:** Ausência de `<link rel="canonical">` pode causar problemas de canonicalização caso a página seja servida em múltiplos domínios/URLs com e sem barra. 【F:index.html†L1-L30】
- **Risco:** Metadados são estáticos para todo o app; se novas rotas forem criadas, faltará título/description exclusivos por página. 【F:src/App.tsx†L6-L30】

**Recomendações práticas**
- Incluir `<link rel="canonical" href="https://www.exemplo.com/">` ajustando para o domínio real.
- Adotar uma solução de gestão de head (ex.: `react-helmet-async`) para títulos/descrições por rota.
- Garantir uso de OG tags com imagem otimizada (WebP/AVIF) hospedada no domínio próprio e com dimensões recomendadas (1200x630).

## Sitemap e canonicalização
- **Risco:** Não há sitemap XML nem referência no `robots.txt`. 【F:public/robots.txt†L1-L12】
- **Risco:** Nenhum mecanismo de canonicalização (link canonical ou redirecionamentos 301) no código fornecido.

**Recomendações práticas**
- Criar `public/sitemap.xml` com URLs absolutas e atualizá-lo no deploy; adicionar linha `Sitemap: https://www.exemplo.com/sitemap.xml` ao `robots.txt`.
- Configurar redirecionamentos server-side para forçar HTTPS e remover duplicatas com/sem "www".

## Links internos e âncoras
- **Positivo:** Navegação principal usa textos âncora descritivos ("Funcionalidades", "Como funciona", etc.). 【F:src/components/Navbar.tsx†L17-L61】
- **Risco:** Alguns links não levam a conteúdo (rodapé "Termos", "Privacidade", botão "Ver demo"). Isso gera desperdício de crawling budget e potencial frustração do usuário. 【F:src/components/Hero.tsx†L98-L104】【F:src/components/Footer.tsx†L16-L33】

**Recomendações práticas**
- Remover ou desabilitar links sem destino até as páginas existirem.
- Quando cria-las, usar URLs limpas e âncoras específicas; evitar genéricos como "clique aqui".

## Imagens e mídia
- **Positivo:** Uso predominante de ícones vetoriais (lucide) reduz peso de mídia.
- **Risco:** Não há imagens hero otimizadas; quando forem adicionadas, é preciso garantir `alt` descritivo, formatos modernos (WebP/AVIF) e `loading="lazy"` para itens não LCP.

**Recomendações práticas**
- Se adicionar imagens, otimizar tamanho, servir versões responsivas (`srcset/sizes`) e marcar a imagem principal com dimensões fixas para reduzir CLS.

## Headings e HTML semântico
- **Positivo:** Há um único `<h1>` no hero e hierarquia de `<h2>` por seção, com uso coerente de `<section>` e landmarks (skip link e `main`). 【F:src/pages/Index.tsx†L12-L24】【F:src/components/Hero.tsx†L38-L77】【F:src/components/Features.tsx†L13-L44】
- **Risco:** Cabeçalhos são todos estilizados via Tailwind sem `aria-level` adicional; aceitável, mas manter a ordem sem saltos é essencial ao criar novas seções.

**Recomendações práticas**
- Continuar garantindo apenas um `<h1>` por página e estrutura sequencial de `<h2>`, `<h3>` conforme necessário.

## Estruturas de dados (Schema.org)
- **Risco:** Não há marcação estruturada (JSON-LD/LD+JSON). Seria útil para destacar FAQs, organização e eventuais avaliações. 【F:index.html†L1-L30】

**Recomendações práticas**
- Adicionar JSON-LD de `Organization`/`LocalBusiness` com dados de contato e área de atuação.
- Marcar o bloco de FAQ com `FAQPage` (lista de Q&A) para eligibility em rich results.
- Incluir `BreadcrumbList` se forem criadas páginas adicionais.

## Performance e Core Web Vitals
- **Positivo:** Projeto Vite gera bundles otimizados e faz preconnect para Google Fonts. `display=swap` está ativado, reduzindo risco de FOIT. 【F:index.html†L15-L23】
- **Risco:** Como SPA, todo conteúdo depende do bundle JS; LCP e INP podem sofrer em conexões lentas. 【F:src/main.tsx†L1-L6】
- **Risco:** Não há diretrizes de lazy-loading porque não existem imagens; futuros assets podem aumentar LCP se não otimizados.

**Recomendações práticas**
- Avaliar split de código e `prefetch`/`preload` de recursos críticos (fonte LCP, CSS crítico) se o bundle crescer.
- Considerar `font-display: optional/swap` (já via Google Fonts) e hospedar fontes localmente para menor latência.
- Medir com Lighthouse e WebPageTest; monitorar INP (evitar handlers pesados) e CLS (definir alturas prévias para novos componentes de mídia).

## Mobile-friendly
- **Positivo:** Meta viewport está presente; layout responsivo com classes `md:`/`lg:` e controles touch-friendly. 【F:index.html†L3-L6】【F:src/components/Navbar.tsx†L10-L49】【F:src/components/Hero.tsx†L33-L97】
- **Risco:** Botão de menu mobile não fecha ao navegar por âncoras até o topo? (já fecha via `onClick`, ok). O CTA "Ver demo" sem destino pode ser especialmente frustrante em mobile.

**Recomendações práticas**
- Garantir que qualquer modal/menu adicione focus-trap se for introduzido; medir TBT/INP em dispositivos móveis reais.

## Conteúdo e URLs
- **Positivo:** URLs atuais são âncoras descritivas; texto é original, claro e focado em benefícios.
- **Risco:** Ausência de rotas reais significa não há estrutura de URL hierárquica. Quando criada, manter URLs amigáveis (kebab-case), estáveis e sem parâmetros desnecessários.

**Recomendações finais priorizadas**
1. Implementar prerender/SSR ou export estático para entregar HTML indexável e melhorar LCP.
2. Criar `sitemap.xml` e linká-lo em `robots.txt`; adicionar `<link rel="canonical">` no `<head>`.
3. Corrigir/remover links `#` sem destino e preparar páginas de Termos/Privacidade.
4. Adicionar JSON-LD para FAQ e Organization/LocalBusiness.
5. Planejar otimização de mídia (WebP/lazy) para futuras imagens e medir CWV em produção.

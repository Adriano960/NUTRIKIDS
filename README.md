# NutriKids — Biblioteca Visual em Código

Esta versão transforma a especificação enviada em uma implementação web autônoma, sem emojis e sem bibliotecas externas.

## Arquivos
- `index.html` — estrutura completa da página.
- `styles.css` — sistema visual, responsividade, estados e componentes.
- `app.js` — biblioteca SVG, dados dos alimentos/categorias, abas, atividades, progresso e "Monte sua Refeição".

## Como usar
1. Coloque os três arquivos na mesma pasta.
2. Abra `index.html` no navegador.
3. Para integrar ao NutriKids existente, mova a biblioteca `iconShapes` e os dados de `app.js` para os componentes do seu projeto.

## Estrutura recomendada
```text
/nutrikids-assets
  /icons
    /navigation
    /actions
    /health
    /education
    /accessibility
    /progress
  /foods
    /fruits
    /vegetables
    /cereals
    /proteins
    /dairy
  /hydration
  /activities
  /plants
  /characters
  /achievements
  /scenes
```

Os SVGs estão embutidos no JavaScript para facilitar prototipação e integração. Em produção, eles podem ser exportados para arquivos SVG individuais seguindo nomes como `fruit-apple.svg`, `vegetable-carrot.svg`, `activity-cycling.svg` e `plant-stage-03.svg`.

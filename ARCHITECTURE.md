# Arquitetura Técnica & Decisões de Design — Signove Web Portal

Este documento descreve a arquitetura de software, padrões adotados e as decisões de engenharia implementadas no portal da **Signove Tecnologia S.A.**.

---

## 🏗️ Visão Geral da Arquitetura

O projeto adota uma arquitetura em camadas moderna com separação limpa de responsabilidades:

```text
[ Cliente Web / Navegador ]
            │
            ▼
┌────────────────────────────────────────────────────────┐
│             Camada de Apresentação (React 19)          │
│  - App.jsx (Orquestração de estados globais)           │
│  - translations.js (Camada I18n PT/EN)                 │
│  - Tailwind CSS 3.4 (Estilização atômica & Glassmorphism)│
│  - Lucide Icons (Ícones vetoriais leves)               │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│             Componentes Modulares Independentes        │
│  - Hero.jsx (Full-bleed Ken Burns Asymmetric layout)   │
│  - BedTelemetryBar.jsx (Live bed surveillance stream)  │
│  - LiveSimulator.jsx (SVG animated ECG waveform)       │
│  - SigHealthPlatform.jsx (Architecture pipeline)       │
│  - Governance.jsx (Interactive DSAR/DPO modals)        │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│             Servidor Node.js (Express)                 │
│  - Servimento de arquivos estáticos pré-compilados     │
│  - SPA Fallback routing (HTML5 History API)            │
│  - Endpoints REST de Healthcheck e Contato             │
└────────────────────────────────────────────────────────┘
```

---

## 🎨 Decisões de Interface & Design Biomédico

1. **Fuga dos Botões e Layouts Retangulares Padrão**:
   - Uso de componentes em cápsula orgânica (*bio-pills*) com gradientes de alta conversão (ciano, esmeralda e azul profundo).
   - Efeito *glassmorphism* com bordas translúcidas e saturação reforçada para conferir profundidade e sofisticação de clínica moderna.

2. **Hero Assimétrico com Efeito Ken Burns**:
   - Imagem de monitor multiparamétrico de cabeceira com respiração dimensional em loop infinito via keyframe `kenburns` acelerado por GPU (`transform-gpu`).
   - Gradiente horizontal assimétrico: transparente à esquerda (para evidenciar os equipamentos hospitalares e o paciente) e escuro à direita (para contraste com a tipografia).

3. **Simulador de Telemetria IoMT com Curva ECG Vetorial**:
   - Implementado com SVG puro animado via classes CSS (`stroke-dashoffset` e feixe de varredura).
   - Não depende de bibliotecas pesadas de gráficos como Chart.js ou Three.js, garantindo carregamento instantâneo e 60 FPS contínuos.

4. **I18n Desacoplado**:
   - Dicionário de tradução unificado em `translations.js` com suporte a `pt` e `en`.
   - Alternância em tempo de execução sem requisições de rede adicionais e persistido via `localStorage`.

5. **Tratamento Dinâmico de Dark/Light Mode**:
   - Classe `.dark` injetada no elemento raiz `<html>`.
   - O logotipo institucional possui duas variações oficiais em `/public/`: uma para o tema claro e outra tratada para alto contraste no tema escuro, garantindo legibilidade perfeita.

---

## 📦 Scripts Disponíveis

- `npm run dev`: Inicializa o servidor de desenvolvimento Vite na porta 5173 com Hot Module Replacement.
- `npm run build`: Compila e minifica a aplicação para o diretório `/dist`.
- `npm start`: Inicia o servidor Node.js Express de produção na porta 3000.
- `npm run preview`: Visualiza localmente o build gerado pelo Vite.

---

## 🛡️ Segurança & Boas Práticas

- **Sem exposição de segredos**: O código não embute tokens ou credenciais de produção.
- **Sanitização de entradas**: Os modais de DSAR, DPO e Contato contam com validação de formato de e-mail e tratamento de payload.
- **Conformidade de Acessibilidade**: Contraste elevado de cores testado em conformidade com as diretrizes WCAG 2.1 AA.

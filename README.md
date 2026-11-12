# Signove Tecnologia S.A. — Portal Institucional & Plataforma SigHealth

<div align="center">
  <img src="public/logo-signove.png" alt="Signove Tecnologia S.A." width="220" />
  <p><strong>Engenharia de Software Médico de Alta Complexidade • IoMT • Telemetria Hospitalar • Plataforma SigHealth</strong></p>
  <p><em>Campina Grande, Paraíba, Brasil</em></p>

  <p>
    <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node Express" />
    <img src="https://img.shields.io/badge/ISO-13485%20%7C%2082304-00529B?style=flat-square" alt="ISO Compliance" />
    <img src="https://img.shields.io/badge/USPTO-Patent%20Registered-10B981?style=flat-square" alt="USPTO Patent" />
    <img src="https://img.shields.io/badge/Continua-Certified%20PAN%2FWAN-06B6D4?style=flat-square" alt="Continua Certified" />
  </p>
</div>

---

## 📋 Sobre o Projeto

Este repositório contém a **remodelagem completa da presença digital da Signove Tecnologia S.A.**, concebida sob uma perspectiva sênior de engenharia de software web, marketing médico de alta conversão e design biomédico não-convencional.

A **Signove** é referência brasileira e internacional em pesquisa e desenvolvimento de software para a área de saúde conectada, atuando fortemente em **IoMT** (*Internet of Medical Things*), monitoramento remoto de pacientes (**RPM**), telemetria crítica de leitos hospitalares de UTI e arquiteturas abertas e interoperáveis (IEEE 11073, HL7 e FHIR).

---

## 🌟 Principais Recursos & Inovações

### 1. Hero Dinâmico com Central de Telemetria de Leitos (Não-Estático)
- Background imersivo retratando um ambiente real de UTI conectada com monitor multiparamétrico de cabeceira em primeiro plano exibindo curvas vitais (ECG, SpO2, NIBP) e feixes de dados de telemetria.
- Movimento contínuo e orgânico em efeito **Ken Burns** (`animate-ken-burns`), conferindo dinamismo sutil sem poluição visual.
- Layout assimétrico editorial: ênfase visual à esquerda (equipamentos e leito iluminados) e degradê suave para a direita com contraste perfeito para a tipografia e botões de chamada para ação.

### 2. Painel "Conectado em Tempo Real" de Leitos Hospitalares (`#telemetry-strip`)
- Barra panorâmica posicionada imediatamente abaixo do Hero com monitoramento ao vivo de leitos:
  - **Leito 01 · UTI Coronariana**: Monitor multiparamétrico com vigilância 24/7 (FC 74 bpm, SpO2 99%, PA 120/78 mmHg, latência 8ms);
  - **Leito 04 · Pós-Operatório Cardíaco**: Sensor contínuo Bluetooth LE em telemetria ambulatorial (estudo clínico Hospital João XXIII / UEPB);
  - **Leito 12 · Semi-Intensiva & Infusão**: Hub multiparamétrico integrado com biometria estável;
  - Status em tempo real do Gateway IoMT (TLS 1.3 / AES-256 GCM) e relógio dinâmico.

### 3. Simulador Interativo de Telemetria IoMT (*SigHealth Live Console*)
- Console interativo com **traçado de eletrocardiograma (ECG) animado em tempo real sobre grade milimetrada**.
- Alternância entre perfis clínicos reais (*Pós-Operatório Cardíaco*, *Home Care Crônico* e *Central Hospitalar Lifeview*).
- Mostradores digitais com variação natural de biometria e botão interativo *"Simular Leitura de Dispositivo"* com feedback comemorativo de partículas.

### 4. Barra de Navegação Flutuante com Efeito Glassmorphism Dinâmico
- No topo, a barra se mantém leve e integrada;
- Ao rolar a página, transiciona automaticamente para o estilo **Frosted Glass** (`backdrop-blur-2xl`), com borda translúcida, reflexo especular de vidro e sombra biomédica sutil.

### 5. Seletor Bilíngue Completo (Português / Inglês)
- Alternância instantânea de idioma (**PT-BR** / **EN**) cobrindo todo o portal sem necessidade de recarregar a página, com persistência automática no `localStorage`.

### 6. Suporte Nativo a Tema Claro e Escuro (Light / Dark Mode)
- **Tema Escuro**: Paleta Obsidian Navy com acentos ciano neon e esmeralda hospitalar;
- **Tema Claro**: Estética limpa, diurna e cirúrgica com legibilidade impecável;
- Tratamento automático do logotipo oficial para máximo contraste em ambos os temas (`logo-signove.png` e `logo-signove-dark.png`).

### 7. Aviso Regulatório de Homologação
- Faixa superior identificando o ambiente de validação conceitual e testes (`⚠️ HOMOLOGAÇÃO & PROTÓTIPO`), acompanhada de marca d'água no canto inferior da tela.

### 8. Rigor Regulatório & Casos Reais Comprovados
- Seções dedicadas com selos oficiais de certificações:
  - **ISO 13485** (Gestão da Qualidade de Dispositivos Médicos);
  - **ISO 82304-1 & ISO 62304** (Segurança e Ciclo de Vida de Software de Saúde);
  - **ISO 14971** (Gerenciamento de Riscos em Dispositivos Médicos);
  - **Patente USPTO** (*United States Patent and Trademark Office*);
  - **Certificação Continua PAN/WAN** para SigHealth (PCHA / IEEE 11073);
  - Membro do **Bluetooth Medical Devices Group (BT-SIG)** e **OpenConnectivity Foundation**.
- Casos clínicos documentados: **Hospital João XXIII (Campina Grande - PB)**, **Hospital São Francisco de Paula (Pelotas - RS)** e apresentação de central remota no **CBMI**.

### 9. Governança de Dados, LGPD & Ética
- Modais interativos com formulários funcionais para:
  - **DSAR**: Requisição de Acesso e Tratamento aos Dados do Titular;
  - **DPO**: Contato direto com o Encarregado de Proteção de Dados;
  - **Canal de Denúncias**: Ouvidoria ética confidencial e independente.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **React 19** | Biblioteca declarativa de componentes e reatividade de alta performance |
| **Vite** | Build tool moderno com Hot Module Replacement (HMR) ultrarrápido |
| **Tailwind CSS 3.4** | Framework utilitário configurado para design responsivo, dark mode e glassmorphism |
| **Node.js & Express** | Servidor de aplicação com suporte a SPA fallback e rotas de API |
| **Lucide Icons** | Biblioteca vetorial de ícones modernos e biomédicos |
| **Canvas-Confetti** | Micro-interações e feedback visual de telemetria |
| **Google Fonts** | Tipografia institucional *Plus Jakarta Sans* |

---

## 📁 Estrutura do Repositório

```text
signove/
├── public/
│   ├── favicon.svg                   # Favicon vetorial com o símbolo oficial
│   ├── logo-signove.png              # Logo oficial Signove (Tema Claro)
│   ├── logo-signove-dark.png         # Logo oficial Signove de alto contraste (Tema Escuro)
│   └── images/                       # Fotografias e diagramas em alta resolução
│       ├── clinical-command-center.jpg
│       ├── hospital-icu-telemetry.jpg
│       ├── hospital-joao-xxiii.jpg
│       ├── hospital-sao-francisco-paula.jpg
│       ├── lifeview-screen.jpg
│       ├── sighealth-architecture.png
│       ├── signove-headquarters.jpg
│       └── logo-*.png (ISO, USPTO, Continua, Bluetooth, OCF, etc.)
├── src/
│   ├── components/
│   │   ├── BedTelemetryBar.jsx       # Painel de monitoração de leitos em tempo real
│   │   ├── Certifications.jsx        # Selos ISO, patente USPTO e alianças de P&D
│   │   ├── ContactSection.jsx        # Formulário corporativo e endereço da sede em Campina Grande
│   │   ├── Footer.jsx                # Rodapé institucional independente com links legais
│   │   ├── Governance.jsx            # Direitos do titular LGPD (DSAR, DPO, Whistleblowing)
│   │   ├── Hero.jsx                  # Hero assimétrico com background animado de UTI
│   │   ├── HomologationBanner.jsx    # Aviso de ambiente de homologação e watermark
│   │   ├── LiveSimulator.jsx         # Simulador interativo com onda de ECG ao vivo
│   │   ├── Logo.jsx                  # Componente adaptativo de logotipo
│   │   ├── Navbar.jsx                # Barra de navegação flutuante com efeito glass
│   │   ├── Publications.jsx          # Casos clínicos em hospitais parceiros
│   │   ├── SigHealthPlatform.jsx     # Diagrama e pilares da plataforma SigHealth
│   │   └── Solutions.jsx             # Ecossistema de soluções de software médico
│   ├── translations.js               # Dicionário bilíngue centralizado (PT-BR / EN)
│   ├── App.jsx                       # Orquestrador raiz da aplicação e estados globais
│   ├── index.css                     # Estilos base, utilitários glass e animações
│   └── main.jsx                      # Ponto de entrada React 19
├── server.js                         # Servidor Node.js Express para produção e API mock
├── tailwind.config.js                # Configuração do Tailwind (cores, dark mode, animações)
├── package.json                      # Dependências e scripts npm
└── README.md                         # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** v18 ou superior instalado ([https://nodejs.org](https://nodejs.org))
- **npm** v9 ou superior

### 1. Clonar o repositório
```bash
git clone https://github.com/endrigow/signove.git
cd signove
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o ambiente de desenvolvimento (Vite Hot-Reload)
```bash
npm run dev
```
> Acesse: `http://localhost:5173`

### 4. Gerar a build otimizada de produção
```bash
npm run build
```

### 5. Iniciar o servidor Node.js de produção
```bash
npm start
```
> Acesse: `http://localhost:3000`

---

## 🔒 Governança & Conformidade de Dados

O projeto segue estritamente as diretrizes da **LGPD (Lei nº 13.709/2018)** e padrões internacionais de proteção a dados sensíveis de saúde (**HIPAA / GDPR**), dispondo de canais estruturados para exercício de direitos do titular e ouvidoria ética.

---

## 🏢 Sobre a Signove Tecnologia S.A.

- **Sede de P&D**: Rua Dom Pedro II, 675, Prata — Campina Grande, PB, Brasil (CEP: 58400-565)
- **E-mails de Contato**: `contato@signove.com` • `comercial@signove.com`
- **Telefone**: +55 (83) 3065-2000

---

<div align="center">
  <sub>© 2009 - 2026 Signove Tecnologia S.A. Todos os direitos reservados.</sub>
</div>

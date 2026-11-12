export const translations = {
  pt: {
    nav: {
      platform: "Plataforma SigHealth",
      solutions: "Soluções",
      clinical: "Ambiente Clínico",
      certifications: "Certificações & Patentes",
      cases: "Casos Reais",
      governance: "Privacidade & LGPD",
      contact: "Fale Conosco",
      demoButton: "Solicitar Demonstração",
      tagline: "Engenharia Médica & IoMT"
    },
    hero: {
      badge: "Pioneira em IoMT e Saúde Conectada",
      titleStart: "A inteligência que conecta ",
      titleHighlight: "sinais vitais à nuvem",
      titleEnd: " em tempo real.",
      subtitle: "A Signove desenvolve software médico de alta precisão para monitoramento remoto de pacientes (RPM), IoMT e telemetria hospitalar integrada, com certificações internacionais e patente registrada no USPTO.",
      ctaPrimary: "Explorar Tecnologia SigHealth",
      ctaSecondary: "Ver Demonstração Interativa",
      stats: [
        { value: "+15 Anos", label: "de P&D em Software Médico" },
        { value: "ISO 13485", label: "Certificação de Qualidade Médica" },
        { value: "USPTO", label: "Patente Registrada nos EUA" },
        { value: "Continua™", label: "Padrão Global PAN/WAN" }
      ]
    },
    liveSimulator: {
      badge: "Simulador Interativo de Telemetria IoMT",
      title: "Experimente a Plataforma SigHealth em Ação",
      description: "Veja como a Signove recebe, processa e sincroniza dados biométricos em tempo real de dispositivos médicos certificados.",
      patientProfiles: [
        {
          id: "cardio",
          name: "Pós-Operatório Cardíaco",
          hospital: "Hospital João XXIII / UEPB",
          device: "Monitor ECG Bluetooth LE (Continua Certified)",
          bpm: "72",
          spo2: "98%",
          bp: "120/80",
          temp: "36.5 ºC",
          status: "Estável & Monitorado",
          statusColor: "emerald",
          description: "Monitoramento contínuo ambulatorial prevenindo reinternações após intervenção cirúrgica de alta complexidade."
        },
        {
          id: "chronic",
          name: "Home Care - Hipertensão & Diabetes",
          hospital: "Telemonitoramento Domiciliar",
          device: "Glicosímetro + Esfigmomanômetro BLE",
          bpm: "78",
          spo2: "97%",
          bp: "128/84",
          temp: "36.7 ºC",
          status: "Em Sincronização Automática",
          statusColor: "cyan",
          description: "Captura passiva sem intervenção manual do paciente; dados enviados diretamente à equipe multiprofissional."
        },
        {
          id: "icu",
          name: "Central Hospitalar Lifeview",
          hospital: "Hospital São Francisco de Paula",
          device: "Hub Multiparamétrico de Leito",
          bpm: "84",
          spo2: "96%",
          bp: "115/75",
          temp: "37.1 ºC",
          status: "Telemetria Hospitalar Ativa",
          statusColor: "brand",
          description: "Integração multiparamétrica direta com prontuário eletrônico e telas médicas de beira de leito."
        }
      ],
      syncLabel: "Sincronização em Nuvem Segura",
      syncedNow: "Último pacote validado há 2s via TLS 1.3",
      buttonSimulate: "Simular Leitura de Dispositivo",
      liveBeat: "Frequência Cardíaca ao Vivo"
    },
    sigHealth: {
      badge: "Flagship Product",
      title: "Plataforma SigHealth",
      subtitle: "Arquitetura aberta, segura e interoperável para a revolução da Internet das Coisas Médicas (IoMT).",
      features: [
        {
          title: "Independente e Automatizada",
          desc: "Receba dados biométricos de Dispositivos Pessoais de Saúde (PHDs) sem exigir configurações complexas do paciente.",
          icon: "Cpu"
        },
        {
          title: "Sincronização Segura em Nuvem",
          desc: "Criptografia ponta a ponta, conformidade estrita com HIPAA, LGPD e trilha de auditoria clínica detalhada.",
          icon: "ShieldCheck"
        },
        {
          title: "Interoperabilidade Global",
          desc: "Alinhada aos padrões IEEE 11073, HL7 e FHIR, permitindo integração fluida com sistemas de prontuário eletrônico (PEP).",
          icon: "Network"
        },
        {
          title: "Alertas Clínicos Inteligentes",
          desc: "Algoritmos configuráveis para triagem antecipada de descompensações clínicas e gatilhos para equipes de atendimento.",
          icon: "Activity"
        }
      ]
    },
    solutions: {
      badge: "Ecossistema de Soluções",
      title: "Engenharia de Software para Cuidados Críticos e Domiciliares",
      subtitle: "Da beira do leito à casa do paciente: tecnologia médica confiável de alto desempenho.",
      items: [
        {
          id: "rpm",
          category: "Monitoramento Remoto",
          name: "SigHealth RPM Suite",
          highlight: "Cuidado contínuo fora do hospital",
          desc: "Plataforma completa para gestão populacional e acompanhamento de pacientes crônicos ou em reabilitação.",
          benefits: ["Redução comprovada em reinternações hospitalares", "Aderência facilitada com Bluetooth Low Energy (BLE)", "Painel clínico web responsivo para médicos e enfermeiros"]
        },
        {
          id: "clinical",
          category: "Ambiente Hospitalar",
          name: "Central Lifeview & Monitores",
          highlight: "Visão 360º dos leitos críticos",
          desc: "Solução de engenharia de software médico de ponta, proporcionando monitoramento centralizado de alta disponibilidade.",
          benefits: ["Acesso remoto e seguro para médicos especialistas", "Suporte a múltiplos protocolos de comunicação médica", "Validado em hospitais universitários e de referência"]
        },
        {
          id: "connectivity",
          category: "Conectividade & IoMT",
          name: "Signove Device Gateway SDK",
          highlight: "Conexão plug-and-play para fabricantes",
          desc: "Bibliotecas certificadas para fabricantes de hardware médico integrarem seus equipamentos a ecossistemas digitais.",
          benefits: ["Certificação Continua Health Alliance PAN/WAN", "Compatível com Android, iOS e Linux Embedded", "Drivers pré-validados para dezenas de dispositivos médicos"]
        }
      ]
    },
    standards: {
      badge: "Rigor Regulatório & Excelência",
      title: "Certificações Internacionais e Inovação Reconhecida",
      subtitle: "Desenvolvimento de software de alta criticidade sob os mais estritos padrões da indústria biomédica global.",
      items: [
        {
          code: "ISO 13485",
          title: "Gestão da Qualidade para Dispositivos Médicos",
          desc: "Garantia de processos sistemáticos voltados à concepção, desenvolvimento e suporte de produtos médicos de padrão mundial."
        },
        {
          code: "ISO 82304-1 & 62304",
          title: "Software de Saúde & Ciclo de Vida",
          desc: "Segurança de software, gestão rigorosa do ciclo de vida e mitigação de vulnerabilidades em sistemas de apoio clínico."
        },
        {
          code: "ISO 14971",
          title: "Gerenciamento de Riscos em Saúde",
          desc: "Análise contínua de risco e benefício clínico incorporada desde a primeira linha de código até o pós-lançamento."
        },
        {
          code: "USPTO Patent",
          title: "Patente Registrada nos EUA",
          desc: "Propriedade intelectual reconhecida pelo United States Patent and Trademark Office para inovação em saúde conectada."
        },
        {
          code: "Continua Certified",
          title: "Certificação Continua PAN/WAN",
          desc: "Interoperabilidade homologada pela Personal Connected Health Alliance (PCHA) para dispositivos médicos pessoais."
        },
        {
          code: "Bluetooth SIG & OCF",
          title: "Membro Ativo em P&D Global",
          desc: "Atuação direta no Bluetooth Medical Devices Working Group e na Open Connectivity Foundation para criação de normas IoT."
        }
      ]
    },
    publications: {
      badge: "Evidência Científica & Casos Reais",
      title: "Impacto Comprovado na Prática Médica",
      subtitle: "Resultados publicados e parcerias com hospitais e instituições de ensino de referência.",
      cards: [
        {
          institution: "Hospital João XXIII & UEPB",
          location: "Campina Grande, PB",
          title: "Telemonitoramento Pós-Cirúrgico Cardíaco",
          desc: "Aplicação da plataforma SigHealth para acompanhamento ambulatorial de pacientes após cirurgia cardiovascular, validando a segurança do desfecho clínico.",
          tag: "Cirurgia Cardíaca"
        },
        {
          institution: "CBMI & Centrais Clínicas",
          location: "Porto Alegre, RS",
          title: "Central de Monitoramento Lifeview Remota",
          desc: "Apresentação de central inovadora de monitoramento multiparamétrico com suporte nativo a telemetria remota segura.",
          tag: "Inovação Hospitalar"
        },
        {
          institution: "Hospital São Francisco de Paula",
          location: "Pelotas, RS",
          title: "Modernização de Leitos e Telemetria",
          desc: "Implantação de infraestrutura conectada para supervisão em tempo real de leitos hospitalares com alta confiabilidade.",
          tag: "Ambiente Crítico"
        }
      ]
    },
    governance: {
      badge: "Privacidade, Ética e Governança",
      title: "Seus Direitos Legais e Segurança de Dados",
      subtitle: "Compromisso incondicional com a proteção de dados sensíveis de saúde, conformidade com a LGPD e canais de atendimento direto.",
      cards: [
        {
          id: "dsar",
          title: "Acesso aos Dados do Titular (DSAR)",
          desc: "Solicite confirmação, acesso, correção, anonimização ou exclusão dos seus dados tratados em conformidade com a LGPD.",
          buttonText: "Abrir Requisição DSAR",
          action: "dsar"
        },
        {
          id: "dpo",
          title: "Encarregado de Dados (DPO)",
          desc: "Canal exclusivo para contato com nosso Encarregado de Proteção de Dados Pessoais para dúvidas regulatórias.",
          buttonText: "Contatar DPO",
          action: "dpo"
        },
        {
          id: "whistle",
          title: "Canal de Denúncias (Whistleblowing)",
          desc: "Espaço confidencial e independente para relatar condutas incompatíveis com as diretrizes éticas da empresa.",
          buttonText: "Registrar Denúncia Anônima",
          action: "whistle"
        }
      ]
    },
    contact: {
      badge: "Transforme sua Operação de Saúde",
      title: "Conecte sua Instituição ao Futuro da Medicina",
      subtitle: "Fale diretamente com os especialistas em software médico da Signove Tecnologia S.A.",
      form: {
        name: "Nome Completo",
        namePlaceholder: "Dr. Marcelo Ramos / Engenheiro Clínico",
        email: "E-mail Corporativo",
        emailPlaceholder: "marcelo@hospital.com.br",
        org: "Instituição / Empresa",
        orgPlaceholder: "Hospital, Operadora ou Fabricante",
        interest: "Área de Interesse",
        interestOptions: [
          "Plataforma SigHealth (RPM e Telemedicina)",
          "Central Lifeview para Leitos Hospitalares",
          "Gateway IoMT / Conectividade para Dispositivos",
          "Consultoria e P&D de Software Regulatório (ISO 13485)",
          "Outro assunto"
        ],
        message: "Como podemos ajudar seu projeto?",
        messagePlaceholder: "Conte-nos sobre seus desafios de conectividade médica ou monitoramento de pacientes...",
        submitButton: "Enviar Solicitação de Contato",
        successMessage: "Mensagem enviada com sucesso! Nossa equipe técnica entrará em contato em breve."
      },
      headquarters: {
        title: "Sede Signove",
        company: "Signove Tecnologia S.A.",
        address: "Rua Dom Pedro II, 675, Prata",
        city: "Campina Grande - PB, Brasil",
        cep: "CEP: 58400-565",
        phone: "+55 (83) 3065-2000"
      }
    },
    footer: {
      rights: "Todos os direitos reservados. Signove Tecnologia S.A.",
      privacyPolicy: "Política de Privacidade",
      termsOfUse: "Termos de Uso",
      cookieSettings: "Preferências de Cookies",
      legalNotice: "A tecnologia SigHealth é desenvolvida sob rigorosos sistemas de gestão da qualidade ISO 13485 e ISO 82304-1."
    }
  },
  en: {
    nav: {
      platform: "SigHealth Platform",
      solutions: "Solutions",
      clinical: "Clinical Environment",
      certifications: "Certifications & Patents",
      cases: "Case Studies",
      governance: "Privacy & Compliance",
      contact: "Contact Us",
      demoButton: "Request a Demo",
      tagline: "Medical Engineering & IoMT"
    },
    hero: {
      badge: "Pioneering IoMT & Connected Health",
      titleStart: "The intelligence connecting ",
      titleHighlight: "vital signs to the cloud",
      titleEnd: " in real time.",
      subtitle: "Signove engineers high-precision medical software for remote patient monitoring (RPM), IoMT, and integrated hospital telemetry, backed by international certifications and a registered USPTO patent.",
      ctaPrimary: "Explore SigHealth Technology",
      ctaSecondary: "View Live Simulation",
      stats: [
        { value: "15+ Years", label: "Medical Software R&D" },
        { value: "ISO 13485", label: "Medical Quality Certification" },
        { value: "USPTO", label: "Registered US Patent" },
        { value: "Continua™", label: "Global PAN/WAN Standard" }
      ]
    },
    liveSimulator: {
      badge: "Interactive IoMT Telemetry Simulator",
      title: "Experience the SigHealth Platform Live",
      description: "See how Signove ingests, processes, and synchronizes real-time biometric telemetry from certified medical devices.",
      patientProfiles: [
        {
          id: "cardio",
          name: "Post-Cardiac Surgery Care",
          hospital: "João XXIII Hospital / UEPB",
          device: "Bluetooth LE ECG Monitor (Continua Certified)",
          bpm: "72",
          spo2: "98%",
          bp: "120/80",
          temp: "36.5 ºC",
          status: "Stable & Continuously Monitored",
          statusColor: "emerald",
          description: "Ambulatory remote monitoring preventing hospital readmissions after high-complexity cardiac procedures."
        },
        {
          id: "chronic",
          name: "Home Care - Hypertension & Diabetes",
          hospital: "Remote Home Monitoring",
          device: "Glucometer + BLE Sphygmomanometer",
          bpm: "78",
          spo2: "97%",
          bp: "128/84",
          temp: "36.7 ºC",
          status: "Automatic Cloud Sync",
          statusColor: "cyan",
          description: "Zero manual friction for the patient; biometric telemetry routed directly to clinical care teams."
        },
        {
          id: "icu",
          name: "Lifeview Clinical Central",
          hospital: "São Francisco de Paula Hospital",
          device: "Multiparameter Bedside Hub",
          bpm: "84",
          spo2: "96%",
          bp: "115/75",
          temp: "37.1 ºC",
          status: "Active Hospital Telemetry",
          statusColor: "brand",
          description: "Direct multiparameter electronic medical record (EMR) integration with bedside monitors."
        }
      ],
      syncLabel: "Secure Cloud Synchronization",
      syncedNow: "Latest verified payload received 2s ago via TLS 1.3",
      buttonSimulate: "Simulate Device Telemetry",
      liveBeat: "Live Heart Rate Signal"
    },
    sigHealth: {
      badge: "Flagship Product",
      title: "SigHealth Platform",
      subtitle: "Open, secure, and interoperable architecture built for the Internet of Medical Things (IoMT) revolution.",
      features: [
        {
          title: "Automated & Frictionless",
          desc: "Ingests vitals from Personal Health Devices (PHDs) with automated pairing and zero complex configuration for the patient.",
          icon: "Cpu"
        },
        {
          title: "Secure Cloud Synchronization",
          desc: "End-to-end encryption with strict HIPAA, GDPR/LGPD compliance and comprehensive clinical audit trails.",
          icon: "ShieldCheck"
        },
        {
          title: "Global Interoperability",
          desc: "Engineered to IEEE 11073, HL7, and FHIR standards, enabling plug-and-play integration with major EHR/EMR systems.",
          icon: "Network"
        },
        {
          title: "Intelligent Clinical Alerts",
          desc: "Configurable algorithms detecting clinical decompensation early and triggering proactive responses.",
          icon: "Activity"
        }
      ]
    },
    solutions: {
      badge: "Solutions Ecosystem",
      title: "Medical Software Engineering for Critical & Home Care",
      subtitle: "From hospital bedside to patient home: proven medical software engineering.",
      items: [
        {
          id: "rpm",
          category: "Remote Monitoring",
          name: "SigHealth RPM Suite",
          highlight: "Continuous care beyond hospital walls",
          desc: "Comprehensive platform for population health management and follow-up of chronic or recovering patients.",
          benefits: ["Proven reduction in hospital readmissions", "Effortless compliance via Bluetooth Low Energy (BLE)", "Intuitive web dashboard for multidisciplinary care teams"]
        },
        {
          id: "clinical",
          category: "Hospital Environment",
          name: "Lifeview Central & Bedside Hub",
          highlight: "360º overview of critical beds",
          desc: "Advanced medical software engineering offering high-availability centralized telemetry.",
          benefits: ["Secure remote access for on-call medical specialists", "Multi-protocol hospital communication support", "Validated in top university and referral hospitals"]
        },
        {
          id: "connectivity",
          category: "Connectivity & IoMT",
          name: "Signove Device Gateway SDK",
          highlight: "Plug-and-play connectivity for device makers",
          desc: "Certified SDK libraries enabling medical hardware manufacturers to connect to digital health ecosystems.",
          benefits: ["Continua Health Alliance PAN/WAN Certified", "Cross-platform support: Android, iOS & Embedded Linux", "Pre-validated drivers for dozens of medical devices"]
        }
      ]
    },
    standards: {
      badge: "Regulatory Rigor & Excellence",
      title: "International Certifications & Recognized Innovation",
      subtitle: "High-complexity medical software engineered under the most stringent biomedical industry standards.",
      items: [
        {
          code: "ISO 13485",
          title: "Medical Devices Quality Management",
          desc: "Systematic quality assurance for design, development, and support of global medical-grade software."
        },
        {
          code: "ISO 82304-1 & 62304",
          title: "Health Software & Lifecycle Processes",
          desc: "Rigorous software lifecycle processes, safety architecture, and risk management for clinical systems."
        },
        {
          code: "ISO 14971",
          title: "Medical Device Risk Management",
          desc: "Continuous clinical risk-benefit evaluation embedded from initial code architecture through post-market surveillance."
        },
        {
          code: "USPTO Patent",
          title: "US Patent & Trademark Office",
          desc: "Registered US patent protecting breakthrough innovations in connected health architectures."
        },
        {
          code: "Continua Certified",
          title: "Continua PAN/WAN Certification",
          desc: "Interoperability certified by Personal Connected Health Alliance (PCHA) for personal health devices."
        },
        {
          code: "Bluetooth SIG & OCF",
          title: "Global R&D Working Group Contributor",
          desc: "Active contributor to the Bluetooth Medical Devices Working Group and Open Connectivity Foundation."
        }
      ]
    },
    publications: {
      badge: "Scientific Evidence & Real Cases",
      title: "Proven Clinical Impact",
      subtitle: "Published research and hospital rollouts demonstrating concrete clinical improvements.",
      cards: [
        {
          institution: "João XXIII Hospital & UEPB",
          location: "Campina Grande, PB, Brazil",
          title: "Post-Cardiac Surgery Telemonitoring",
          desc: "Clinical application of SigHealth for ambulatory monitoring following cardiac surgeries, improving recovery safety.",
          tag: "Cardiac Surgery"
        },
        {
          institution: "CBMI & Clinical Centers",
          location: "Porto Alegre, RS, Brazil",
          title: "Remote Lifeview Central Station",
          desc: "First national multiparameter central monitoring station with native secure remote telemetry presented at CBMI.",
          tag: "Hospital Innovation"
        },
        {
          institution: "São Francisco de Paula Hospital",
          location: "Pelotas, RS, Brazil",
          title: "Bedside Telemetry Infrastructure",
          desc: "Connected infrastructure deployment for continuous real-time supervision across critical patient beds.",
          tag: "Critical Care"
        }
      ]
    },
    governance: {
      badge: "Privacy, Ethics & Compliance",
      title: "Your Legal Rights & Health Data Security",
      subtitle: "Uncompromising commitment to health data privacy, GDPR/LGPD compliance, and transparent channels.",
      cards: [
        {
          id: "dsar",
          title: "Data Subject Access Request (DSAR)",
          desc: "Request confirmation, access, correction, anonymization, or deletion of your personal health data under data protection laws.",
          buttonText: "Open DSAR Request",
          action: "dsar"
        },
        {
          id: "dpo",
          title: "Data Protection Officer (DPO)",
          desc: "Dedicated contact channel to reach our designated Data Protection Officer for regulatory inquiries.",
          buttonText: "Contact DPO",
          action: "dpo"
        },
        {
          id: "whistle",
          title: "Ethics & Whistleblowing Channel",
          desc: "Confidential and independent mechanism to report non-compliant behaviors or integrity concerns.",
          buttonText: "Submit Anonymous Report",
          action: "whistle"
        }
      ]
    },
    contact: {
      badge: "Transform Your Healthcare Operation",
      title: "Connect Your Organization to the Future of Medicine",
      subtitle: "Speak directly with medical software engineers at Signove Tecnologia S.A.",
      form: {
        name: "Full Name",
        namePlaceholder: "Dr. Marcelo Ramos / Clinical Director",
        email: "Work Email",
        emailPlaceholder: "marcelo@healthcare.org",
        org: "Organization / Company",
        orgPlaceholder: "Hospital, Health Plan or Medical Device OEM",
        interest: "Area of Interest",
        interestOptions: [
          "SigHealth Platform (RPM & Telemedicine)",
          "Lifeview Central for Hospital Beds",
          "IoMT Device Gateway / Connectivity SDK",
          "Medical Software Regulatory Consulting (ISO 13485)",
          "Other inquiry"
        ],
        message: "How can we help your initiative?",
        messagePlaceholder: "Tell us about your medical connectivity or patient monitoring requirements...",
        submitButton: "Send Inquiry",
        successMessage: "Message sent successfully! Our engineering team will reach out shortly."
      },
      headquarters: {
        title: "Signove Headquarters",
        company: "Signove Tecnologia S.A.",
        address: "Rua Dom Pedro II, 675, Prata",
        city: "Campina Grande - PB, Brazil",
        cep: "Postal Code: 58400-565",
        phone: "+55 (83) 3065-2000"
      }
    },
    footer: {
      rights: "All rights reserved. Signove Tecnologia S.A.",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      cookieSettings: "Cookie Preferences",
      legalNotice: "SigHealth technology is developed under rigorous ISO 13485 and ISO 82304-1 quality management systems."
    }
  }
};

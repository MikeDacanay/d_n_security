import MultChoiceObj from '../Models/QTypes/MultChoiceObj';
import CheckboxObj from '../Models/QTypes/CheckboxObj';

const CIOQuestionSet = [    
    new MultChoiceObj({
        questionSet:{
            English: 'How often do you apply the Java quarterly security, stability and performance patches?',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                'Quarterly',
                'Annually or semi-annually',
                'Less frequently than annually',
                'We don’t, we go to the next release when we are ready',
                'Never',
                'Not sure',
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new MultChoiceObj({
        questionSet:{
            English: 'How many different Java-powered applications are running in your enterprise or division?',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "Fewer than 10",
                "10 to 29",
                "30 to 100",
                "More than 100",
                "Not sure",
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new MultChoiceObj({
        questionSet:{
            English: 'How do you ensure consistency of Java patches and updates across your Java estate?',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "I have a Java SE Subscription from Oracle",
                "I pay another party for my Java support needs",
                "I manage this in-house",
                "I rely on the open source community for support",
                "Other or not sure",
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new MultChoiceObj({
        questionSet:{
            English: 'How often do you uptake new feature releases of Java? (move from one release to a newer one)',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "I only uptake LTS (long term support) releases",
                "I uptake every release, every six months",
                "I consider each release separately and uptake on a case by case basis",
                "I only uptake new Java versions for new applications",
                "Not sure, or it depends on other factors",
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new MultChoiceObj({
        questionSet:{
            English: 'How do you fund and protect your investment in your Java environment?',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "I have a Java SE Subscription from Oracle",
                "I pay another party for my Java support needs",
                "I manage this in-house",
                "I rely on the open source community for support",
                "Other or not sure",
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new CheckboxObj({
        questionSet:{
            English: 'How do you get support for your Java applications? Check all that apply.',
            German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
            French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
            Russian: "Какого подхода к цифровизации придерживается ваша компания?",
            Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
            Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
            Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
            PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
            SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "We have Oracle Java SE Subscription with support from Oracle Java SE experts, with the most in-depth knowledge of Java and third party applications",
                "We engage another Java support vendor, third party consultant, or partner",
                "The application vendor supports our Java applications",
                "We do not use paid support - we rely on forums, message boards, online search, etc.", 
                "Not sure",
            ],
            German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
];

export default CIOQuestionSet;
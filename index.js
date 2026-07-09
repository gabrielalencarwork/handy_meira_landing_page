// ==========================================================================
// TRANSLATION DICTIONARY (EN, PT, ES)
// ==========================================================================
const translations = {
  en: {
    // Header & Navigation
    top_license: "LICENSED & INSURED | CGC 1533938",
    nav_services: "Services",
    nav_why: "Why Choose Us",
    nav_portfolio: "Portfolio",
    nav_reviews: "Reviews",
    nav_contact: "Contact Us",
    nav_cta: "Get Estimate",

    // Hero Section
    hero_badge_license: "Certified Contractor",
    hero_badge_experience: "10+ Years Experience",
    hero_badge_rating: "5-Star Services",
    hero_title: "Expert Home & Commercial <span>Maintenance</span> in Orlando",
    hero_desc: "You have a problem at home, we have the solution. Premium, licensed, and highly professional maintenance & repair services delivered with local expertise and care.",
    hero_cta_estimate: "Get an Estimate",
    hero_cta_call: "Call 407-529-9037",
    hero_stat_1_num: "100%",
    hero_stat_1_label: "Reliability",
    hero_stat_2_num: "1.2k+",
    hero_stat_2_label: "Projects Done",
    hero_stat_3_num: "10+ Yrs",
    hero_stat_3_label: "Active Work",

    // Hero Card Form
    hero_form_title: "Quick Estimate",
    hero_form_desc: "Describe your project and get an estimate.",
    hero_form_select_service: "Select Service...",
    hero_form_btn: "Request Callback",

    // Services Section
    serv_tag: "What We Do",
    serv_title: "Our Professional Services",
    serv_subtitle: "High-quality maintenance and general contracting solutions tailored for both residential homes and commercial spaces.",
    
    serv_repairs_title: "General Repairs",
    serv_repairs_desc: "Comprehensive home diagnostics, lock replacement, fixture tightening, small fixes, and ongoing maintenance to keep your property running smoothly.",
    serv_repairs_li1: "Cabinet door adjustment",
    serv_repairs_li2: "Hardware & handle replacement",
    serv_repairs_li3: "Door adjustments & locks",

    serv_carpentry_title: "Carpentry & Assembly",
    serv_carpentry_desc: "Professional furniture installation, custom wooden shelves, crown molding, deck repairs, and assembly of complex modern home office configurations.",
    serv_carpentry_li1: "Custom shelving & storage",
    serv_carpentry_li2: "Furniture assembly & setup",
    serv_carpentry_li3: "Deck trim & woodwork repair",

    serv_painting_title: "Painting Services",
    serv_painting_desc: "Transformative interior and exterior painting. Precise wall preparation, ceiling touch-ups, cabinet repainting, trim refinement, and wallpaper removal.",
    serv_painting_li1: "Full room interior painting",
    serv_painting_li2: "Soffit & exterior wall touch-ups",
    serv_painting_li3: "Cabinet painting & finishing",

    serv_elec_title: "Electrical & Plumbing",
    serv_elec_desc: "Safety-first installations. Replacing lights, ceiling fans, smart thermostats, outlets, toilets, faucets, and fixing stubborn system leaks.",
    serv_elec_li1: "Ceiling fan & lighting installation",
    serv_elec_li2: "Outlet, switch & ring doorbell setup",
    serv_elec_li3: "Faucet replacement & leak repairs",

    serv_drywall_title: "Drywall & Tile",
    serv_drywall_desc: "Smooth wall finishes and tile layout design. We patch drywall holes, execute structural texture matching, restore grout lines, and install premium backsplashes.",
    serv_drywall_li1: "Drywall hole & crack restoration",
    serv_drywall_li2: "Kitchen backsplash installations",
    serv_drywall_li3: "Re-grouting & tile replacement",

    serv_remodel_title: "Specialty & Remodeling",
    serv_remodel_desc: "Taking full advantage of our CGC Contractor License for major improvements, bathroom remodeling, custom accent walls, and high-load TV mounting.",
    serv_remodel_li1: "Bathroom & laundry remodeling",
    serv_remodel_li2: "Safe TV mounting & wire hiding",
    serv_remodel_li3: "Accent walls & custom home features",

    serv_wash_title: "Pressure Washing",

    // Why Choose Us Section
    diff_tag: "Why HandyMeira?",
    diff_title: "Our Differentiators Set Us Apart",
    diff_subtitle: "We deliver peace of mind, not just handyman repairs. Discover what makes us Orlando's top choice.",
    diff_badge_title: "General Contractor",
    diff_badge_desc: "State License #CGC1533938",
    diff_1_title: "Certified General Contractor License",
    diff_1_desc: "Unlike general handymen who face heavy legal limits, our CGC license (CGC 1533938) means we can lawfully perform large remodels, structural edits, and commercial tasks.",
    diff_2_title: "Trilingual Client Service",
    diff_2_desc: "Communication is key to getting projects right. We communicate fluently in English, Portuguese, and Spanish, ensuring clarity in requirements and project goals.",
    diff_3_title: "Structured Quality & Organization",
    diff_3_desc: "Backed by AWI Group, we employ rigorous scheduling, transparent contracts, and clear pricing structure. No ghosting, no surprise costs, just stellar work.",

    // Portfolio Section
    port_tag: "Our Projects",
    port_title: "Work Showcase",
    port_subtitle: "A curated collection of recently completed residential and commercial maintenance projects across Greater Orlando.",
    port_filter_all: "All Projects",
    port_filter_remodel: "Remodeling",
    port_filter_repairs: "Repairs & Assembly",
    port_filter_painting: "Painting",
    
    port_tag_remodel: "Remodeling",
    port_tag_painting: "Painting",
    port_tag_repairs: "Repairs & Assembly",

    port_p1_title: "Modern Guest Bathroom Overhaul",
    port_p1_desc: "Complete wall tile layout, modern vanity sink setup, elegant hardware assembly, and drywall finishing in Lake Nona, FL.",
    port_p2_title: "Residential Living Room Painting",
    port_p2_desc: "Full walls, ceiling, baseboards preparation and painting with smooth professional coatings in Windermere, FL.",
    port_p3_title: "Accent Wall & TV Installation",
    port_p3_desc: "Custom vertical wood slats decoration and secure television mounting with wall-internal wiring in Winter Garden, FL.",
    port_p4_title: "Executive Office Furniture Setup",
    port_p4_desc: "Large custom oak desks, heavy cabinet assembly, and dynamic filing organizer integration in Winter Park, FL.",
    port_p5_title: "Drywall Damage Repair",
    port_p5_desc: "Seamless patch restoration matching the surrounding knockdown texture in Kissimmee, FL.",
    port_p6_title: "Exterior Facade Refresh",
    port_p6_desc: "Soffit repair, power washing of siding, and full exterior repaint of a commercial office in Orlando, FL.",

    // Testimonials
    rev_tag: "Testimonials",
    rev_title: "What Our Clients Say",
    rev_subtitle: "Hear directly from home and business owners in Central Florida who trust us with their properties.",
    rev_1_text: `"HandyMeira remodeled our master guest bathroom and the results are stunning. Being a licensed general contractor made a massive difference. Highly professional, clean, and kept us updated in Portuguese throughout the process!"`,
    rev_1_loc: "Lake Nona, FL",
    rev_2_text: `"I needed several ceiling fans installed, custom shelving built, and drywalls patched before moving in. The crew showed up on time, finished ahead of schedule, and pricing was clear. Best handyman service in Orlando!"`,
    rev_2_loc: "Windermere, FL",
    rev_3_text: `"Extremely happy with the painting job done on our commercial retail storefront. They worked around our operating hours to minimize disruption. Great attention to detail and superb project management."`,
    rev_3_loc: "Orlando, FL (Business Owner)",

    // Contact
    c_panel_title: "Get In Touch",
    c_panel_desc: "Have questions or ready to start? Reach out to us. We serve all areas of Greater Orlando, Florida.",
    c_loc_title: "Coverage Area",
    c_loc_desc: "Orlando, Kissimmee, Windermere, Winter Park & surroundings",
    c_phone_title: "Call or Text Us",
    c_mail_title: "Send Email",
    c_hours_title: "Business Hours",
    c_hours_desc: "Mon - Sat: 8:00 AM - 6:00 PM",

    c_form_name_lbl: "Full Name",
    c_form_phone_lbl: "Phone Number",
    c_form_email_lbl: "Email Address",
    c_form_service_lbl: "Required Service",
    c_form_service_other: "Other / Not Listed",
    c_form_urg_lbl: "Project Urgency",
    c_form_urg_select: "Select Urgency...",
    c_form_urg_immediate: "As soon as possible",
    c_form_urg_weeks: "Within a few weeks",
    c_form_urg_flex: "Flexible / Planning phase",
    c_form_desc_lbl: "Describe Your Project",
    c_form_btn: "Submit Estimate Request",

    // Footer
    f_desc: "Professional handyman and certified general contracting services for residential homes and commercial businesses in Central Florida.",
    f_links_title: "Quick Navigation",
    f_links_home: "Home",
    f_serv_title: "Services",
    f_contact_title: "Get In Touch",
    f_awi: "Managed by AWI Group",

    // Form feedback messages
    form_success: "Thank you! Your estimate request has been sent successfully. We will call you back shortly.",
    form_error: "Something went wrong. Please double-check your inputs or call us directly.",

    // Team Section
    team_tag: "Our Experts",
    team_title: "Meet the Team",
    team_subtitle: "Dedicated professionals committed to delivering exceptional craftsmanship and service quality.",
    team_member_1_role: "Owner & Project Director",
    team_member_2_role: "Founder & Lead General Contractor",
    team_member_3_role: "Senior Technical Specialist & Carpenter",
    team_member_4_role: "Customer Relations Coordinator",

    // FAQ Section
    faq_tag: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Find answers to common questions about our services, estimates, licensing, and coverage area.",
    faq_q1: "Do you offer emergency services?",
    faq_a1: "Yes, we offer 24/7 emergency services for critical repair needs such as plumbing leaks, electrical hazards, or secure board-ups. Call us directly for immediate assistance.",
    faq_q2: "How does the estimate process work?",
    faq_a2: "You can request an estimate online or call us. For simple tasks, a phone call or photo may suffice. For larger remodeling projects, we will schedule an on-site visit to inspect, discuss, and provide a detailed quote.",
    faq_q3: "Do you work on weekends?",
    faq_a3: "Our regular business hours are Monday through Saturday, 8:00 AM to 6:00 PM. Weekend work outside these hours can be scheduled in advance for specific projects, and emergency services are available 24/7.",
    faq_q4: "Which areas do you serve?",
    faq_a4: "We serve the Greater Orlando area, including Windermere, Lake Nona, Winter Park, Winter Garden, Kissimmee, and surrounding Central Florida communities.",
    faq_q5: "Is there a cost for the estimate?",
    faq_a5: "No, our initial estimates are completely free. You can request a callback or fill out our online form to receive a quote with no obligation.",
    faq_q6: "Are you licensed for major renovations?",
    faq_a6: "Yes, we are a Certified General Contractor (License CGC 1533938) in the State of Florida. This permits us to perform structural modifications, full home additions, and commercial renovations.",

    // Tooltip and Badge
    c_emergency_badge: "🚨 24/7 Emergency Service Available",
    f_awi_tooltip: "AWI Group provides administrative and operational support to HandyMeira, ensuring high standards of customer service and project management."
  },
  pt: {
    // Header & Navigation
    top_license: "LICENCIADO E SEGURADO | CGC 1533938",
    nav_services: "Serviços",
    nav_why: "Diferenciais",
    nav_portfolio: "Portfólio",
    nav_reviews: "Avaliações",
    nav_contact: "Contato",
    nav_cta: "Orçamento",

    // Hero Section
    hero_badge_license: "Empreiteiro Certificado",
    hero_badge_experience: "10+ Anos de Experiência",
    hero_badge_rating: "Serviços 5 Estrelas",
    hero_title: "Manutenção Residencial e Comercial <span>Especializada</span> em Orlando",
    hero_desc: "Você tem um problema em casa, nós temos a solução. Serviços premium de reparos e manutenção prestados com licença oficial e a máxima dedicação local.",
    hero_cta_estimate: "Solicitar Orçamento",
    hero_cta_call: "Ligar 407-529-9037",
    hero_stat_1_num: "100%",
    hero_stat_1_label: "Confiabilidade",
    hero_stat_2_num: "1.2k+",
    hero_stat_2_label: "Projetos Feitos",
    hero_stat_3_num: "10+ Anos",
    hero_stat_3_label: "Atuação Ativa",

    // Hero Card Form
    hero_form_title: "Orçamento Rápido",
    hero_form_desc: "Descreva seu projeto para simular uma estimativa.",
    hero_form_select_service: "Selecione o Serviço...",
    hero_form_btn: "Pedir Contato",

    // Services Section
    serv_tag: "O Que Fazemos",
    serv_title: "Nossos Serviços Profissionais",
    serv_subtitle: "Manutenção de alto nível e soluções de empreiteiro geral sob medida para residências e pontos comerciais.",
    
    serv_repairs_title: "Reparos Gerais",
    serv_repairs_desc: "Diagnósticos residenciais, troca de fechaduras, ajustes finos, reparo em torneiras e manutenção constante para manter tudo perfeito.",
    serv_repairs_li1: "Ajuste de portas de armários",
    serv_repairs_li2: "Troca de puxadores e ferragens",
    serv_repairs_li3: "Ajuste de portas e trincos",

    serv_carpentry_title: "Carpintaria & Montagem",
    serv_carpentry_desc: "Montagem profissional de móveis, prateleiras de madeira sob medida, molduras, reparo de decks e escritórios completos.",
    serv_carpentry_li1: "Prateleiras e nichos planejados",
    serv_carpentry_li2: "Montagem de móveis sob medida",
    serv_carpentry_li3: "Reparo de decks e peças de madeira",

    serv_painting_title: "Serviços de Pintura",
    serv_painting_desc: "Pintura residencial interna e externa. Preparação cuidadosa de paredes, retoques de tetos, pintura de armários e rodapés.",
    serv_painting_li1: "Pintura de cômodos completos",
    serv_painting_li2: "Pintura de fachadas e beirais",
    serv_painting_li3: "Pintura e laqueamento de armários",

    serv_elec_title: "Elétrica & Hidráulica",
    serv_elec_desc: "Instalações elétricas seguras. Substituição de luminárias, ventiladores de teto, tomadas, torneiras, vasos sanitários e vedação de vazamentos.",
    serv_elec_li1: "Instalação de ventiladores e pendentes",
    serv_elec_li2: "Troca de tomadas, interruptores e campainhas",
    serv_elec_li3: "Troca de torneiras e reparo de vazamentos",

    serv_drywall_title: "Drywall & Azulejos",
    serv_drywall_desc: "Acabamento liso de paredes. Fechamos furos em drywall, texturizamos, restauramos rejuntes de banheiros e instalamos azulejos (backsplashes).",
    serv_drywall_li1: "Reparo de buracos e rachaduras em drywall",
    serv_drywall_li2: "Instalação de azulejos backsplash",
    serv_drywall_li3: "Remoção e restauração de rejunte",

    serv_remodel_title: "Reformas & Instalações",
    serv_remodel_desc: "Utilizamos toda a nossa autoridade de Empreiteiro Geral Licenciado para reformas de banheiros, paredes 3D de destaque e suporte de TVs.",
    serv_remodel_li1: "Reforma de banheiros e lavanderias",
    serv_remodel_li2: "Instalação segura de TVs (fios embutidos)",
    serv_remodel_li3: "Paredes de destaque (lambri/ripado)",

    serv_wash_title: "Lava Jato de Pressão",

    // Why Choose Us Section
    diff_tag: "Por que a HandyMeira?",
    diff_title: "Os Nossos Diferenciais",
    diff_subtitle: "Nós entregamos paz de espírito, não apenas pequenos consertos. Saiba por que somos a escolha favorita de Orlando.",
    diff_badge_title: "Empreiteiro Geral",
    diff_badge_desc: "Licença CGC1533938 da Flórida",
    diff_1_title: "Licença Oficial CGC da Flórida",
    diff_1_desc: "Diferente de faz-tudo comuns que têm fortes limites legais, nossa licença de General Contractor nos autoriza a realizar grandes reformas estruturais e comerciais com total segurança legal.",
    diff_2_title: "Atendimento Trilíngue",
    diff_2_desc: "Entendimento total do seu projeto. Falamos perfeitamente em Inglês, Português e Espanhol, garantindo precisão nos requisitos solicitados por você.",
    diff_3_title: "Qualidade & Organização Corporativa",
    diff_3_desc: "Apoiados pelo Grupo AWI, mantemos um alto padrão de cronograma, contratos claros e transparência total de preços. Sem sumiço, sem surpresas no valor final.",

    // Portfolio Section
    port_tag: "Nossos Projetos",
    port_title: "Demonstração de Trabalhos",
    port_subtitle: "Uma coleção selecionada de manutenções e reformas residenciais e comerciais entregues recentemente na região de Orlando.",
    port_filter_all: "Todos os Projetos",
    port_filter_remodel: "Reformas",
    port_filter_repairs: "Reparos & Montagem",
    port_filter_painting: "Pintura",

    port_tag_remodel: "Reformas",
    port_tag_painting: "Pintura",
    port_tag_repairs: "Reparos & Montagem",

    port_p1_title: "Reforma Completa de Banheiro Social",
    port_p1_desc: "Instalação de revestimentos cerâmicos, pia com bancada moderna, instalação de torneira e acabamento de drywall em Lake Nona, FL.",
    port_p2_title: "Pintura de Sala de Estar Residencial",
    port_p2_desc: "Preparação de superfícies, teto, rodapés e pintura com tinta acrílica premium em Windermere, FL.",
    port_p3_title: "Painel de Destaque & Instalação de TV",
    port_p3_desc: "Montagem de painel ripado de madeira e fixação de TV com embutimento de fiação em Winter Garden, FL.",
    port_p4_title: "Montagem de Mobiliário de Escritório",
    port_p4_desc: "Montagem de escrivaninhas em carvalho, armários suspensos e gaveteiros organizadores em Winter Park, FL.",
    port_p5_title: "Reparo de drywall danificado",
    port_p5_desc: "Conserto de buracos em parede e teto com textura uniforme idêntica ao restante do gesso em Kissimmee, FL.",
    port_p6_title: "Renovação de Fachada Comercial",
    port_p6_desc: "Conserto de beirais de gesso, lavagem sob pressão e pintura externa completa de loja comercial em Orlando, FL.",

    // Testimonials
    rev_tag: "Depoimentos",
    rev_title: "O Que Dizem Nossos Clientes",
    rev_subtitle: "Veja o feedback dos proprietários de imóveis comerciais e residenciais em Orlando que confiam na nossa equipe.",
    rev_1_text: `"A HandyMeira reformou nosso banheiro social e o resultado ficou incrível! O fato de serem empreiteiros licenciados nos deu total segurança. Super profissionais, limpos e nos informaram em português o tempo todo!"`,
    rev_1_loc: "Lake Nona, FL",
    rev_2_text: `"Eu precisei de vários ventiladores instalados, prateleiras sob medida e furos na parede fechados. A equipe chegou no horário, terminou antes do prazo e o preço foi honesto. Excelente prestação de serviços!"`,
    rev_2_loc: "Windermere, FL",
    rev_3_text: `"Muito satisfeito com o trabalho de pintura realizado em nossa loja comercial. Eles trabalharam fora do nosso horário de atendimento para não atrapalhar nossos clientes. Ótimo gerenciamento de projeto."`,
    rev_3_loc: "Orlando, FL (Comerciante)",

    // Contact
    c_panel_title: "Fale Conosco",
    c_panel_desc: "Dúvidas ou pronto para começar? Fale conosco hoje mesmo. Atendemos toda a região metropolitana de Orlando.",
    c_loc_title: "Área de Cobertura",
    c_loc_desc: "Orlando, Kissimmee, Windermere, Winter Park e regiões próximas",
    c_phone_title: "Ligue ou Mande Mensagem",
    c_mail_title: "Enviar E-mail",
    c_hours_title: "Horário de Atendimento",
    c_hours_desc: "Seg - Sáb: 08:00 às 18:00",

    c_form_name_lbl: "Nome Completo",
    c_form_phone_lbl: "Telefone de Contato",
    c_form_email_lbl: "Endereço de E-mail",
    c_form_service_lbl: "Serviço Solicitado",
    c_form_service_other: "Outro / Não Listado",
    c_form_urg_lbl: "Urgência do Projeto",
    c_form_urg_select: "Selecione a Urgência...",
    c_form_urg_immediate: "O mais rápido possível",
    c_form_urg_weeks: "Dentro de algumas semanas",
    c_form_urg_flex: "Flexível / Planejando",
    c_form_desc_lbl: "Descrição do Projeto",
    c_form_btn: "Solicitar Orçamento Grátis",

    // Footer
    f_desc: "Serviços de manutenção e empreiteiro geral certificado para residências e marcas comerciais na Flórida Central.",
    f_links_title: "Navegação Rápida",
    f_links_home: "Início",
    f_serv_title: "Serviços",
    f_contact_title: "Contato",
    f_awi: "Gerenciado por AWI Group",

    // Form feedback messages
    form_success: "Obrigado! Sua solicitação de orçamento foi enviada. Retornaremos o contato em breve.",
    form_error: "Ocorreu um erro no formulário. Verifique os campos e tente novamente, ou ligue para nós.",

    // Team Section
    team_tag: "Nossos Especialistas",
    team_title: "Conheça a Equipe",
    team_subtitle: "Profissionais dedicados comprometidos em entregar serviços de alta qualidade e excelente acabamento.",
    team_member_1_role: "Proprietário e Diretor de Projetos",
    team_member_2_role: "Fundador e Empreiteiro Geral Líder",
    team_member_3_role: "Especialista Técnico Sênior e Carpinteiro",
    team_member_4_role: "Coordenadora de Atendimento ao Cliente",

    // FAQ Section
    faq_tag: "Dúvidas Frequentes",
    faq_title: "Perguntas Frequentes",
    faq_subtitle: "Encontre respostas para as principais dúvidas sobre nossos serviços, orçamentos, licenças e área de atendimento.",
    faq_q1: "Vocês atendem em caso de emergência?",
    faq_a1: "Sim, oferecemos atendimento de emergência 24 horas por dia, 7 dias por semana, para necessidades críticas de reparo, como vazamentos hidráulicos graves, riscos elétricos ou fechamento de vãos. Ligue diretamente para assistência imediata.",
    faq_q2: "Como funciona o processo de orçamento?",
    faq_a2: "Você pode solicitar um orçamento online ou nos ligar. Para tarefas simples, uma ligação ou fotos podem ser suficientes. Para grandes projetos de reforma, agendamos uma visita ao local para avaliar, planejar e fornecer uma cotação detalhada.",
    faq_q3: "Vocês trabalham aos fins de semana?",
    faq_a3: "Nosso horário normal de funcionamento é de segunda a sábado, das 8:00 às 18:00. O trabalho aos finais de semana fora deste horário pode ser agendado com antecedência para projetos específicos, e os serviços de emergência estão disponíveis 24/7.",
    faq_q4: "Quais áreas vocês atendem?",
    faq_a4: "Atendemos com orgulho a área metropolitana de Orlando, incluindo Windermere, Lake Nona, Winter Park, Winter Garden, Kissimmee e comunidades vizinhas no centro da Flórida.",
    faq_q5: "O orçamento tem custo?",
    faq_a5: "Não, nossos orçamentos iniciais são totalmente gratuitos. Você pode solicitar um retorno de chamada ou preencher nosso formulário online para receber uma cotação sem qualquer compromisso.",
    faq_q6: "Vocês são licenciados para grandes reformas?",
    faq_a6: "Sim, somos Empreiteiros Gerais Certificados (Licença CGC 1533938) no Estado da Flórida. Isso nos permite realizar legalmente modificações estruturais, ampliações residenciais e reformas comerciais.",

    // Tooltip and Badge
    c_emergency_badge: "🚨 Atendimento de Emergência 24/7 Disponível",
    f_awi_tooltip: "O AWI Group fornece suporte administrativo e operacional à HandyMeira, garantindo altos padrões de atendimento ao cliente e gestão de projetos."
  },
  es: {
    // Header & Navigation
    top_license: "LICENCIADO Y ASEGURADO | CGC 1533938",
    nav_services: "Servicios",
    nav_why: "Diferenciales",
    nav_portfolio: "Portafolio",
    nav_reviews: "Reseñas",
    nav_contact: "Contacto",
    nav_cta: "Presupuesto",

    // Hero Section
    hero_badge_license: "Contratista Certificado",
    hero_badge_experience: "10+ Años de Experiencia",
    hero_badge_rating: "Servicios 5 Estrellas",
    hero_title: "Mantenimiento del Hogar y Comercial <span>Especializado</span> en Orlando",
    hero_desc: "Usted tiene un problema en casa, nosotros tenemos la solución. Servicios de mantenimiento premium con licencia y la máxima responsabilidad local.",
    hero_cta_estimate: "Obtener Presupuesto",
    hero_cta_call: "Llamar 407-529-9037",
    hero_stat_1_num: "100%",
    hero_stat_1_label: "Confiabilidad",
    hero_stat_2_num: "1.2k+",
    hero_stat_2_label: "Proyectos Hechos",
    hero_stat_3_num: "10+ Años",
    hero_stat_3_label: "Actividad Activa",

    // Hero Card Form
    hero_form_title: "Cotización Rápida",
    hero_form_desc: "Describa su proyecto para cotizar una estimación.",
    hero_form_select_service: "Seleccione Servicio...",
    hero_form_btn: "Solicitar Contacto",

    // Services Section
    serv_tag: "Qué Hacemos",
    serv_title: "Nuestros Servicios Profesionales",
    serv_subtitle: "Soluciones de mantenimiento de alta calidad y contratista general a la medida para hogares y locales comerciales.",
    
    serv_repairs_title: "Reparos Generales",
    serv_repairs_desc: "Diagnósticos residenciales, cambio de cerraduras, ajustes finos, reparación de grifos y mantenimiento continuo para mantener su propiedad perfecta.",
    serv_repairs_li1: "Ajuste de puertas de gabinetes",
    serv_repairs_li2: "Reemplazo de manijas y herrajes",
    serv_repairs_li3: "Ajuste de puertas y cerraduras",

    serv_carpentry_title: "Carpintería y Montaje",
    serv_carpentry_desc: "Instalación profesional de muebles, estanterías de madera a la medida, molduras de corona, reparación de cubiertas y oficinas de hogar.",
    serv_carpentry_li1: "Estanterías y almacenamiento a medida",
    serv_carpentry_li2: "Montaje e instalación de muebles",
    serv_carpentry_li3: "Reparación de cubiertas y carpintería",

    serv_painting_title: "Servicios de Pintura",
    serv_painting_desc: "Pintura residencial interior y exterior. Preparación meticulosa de paredes, retoques de techos, pintura de gabinetes y rodapiés.",
    serv_painting_li1: "Pintura de habitaciones completas",
    serv_painting_li2: "Retoques de fachadas y aleros",
    serv_painting_li3: "Pintura y acabado de gabinetes",

    serv_elec_title: "Electricidad y Plomería",
    serv_elec_desc: "Instalaciones eléctricas seguras. Reemplazo de lámparas, ventiladores de techo, tomacorrientes, inodoros, grifos y solución de fugas.",
    serv_elec_li1: "Instalación de ventiladores y lámparas",
    serv_elec_li2: "Instalación de tomacorrientes y timbres inteligentes",
    serv_elec_li3: "Reemplazo de grifos y reparación de fugas",

    serv_drywall_title: "Drywall y Azulejos",
    serv_drywall_desc: "Acabado liso de paredes de yeso. Reparamos agujeros de paneles de yeso, texturizamos, restauramos juntas y colocamos azulejos de cocina.",
    serv_drywall_li1: "Restauración de agujeros en paneles de yeso",
    serv_drywall_li2: "Instalación de azulejos de pared (backsplash)",
    serv_drywall_li3: "Restauración de juntas y azulejos",

    serv_remodel_title: "Reformas e Instalaciones",
    serv_remodel_desc: "Aprovechando nuestra licencia de Contratista General para remodelaciones de baños, paredes decorativas en madera y soporte de televisores.",
    serv_remodel_li1: "Remodelación de baños y lavanderías",
    serv_remodel_li2: "Instalación segura de televisores y ocultamiento de cables",
    serv_remodel_li3: "Paredes decorativas personalizadas",

    serv_wash_title: "Lavado a Presión",

    // Why Choose Us Section
    diff_tag: "¿Por qué HandyMeira?",
    diff_title: "Nuestros Diferenciales",
    diff_subtitle: "Entregamos tranquilidad, no solo reparaciones. Conozca qué nos convierte en la opción favorita en Orlando.",
    diff_badge_title: "Contratista General",
    diff_badge_desc: "Licencia de Florida #CGC1533938",
    diff_1_title: "Licencia de Contratista General Autorizado",
    diff_1_desc: "A diferencia de los handymen comunes que tienen fuertes límites legales en Florida, nuestra licencia CGC nos permite realizar remodelaciones completas y comerciales de manera legal.",
    diff_2_title: "Servicio al Cliente Trilingüe",
    diff_2_desc: "Comunicación sin fallas en su idioma. Hablamos fluidamente Inglés, Portugués y Español, garantizando que su proyecto se ejecute exactamente como desea.",
    diff_3_title: "Calidad y Organización de Grupo",
    diff_3_desc: "Con el respaldo del Grupo AWI, empleamos cronogramas rigurosos, contratos transparentes y precios claros sin sorpresas al finalizar.",

    // Portfolio Section
    port_tag: "Nuestros Proyectos",
    port_title: "Portafolio de Trabajos",
    port_subtitle: "Una selección de proyectos recientes entregados a propietarios en toda el área metropolitana de Orlando.",
    port_filter_all: "Todos",
    port_filter_remodel: "Remodelación",
    port_filter_repairs: "Reparos y Montaje",
    port_filter_painting: "Pintura",

    port_tag_remodel: "Remodelación",
    port_tag_painting: "Pintura",
    port_tag_repairs: "Reparos y Montaje",

    port_p1_title: "Remodelación Completa de Baño de Visitas",
    port_p1_desc: "Colocación de baldosas de pared, lavamanos moderno, plomería de grifo y acabado de drywall en Lake Nona, FL.",
    port_p2_title: "Pintura Residencial de Sala de Estar",
    port_p2_desc: "Preparación de paredes, techo, rodapiés y aplicación de revestimientos premium en Windermere, FL.",
    port_p3_title: "Pared Decorativa e Instalación de TV",
    port_p3_desc: "Montaje de paneles de listones de madera y fijación de TV con cables embutidos en Winter Garden, FL.",
    port_p4_title: "Instalación de Muebles de Oficina Ejecutiva",
    port_p4_desc: "Montaje de escritorios de roble pesados, estanterías organizadoras y archivadores en Winter Park, FL.",
    port_p5_title: "Reparación de Daños en Paneles de Yeso",
    port_p5_desc: "Conserto de agujeros con empaste y textura knockdown a juego en Kissimmee, FL.",
    port_p6_title: "Renovación de Fachada Comercial",
    port_p6_desc: "Reparación de aleros, lavado a presión y pintura exterior completa en un local de Orlando, FL.",

    // Testimonials
    rev_tag: "Testimonios",
    rev_title: "Lo Que Dicen Nuestros Clientes",
    rev_subtitle: "Opiniones reales de propietarios de viviendas y negocios en Florida Central que confían en nosotros.",
    rev_1_text: `"HandyMeira remodeló nuestro baño social y el resultado es hermoso. Que sean contratistas generales da mucha confianza. Súper profesionales, limpios y nos informaban en portugués en todo momento."`,
    rev_1_loc: "Lake Nona, FL",
    rev_2_text: `"Necesitaba instalar varios ventiladores, armar estantes a medida y parchar paredes antes de mudarme. Llegaron a tiempo, terminaron antes de lo previsto y el cobro fue honesto."`,
    rev_2_loc: "Windermere, FL",
    rev_3_text: `"Súper satisfecho con el trabajo de pintura de nuestra fachada comercial. Trabajaron fuera del horario comercial para evitar interrupciones. Excelente control de calidad."`,
    rev_3_loc: "Orlando, FL (Dueño de Negocio)",

    // Contact
    c_panel_title: "Contáctenos",
    c_panel_desc: "¿Tiene preguntas o listo para iniciar? Escríbanos. Cubrimos todas las áreas de Orlando metropolitano.",
    c_loc_title: "Área de Cobertura",
    c_loc_desc: "Orlando, Kissimmee, Windermere, Winter Park y alrededores",
    c_phone_title: "Llámenos o Envíe Mensaje",
    c_mail_title: "Enviar Correo",
    c_hours_title: "Horas de Atención",
    c_hours_desc: "Lun - Sáb: 8:00 AM - 6:00 PM",

    c_form_name_lbl: "Nombre Completo",
    c_form_phone_lbl: "Número Telefónico",
    c_form_email_lbl: "Correo Electrónico",
    c_form_service_lbl: "Servicio Requerido",
    c_form_service_other: "Otro / No Enlistar",
    c_form_urg_lbl: "Urgencia del Proyecto",
    c_form_urg_select: "Seleccione Urgencia...",
    c_form_urg_immediate: "Lo antes posible",
    c_form_urg_weeks: "En unas semanas",
    c_form_urg_flex: "Flexible / Planificando",
    c_form_desc_lbl: "Descripción del Proyecto",
    c_form_btn: "Solicitar Estimado Gratis",

    // Footer
    f_desc: "Servicios profesionales de handyman y contratista general para hogares residenciales y comercios en Florida Central.",
    f_links_title: "Navegación Rápida",
    f_links_home: "Inicio",
    f_serv_title: "Servicios",
    f_contact_title: "Contacto",
    f_awi: "Gestionado por AWI Group",

    // Form feedback messages
    form_success: "¡Gracias! Su solicitud de cotización fue enviada con éxito. Nos comunicaremos con usted en breve.",
    form_error: "Hubo un error al enviar el formulario. Revise sus datos o llámenos directamente.",

    // Team Section
    team_tag: "Nuestros Expertos",
    team_title: "Conozca al Equipo",
    team_subtitle: "Profesionales dedicados comprometidos a brindar una artesanía excepcional y un servicio de calidad.",
    team_member_1_role: "Propietario y Director de Proyectos",
    team_member_2_role: "Fundador y Contratista General Principal",
    team_member_3_role: "Especialista Técnico Principal y Carpintero",
    team_member_4_role: "Coordinadora de Relaciones con Clientes",

    // FAQ Section
    faq_tag: "Preguntas Frecuentes",
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Encuentre respuestas a preguntas comunes sobre nuestros servicios, estimaciones, licencias y áreas de cobertura.",
    faq_q1: "¿Ofrecen servicios de emergencia?",
    faq_a1: "Sí, ofrecemos servicios de emergencia las 24 horas, los 7 días de la semana, para reparaciones críticas como fugas graves de plomería, riesgos de electricidad o tapiado de seguridad. Llámenos directamente para asistencia inmediata.",
    faq_q2: "¿Cómo funciona el proceso de presupuesto?",
    faq_a2: "Puede solicitar un presupuesto en línea o llamarnos. Para tareas simples, una llamada telefónica o fotos pueden ser suficientes. Para proyectos de remodelación más grandes, programaremos una visita al sitio para inspeccionar y proporcionar una cotización detallada.",
    faq_q3: "¿Trabajan los fines de semana?",
    faq_a3: "Nuestro horario comercial habitual es de lunes a sábado de 8:00 AM a 6:00 PM. El trabajo fuera de este horario en fines de semana se puede programar con anticipación para proyectos específicos, y los servicios de emergencia están disponibles 24/7.",
    faq_q4: "¿Qué áreas atienden?",
    faq_a4: "Servimos a toda el área metropolitana de Orlando, incluyendo Windermere, Lake Nona, Winter Park, Winter Garden, Kissimmee y comunidades de Florida Central.",
    faq_q5: "¿El presupuesto tiene costo?",
    faq_a5: "No, nuestros presupuestos iniciales son completamente gratuitos. Puede solicitar una llamada de vuelta o completar nuestro formulario en línea para recibir una cotización sin obligación.",
    faq_q6: "¿Están licenciados para renovaciones importantes?",
    faq_a6: "Sí, somos Contratistas Generales Certificados (Licencia CGC 1533938) en el Estado de Florida. Esto nos permite realizar legalmente modificaciones estructurales, ampliaciones del hogar y remodelaciones comerciales.",

    // Tooltip and Badge
    c_emergency_badge: "🚨 Servicio de Emergencia 24/7 Disponible",
    f_awi_tooltip: "AWI Group brinda soporte administrativo y operativo a HandyMeira, garantizando altos estándares de servicio al cliente y gestión de proyectos."
  }
};

// Default language
let currentLang = 'en';

// ==========================================================================
// DOM CONTENT LOADED EVENT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Mobile Menu Functionality
  const menuToggle = document.getElementById('menu-toggle');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link, .header .btn');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      header.classList.toggle('mobile-active');
    });
  }

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('mobile-active');
    });
  });

  // 2. Language Switcher Logic
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        // Remove active from other language buttons
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Switch language
        changeLanguage(selectedLang);
      }
    });
  });

  // 3. Portfolio Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCat === filterVal) {
          item.style.display = 'flex';
          // Simple visual entry animation
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transition = 'opacity 0.4s ease';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. Contact & Quick Estimate Form Submission (Simulated)
  const contactForm = document.getElementById('contact-lead-form');
  const heroForm = document.getElementById('hero-estimate-form');
  const statusMsg = document.getElementById('form-message');

  const handleFormSubmit = (e, formType) => {
    e.preventDefault();
    
    // Simulating API loading State
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : (currentLang === 'pt' ? 'Enviando...' : 'Enviando...');

    setTimeout(() => {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;

      // Extract form details for console visual inspection
      let name = '';
      let phone = '';
      if (formType === 'hero') {
        name = document.getElementById('hero-name').value;
        phone = document.getElementById('hero-phone').value;
        heroForm.reset();
      } else {
        name = document.getElementById('contact-name').value;
        phone = document.getElementById('contact-phone').value;
        contactForm.reset();
      }

      // Show Success message
      if (statusMsg) {
        statusMsg.className = 'form-status success';
        statusMsg.textContent = translations[currentLang].form_success;
        
        // Scroll to message
        statusMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Fade out message after 8 seconds
        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 8000);
      } else {
        // Fallback alert
        alert(translations[currentLang].form_success);
      }

      console.log(`[Form Ingested] Type: ${formType}, Client: ${name}, Contact: ${phone}`);
    }, 1500);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contact'));
  }
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => handleFormSubmit(e, 'hero'));
  }

  // 5. FAQ Accordion Toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = null;
          }
          const otherButton = otherItem.querySelector('.faq-question');
          if (otherButton) {
            otherButton.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          question.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
});

// ==========================================================================
// TRANSLATION ENGINE FUNCTION
// ==========================================================================
function changeLanguage(lang) {
  currentLang = lang;
  
  // Set HTML language tag for accessibility
  document.documentElement.lang = lang;

  // Find all elements with translation keys
  const transElements = document.querySelectorAll('[data-t]');

  transElements.forEach(elem => {
    const key = elem.getAttribute('data-t');
    if (translations[lang] && translations[lang][key]) {
      const translation = translations[lang][key];

      // If it contains HTML elements (like <span> in hero title), use innerHTML
      if (elem.querySelector('span') || translation.includes('<span>') || translation.includes('“')) {
        elem.innerHTML = translation;
      } else {
        // Otherwise use plain textContent
        elem.textContent = translation;
      }
    }
  });

  // Handle translating select option placeholders and placeholders in inputs
  // We locate inputs that have standard placeholder tags and translate them
  const heroNameInput = document.getElementById('hero-name');
  const heroPhoneInput = document.getElementById('hero-phone');
  const contactNameInput = document.getElementById('contact-name');
  const contactPhoneInput = document.getElementById('contact-phone');
  const contactEmailInput = document.getElementById('contact-email');
  const contactMsgInput = document.getElementById('contact-msg');

  if (lang === 'pt') {
    if (heroNameInput) heroNameInput.placeholder = "Seu Nome";
    if (heroPhoneInput) heroPhoneInput.placeholder = "Número de Telefone";
    if (contactNameInput) contactNameInput.placeholder = "João da Silva";
    if (contactPhoneInput) contactPhoneInput.placeholder = "(407) 555-0199";
    if (contactEmailInput) contactEmailInput.placeholder = "joao@exemplo.com";
    if (contactMsgInput) contactMsgInput.placeholder = "Descreva detalhadamente o que precisa...";
  } else if (lang === 'es') {
    if (heroNameInput) heroNameInput.placeholder = "Su Nombre";
    if (heroPhoneInput) heroPhoneInput.placeholder = "Número de Teléfono";
    if (contactNameInput) contactNameInput.placeholder = "Juan Pérez";
    if (contactPhoneInput) contactPhoneInput.placeholder = "(407) 555-0199";
    if (contactEmailInput) contactEmailInput.placeholder = "juan@ejemplo.com";
    if (contactMsgInput) contactMsgInput.placeholder = "Describa detalladamente su proyecto...";
  } else {
    // English
    if (heroNameInput) heroNameInput.placeholder = "Your Name";
    if (heroPhoneInput) heroPhoneInput.placeholder = "Phone Number";
    if (contactNameInput) contactNameInput.placeholder = "John Doe";
    if (contactPhoneInput) contactPhoneInput.placeholder = "407-555-0199";
    if (contactEmailInput) contactEmailInput.placeholder = "john@example.com";
    if (contactMsgInput) contactMsgInput.placeholder = "Tell us what needs to be repaired, installed, or remodeled...";
  }

  // Re-run Lucide to ensure any dynamic rendering is correctly styled
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

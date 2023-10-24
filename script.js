let universalFileLang = 'pt'; 

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".horizontal-lines-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open"); 
}

function backToTop() {
    document.body.scrollTop = 0;            // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge, Opera
}

function openCV() {
    let fileName = 'CV-' + universalFileLang;
    window.open('./assets/' + fileName + '.pdf');
}

// window.onscroll = function() {scrollFunction()};

// let footerNav = document.getElementById("footerNav");

// function scrollFunction() {
//   if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
//     footerNav.style.display = "block";
//   } else {
//     footerNav.style.display = "none";
//   }
// }

const projectCards = document.querySelectorAll(".card"); 

window.onload = function(){
    projectCards.forEach((card) => {
        //let seeMoreBtn = card.querySelector(".btn-see-more");
        let seeMoreBtn = card.querySelector(".btn"); 
        let textContent = card.querySelector(".card-content .text"); 

        if(textContent.scrollHeight == textContent.clientHeight){
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content"; 
        }
        else {
            card.classList.add("gradient"); 
        }
    });
}

projectCards.forEach((card) => { 
    let seeMoreBtn = card.querySelector(".btn"); 
    let textContent = card.querySelector(".card-content .text"); 

    seeMoreBtn.addEventListener("click", () => {
        card.classList.toggle("active"); 

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = translationData[universalFileLang].seeLess;
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else{
            seeMoreBtn.innerHTML = translationData[universalFileLang].seeMore;
            textContent.style.height = "0px";
        }

        document.querySelectorAll('.card').forEach(elem => {
            if(elem != card){
                if(card.classList.contains("active")){
                    elem.classList.remove("active"); 
                    elem.querySelector(".btn").innerHTML = translationData[universalFileLang].seeMore;
                    elem.querySelector(".card-content .text").style.height = "0px";
                }
            }
        });
    
    });
    
});

// Possível automatização de lang: https://www.tutorialspoint.com/how-to-switch-the-language-of-the-page-using-javascript
function switchLang(lang) {
    universalFileLang = lang; 

    for (let key in translationData[lang]) {
        if(document.getElementById(key) != null)
            document.getElementById(key).innerHTML = translationData[lang][key];
    }

    let supportedLanguages = ['en', 'pt', 'es']; 
    supportedLanguages.forEach((language) => {
        if(lang == language)
            document.getElementById("lang-" + language).className = document.getElementById("lang-" + language).className + " active"; 
        else
            document.getElementById("lang-" + language).className = document.getElementById("lang-" + language).className.replace(" active", "");
    });
 }

 // Possível estilo de menu de navegação pelas seções https://css-tricks.com/the-shapes-of-css/


const translationData = {
    "en":
    {
        "AboutMe": "About me", 
        "Experience": "Experience", 
        "Projects": "Projects", 
        "Contact": "Contact", 
        "AboutMeMobileMenu": "About me", 
        "ExperienceMobileMenu": "Experience", 
        "ProjectsMobileMenu": "Projects", 
        "ContactMobileMenu": "Contact", 
        "menuContact": "Contact", 
        "profile1" : "Hello, I'm", 
        "profile2" : "Control and Automation Engineer and Full-Stack Developer",
        "profile3" : "My resume",
        "profile4" : "Contact me",
        "about1" : "Learn more",
        "about2" : "2 years of experience",
        "about3" : "Education",
        "about4" : "Control and Automation Engineering - UFMG",
        "about5": "Hello! I'm glad you've taken the time to review my portfolio and get to know me better. \
        I'm André, a Control and Automation Engineer from UFMG, and I'm passionate about artificial intelligence and the intersection of engineering and biomedicine. \
        Currently, I'm studying and taking further steps in my knowledge in data analysis and business intelligence.",
        "about6" : "About me", 
        "about7" : "Software Development", 
        "about8": "For two years, I worked as a software developer at Primetals Technologies (2021-2023). During this period, \
        I worked on specialized automation and metallurgy services, web applications for monitoring and controlling industrial plants, \
        integration between control panels and databases, and production report development in VBA. Additionally, during my undergraduate studies, \
        I conducted research for the Department of Nuclear Engineering at UFMG (2019-2020), deepening my knowledge in the intersections between \
        automation and medical sciences, such as oncology and radiology.",
        "about9": "Currently, my main life goals are to find a company where my creative and inquisitive profile fits and to pursue further studies \
        in the areas of interest I cultivated during my undergraduate years. I'm open to positions in biomedical engineering and hardware development, \
        full-stack software development, and applications of machine learning and AI in data analysis. Feel free to reach out if you think my profile \
        aligns with the positions you have to offer!",
        "experience1" : "Get to know my", 
        "experience2" : "Experience", 
        "experience3": "Intermediate", 
        "experience4": "Intermediate", 
        "experience5": "Basic", 
        "experience6": "Intermediate", 
        "experience7": "Advanced", 
        "experience8": "Basic", 
        "experience9": "Intermediate", 
        "experience10": "Intermediate", 
        "experience11": "Software Development", 
        "experience13": "Machine Learning Analyst - IGTI",
        "experience14": "In 2020, I participated in a 148-hour bootcamp on machine learning offered by IGTI (now XP Educação). \
        This course covered topics such as data preprocessing and treatment, machine learning model training techniques, \
        and analysis and interpretation of results.",
        "experience15": "Scikit-learn, Pandas, and NumPy",
        "experience16": "Intermediate",
        "experience17": "Image Processing and TensorFlow",
        "experience18": "Basic",
        "experience19": "Artificial Neural Networks",
        "experience20": "Basic",
        "experience21": "Hardware Development",
        "experience22": "In addition to software development, I invested some of my complementary hours in the study of \
        hardware development. I started my journey in this area with a scientific initiation in which I developed a prototype \
        of a radial positioning system for ultrasound probes for radiology applications. Then, I delved into the biomedical \
        field by taking elective courses in Fundamentals of Biomedical Engineering and Biomedical Instrumentation. \
        Finally, I developed a biomedical brachytherapy device as my undergratuation conclusion work.",
        "experience23": "Prototyping and Electronics",
        "experience24": "Intermediate",
        "experience26": "Basic",
        "experience27": "Microcontrollers",
        "experience28": "Intermediate",
        "experience29": "Biomedical Instrumentation",
        "experience30": "Intermediate",
        "seeMore" : "See More",
        "seeLess" : "See Less",
        "project1" : "Evaluate my latest",
        "project2" : "Projects",
        "project3" : "This Portfolio!",
        "project4" : "Thinking of something that could illustrate my programming skills and my commitment to telling the story that brought me here, I decided to develop an interactive portfolio that would give me more space and creative freedom than a standard CV. So, starting from introductory tutorials and my experience with JavaScript and CSS, I arrived at this version of the website, which is much more my style and allows you to get to know me much better.",
        "project5" : "See More",
        "project6" : "Automated Prostate Brachytherapy Device",
        "project7" : "As a final project for my degree, I developed the electronic design and a real prototype of an automated prostate brachytherapy device. The project was designed to have two degrees of freedom movement covering all points in an area twice the size of the prostate's cross-section, closed-loop control of the actuator position, and positioning accuracy of up to 2.5 millimeters. The methodology used was validated and approved by the panel, and the device's operation can be seen in the demonstration video.",
        "project8" : "See More",
        "project9" : "Demo",
        "project10" : "Paper presented at the 5th SENCIR congress",
        "project11" : "To consolidate my learning in the scientific initiation project with the Department of Nuclear Engineering, I wrote and published a paper entitled 'INTERCONNECTIONS OF RADIATION SCIENCES WITH AUTOMATION: HISTORICAL FOUNDATION AND PERSPECTIVES.' Discussing the history of automation in medicine, I presented this paper at the 2021 SENCIR Congress, also discussing future prospects for technology in healthcare and human care.",
        "project12" : "See More",
        "project13" : "Paper",
        "project14" : "Certificate",
        "project15" : "Scrap Yard - Primetals Technologies/Gerdau",
        "project16" : "As an intern at Primetals Technologies, I was responsible for rolling out the scrap acquisition and recycling system from Gerdau's Pindamonhangaba plant to the Charqueadas plant. It was an opportunity to enhance my knowledge in web application development with C# .NET, learn to implement interfaces between back-end projects and industrial automation systems, and, as a bonus, review the concepts learned in my undergraduate studies about developing synoptic screens and human-machine interfaces.",
        "project17" : "See More",
        "project18" : "News about",
        "project19" : "There's a lot more to come!",
        "project20" : "The projects from my degree and internship served as a great introductory foundation for some concepts and certainly played a role in expanding my range of interests. Not to mention how they helped solidify my work ethic and my constant pursuit of improvement. With that in mind, I can say that many personal projects are coming, and I will continue to use this page to share anything I find interesting to share.",
        "project21" : "Let me know!",
        "project22": "Volunteer Work - Incluir Project",
        "project23": "Since August 2023, I have been participating as a volunteer in the Incluir Project. \
        In this initiative, I am working on the reformulation of the teaching material for the financial education course 'Mais Renda' \
        and sharing the teaching load with other volunteer teachers.",
        "project24": "See More",
        "project25": "Check it out on Instagram",
        "contact1" : "Feel free to", 
        "contact2" : "Contact Me",
        "footer0" : "Profile",
        "footer1" : "About me", 
        "footer2" : "Experience", 
        "footer3" : "Projects", 
        "footer4" : "Contact",
    },
    "pt":
    {
        "AboutMe": "Sobre mim",
        "Experience": "Experiência",
        "Projects": "Projetos",
        "Contact": "Contato",
        "AboutMeMobileMenu": "Sobre mim",
        "ExperienceMobileMenu": "Experiência",
        "ProjectsMobileMenu": "Projetos",
        "ContactMobileMenu": "Contato",
        "menuContact": "Contato",
        "profile1": "Olá, eu sou",
        "profile2": "Engenheiro de Controle e Automação e Desenvolvedor Full-Stack",
        "profile3": "Meu currículo",
        "profile4": "Entre em contato",
        "about1": "Saiba mais",
        "about2": "2 anos de experiência",
        "about3": "Educação",
        "about4": "Engenharia de Controle e Automação - UFMG",
        "about5": "Olá! Fico feliz que você tenha tirado esse tempo para avaliar meu portfólio e me conhecer melhor.\
        Eu sou o André, Engenheiro de Controle e Automação pela UFMG, entusiasta de inteligência artificial e da interseção entre engenharia e biomedicina. \
        Atualmente, estou estudando e aprofundando meus conhecimentos em análise de dados e business intelligence. ",
        "about6": "Sobre mim",
        "about7": "Desenvolvimento de Software",
        "about8" : "Por dois anos, fui desenvolvedor de software na empresa Primetals Technologies (2021-2023), período durante o qual trabalhei \
        com serviços especialistas de automação e siderurgia, aplicações web de monitoramento e controle de plantas industriais, integração entre \
        painéis de controle e bancos de dados e desenvolvimento de relatórios de produção, em VBA. \
        Além disso, durante a graduação, fui pesquisador pelo Departamento de Engenharia Nuclear da UFMG (2019-2020) e aprofundei meus conhecimentos nos \
        entrelaçoes entre automação e algumas ciências ligadas à medicina, como oncologia e radiologia. ",
        "about9" : "No momento, meus objetivos principais de vida são encontrar uma empresa na qual meu perfil criativo e curioso se encaixe e levar adiante meus \
        estudos nas áreas de interesse que eu cultivei nos anos da minha graduação. Estou aberto a vagas de engenharia e desenvolvimento de hardware biomédico, \
        desenvolvimento de software full-stack e aplicações de machine learning e IA na análise de dados. Sinta-se à vontade para entrar em contato se achar que \
        meu perfil se encaixa nas vagas que você tem para oferecer!",
        "experience1": "Conheça minha",
        "experience2": "Experiência",
        "experience3": "Intermediário",
        "experience4": "Intermediário",
        "experience5": "Básico",
        "experience6": "Intermediário",
        "experience7": "Avançado",
        "experience8": "Básico",
        "experience9": "Intermediário",
        "experience10": "Intermediário",
        "experience11": "Desenvolvimento de Software",
        "experience13": "Analista de Aprendizado de Máquina - IGTI",
        "experience14": "Em 2020 participei de um bootcamp sobre aprendizado de máquina, com 148 horas de conteúdo \
        oferecido pelo IGTI (hoje XP Educação). Esse curso tratou de assuntos como pré-processamento e tratamento de dados, \
        técnicas de treinamento de modelos de aprendizado de máquina e análise e interpretação dos resultados.",
        "experience15": "Scikit-learn, Pandas e NumPy",
        "experience16": "Intermediário",
        "experience17": "Processamento de Imagens e TensorFlow",
        "experience18": "Básico",
        "experience19": "Redes Neurais Artificiais",
        "experience20": "Básico",
        "experience21": "Desenvolvimento de Hardware",
        "experience22": "Além do desenvolvimento de software, investi parte das minhas horas complementares no estudo de \
        desenvolvimento de hardware. Iniciei minha jornada nessa área com uma iniciação científica na qual desenvolvi \
        o protótipo de um sistema de posicionamento radial de sondas ultrassom para aplicações de radiologia. \
        Depois, me aprofundei no ramo biomédico cursando as disciplinas optativas de Fundamentos de Engenharia Biomédica \
        e Instrumentação Biomédica. Por fim, desenvolvi um dispositivo biomédico de braquiterapia como projeto final de curso.",
        "experience23": "Prototipagem e Eletrônica",
        "experience24": "Intermediário",
        "experience26": "Básico",
        "experience27": "Microcontroladores",
        "experience28": "Intermediário",
        "experience29": "Instrumentação Biomédica",
        "experience30": "Intermediário",
        "seeMore": "Ver Mais",
        "seeLess": "Ver Menos",
        "project1" : "Avalie meus mais recentes",
        "project2" : "Projetos",
        "project3" : "Este Portfólio!",
        "project4" : "Pensando em algo que pudesse ilustrar minhas habilidades de programação e meu compromisso em contar \
        a história que me trouxe até aqui, decidi desenvolver um portfólio interativo que me desse mais espaço e liberdade \
        criativa que um CV pradrão. \
        Assim, partindo de tutoriais introdutórios e da minha experiência com javaScript e css, eu cheguei até essa versão de website, \
        que é muito mais a minha cara e permite que você me conheça muito melhor.",
        "project5" : "Ver Mais",
        "project6" : "Dispositivo automatizado de braquiterapia de próstata",
        "project7" : "Como projeto final de curso, desenvolvi o projeto eletrônico e um protóripo real de \
        um dispositivo de braquiterapia de próstata automatizado. O projeto foi pensado para ter movimentação \
        com dois graus de liberade percorrendo todos os pontos em uma área duas vezes maior que a seção frontal \
        da próstata, controle em malha fechada da posição do atuador e acurácia de posicinamento de até 2,5 milímetros. \
        A metodologia utilizada foi validada e aprovada pela banca e o funcionamento do dispositivo pode ser visto no vídeo de Demonstração.",
        "project8" : "Ver Mais",
        "project9" : "Demonstração",
        "project10" : "Artigo apresentado na 5ª edição do congresso SENCIR",
        "project11" : "Para consolidar meus aprendizados no projeto de iniciação científica junto ao Departamento de \
        Engenharia Nuclear, escrevi e publiquei um artigo entitulado ENTRELAÇOS DAS CIÊNCIAS DAS RADIAÇÕES COM A AUTOMAÇÃO: \
        FUNDAMENTAÇÃO HISTÓRICA E PERSPECTIVAS. Comentando sobre a história da utilização da automação na medicina, apresentei \
        esse artigo no Congresso SENCIR de 2021, discorrendo também sobre perspectivas futuras do uso da tecnologia na \
        saúde e no cuidado humano.",
        "project12" : "Ver Mais",
        "project13" : "Artigo",
        "project14" : "Certificado",
        "project15" : "Pátio de Sucatas - Primetals Technologies/Gerdau",
        "project16" : "Enquanto estagiário da Primetals Technologies, fui responsável por fazer \
        o rollout do sistema de aquisição e reciclagem de sucatas da Gerdau da indústria de Pindamonhangaba \
        para a planta de Charqueadas. Foi uma oportunidade de incrementar meus conhecimentos em \
        desenvolvimento de aplicações web com C# .NET, aprender a implementar interface entre projetos back-end e \
        sistemas de automação industrial e, de quebra, revisar os conceitos aprendidos na graduação sobre \
        desenvolvimento de telas sinóticas e interfaces homem-máquina.",
        "project17" : "Ver Mais",
        "project18" : "Notícia sobre",
        "project19" : "Tem muito mais vindo aí!",
        "project20" : "Os projetos da graduação e do estágio serviram como uma ótima base introdutória \
        para alguns conceitos e, com certeza, tiveram a sua importância na ampliação do meu repertório de \
        interesses. Isso sem falar na maneira que eles ajudaram a consolidar minha ética de trabalho e minha busca \
        constante por melhorias. É com isso em mente que afirmo que muitos projetos pessoais estão por vir e que \
        vou continuar usando essa página para divulgar tudo o que achar interessante de compartilhar.",
        "project21" : "Quero saber!",
        "project22" : "Trabalho Voluntário - Projeto Incluir",
        "project23" : "Desde Agosto de 2023, tenho participado como voluntário no Projeto Incluir. \
        Nessa iniciativa, estou atuando na reformulação do material didático do curso de educação financeira Mais Renda \
        e dividindo a carga de aulas com os outros professores voluntários.",
        "project24" : "Ver Mais",
        "project25" : "Veja no Instagram",
        "contact1" : "Fique à vontade para fazer", 
        "contact2" : "Contato",
        "footer0" : "Perfil",
        "footer1": "Sobre mim",
        "footer2": "Experiência",
        "footer3": "Projetos",
        "footer4": "Contato",
    },
    "es":
    {
        "AboutMe": "Sobre mí",
        "Experience": "Experiencia",
        "Projects": "Proyectos",
        "Contact": "Contacto",
        "AboutMeMobileMenu": "Sobre mí",
        "ExperienceMobileMenu": "Experiencia",
        "ProjectsMobileMenu": "Proyectos",
        "ContactMobileMenu": "Contacto",
        "menuContact": "Contacto",
        "profile1": "Hola, soy",
        "profile2": "Ingeniero en Control y Automatización y Desarrollador Full-Stack",
        "profile3": "Mi currículum",
        "profile4": "Contáctame",
        "about1": "Más información",
        "about2": "2 años de experiencia",
        "about3": "Educación",
        "about4": "Ingeniería de Control y Automatización - UFMG",
        "about5": "¡Hola! Me alegra que hayas tomado el tiempo para revisar mi portafolio y conocerme mejor. \
        Soy André, un ingeniero en Control y Automatización de la UFMG, y me apasiona la inteligencia artificial y la intersección entre la ingeniería y la biomedicina. \
        Actualmente, estoy estudiando y profundizando mis conocimientos en análisis de datos e inteligencia empresarial.",
        "about6": "Sobre mí",
        "about7": "Desarrollo de Software",
        "about8": "Durante dos años, trabajé como desarrollador de software en Primetals Technologies (2021-2023). Durante este período, \
        trabajé en servicios de automatización y metalurgia especializados, aplicaciones web para monitorear y controlar plantas industriales, \
        integración entre paneles de control y bases de datos, y desarrollo de informes de producción en VBA. Además, durante mis estudios \
        de pregrado, realicé investigaciones para el Departamento de Ingeniería Nuclear de la UFMG (2019-2020), profundizando mis conocimientos \
        en las intersecciones entre automatización y ciencias médicas, como oncología y radiología.",
        "about9": "Actualmente, mis principales objetivos de vida son encontrar una empresa donde mi perfil creativo y curioso encaje \
        y seguir mis estudios en las áreas de interés que cultivé durante mis años de pregrado. Estoy abierto a puestos en ingeniería biomédica \
        y desarrollo de hardware, desarrollo de software full-stack y aplicaciones de aprendizaje automático e IA en análisis de datos. \
        No dudes en ponerte en contacto si crees que mi perfil se ajusta a los puestos que tienes para ofrecer.",
        "experience1": "Conoce mi",
        "experience2": "Experiencia",
        "experience3": "Intermedio",
        "experience4": "Intermedio",
        "experience5": "Básico",
        "experience6": "Intermedio",
        "experience7": "Avanzado",
        "experience8": "Básico",
        "experience9": "Intermedio",
        "experience10": "Intermedio",
        "experience11": "Desarrollo de Software",
        "experience13": "Analista de Aprendizaje Automático - IGTI",
        "experience14": "En 2020, participé en un bootcamp de 148 horas sobre aprendizaje automático ofrecido por IGTI (ahora XP Educação). \
        Este curso abordó temas como el preprocesamiento y tratamiento de datos, técnicas de entrenamiento de modelos de aprendizaje automático \
        y análisis e interpretación de resultados.",
        "experience15": "Scikit-learn, Pandas y NumPy",
        "experience16": "Intermedio",
        "experience17": "Procesamiento de Imágenes y TensorFlow",
        "experience18": "Básico",
        "experience19": "Redes Neuronales Artificiales",
        "experience20": "Básico",
        "experience21": "Desarrollo de Hardware",
        "experience22": "Además del desarrollo de software, invertí algunas de mis horas complementarias en el estudio del \
        desarrollo de hardware. Inicié mi viaje en esta área con una iniciación científica en la que desarrollé un prototipo \
        de un sistema de posicionamiento radial para sondas de ultrasonido para aplicaciones de radiología. Luego profundicé en el campo biomédico, \
        tomando cursos optativos en Fundamentos de Ingeniería Biomédica e Instrumentación Biomédica. \
        Finalmente, desarrollé un dispositivo de braquiterapia biomédica como trabajo de conclusión de grado.",
        "experience23": "Prototipado y Electrónica",
        "experience24": "Intermedio",
        "experience26": "Básico",
        "experience27": "Micro-controladores",
        "experience28": "Intermedio",
        "experience29": "Instrumentación Biomédica",
        "experience30": "Intermedio",
        "seeMore": "Ver Más",
        "seeLess": "Ver Menos",
        "project1" : "Evalúa mis últimos",
        "project2" : "Proyectos",
        "project3" : "¡Este Portafolio!",
        "project4" : "Pensando en algo que pudiera ilustrar mis habilidades de programación y mi compromiso de contar la historia que me trajo hasta aquí, decidí desarrollar un portafolio interactivo que me brindara más espacio y libertad creativa que un CV estándar. Así que, partiendo de tutoriales introductorios y mi experiencia con JavaScript y CSS, llegué a esta versión del sitio web, que es mucho más de mi estilo y te permite conocerme mucho mejor.",
        "project5" : "Ver Más",
        "project6" : "Dispositivo de Braquiterapia de Próstata Automatizado",
        "project7" : "Como proyecto final de mi carrera, desarrollé el diseño electrónico y un prototipo real de un dispositivo de braquiterapia de próstata automatizado. El proyecto se diseñó para tener movimiento con dos grados de libertad que cubre todos los puntos en un área dos veces el tamaño de la sección transversal de la próstata, control en bucle cerrado de la posición del actuador y una precisión de posicionamiento de hasta 2.5 milímetros. La metodología utilizada fue validada y aprobada por el comité, y el funcionamiento del dispositivo se puede ver en el video de demostración.",
        "project8" : "Ver Más",
        "project9" : "Demostración",
        "project10" : "Artículo presentado en la 5ª edición del congreso SENCIR",
        "project11" : "Para consolidar mis aprendizajes en el proyecto de iniciación científica con el Departamento de Ingeniería Nuclear, escribí y publiqué un artículo titulado 'INTERCONEXIONES DE LAS CIENCIAS DE LA RADIACIÓN CON LA AUTOMATIZACIÓN: FUNDAMENTO HISTÓRICO Y PERSPECTIVAS.' Discutiendo la historia de la automatización en la medicina, presenté este artículo en el Congreso SENCIR de 2021, también discutiendo las perspectivas futuras de la tecnología en la atención médica y el cuidado humano.",
        "project12" : "Ver Más",
        "project13" : "Artículo",
        "project14" : "Certificado",
        "project15" : "Patio de Chatarra - Primetals Technologies/Gerdau",
        "project16" : "Como pasante en Primetals Technologies, fui responsable de implementar el sistema de adquisición y reciclaje de chatarra de la planta de Gerdau en Pindamonhangaba a la planta de Charqueadas. Fue una oportunidad para mejorar mis conocimientos en desarrollo de aplicaciones web con C# .NET, aprender a implementar interfaces entre proyectos de back-end y sistemas de automatización industrial y, como ventaja, revisar los conceptos aprendidos en mis estudios universitarios sobre el desarrollo de pantallas sinópticas e interfaces hombre-máquina.",
        "project17" : "Ver Más",
        "project18" : "Noticias sobre",
        "project19" : "¡Hay mucho más por venir!",
        "project20" : "Los proyectos de mi carrera y pasantía sirvieron como una gran base introductoria para algunos conceptos y ciertamente desempeñaron un papel en la expansión de mi rango de intereses. Sin mencionar cómo ayudaron a consolidar mi ética de trabajo y mi búsqueda constante de mejora. Con eso en mente, puedo decir que vienen muchos proyectos personales y seguiré usando esta página para compartir todo lo que encuentre interesante compartir.",
        "project21" : "¡Quiero saber!",
        "project22": "Trabajo Voluntario - Proyecto Incluir",
        "project23": "Desde agosto de 2023, he estado participando como voluntario en el Proyecto Incluir. \
        En esta iniciativa, estoy trabajando en la reformulación del material didáctico del curso de educación financiera 'Mais Renda' \
        y compartiendo la carga de enseñanza con otros profesores voluntarios.",
        "project24": "Ver Más",
        "project25": "Míralo en Instagram",
        "contact1" : "No dudes en ponerte en", 
        "contact2" : "Contacto",
        "footer0" : "Perfil",
        "footer1": "Sobre mí",
        "footer2": "Experiencia",
        "footer3": "Proyectos",
        "footer4": "Contacto",
    }
}
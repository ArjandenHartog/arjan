// Remove AOS initialization

// Existing GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animaties voor secties
gsap.from('.about-me', {
    scrollTrigger: {
        trigger: '.about-me',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.skills .skill', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%',
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
});

gsap.from('.projects .project', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Hover-animaties voor navigatie-items
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.in" });
    });
});

// Hover-animaties voor knoppen
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { backgroundColor: '#2563eb', duration: 0.3 });
    });
    button.addEventListener('mouseleave', () => {
        gsap.to(button, { backgroundColor: '#1e3a8a', duration: 0.3 });
    });
});

// Ensure the projects array is complete and matches the HTML data-project-id attributes
const projects = [    {
        id: 8,
        title: "LampenTotaal Copilot",
        shortDescription: "Een Electron applicatie met diverse AI-tools, ERP-integratie en automatiseringen zoals bulk mail versturen",
        fullDescription: "Deze desktop applicatie is ontwikkeld met Electron, HTML, CSS en JavaScript voor LampenTotaal. De applicatie integreert verschillende AI-functionaliteiten en heeft een directe koppeling met het ERP-systeem via API's. Gebruikers kunnen AI-tools gebruiken voor tekstanalyse en -generatie, terwijl ze ook real-time data uit het ERP-systeem kunnen ophalen en verwerken. De applicatie bevat diverse automatiseringen zoals het versturen van bulk mails, het genereren van rapporten en andere tijdbesparende functionaliteiten voor dagelijkse taken.",
        image: "/images/copilot.png",
        technologies: ["Electron", "HTML", "CSS", "JavaScript", "AI Integration", "API", "ERP Integration", "Email Automation"],
    },
    {
        id: 1,
        title: "FDD project",
        shortDescription: "Website met verhaal over de website. Resultaat: Excellent",
        fullDescription: "Deze website is voor een opdracht voor het vak Frontend Design & Development aan de CHE. De website is gemaakt met HTML, CSS en JavaScript.",
        image: "/images/che.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://fdd.che-ict.nl/2425/ajdhartog/"
    },
    {
        id: 2,
        title: "Dagelijkse Psalm app",
        shortDescription: "Een Psalm app, met verschillende functies. ",
        fullDescription: "Deze psalm app laat willekeurige psalmen zien, uit een grote database. De psalmen worden ververst na het luisteren van de audio. Ook is een compleet overzicht toegevoegd van alle psalmen. Daarnaast bevat de app ook doormiddel van de Bijbel api een overzicht met alle hoofdstukken. De app is gebouwd met React. ",
        image: "/images/dagelijkse-psalm1.png",
        technologies: ["HTML", "CSS", "React", "JavaScript", "API", "MongoDB"],
        link: "https://psalm.site/"
    },
    {
        id: 3,
        title: "Lampentotaal",
        shortDescription: "Een website voor in de showroom van LampenTotaal",
        fullDescription: "Deze website is in combinatie gemaakt voor een touchscreen, waar een pc achter zit. Deze pc staat in de showroom, waar verkopers en klanten samen kunnen kijken naar de verschillende sites van leveranciers en natuurlijk LampenTotaal",
        image: "/images/lampentotaal.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://lampentotaal.arjandenhartog.com/"
    },
    {
        id: 5,
        title: "Vrijwilligersplatform SGPJ Jongeren",
        shortDescription: "Platform voor vrijwilligersbeheer en -communicatie.",
        fullDescription: "Dit platform is gemaakt voor de vrijwilligers van SGPJ Jongeren, hier komt informatie op te staan achter een beveiligde omgeving wat speciaal bedoeld is voor de vrijwillgers.",
        image: "/images/sgpj.png",
        technologies: ["Wordpress", "Databases", "Plugin's", "Wordpress Theme's"],
        link: "https://app.sgpj.nl/"
    },
    {
        id: 6,
        title: "Blazor Web app",
        fullDescription: "Deze web app is gemaakt voor een opdracht van het vak Programming Data Driven Applications, waarbij een web app gemaakt moest worden met Blazor. Er is een database gekoppeld aan de web app. Zo kunnen de gegevens efficent worden ingeladen.",
        image: "/images/blazor.png",
        technologies: ["Blazor", "C#", "HTML", "CSS", "JavaScript", "SQL"]
    },
    {
        id: 7,
        title: "Counter aanmeldingen",
        shortDescription: "Counter voor aanmeldingen voor een avond",
        fullDescription: "Deze counter is gemaakt voor een avond, waarbij de aanmeldingen worden geteld. De counter is gemaakt met HTML, CSS en JavaScript.",
        image: "/images/jongerenavond.png",
        technologies: ["HTML", "CSS", "JavaScript"]
    }

];

// Modal functionality
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalLink = document.getElementById('modalLink');
const closeBtn = document.querySelector('.close-modal');

// Update projects array visibility handling
const projectElements = document.querySelectorAll('.project');
projectElements.forEach(project => {
    // Ensure project is visible
    project.style.display = 'flex';
    
    // Add click event listener
    project.addEventListener('click', () => {
        const projectId = parseInt(project.dataset.projectId);
        const projectData = projects.find(p => p.id === projectId);
        
        if (!projectData) return;        // Update modal content
        modalImage.src = projectData.image;
        modalTitle.textContent = projectData.title;
        modalDescription.textContent = projectData.fullDescription;
        
        // Add expand/collapse functionality
        const imageContainer = modalImage.parentElement;
        const expandIcon = imageContainer.querySelector('.expand-icon');
        
        expandIcon.onclick = function(e) {
            e.stopPropagation();
            imageContainer.classList.toggle('expanded');
            const icon = expandIcon.querySelector('i');
            if (imageContainer.classList.contains('expanded')) {
                icon.classList.remove('fa-expand');
                icon.classList.add('fa-compress');
            } else {
                icon.classList.remove('fa-compress');
                icon.classList.add('fa-expand');
            }
        };

        // Toon of verberg de "Bekijk Project" knop op basis van aanwezigheid link
        if (projectData.link) {
            modalLink.style.display = 'block';
            modalLink.href = projectData.link;
        } else {
            modalLink.style.display = 'none';
        }
        
        // Clear and update technologies
        modalTechnologies.innerHTML = '';
        projectData.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTechnologies.appendChild(li);
        });
        
        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal handlers
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Voeg particle animatie toe
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'background-particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random grootte tussen 2 en 6 pixels
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random positie
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animatie met random delay en duur
        particle.style.animation = `float ${Math.random() * 3 + 4}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Start de particle animatie
createParticles();

// EmailJS initialisatie
emailjs.init('MyO3qqSVY74zlAyCC');

const form = document.getElementById('form');
const btn = document.getElementById('button');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameField = document.getElementById('user_name');
    const emailField = document.getElementById('user_email');
    const messageField = document.getElementById('message');

    [nameField, emailField, messageField].forEach(field => {
        field.classList.remove('invalid');
        if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
            field.nextElementSibling.remove();
        }
    });

    const emailPattern = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+/;
    let isValid = true;

    if (nameField.value.trim() === '') {
        showError(nameField, 'Vul uw naam in.');
        isValid = false;
    }
    if (emailField.value.trim() === '' || !emailPattern.test(emailField.value)) {
        showError(emailField, 'Voer een geldig e-mailadres in.');
        isValid = false;
    }
    if (messageField.value.trim() === '') {
        showError(messageField, 'Vul een bericht in.');
        isValid = false;
    }

    if (!isValid) return;

    btn.classList.add('sending');
    btn.textContent = 'Bezig met verzenden...';

    const serviceID = 'default_service';
    const templateID = 'template_xqzviea';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.classList.remove('sending');
            btn.textContent = 'Verzonden!';
            alert('Bedankt voor uw bericht!');
        }, (err) => {
            btn.classList.remove('sending');
            btn.textContent = 'Verzenden';
            alert('Er is iets misgegaan: ' + JSON.stringify(err));
        });
});

function showError(field, message) {
    field.classList.add('invalid');
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    field.parentNode.appendChild(error);
}

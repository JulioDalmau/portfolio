import starbust from '../assets/starburst-tmdb.png'
import tpm from '../assets/theperfectmentor.png'
import portfolio from '../assets/porfolio.png'

const data = {
  es: {
    navbar: ["Sobre mí", "Proyectos", "Tecnologías", "Contacto"],
    init: [
      "Hola, mi nombre es",
      "Julio Dalmau",
      "Soy ",
      [
        "Full Stack",
        "MERN",
        "PERN",
        "Node.js",
        "React.js",
      ],
      'Soy desarrollador web, me gusta crear aplicaciones, trabajar en equipo y experimentar con nuevas tecnologías'
    ],
    aboutMe: [
        'Desde niño siempre fui un apasionado por la tecnología. Durante 12 años trabajé en el mundo IT como soporte técnico y coordinador de soporte técnico en grandes empresas, esto me brindó experiencia de trabajo en equipo, en condiciones de gran variabilidad tecnológica y de alta demanda de solicitudes.',
        'Durante el ultimo año tomé una nueva dirección laboral orientada al desarrollo web. Para ello, completé un Bootcamp el cual fortaleció mis habilidades técnicas y blandas.',
        'Descargar CV',
    ],
    Projects: {
        title: 'Proyectos',
        projects: [
            {
                name: 'Starburst TMDB',
                path: starbust,
                linkGithub: 'https://github.com/JulioDalmau/TMDB',
                linkWeb: '',
                description: '',
                skills: ['Node.js', 'React.js', 'Firebase', 'TailwindCSS'],

            },
            {
                name: 'The Perfect Mentor',
                path: tpm,
                linkGithub: 'https://github.com/JulioDalmau/the_perfect_mentor',
                linkWeb: '',
                description: '',
                skills: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'TailwindCSS'],

            },
            {
                name: 'Portfolio',
                path: portfolio,
                linkGithub: 'https://github.com/JulioDalmau/portfolio',
                linkWeb: '',
                description: '',
                skills: ['Node.js', 'React.js', 'TailwindCSS'],

            },
        ]
    },
    Footer: {
        copyright: "Sitio desarrollado por Julio Dalmau 2023."
    }
  },
};

export default data
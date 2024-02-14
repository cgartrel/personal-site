import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/cgartrel',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: 'https://www.linkedin.com/in/mikegartrell/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  {
    link: 'https://twitter.com/mikegartrell',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://scholar.google.com/citations?hl=en&user=NX6eiWYAAAAJ',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  {
    link: 'mailto:mike.gartrell@acm.org',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

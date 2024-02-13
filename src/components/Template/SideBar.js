import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mike Gartrell</h2>
        <p><a href="mailto:mike.gartrell@acm.org">mike.gartrell@acm.org</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m an independent AI researcher focusing on generative AI, language models, and probablistic modeling. Previously, I worked as a senior researcher at the <a href="https://ailab.criteo.com">Criteo AI Lab</a>, and as a post-doc researcher at <a href="https://www.microsoft.com">Microsoft</a>.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="https://cgartrel.github.io/mike-cv.pdf" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mike&apos;Gartrell.</p>
    </section>
  </section>
);

export default SideBar;

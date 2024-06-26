import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mike Gartrell's personal website. Independent AI researcher focusing on "
    + 'generative AI; formerly a reseacher at the Criteo AI Lab and Microsoft.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/mike-cv.pdf" target="_top">CV</Link>, {' '}
        <Link to="/publications">publications</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Based on source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;

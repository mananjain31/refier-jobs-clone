import { Typography } from '@material-ui/core';
import React from 'react';
import './PageFooter.scss'

const PageFooter = () => {
  return <footer>
    <div className="footer1">
      <section>
        <div className="header"><Typography variant='h5'>Discover</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
          <div className="item"><Typography>College</Typography></div>
          <div className="item"><Typography>Enterprise</Typography></div>
          <div className="item"><Typography>Blog</Typography></div>
          <div className="item"><Typography>ISA</Typography></div>
          <div className="item"><Typography>Newsletter</Typography></div>
        </div>
      </section>
      <section>
        <div className="header"><Typography variant='h5'>Discover</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
          <div className="item"><Typography>College</Typography></div>
          <div className="item"><Typography>Enterprise</Typography></div>
          <div className="item"><Typography>Blog</Typography></div>
          <div className="item"><Typography>ISA</Typography></div>
          <div className="item"><Typography>Newsletter</Typography></div>
        </div>
      </section>
      <section>
        <div className="header"><Typography variant='h5'>Discover</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
          <div className="item"><Typography>College</Typography></div>
          <div className="item"><Typography>Enterprise</Typography></div>
          <div className="item"><Typography>Blog</Typography></div>
          <div className="item"><Typography>ISA</Typography></div>
          <div className="item"><Typography>Newsletter</Typography></div>
        </div>
      </section>
      <section>
        <div className="header"><Typography variant='h5'>Company</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
        </div>
      </section>
      <section>
        <div className="header"><Typography variant='h5'>Company</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
        </div>
      </section>
      <section>
        <div className="header"><Typography variant='h5'>Contact</Typography></div>
        <div className="items">
          <div className="item"><Typography>Jobs</Typography></div>
          <div className="item"><Typography>Jobseeker</Typography></div>
        </div>
      </section>
    </div>
    <hr />
    <div className="footer2">
      <div>
        Clone by <a href="https://github.com/mananjain31">https://github.com/mananjain31</a>
        , original website : <a href='https://refier.com/jobs/'>https://refier.com/jobs/</a>
      </div>
      <div className='items'>
        <div className="item">Privacy Policy</div>
        <div className="item border">Terms</div>
        <div className="item">Sitemap</div>
      </div>
    </div>
  </footer>;
};

export default PageFooter;

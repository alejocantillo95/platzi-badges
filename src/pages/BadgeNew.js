import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName="Alejandro" 
                lastName="Cantillo" 
                twitter="alejocantillo95" 
                jobTitle="Full Stack JavaScript" 
                avatarUrl="https://s.gravatar.com/avatar/be2cb070b9330f32915c816a50c9f5f0?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;
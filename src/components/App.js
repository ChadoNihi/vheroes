import React  from 'react';
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';

const App = (props) => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button">
      <Header title="Vegan Heroes" subtitle="that I'm aware of" />
      <main className="mdl-layout__content">
        {this.props.children}
        <Footer />
      </main>
    </div>
  )
}

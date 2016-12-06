import React  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import { changeHero } from '../actions/actions';
import Header from './Header';
//import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    /*this.props.dispatch(fetchPolls());
    this.props.dispatch(fetchUser());*/
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button">
        <Header title="Vegan Heroes" subtitle="those I'm aware of" />
        <main className="mdl-layout__content">
          {this.props.children}
          {/*<Footer />*/}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
    heroInFocus: state.heroInFocus,
    sortBy: state.sortBy
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextHero: (currId) => {
      dispatch(changeHero(currId+1));
    },
    onPrevHero: (currId) => {
      dispatch(changeHero(currId-1));
    }
  }
}

const TheApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TheApp;

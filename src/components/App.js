import React  from 'react';
import {Link, Match, Miss, Redirect} from 'react-router';
import {connect} from 'react-redux';

import { changeHero } from '../actions/actions';
import Header from './Header';
import About from './About';
import HeroGrid from './HeroGrid';
import HeroSlider from './HeroSlider';
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
      <div className="mdl-layout mdl-js-layout">
        {/*<Header title="Vegan Heroes" subtitle="those I'm aware of" />*/}
        <main className="mdl-layout__content">
          <Match exactly pattern='/' component={HeroGrid} />
          <Match exactly pattern='/about' component={About} />
          <Match pattern='/hero/:heroId?' render={(props)=> <HeroSlider {...props} heroes={this.props.heroes || []} />} />
          <Miss render={()=> <h2>No pages for such address</h2>} />
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

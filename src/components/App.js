import React  from 'react';
import {Link, Match, Miss, Redirect} from 'react-router';
import {connect} from 'react-redux';

import { changeHero, setSortBy } from '../actions/actions';
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

  onSortClick(e) {
    if (e.currentTarget.value === this.props.sortBy) {

    } else {
      this.props.changeSort(e.currentTarget.value);
    }
  }

  render() {
    const sortedHeroes = (this.props.heroes ?
      this.props.heroes.slice().sort((h1, h2)=> {
        
      }) : []);

    return (
      <div className="mdl-layout mdl-js-layout">
        {/*<Header onSortClick={this.onSortClick} sortBy={this.props.sortBy || 'id'} title="Vegan Heroes" subtitle="those I'm aware of" />*/}
        <main className="mdl-layout__content">
          <Match exactly pattern='/' render={()=> <HeroGrid heroes={sortedHeroes} />} />
          <Match exactly pattern='/about' component={About} />
          <Match pattern='/hero/:heroId?' render={(props)=> <HeroSlider {...props} heroes={sortedHeroes} />} />
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
    changeSort: (sortBy) => {
      dispatch(setSortBy(sortBy));
    },
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

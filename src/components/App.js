import React  from 'react';
import {Link, Match, Miss, Redirect} from 'react-router';
import {connect} from 'react-redux';

import { changeHero, changeDragLock, setSortBy } from '../actions/actions';
import {reverseSortSuffix, siteName} from '../constants';
import {shuffleArray} from '../utils';
import Header from './Header';
import Drawer from './Drawer';
import About from './About';
import HeroGrid from './HeroGrid';
import HeroSlider from './HeroSlider';
import SharePanel from './SharePanel';
import ToTheTopBtn from './ToTheTopBtn';
//import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.description = "A website featuring bright people whose primary cause contributes to reducing suffering in the world.";
    this.hashtags = ['inspiration', 'vegan'];

    this.onDragLockChange = this.onDragLockChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  componentDidMount() {
    /*this.props.dispatch(fetchPolls());
    this.props.dispatch(fetchUser());*/
  }

  onDragLockChange() {
    this.props.onDragLockChange(!this.props.isDragLocked);
  }

  onSortChange(e) {
    if (e.currentTarget.value === 'rand') {
      this.props.changeSort(e.currentTarget.value + Math.random());
    }
    else if (e.currentTarget.value !== this.props.sortBy) {
      this.props.changeSort(e.currentTarget.value);
    }
  }

  orderHeroesBySortKey() {
    if (!this.props.heroes) return [];

    let heroesCopy = this.props.heroes.slice();

    if (this.props.sortBy.startsWith('rand')) {
      shuffleArray(heroesCopy);
    }
    else {
      const altFactor = this.props.sortBy.endsWith(reverseSortSuffix) ? -1 : 1;
      const sortKey = altFactor === 1 ?
              this.props.sortBy : this.props.sortBy.substring(0, this.props.sortBy.length - reverseSortSuffix.length) ;
      heroesCopy.sort((h1, h2)=> {
        if (h1[sortKey] < h2[sortKey]) return -1 * altFactor;
        else if (h1[sortKey] > h2[sortKey]) return 1 * altFactor;
        else return 0;
      });
    }

    return heroesCopy;
  }

  render() {
    const sortedHeroes = this.orderHeroesBySortKey();
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <span id='top'></span>
        <Match pattern='/' render={(props)=> <Header {...props} isDragLocked={this.props.isDragLocked} onDragLockChange={this.onDragLockChange} onSortChange={this.onSortChange} sortBy={this.props.sortBy || 'id'} title={siteName} />} />
        <Drawer title={siteName} />
        <main className="mdl-layout__content">
          <Match exactly pattern='/' render={()=> <HeroGrid heroes={sortedHeroes} />} />
          <Match exactly pattern='/about' component={About} />
          <Match pattern='/hero/:heroId?' render={(props)=> <HeroSlider {...props} heroes={sortedHeroes} isDragLocked={this.props.isDragLocked} />} />
          <Match exactly pattern='/' render={()=> <SharePanel pathname={'/'} description={this.description} hashtags={this.hashtags} media={'test'} title={'Meet notable contributors to a suffering-free world'} />} />
          <Miss render={()=> <h2>No pages for such address</h2>} />
          <ToTheTopBtn />
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
    isDragLocked: state.isDragLocked,
    sortBy: state.sortBy
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (sortBy) => {
      dispatch(setSortBy(sortBy));
    },
    onDragLockChange: (bool) => {
      dispatch(changeDragLock(bool));
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

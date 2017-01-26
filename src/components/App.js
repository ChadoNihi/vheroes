import React  from 'react';
import {Match, Miss, Redirect} from 'react-router';
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
import Footer from './Footer';
import NotFound from './NotFound';

class App extends React.Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  constructor(props) {
    super(props);

    this.description = "A website featuring bright people whose primary cause contributes to reducing suffering in the world.";
    this.hashtags = ['inspiration', 'vegan'];

    this.afterHeroChange = this.afterHeroChange.bind(this);
    this.onDragLockChange = this.onDragLockChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  afterHeroChange(newI) {
    this.props.changeHero(newI);
    this.context.router.transitionTo('/hero/'+newI);
  }

  biasedHeroId() {
    var r1 = Math.random();
    while (true) {
      if (r1 < Math.random()) return Math.floor(r1 * this.props.heroes.length)-1;
      r1 = Math.random();
    }
  }

  onDragLockChange() {
    this.props.onDragLockChange(!this.props.isDragLocked);
  }

  onSortChange(e) {
    if (e.currentTarget.value === 'rand') {
      this.props.changeSort(e.currentTarget.value + Math.random());
      this.context.router.transitionTo('/?s=rand');
    }
    else if (e.currentTarget.value !== this.props.sortBy) {
      this.props.changeSort(e.currentTarget.value);
      this.context.router.transitionTo('/?s='+e.currentTarget.value);
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
      <Match pattern='/' render={(props)=> (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <span id='top'></span>
          <Header {...props} isDragLocked={this.props.isDragLocked} onDragLockChange={this.onDragLockChange} onSortChange={this.onSortChange} sortBy={this.props.sortBy || 'id'} title={siteName} />
          <Drawer title={siteName} />
          <main className="mdl-layout__content">
            <Match exactly pattern='/' render={()=> <HeroGrid heroes={sortedHeroes} />} />
            <Match exactly pattern='/about' component={About} />

            <Match pattern='/hero/:heroId?' render={(props)=> {
              const parsedHeroId = parseInt(props.params.heroId);
              if (!isNaN(parsedHeroId) && parsedHeroId >= 0 && parsedHeroId < sortedHeroes.length)
                return <HeroSlider {...props} afterHeroChange={this.afterHeroChange} heroes={sortedHeroes} heroId={parsedHeroId} isDragLocked={this.props.isDragLocked} />;
              else
                return <Redirect to="/hero/0" />;
            }} />

            <Match exactly pattern='/' render={()=> <SharePanel pathname={'/'} description={this.description} hashtags={this.hashtags} media={'test'} title={'Meet notable contributors to a suffering-free world'} />} />
            <Miss render={(location)=> <NotFound location={location} randomHeroId={this.biasedHeroId()} />} />
            <ToTheTopBtn />
            <Footer />
          </main>
        </div>
      )} />
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};

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
    changeHero: (currId) => {
      dispatch(changeHero(currId+1));
    }
  }
}

const TheApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TheApp;

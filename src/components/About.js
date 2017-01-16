import React from 'react';
import { CardActions, Card, CardText, CardTitle } from 'react-mdl';

export default ()=> {
  return (
    <Card className="hero-card" shadow={16}>
      <CardTitle className="hero-card-title general-card-header">
        <h1 className='hero-name'>Expand your think space</h1>
        <h6 className=''>Consider others</h6>
      </CardTitle>
      <CardText className="hero-what">
        Irrespective of what you thinks about this website, you should definetely familiarize oneself with the work of exceptional persons presented here.
      </CardText>
      <CardText className="hero-what">
        Whom to expect to find here? A diverse set of philosophers, scientists, activists, writers, artists, and others with all sorts of professional backgrounds. Often with quite different means, all are working against shared universal disvalue - suffering.
      </CardText>
      <CardText className="hero-what">
        There're no strict criteria of how to end up on the list. For now, combination of positive impact, influence, potential of ideas, visitors' suggestions and other factors - as percieved by the website authors' biased minds - ultimately decides whom to add next.
      </CardText>
      <CardActions>
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect" href='#'>
          Contribute
        </a>
      </CardActions>
    </Card>
  );
}

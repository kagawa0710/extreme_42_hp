import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Secuence } from '../components/Secuence';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>About Extreme_coding_assosiation </Text></h1>
            </header>
            <p><Text>We “Extreme Coding Association” is  assosiation  from 42tokyo. Core members are made up of 42tokyo students.</Text></p>
            <p><Text>We enjoy writing code in extreme situations. For example, I send pull requests at the top of the mountain or write code in a blindfold.</Text></p>
            <p><Text>look forward to your participation！</Text></p>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);

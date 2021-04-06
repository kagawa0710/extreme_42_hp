import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../tools/withStyles';
import { Main } from 'Main';
import { Text } from 'Text';
import { Secuence } from 'Secuence';

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
            <p><Text>We are 42tokyo sutudent.</Text></p>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);

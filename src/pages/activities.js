import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Secuence } from '../components/Secuence';
import { Fader } from '../components/Fader';
import { Link } from '../components/Link';

const styles = theme => ({
  root: {},
  albums: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  album: {
    padding: [0, 0, 20],
    width: '100%'
  },
  albumCover: {
    display: 'block',
    margin: [0, 0, 20],
    width: '100%',

    '& img': {
      margin: 0,
      width: '100%',
      maxWidth: '100%'
    }
  },
  albumFrame: {
    display: 'block',
    width: '100%'
  },

  '@media screen and (min-width: 768px)': {
    album: {
      padding: 10,
      width: '50%'
    }
  }
});

class activities extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
        <Main className={classes.root}>
            <Secuence stagger>
                <h1><Text>activities</Text></h1>
                <div className={classes.albums}>
                    <div className={classes.album}>
                        <Fader className={classes.albumCover}>
                            <Link href='' target='circalgorithm'>
                                <img
                                    alt='pampkin event image'
                                    src='/extreme_42_hp/images/pampkin.png'
                                />
                            </Link>
                        </Fader>
                        <div className={classes.info}>
                            <h3 className={classes.text}>
                                Halloween event
                            </h3>

                            <p className={classes.message}>
                            </p>
                            {/* <p className={classes.} */}
                        </div>
                    </div>
                </div>
                <div className={classes.albums}>
                    <div className={classes.album}>
                        <Fader className={classes.albumCover}>
                            <Link href='https://github.com/Code4Yokohama/code4yokohama.github.io/pull/23' target='circalgorithm'>
                                <img
                                    alt='pull request image'
                                    src='/extreme_42_hp/images/atSotakesan.jpeg'
                                />
                            </Link>
                        </Fader>
                        <div className={classes.info}>
                            <h3 className={classes.text}>
                                pull request
                                <br />at Mt.sotakesan
                            </h3>

                            <p className={classes.message}></p>
                            {/* <p className={classes.} */}
                        </div>
                    </div>
                  </div>
                    <div className={classes.albums}>
                      <div className={classes.album}>
                        <Fader className={classes.albumCover}>
                          <Link href='https://hackday.jp/' target='circalgorithm'>
                            <img
                              alt='hackday-event 2021 image'
                              src="https://pbs.twimg.com/media/ExGMiW1UUAE7xax?format=jpg&name=large"
                            />
                          </Link>
                        </Fader>
                        <div className={classes.info}>
                          <h3 className={classes.text}>
                            Hackday 2021 __ONLINE__
                          </h3>
                          <p className={classes.message}>
                            Extreme member Participated!
                          </p>
                        </div>
                      </div>
                    </div>
            </Secuence>
        </Main>
    );
  }
}

export default withStyles(styles)(activities);

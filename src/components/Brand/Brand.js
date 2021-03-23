import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor () {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      }
    });
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'reverse',
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      }
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link
          className={classes.link}
          href={link}
          title='42_Extreme logout'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>Extreme</span>
          <svg
            ref={ref => (this.svgElement = ref)}
            className={classes.svg}
            viewBox='0 0 1400 92'
            xmlns='http://www.w3.org/2000/svg'
            onMouseEnter={() => sounds.hover.play()}
          >
            {/* E */}
            {/* <path className={classes.path} d='M263,81 L158,81 L158,10 L501,10' /> */}
            {/* <path className={classes.path} d='M158,46 L208,46' /> */}

            {/* X */}
            {/* <path className={classes.path} d='M290,81 L378,37' /> */}
            {/* <path className={classes.path} d='M290,37 L378,81' /> */}

            {/* T */}
            {/* <path className={classes.path} d='M449,81 L449,10' /> */}

            <path className={classes.path} d='M290,2 L290,81 L369,81' />
            <path className={classes.path} d='M317,46 L333,46' />
            <path className={classes.path} d='M308,10 L394,10 L474,90 M386,90 L474,2' />
            <path className={classes.path} d='M481,10 L603,10 M523,18 L523,89' />
            <path className={classes.path} d='M611,89 L611,10 L699,10 L699,46 L623,46 L699,77' />
            <path className={classes.path} d='M740,2 L740,81 L819,81' />
            <path className={classes.path} d='M767,46 L783,46' />
            <path className={classes.path} d='M758,10 L819,10' />
            <path className={classes.path} d='M850,100 L850,0 L890,70 L940,0, L940,100' />
            <path className={classes.path} d='M980,2 L980,81 L1059,81' />
            <path className={classes.path} d='M1003,46 L1023,46' />
            <path className={classes.path} d='M992,10 L1059,10' />
          </svg>
          {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716.67 276.92"><defs><style>.cls-1{font - size:100px;font-family:AcademyEngravedLetPlain, Academy Engraved LET;}</style></defs><text class="cls-1" transform="translate(101.47 165.01)">EXTREME</text><text x="-311.28" y="-269.54" /></svg> */}
        </Link>
      </h1>
    );
  }
}

export { Component };

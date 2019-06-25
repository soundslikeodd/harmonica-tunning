import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { labelizeNote } from './tunningGenerator';
import './description.scss';

class Description extends PureComponent {
  render() {
    const {
      musicKey,
      tunning,
    } = this.props;
    const decration = tunning.toLowerCase().includes('minor') ? 'm' : '';
    return (
      <section className="dscrpt">
        <span className="dscrpt--ky">
          {labelizeNote(musicKey)}
          {decration}
        </span>
        {' '}
        <span className="dscrpt--tn">
          {tunning}
        </span>
      </section>
    );
  }
}

Description.propTypes = {
  musicKey: PropTypes.string.isRequired,
  tunning: PropTypes.string.isRequired,
};

export default Description;

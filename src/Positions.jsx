import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { labelizeNote } from './tunningGenerator';
import './positions.scss';

const appendOrdinalIndicator = n => (n - 1 >= 0 ? `${n}${['st', 'nd', 'rd', ...(new Array(9).fill('th'))][n - 1]}` : n);

class Positions extends PureComponent {
  render() {
    const {
      positions,
      minorPositions,
    } = this.props;
    return (
      <section className="pstn">
        <div
          className="pstn--tbl-i"
        >
          <div className="pstn--tbl-nm">
                        Position
          </div>
          <div className="pstn--tbl-n">
                        Key
          </div>
        </div>
        {positions.map((n, i) => (
          <div
            key={n}
            className="pstn--tbl-i"
          >
            <div className="pstn--tbl-nm">
              {appendOrdinalIndicator(i + 1)}
            </div>
            <div className="pstn--tbl-n">
              {labelizeNote(n)}
            </div>
            <div className="pstn--tbl-n">
              {labelizeNote(minorPositions[i])}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

Positions.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  minorPositions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Positions;

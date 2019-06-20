/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { labelizeNote } from './tunningGenerator';
import './tunning.scss';

class Tunning extends PureComponent {
  render() {
    const {
      notes,
    } = this.props;
    return (
      <section className="tng-table">
        <div className="tng-row">
          <div className="legend">
                        Whole
          </div>
          {notes.wholeBlowBend.map((n, i) => (n ? (
            <div
              key={`whole-blow-bend-${n}-${i}`}
              className="bnd"
            >
              <div
                className="tng--hl tng--hl-nt"
              >
                {labelizeNote(n)}
              </div>
            </div>
          ) : (
            <div
              key={`whole-blow-bend-${n}-${i}`}
              className="tng--empty"
            />
          )))}
        </div>
        <div className="tng-row">
          <div className="legend">
                        1/2
          </div>
          {notes.halfBlowBend.map((n, i) => (n ? (
            <div
              key={`half-blow-bend-${n}-${i}`}
              className="bnd"
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ) : (
            <div
              key={`half-blow-bend-${n}-${i}`}
              className="tng--empty"
            />
          )))}
        </div>
        <div className="tng-row">
          <div className="legend blw">
                        BLOW
          </div>
          {notes.blow.map((n, i) => (
            <div
              key={`blow-${n}-${i}`}
              className="blw"
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ))}
        </div>
        <div className="tng-row">
          <mark className="legend" />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
            <div
              key={`hole-${n}`}
              className="tng--hl tng--hl-nb"
            >
              {n}
            </div>
          ))}
        </div>
        <div className="tng-row">
          <div className="legend drw">
                        DRAW
          </div>
          {notes.draw.map((n, i) => (
            <div
              className="drw"
              key={`draw-${n}-${i}`}
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ))}
        </div>
        <div className="tng-row">
          <div className="legend">
                        1/2
          </div>
          {notes.halfDrawBend.map((n, i) => (n ? (
            <div
              key={`half-draw-bend-${n}-${i}`}
              className="bnd"
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ) : (
            <div
              key={`half-draw-bend-${n}-${i}`}
              className="tng--empty"
            />
          )))}
        </div>
        <div className="tng-row">
          <div className="legend">
                        Whole
          </div>
          {notes.wholeDrawBend.map((n, i) => (n ? (
            <div
              key={`whole-draw-bend-${n}-${i}`}
              className="bnd"
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ) : (
            <div
              key={`whole-draw-bend-${n}-${i}`}
              className="tng--empty"
            />
          )))}
        </div>
        <div className="tng-row">
          <div className="legend">
                        1.5
          </div>
          {notes.wholeHalfDrawBend.map((n, i) => (n ? (
            <div
              key={`whole-half-draw-bend-${n}-${i}`}
              className="bnd"
            >
              <div className="tng--hl tng--hl-nt">
                {labelizeNote(n)}
              </div>
            </div>
          ) : (
            <div
              key={`whole-half-draw-bend-${n}-${i}`}
              className="tng--empty"
            />
          )))}
        </div>
        <div className="tng-row tng-row-lgnd">
          <span className="tng-lgnd tng-lgnd-bnd">
            Bend
          </span>
          <span className="tng-lgnd tng-lgnd-ovrblw">
            Overblow
          </span>
        </div>
      </section>
    );
  }
}

Tunning.propTypes = {
  notes: PropTypes.shape({}).isRequired,
};

export default Tunning;

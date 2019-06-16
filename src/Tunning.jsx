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
          <div className="legend blw-bnd">
                        Whole Bend
          </div>
          {notes.wholeBlowBend.map((n, i) => (n ? (
            <div className="blw-bnd">
              <div
                key={`whole-blow-bend-${n}-${i}`}
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
          <div className="legend blw-bnd">
                        1/2 Bend
          </div>
          {notes.halfBlowBend.map((n, i) => (n ? (
            <div className="blw-bnd">
              <div
                key={`half-blow-bend-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
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
            <div className="blw">
              <div
                key={`blow-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
                {labelizeNote(n)}
              </div>
            </div>
          ))}
        </div>
        <div className="tng-row">
          <mark className="legend" />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, i) => (
            <div
              key={`hole-${n}-${i}`}
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
            <div className="drw">
              <div
                key={`draw-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
                {labelizeNote(n)}
              </div>
            </div>
          ))}
        </div>
        <div className="tng-row">
          <div className="legend drw-bnd">
                        1/2 Bend
          </div>
          {notes.halfDrawBend.map((n, i) => (n ? (
            <div className="drw-bnd">
              <div
                key={`half-draw-bend-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
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
          <div className="legend drw-bnd">
                        Whole Bend
          </div>
          {notes.wholeDrawBend.map((n, i) => (n ? (
            <div className="drw-bnd">
              <div
                key={`whole-draw-bend-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
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
          <div className="legend drw-bnd">
                        1.5 Bend
          </div>
          {notes.wholeHalfDrawBend.map((n, i) => (n ? (
            <div className="drw-bnd">
              <div
                key={`whole-half-draw-bend-${n}-${i}`}
                className="tng--hl tng--hl-nt"
              >
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
      </section>
    );
  }
}

Tunning.propTypes = {
  notes: PropTypes.shape({}).isRequired,
};

export default Tunning;

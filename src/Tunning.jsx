import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {labelizeNote} from './tunningGenerator';
import './tunning.scss';

class Tunning extends Component {
    render() {
        const {
            musicKey,
            tunning,
            notes
        } = this.props;
        return (
            <section className="tng-table">
                <div className="tng-title">
                    {tunning} {labelizeNote(musicKey)}
                </div>
                <div className="tng-row blw-bnd">
                    <div className="legend">
                        Whole Bend
                    </div>
                    {notes.wholeBlowBend.map((n, i) => n ? (
                        <div
                            key={`whole-blow-bend-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ) : (
                        <div
                            key={`whole-blow-bend-${n}-${i}`}
                            className="tng--empty"
                        />
                    ))}
                </div>
                <div className="tng-row blw-bnd">
                    <div className="legend">
                        1/2 Bend
                    </div>
                    {notes.halfBlowBend.map((n, i) => n ? (
                        <div
                            key={`half-blow-bend-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ) : (
                        <div
                            key={`half-blow-bend-${n}-${i}`}
                            className="tng--empty"
                        />
                    ))}
                </div>
                <div className="tng-row blw">
                    <div className="legend">
                        BLOW
                    </div>
                    {notes.blow.map((n, i) => (
                        <div 
                            key={`blow-${n}-${i}`} 
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
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
                <div className="tng-row drw">
                    <div className="legend">
                        DRAW
                    </div>
                    {notes.draw.map((n, i) => (
                        <div
                            key={`draw-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ))}
                </div>
                <div className="tng-row drw-bnd">
                    <div className="legend">
                        1/2 Bend
                    </div>
                    {notes.halfDrawBend.map((n, i) => n ? (
                        <div
                            key={`half-draw-bend-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ) : (
                        <div
                            key={`half-draw-bend-${n}-${i}`}
                            className="tng--empty"
                        />
                    ))}
                </div>
                <div className="tng-row drw-bnd">
                    <div className="legend">
                        Whole Bend
                    </div>
                    {notes.wholeDrawBend.map((n, i) => n ? (
                        <div
                            key={`whole-draw-bend-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ) : (
                        <div
                            key={`whole-draw-bend-${n}-${i}`}
                            className="tng--empty"
                        />
                    ))}
                </div>
                <div className="tng-row drw-bnd">
                    <div className="legend">
                        1.5 Bend
                    </div>
                    {notes.wholeHalfDrawBend.map((n, i) => n ? (
                        <div
                            key={`whole-half-draw-bend-${n}-${i}`}
                            className="tng--hl tng--hl-nt"
                        >
                            {labelizeNote(n)}
                        </div>
                    ) : (
                        <div
                            key={`whole-half-draw-bend-${n}-${i}`}
                            className="tng--empty"
                        />
                    ))}
                </div>
            </section>
        );
    }
}

Tunning.propTypes = {
    musicKey: PropTypes.string.isRequired,
    tunning: PropTypes.string.isRequired,
    notes: PropTypes.shape({
        blow: PropTypes.arrayOf(PropTypes.string),
        draw: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
}

export default Tunning;

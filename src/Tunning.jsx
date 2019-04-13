import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                <h3>
                    {tunning} {musicKey}
                </h3>
                <div className="tng-row">
                    <div className="legend blw">
                        BLOW
                    </div>
                    {notes.blow.map((n, i) => <div key={`blow-${n}-${i}`} className="tng--nt blw">{n}</div>)}
                </div>
                <div className="tng-row">
                    <div className="legend drw">
                        DRAW
                    </div>
                    {notes.draw.map((n, i) => <div key={`draw-${n}-${i}`} className="tng--nt drw">{n}</div>)}
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

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Description from './Description';
import Positions from './Positions';
import Tunning from './Tunning';
import {
  ALL_NOTES, TUNNING_TO_GENERATOR, TUNNING_TO_POSITIONS, TUNNING_TO_POSITIONS_MINOR, labelizeNote,
} from './tunningGenerator';
import './app.scss';

const cleanParam = param => param.toLowerCase().replace(/ /g, '-').replace(/#/g, 'flat');

class App extends Component {
  constructor(props) {
    super(props);
    const {
      initalState: {
        key = 'c',
        tunning = 'richter',
      } = {
        key: 'c',
        tunning: 'richter',
      },
    } = props;
    const cleanedKey = key.replace('flat', '#');
    const finalKey = ALL_NOTES.includes(cleanedKey) ? cleanedKey : 'c';
    const selectedKey = { value: finalKey, label: labelizeNote(finalKey) };
    const cleanedTunning = tunning.includes('-') ? tunning.split('-').map(i => `${i.charAt(0).toUpperCase()}${i.substring(1)}`).join(' ') : `${tunning.charAt(0).toUpperCase()}${tunning.substring(1)}`;
    const finalTunning = Object.keys(TUNNING_TO_GENERATOR).includes(cleanedTunning) ? cleanedTunning : 'Richter';
    const selectedTunning = { value: finalTunning, label: finalTunning };
    this.state = {
      selectedKey,
      selectedTunning,
    };
  }

  render() {
    const {
      selectedKey,
      selectedTunning,
    } = this.state;
    const {
      paramUpdater,
    } = this.props;
    return (
      <Fragment>
        <main id="app">
          <header id="app--hdr">
            <h2>
                            Harmonica Tunnings
            </h2>
          </header>
          <section id="app--mn">
            <aside id="app--mn-controls">
              <label>
                Key
                <Select
                  className="root-select"
                  value={selectedKey}
                  onChange={(n) => {
                    this.setState({ selectedKey: n });
                    paramUpdater({ key: cleanParam(n.value) });
                  }}
                  options={ALL_NOTES.map(n => ({ value: n, label: labelizeNote(n) }))}
                />
              </label>
              <label>
                Tunning
                <Select
                  className="tunning-select"
                  value={selectedTunning}
                  onChange={(n) => {
                    this.setState({ selectedTunning: n });
                    paramUpdater({ tunning: cleanParam(n.value) });
                  }}
                  options={Object.keys(TUNNING_TO_GENERATOR).map(n => ({ value: n, label: n }))}
                />
              </label>
            </aside>
            <Description
              musicKey={selectedKey.value}
              tunning={selectedTunning.value}
            />
            <Positions
              positions={TUNNING_TO_POSITIONS[selectedTunning.value](selectedKey.value)}
              minorPositions={
                TUNNING_TO_POSITIONS_MINOR[selectedTunning.value]
                  ? TUNNING_TO_POSITIONS_MINOR[selectedTunning.value](selectedKey.value)
                  : [null, null, null, null]
              }
            />
            <Tunning
              musicKey={selectedKey.value}
              tunning={selectedTunning.value}
              notes={TUNNING_TO_GENERATOR[selectedTunning.value](selectedKey.value)}
            />
          </section>
        </main>
        <footer id="footer">
          <div className="ftr-logo">
            <div className="goat-logo" alt="soundslikeodd goat" />
            <div className="copyright">
              <div>
                soundslikeodd
              </div>
              <div>
                copyright
                {` ${new Date().getFullYear()}`}
              </div>
            </div>
          </div>
          <div className="ftr-contact">
                    Contact:
                    &#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#099;&#111;
                    &#110;&#116;&#097;&#099;&#116;&#046;&#099;&#111;&#109;
          </div>
        </footer>
      </Fragment>
    );
  }
}

App.propTypes = {
  paramUpdater: PropTypes.func.isRequired,
  initalState: PropTypes.shape({}).isRequired,
};

export default App;

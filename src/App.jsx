import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Description from './Description';
import Positions from './Positions';
import Tunning from './Tunning';
import {
  ALL_NOTES, TUNNING_TO_GENERATOR, TUNNING_TO_POSITIONS, labelizeNote,
} from './tunningGenerator';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: { value: 'c', label: 'C' },
      selectedTunning: { value: 'Richter', label: 'Richter' },
    };
  }

  render() {
    const {
      selectedKey,
      selectedTunning,
    } = this.state;
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
                  onChange={n => this.setState({ selectedKey: n })}
                  options={ALL_NOTES.map(n => ({ value: n, label: labelizeNote(n) }))}
                />
              </label>
              <label>
                Tunning
                <Select
                  className="tunning-select"
                  value={selectedTunning}
                  onChange={n => this.setState({ selectedTunning: n })}
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
            soundslikeodd
            <div className="copyright">
              copyright
              {` ${new Date().getFullYear()}`}
            </div>
          </div>
          <div className="ftr-contact">
                    Contact: &#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#099;&#111;&#110;
                    &#116;&#097;&#099;&#116;&#046;&#099;&#111;&#109;
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;

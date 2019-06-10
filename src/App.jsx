import React, {Component, Fragment} from 'react';
import Select from 'react-select';
import Tunning from './Tunning';
import ALL_NOTES, {richterGenerator, labelizeNote} from './tunningGenerator';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: {value: 'c', label: 'c'}
        };
    }

    render() {
        const {
            selectedKey
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
                        <Select
                            className="root-select"
                            value={selectedKey}
                            onChange={n => this.setState({selectedKey: n})}
                            options={ALL_NOTES.map(n => ({value: n, label: labelizeNote(n)}))}
                        />
                        <Tunning
                            musicKey={selectedKey.value}
                            tunning="richter"
                            notes={richterGenerator(selectedKey.value)}
                        />
                    </section>
                </main>
                <footer id="footer">
                    contact
                </footer>
            </Fragment>
        );
    }
}

export default App;

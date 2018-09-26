import React, { Component } from 'react';
import Headers from "./components/Headers/Headers";
import UnderHeaderImage from "./components/UnderHeaderImage/UnderHeaderImage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Headers />
                <UnderHeaderImage />
            </div>
    );
  }
}

export default App;

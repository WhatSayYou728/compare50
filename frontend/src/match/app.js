import React from 'react';

import './app.css';
import SideBar from './sidebar';
import Logo from './logo';
import SplitView from './code/splitview';


class App extends React.Component {
    render() {
        return (
            <div className="row-box" style={{"height":"100vh"}}>
              <div className="row auto" style={{"width":"9em"}}>
                  <div className="column-box" style={{"borderRight": "1px solid #a7adba"}}>
                      <div className="row auto">
                          <Logo height="2.5em"/>
                      </div>
                      <div className="row fill">
                          <SideBar/>
                      </div>
                  </div>
              </div>
              <div className="row fill">
                  <SplitView top_height="2.5em"/>
              </div>
            </div>
        );
    }
}

export default App;

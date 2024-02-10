import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      
        
        <Router>
        <Navbar/>
       <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5}  country={'in'} category={'general'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/business" element={<News key="business" pageSize={5}  country={'in'} category={'business'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5}  country={'in'} category={'entertainment'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/sports" element={<News  key="sports" pageSize={5}  country={'in'} category={'sports'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/health" element={<News key="health" pageSize={5}  country={'in'} category={'health'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/science" element={<News key="science" pageSize={5}  country={'in'} category={'science'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={5}  country={'in'} category={'technology'} apikey={"1eee192f61334825a7d35894619b59df"} />}/>       
        </Routes>
      </Router>
      </div>
    )
  }
}

import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './celebrity-app/Home';
import { Bio } from './celebrity-app/Bio';
import { SocialMedia } from './celebrity-app/SocialMedia';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <section>
            <nav className='nav'>
                <div className="max-width">
                    <div className="logo"><a href="#">Kamal <span>Haasan</span></a></div>
                        <ul className="menu">
                            <Nav.Link as={Link} to="/" className='li'><a>HOME</a></Nav.Link>
                            <Nav.Link as={Link} to="/bio" className='li'><a>BIO</a></Nav.Link>
                            <Nav.Link as={Link} to="/media" className='li'><a>SOCIAL MEDIA</a></Nav.Link>
                        </ul>
                  </div>
            </nav>
            <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bio" element={<Bio />} />
                  <Route path="/media" element={<SocialMedia />} />
                </Routes>
            </div>
          </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

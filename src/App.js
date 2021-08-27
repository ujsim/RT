import React, {useState} from 'react'
import HEROS from '../src/data/db.json'
import styled from 'styled-components';
import HeroBio from './Pages/HeroBio';
import { Route, Switch, Link } from 'react-router-dom'


const CONTENTWRAPPER = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 24px auto;
`;
const SECTION = styled.section`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 24px auto;
    a{
      text-decoration:none
    }
    li{
      color:#000;
    }
`;

const Input = styled.input`
    padding: 0.8em;
    background: #f4f4f4;
    border: 1px solid #b3aeae;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 0.5em;
}
`;

function App() {
  const [heroName, setHeroName] = useState('');
  const [foundHero, setFoundHero] = useState(HEROS);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = HEROS.filter((hero) => {
        return hero.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundHero(results);
    } else {
      setFoundHero(HEROS);
    }
    setHeroName(keyword);
  };

  return (
    <div className="App">
        <CONTENTWRAPPER>
          <Input
              type="search"
              value={heroName}
              onChange={filter}
              className="input"
              placeholder="Hero Filter"
          />
          <SECTION>
          <Switch>
              <Route path="/:name" component={HeroBio} />
          </Switch>
          
          {foundHero && foundHero.length > 0 ? (
            foundHero.map((hero) => (
              <ul key={hero.name} className="hero">    
                <Link to={{pathname:hero.name, state:hero}} >
                    <li hero={hero}>{hero.name}</li> 
                </Link> 
                                  
              </ul>

              ))
              ) : (
              <h1>No results found!</h1>
          )}
          </SECTION> 
        </CONTENTWRAPPER>                                                            
    </div>
  );
}

export default App;

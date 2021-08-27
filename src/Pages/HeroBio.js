import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom'
import NemesisBio from '../Pages/NemesisBio'

const Input = styled.input`
    padding: 0.8em;
    background: #f4f4f4;
    border: 1px solid #b3aeae;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 0.5em;
}
`;


export default function HeroBio(props) {

  const heroData = props.location.state 
  // console.log("nemesis", heroData.nemesis)

  const {name} = useParams();
  const [nemesis, setNemesis] = useState('');
  const [foundNemesis, setFoundNemesis] = useState(heroData.nemesis);

const filter = (e) => {
  const keyword = e.target.value;
  if (keyword !== '') {
    const results = heroData.nemesis.filter((item) => {
      return item.name.toLowerCase().startsWith(keyword.toLowerCase());
    });
    setFoundNemesis(results);
  }else{
    setFoundNemesis(heroData.nemesis);
  }
  setNemesis(keyword);
};

    return ( 
    <div>

      <Input
             type="search"
              value={nemesis}
              onChange={filter}
              className="input"
              placeholder="Nemesis Filter"/>

   
            <h2>Hero Bio</h2>
            Super Hero:- {name}
              <br/>
            Real Name:- 
            {heroData.realname}
            <br/>
            Hobby:- {heroData.hobby}
            <br/>
            {
              heroData.power.map(function(item, index) {
                return  <span key={`hero${index}`}> { (index ? ', ' : '') + item }</span> ;
              })
            } 
    

       <h2>List of nemesis</h2>

      

       {foundNemesis && foundNemesis.length > 0 ? (
        foundNemesis.map(obj => (
                  <ul key={obj.name}>
                      <Link to={{pathname:obj.name, state:obj}} >
                        <li>{obj.name} </li>
                      </Link> 
                     
                  </ul>
              ))
              ) : (
              <h1>No results found!</h1>
          )}
          <h5>hero bio page end</h5>
          <hr/>

          <Switch>
              <Route path="/:name" component={NemesisBio} />
              {/* <Route path="/:name" component={NemesisBio} /> */}
        </Switch>
    </div> 

 
    );
}

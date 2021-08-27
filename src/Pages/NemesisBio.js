import React from 'react'

export default function NemesisBio(props) {

  const nemesis = props.location.state 

    const {
        nemesis:[{name:nemesisName, bio, firstAppearance}],
      } = nemesis;
    return ( 
       <div>
        <div>
           Hero Name / Nemesis / Nemesis-name
        </div>
        <div>   
               <h2>Nemesis Bio</h2>
                Nemesis name:- {nemesisName}
                  <br/>
                  Nemesis Bio:- {bio}
                  <br/>
                Nemesis First Appearance:- {firstAppearance}
        </div>
       </div> 
    );
}

import React from 'react';
const Patient=props  => { 
    var id = ''//props.match.params.id
    return(
    <div>
        <h1>Patient Details</h1>
        ID:{id}        
    </div>
);
}
export default Patient;
import React, { useState, useEffect } from 'react';


const Country = ({country}) => {
    return (
        <div>

            <h2>{country.capital}</h2>
        </div>
    );
};

export default Country;
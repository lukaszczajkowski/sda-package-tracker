import React from 'react';

import Card from '../molecules/Card';

export default function MyPackages({match, data}) {
    
    const query = JSON.stringify(match.params.query);

    const results = data.filter((item) => {
        if(query.includes(item.user_name)){
            return item;
        }
    });

    const Cards = results.map((item) => {
        return <Card key = {item.id} data = {item}/> 
    });
        
    return(
        <div className = "my-packages">
            {Cards}
        </div>
    );
}
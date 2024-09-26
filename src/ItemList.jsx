import { getAllByPlaceholderText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

function Item({ name, isPacked = false }) {
    return (
        <li>
            {isPacked ? name + ' ✔' : name + ' ✘'}
        </li>
    );
}

export default function ItemList() {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        console.log("This component is loaded");

        return()=>{
            console.log("This component is unloaded");
        }
    },[]);

    const items = [
        { name: "Sunglasses", isPacked: true },
        { name: "Sunblock", isPacked: false },
        { name: "Swimming suit", isPacked: true },
        { name: "Towel", isPacked: false },
        { name: "Powerbank", isPacked: false }
    ];

    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemList = filteredItems.map(item => 
        <Item key={item.name} name={item.name} isPacked={item.isPacked} />
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search items..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul>
                {itemList}
            </ul>
        </div>
    );
}

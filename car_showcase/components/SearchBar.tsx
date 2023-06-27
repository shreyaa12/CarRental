'use client';

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const handleSearch = ()=> {}
const SearchBar = () =>{

    const [manufacturer, setManufacturer] = useState('');

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
                />
            </div>
        </form>
    )
}

export default SearchBar;

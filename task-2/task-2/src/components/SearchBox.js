import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input style = {{backgroundColor : 'green'}} 
                className='pa3 ba b--black
                '
                 type="search" 
                 placeholder='Enter Your Name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;


import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onHandleSubmit = (e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`
            );
            setSearchTerm('');
        }
        
    }
    return (
        <>
          <Paper
          components='form'
          onSubmit={onHandleSubmit}
          sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5},
          }}
          
          
          >
            <input
            className='search-bar'
            placeholder='search...'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target)} />
            
            

                <IconButton type="submit" sx={{p:'10px',color:'red'}} arial-label='search'>
                    <SearchIcon />

                </IconButton>
           
            
            </Paper>  
        </>
    )
}

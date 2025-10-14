import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';



export const SearchEngine = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={`searchEngine ${open ? "active" : ""}`}>
        {open && <input type='text'placeholder='...'/>}
        <SearchIcon
         className="i"
         onClick={()=>setOpen(!open)}
         style={{ cursor : "pointer"}}

        />
    </div>
  )
}


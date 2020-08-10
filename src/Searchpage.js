import React from 'react'
import './searchpage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"

function Searchpage() {


    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
        </div>
    )
}

export default Searchpage

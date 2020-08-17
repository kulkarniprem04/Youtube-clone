import React from 'react';
import './DarkTheme.css'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function DarkTheme({ darkmode, toggleChecked }) {
    return (
        <div className={`darktheme ${darkmode === true && "darktheme_enabled"}`}>
            <FormGroup>
                <FormControlLabel
                    className="darktheme_label"
                    control={<Switch size="small" color="default" checked={darkmode} onChange={toggleChecked} />}  
                />
            </FormGroup>
            <h2>Dark theme</h2>
        </div>
    )
}

export default DarkTheme

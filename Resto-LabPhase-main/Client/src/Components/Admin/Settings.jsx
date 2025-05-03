import React, { useState } from 'react'

function Settings() {
    
  return (
    <div>
     
    {/* Settings View */}
    <div  id="settingsView" className="view active">
      <header>
        <h1>Settings</h1>
      </header>
      <div className="settings-form">
        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            id="restaurantName"
            defaultValue="Grilli"
          />
        </div>
        <div className="form-group">
          <label>Opening Hours</label>
          <div className="hours-input">
            <input type="time" id="openingTime" defaultValue="11:00" />
            <span>to</span>
            <input type="time" id="closingTime" defaultValue="23:00" />
          </div>
        </div>
        <div className="form-group">
          <label>Table Reservation Duration (minutes)</label>
          <input
            type="number"
            id="reservationDuration"
            defaultValue={120}
            min={30}
            step={30}
          />
        </div>
        <button  className="btn primary" onclick="saveSettings()">
          Save Settings
        </button>
      </div>
    </div>    
    </div>
  )
}

export default Settings
import React from 'react'

function Statics() {
  return (
    <div>
<main>
  <div className="stats-card">
    <div className="date-picker">
      <label htmlFor="dateSelect">Select Date:</label>
      <input type="date" id="dateSelect" />
    </div>
    <div className="stats-grid">
      <div className="stat-item">
        <h3>Total Reservations</h3>
        <p id="totalReservations">0</p>
      </div>
      <div className="stat-item">
        <h3>Total Guests</h3>
        <p id="totalGuests">0</p>
      </div>
      <div className="stat-item">
        <h3>Average Party Size</h3>
        <p id="avgPartySize">0</p>
      </div>
      <div className="stat-item">
        <h3>Peak Hour</h3>
        <p id="peakHour">--:--</p>
      </div>
    </div>
    <div className="chart-container">
      <canvas id="reservationChart" />
    </div>
  </div>
</main>


    </div>
  )
}

export default Statics
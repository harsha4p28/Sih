import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        
    }
  return (
    <div className='dashboardContainer'>
      <div className='dashboardMainContainer'>
        <h1>Dashboard</h1>
        <div className='dashboardSearch'>
            <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className='dashboardData'>
            <h2>Sample Data</h2>
            <div className='dashboardDataCard'>
                <h2>Sample Card</h2>
                <p>Sample Description</p>
                <button>Sample Button</button>

            </div>
        </div>
        
        <div className='dashboardMap'>
            <h2>Map</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

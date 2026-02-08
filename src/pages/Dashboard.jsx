import React from 'react'
import { Link } from 'react-router'

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/users">To Users</Link>
    </div>
  )
}

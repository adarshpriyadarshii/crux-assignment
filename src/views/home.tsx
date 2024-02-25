import React, { useState } from 'react'
import DefaultLayout from '../layouts/defaultLayout'
import Dashboard from '../components/dashboard'

function Home() {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  )
}

export default Home
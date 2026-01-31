import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Profile from'./Profile.jsx'
import OrderManagement from './OrderManagement.jsx'
import UserCheckoutPage from './UserCheckoutPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    
        <Profile />

        <OrderManagement />
        {/* <UserCheckoutPage /> */}    
        <UserCheckoutPage />
        
    </StrictMode>   
)

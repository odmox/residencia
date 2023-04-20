import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

export default function App({ Component, pageProps }) {
  return(
    <Auth0Provider  
      domain={domain} 
      clientId={clientId}
      redirectUri={ "/" }
    >    
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

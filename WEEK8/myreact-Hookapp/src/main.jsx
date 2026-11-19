import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounter from './Counter'
import EmojiCounter from './EmojeeCounters.jsx'
import Weathermoodwidget from './weathermoodwidget.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ClickCounter/> */}
  {/* <EmojiCounter pic='Love'/> 
<EmojiCounter pic='Sad'/> 
<EmojiCounter pic='Like'/>  */}
< Weathermoodwidget pic='sunny'/> 
<Weathermoodwidget pic='rainy'/> 
<Weathermoodwidget pic='cloudy'/>

  </StrictMode>,
)

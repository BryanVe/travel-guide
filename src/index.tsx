import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import webFontLoader from 'webfontloader'

webFontLoader.load({
  google: {
    families: [
      'Poppins:200,300,400,500,600,700,800,900',
      'Cairo:200,300,400,500,600,700,800,900',
    ],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

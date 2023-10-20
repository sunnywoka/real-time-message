import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './App'

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
)

export default routes

import Header from '../Header'
import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <Header />
    <div>
      <div>
        <img src={notFoundImage} alt="not found" />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  </>
)

export default NotFound

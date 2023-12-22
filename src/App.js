import './app.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Profile} from './Pages/index'
import {Container} from './Components/index'
import {Header,Footer} from './Sections/index'
const App = () => {
    return(
        <div>
            <Router>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/'  element={<Home />}/>
                        <Route path='/Profile'  element={<Profile />}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>

        </div>
    )
}

export default App
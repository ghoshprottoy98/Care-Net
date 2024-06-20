import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';

const App = () => {

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }} >
            <NavigationBar />
            <Landing />
        </div>
    );
}

export default App;

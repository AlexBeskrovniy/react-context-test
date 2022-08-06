import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Main from "./Main";
import Records from "./Records";

const fetchData = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10');
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

const data = await fetchData();

export const DataContext = React.createContext(data);

const App = () => {

    return (
        <DataContext.Provider value={data}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/records" element={<Records />} />
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    );
}

export default App;
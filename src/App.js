import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar"
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import  CheckboxContextProvider  from './context/CheckboxContext';
import BookDeteils from "./components/BookDeteils";

function App() {
  return (
    <div className="App">
      <CheckboxContextProvider>

      <BookContextProvider>

        <Navbar/>
        <BookDeteils />

        <BookList/>
        <BookForm/>

      </BookContextProvider>
      </CheckboxContextProvider>

    </div>
  );
}

export default App;

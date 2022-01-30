import FancyAutocomplete from './Components/FancyAutocomplete';
import FancyButton from './Components/FancyButton';
import SyncAutocomplete from './Components/SyncAutocomplete';
import {Outlet, Link} from 'react-router-dom';

function App() {
  // return (
    // <div >
    //   <FancyButton name={'Celso'} age={57} />   
    //   <FancyAutocomplete />
    //   <SyncAutocomplete />
    // </div>

  // );


  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;

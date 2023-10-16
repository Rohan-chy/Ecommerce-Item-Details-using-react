
import './App.css';
import CustomerReview from './components/CustomerReview';
import Description from './components/Description';
import Product from './components/Product';
import Rating from './components/Rating';
import Size from './components/Size';
import TopBar from './components/TopBar';
import ViewMore from './components/ViewMore';

function App() {
  return (
    <div className='w-[360px] mx-auto my-5'>
    
    <TopBar/><br/>
    <Product/><br/>
    <Rating/>
    <Size/>
    <Description/>
    <CustomerReview/>
    <ViewMore/>
    </div>
  );
}

export default App;

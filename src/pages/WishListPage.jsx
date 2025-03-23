import { Button, Input } from '@heroui/react'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../lib/axios';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WishListPage = () => {

  const selectorCounter = useSelector(state => state.counter);
  const selectorMessage = useSelector(state => state.message);

  const [wishListInput, setWishListInput] = useState('');
  const [wishLists, setWishLists] = useState([]);

  const fetchWishLists = async () => {
    try {
      const response = await axiosInstance.get('/wishlist-items');
      setWishLists(response.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  const addWishList = async () => {
    try {
      await axiosInstance.post('/wishlist-items', { 
        name: wishListInput 
      });
      fetchWishLists();
      setWishListInput('');

      toast.success("Wishlist item added!");
      
    } catch (error) {
      toast.error("Something went wrong!");
    }
  } 

  useEffect(() => {
    fetchWishLists();
  }, []);
  return (
    <> 
      <div className="flex items-center p-4 gap-4">
        <Input 
          value={wishListInput} 
          onChange={() => setWishListInput(event.target.value)} 
          label="Wishlist Item" 
          color="secondary" 
        />
        <Button 
          onPress={addWishList} 
          color="primary">
            Add
        </Button>
      </div>

      <ul className='list-decimal list-inside text-center text-2xl font-semibold'>
        {wishLists.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>

      <Link to='/sign-up'>Sign Up now!</Link>
      <p className='text-2xl font-semibold text-center'>
        Counter Value: {selectorCounter.count}
      </p>
      <p className='text-2xl font-semibold text-center'>
        Message : {selectorMessage}
      </p>
    </>
  )
}

export default WishListPage

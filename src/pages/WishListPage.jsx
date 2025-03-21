import { Button, Input } from '@heroui/react'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../lib/axios';
import { toast } from 'sonner';

const WishListPage = () => {

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
    </>
  )
}

export default WishListPage

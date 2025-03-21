import { Button, Input } from '@heroui/react'
import { useState } from 'react'

function WishListPage() {

  const [wishListInput, setWishListInput] = useState('');
  const [wishLists, setWishLists] = useState([]);

  const addWishList = () => {

    setWishLists([...wishLists, wishListInput]);
    setWishListInput('');
  } 
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
          return <li>{item}</li>;
        })}
      </ul>
    </>
  )
}

export default WishListPage

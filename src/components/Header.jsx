import { useEffect, useState } from 'react';
import Heading from './Heading';
import { Button } from '@heroui/react';
//CARA BARU

const Header = () => {
  const [message, setMessage] = useState('Hello World');

  //ComponentDidMount
  // useEffect(() => {
  //   alertUser();

  //   return () => { //ComponentWillUnmount
  //     alert('WILL UNMOUNT');
  //   }
  // }, []); //ARRAY HARUS KOSONG

  // //ComponentDidUpdate
  // useEffect(() => {
  //   alert('DID UPDATE');
  // }, [message]);

  // const changeMessage = () => {
  //   setMessage('Hello React');
  // }
  
  // const alertUser = () => {
  //   alert('DID MOUNT');
  // }
  return (
    <header style={{
      backgroundColor: 'red',
      padding: '10px',
      fontFamily: 'Arial',
      textAlign: 'center',
      }}>
      <Heading />
      {/* <p>{message}</p>
      <Button onClick={changeMessage}>Change Message</Button> */}
    </header>
  )
}

export default Header
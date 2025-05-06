import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';

export default function App() {
const [showAddFriend, setShowAddFriend] = useState(false)

function handleShowAddFriend() {
  setShowAddFriend((show) => !show)
}

  return (
   <div className='app'>
    <div className='sidebar'>
    <FriendsList />
    {showAddFriend && <FormAddFriend />}
    <Button onClick={handleShowAddFriend}>Add friend</Button>
    </div>
    <FormSplitBill />
   </div>
  )
}

 //8 98 mac mini 

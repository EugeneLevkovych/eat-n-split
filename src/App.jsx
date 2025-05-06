import FriendsList from './components/FriendsList';
import FotmAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

export default function App() {
  return (
   <div className='app'>
    <div className='sidebar'>
    <FriendsList />
    <FotmAddFriend />
    <Button>Add friend</Button>
    </div>
    <FormSplitBill />
   </div>
  )
}

 //8 98 mac mini 

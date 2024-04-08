import styles from './App.module.css'
import Profile from '../Profile/Profile';
import user from '../data/user.json';
import Statistics from '../Statistics';
import data from '../data/data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from '../data/friends.json';


const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </div>
  );
}; 


export default App;
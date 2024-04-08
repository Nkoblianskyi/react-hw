
import PropTypes from 'prop-types';
import friends from '../data/friends.json';
import styles from './FriendList.module.css';

function FriendList (  ) {
    return (
        <ul className={styles.friendList}>
        {friends.map(friends => (
            <li key={friends.id} className={styles.friendItem}>
                <span
                    className={styles.status + '  ' + (friends.isOnline ? styles.statusGreen : styles.statusRed)}
                >.....</span>
                <img src={friends.avatar} alt={friends.name} width="50px" className={styles.imgFriend}/>
                <span className={styles.name}>{friends.name}</span>
            </li>
        ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.shape ({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
};

export default FriendList;
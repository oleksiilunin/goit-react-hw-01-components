import PropTypes from 'prop-types';


import FriendListItem from "components/friendListItem";

import css from './friendList.module.css'

const FriendList = ({friends}) => {
	return ( 
		<ul className={css['friend-list']}>
			{friends.map((friend) => <FriendListItem
				key={friend.id}
				avatar={friend.avatar}
				name={friend.name}
				isOnline={friend.isOnline} />
			) }
		</ul>
	)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired
  })).isRequired
};

export default FriendList;
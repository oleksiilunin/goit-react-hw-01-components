import css from './friendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
	return (
		<li key={id} className={css.item}>
			<span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
			<img className={css.avatar} src={avatar} alt={name} width="48" />
			<p className={css.name}>{name}</p>
		</li>
	)
}

//!TODO: Добавить инлайн стили для онлайн или офлайн статусов

export default FriendListItem;
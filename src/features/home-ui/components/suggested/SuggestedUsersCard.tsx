import s from './SuggestedUsersCard.module.scss'
const SuggestedUsersCard = ({suggestedUsers = []}) => {
return(
     <div className={s.card}>
            <h2 className={s.title}>Suggested Users</h2>
            <ul className={s.usersList}>
              {suggestedUsers.map((user) => (
                <li key={user.id} className={s.userItem}>
                  <img src={user.avatar} alt={user.name} className={s.avatar} />
                  <div className={s.userInfo}>
                    <span className={s.name}>{user.name}</span>
                    <span className={s.username}>{user.username}</span>
                  </div>
                  <button className={s.followBtn}>Follow</button>
                </li>
              ))}
            </ul>
          </div>
)
}

export default SuggestedUsersCard;
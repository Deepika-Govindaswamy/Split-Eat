
import Friend from "./Friend";

export default function FriendsList({ friendList, setFriendList, selectedId, setSelectedId, handleSelectFriend }) {
    return (
      <ul>
        {friendList.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            setFriendList={setFriendList}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            handleSelectFriend = {handleSelectFriend}
          />
        ))}
      </ul>
    );
  }
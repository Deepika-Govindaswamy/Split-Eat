import React, { useState } from "react";
import FriendsList from "../Components/FriendsList";
import AddFriendForm from "../Components/AddFriendForm";
import Button from "../Components/Button";
import SplitBillForm from "../Components/SplitBillForm";

const initialFriends = [
  {
    id: 933372,
    name: "Sarah",
    balance: 20,
  },
  {
    id: 118836,
    name: "Jenny",
    balance: -7,
  },
  {
    id: 499476,
    name: "Sherry",
    balance: 0,
  },
];

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectFriend = (id) => {
    setSelectedId(id !== selectedId ? id : null);
    setFormOpen(false);
  };

  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  };

  const handleSplitBill = (value) => {
    console.log(value);
    setFriendList((friendList) =>
      friendList.map((friend) =>
        friend.id === selectedId
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedId(null);
  };

  return (
    <>
      <div className="header">
        <h1>🍟 Split & Eat 🍔</h1>
      </div>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friendList={friendList}
            setFriendList={setFriendList}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            handleSelectFriend={handleSelectFriend}
          />
          

          <Button onClick={handleFormOpen}>
            {formOpen === true ? "❌" : "Add Friend"}
          </Button>
          <br/>
          <div>
            {formOpen && (
              <AddFriendForm
                setFormOpen={setFormOpen}
                friendList={friendList}
                setFriendList={setFriendList}
              />
            )}
          </div>

        </div>

        {selectedId !== null && (
          <SplitBillForm
            friendList={friendList}
            selectedId={selectedId}
            handleSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

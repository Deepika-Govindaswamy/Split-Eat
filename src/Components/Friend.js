
import React, { useState } from "react";
import Button from "./Button";

export default function Friend({
    friend,
    setFriendList,
    handleSelectFriend,
    selectedId
  }) {
    const handleRemove = (id) => {
      id !== null && setFriendList((friend) => friend.filter((f) => f.id !== id));
    };
  
    return (
      <>
        <li className={selectedId === friend.id ? 'selected' : ''}>
          <h3>{friend.name}</h3>
          {friend.balance < 0 ? (
            <p className="red">
              You owe {friend.name} £{Math.abs(friend.balance)}
            </p>
          ) : friend.balance === 0 ? (
            <p>You and {friend.name} are even </p>
          ) : (
            <p className="green">
              {friend.name} owes you £{friend.balance}
            </p>
          )}
  
          <Button className="select" onClick={() => handleSelectFriend(friend.id)}>
            {friend.id === selectedId ? 'Close' : 'Select'}
          </Button>
          <Button className="remove" onClick={() => handleRemove(friend.id)}>
            Remove
          </Button>
        </li>
      </>
      
    );
  }
  
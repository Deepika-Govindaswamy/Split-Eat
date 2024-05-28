import React, { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ formOpen, setFormOpen, friendList, setFriendList }) {
    const [name, setName] = useState("");
  
    const handleAddFriend = (event) => {
      event.preventDefault();
      const tempList = [...friendList, { id: Date.now(), name, balance: 0 }];
      setFriendList(tempList);
      setName("");
      setFormOpen(!formOpen);
    };
  
    return (
      <>
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <label>👩🏻‍🤝‍👩🏻Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Add</Button> 
        </form>
      </>
    );
  }
import React, { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ friendList, selectedId, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourBill, setYourBill] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("You");

  const selectedFriend = friendList.find((f) => f.id === selectedId);
  const paidByFriend = bill ? bill - yourBill : "";

  const handleBillSubmit = (event) => {
    event.preventDefault();
    console.log(whoIsPaying)
    handleSplitBill(whoIsPaying === "You" ? paidByFriend : -yourBill);
  };

  return (
    <>
      <form className="form-split-bill" onSubmit={handleBillSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
        />

        <label>💳 Your Expense</label>
        <input
          type="number"
          value={yourBill}
          onChange={(event) =>
            setYourBill(Number(event.target.value) > bill ? yourBill : Number(event.target.value))
          }
        />

        <label>💷 {selectedFriend.name}'s Expense</label>
        <input type="number" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill?</label>
        <select value={whoIsPaying} onChange={(event) => setWhoIsPaying(event.target.value)}>
          <option value="You">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
}

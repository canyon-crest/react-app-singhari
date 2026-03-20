import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "firebase/firestore";

function Example() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  // --- READ: Load items from Firestore ---
  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(loaded);
  };
  // Load items once when the page first renders
  useEffect(() => {
    loadItems();
  }, []);

  // --- WRITE: Add a new item to Firestore ---
  const handleAdd = async () => {
    if (inputText.trim() === "") return;
    await addDoc(collection(db, "items"), {
      text: inputText,
      createdAt: serverTimestamp()
    });
    setInputText("");   // clear the input
    loadItems();        // refresh the list
  };
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>My Firestore App</h1>
      {/* Input + Button */}
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter something..."
          style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>
      {/* List of items from Firestore */}
      <h2>Items from Firestore:</h2>
      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Example;

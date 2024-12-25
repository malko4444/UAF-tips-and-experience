import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Addnotes from '../addnotes/Addnotes';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes, deleteNote, setUpdateNote } from '../../store/slices/notesSlice';
import "./home.css";
import Footer from '../../components/footer/Footer';

export default function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.authSlice.user);
  const notesInDB = useSelector((state) => state.notes.notes); // Access the notes array directly
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getNotes());
    console.log("current well user data", currentUser);
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  const onSearchHandler = (newQuery) => {
    setQuery(newQuery);
  };

  const onUpdateHandler = (note) => {
    dispatch(setUpdateNote(note));
  };

  return (
    <div className="container">
      <Nav setQuery={setQuery} onSearchHandler={onSearchHandler} />
      <Addnotes />
      <div className="notes-grid">
        {notesInDB && notesInDB.length > 0 ? (
          notesInDB
            .filter((note) => {
              // Ensure userName and userAg are strings before applying toLowerCase
              const userName = note.userName ? note.userName : ''; // Default to empty string if userName is null or undefined
              const userAg = note.userAg ? note.userAg.toString() : ''; // Default to empty string if userAg is null or undefined, and convert to string
              const searchQuery = query ? query : ''; // Default to empty string if query is null or undefined
              
              // Check if either userName or userAg includes the query (case-insensitive)
              return userName.toLowerCase().includes(searchQuery.toLowerCase()) || userAg.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .map((note) => (
              <div key={note.id} className="note-card backGroundImage">
                <div className="card-body">
                  <div>
                    <h7 className="creator-name">Tips & experience by; </h7>
                    <h7><span className='spantage'>{note?.userName}</span></h7>
                    <h7 className="creator-age">{note?.userAg}</h7>
                  </div>
                  <hr />
                  <h2 className="card-title">Experience:</h2>
                  <p className="card-text">{note.description}</p>
                  <h2 className="card-title">Tips:</h2>
                  <p className="card-text">{note.title}</p>
                  {console.log("currentUser.uid and note.uid", currentUser.uid, note.uid)}
                  {
                    currentUser.uid === note.userId ? (
                      <div className="button-group">
                        <button className="dark-red-btn" onClick={() => onDeleteHandler(note.id)}>Delete</button>
                        <Link to="/addNewNotes">
                          <button className="dark-brown-btn " onClick={() => onUpdateHandler(note)}>Update</button>
                        </Link>
                      </div>
                    ) : null
                  }
                </div>
              </div>
            ))
        ) : (
          <p>No notes available.</p> // Handle empty state
        )}
      </div>
      <Footer className="mt-2"/>
    </div>
  );
}

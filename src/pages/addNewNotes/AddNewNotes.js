import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updateNote, setUpdateNote } from "../../store/slices/notesSlice";
import { Link, Navigate } from 'react-router-dom';

export default function AddNewNotes() {
    const currentUser = useSelector((state) => state.authSlice.user);
    const UpdateNoteREq = useSelector((state) => state.notes.updateNote);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (UpdateNoteREq) {
            setTitle(UpdateNoteREq.title || '');
            setDescription(UpdateNoteREq.description || '');
        }
    }, [UpdateNoteREq]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            description,
            userId: currentUser?.uid,
            userName: currentUser?.name,
            userAg: currentUser?.ag

        };

        if (UpdateNoteREq) {
            dispatch(updateNote({ ...newNote, id: UpdateNoteREq.id }));
            dispatch(setUpdateNote(null)); // Clear the update note state
        } else {
            dispatch(createPost(newNote));
        }

        // Clear form inputs
        setTitle('');
        setDescription('');
    };

    return (
        <div className="container mt-4" >
            <Link to={"/login"}>
                <button className='btn-note'>View All notes</button>
            </Link>
            <h2 className="mb-4">
                <span className='card-title'>
                    {UpdateNoteREq ? "Update Your Experience or Tips" : "Add New Experience Or Tips"}
                </span>
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tips For UAF"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Add Your Experience"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>


                <button type="submit" className="btn-note">
                    {UpdateNoteREq ? "Update Note" : "Add Note"}
                </button>

            </form>
        </div>
    );
}

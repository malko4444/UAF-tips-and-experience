import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

export const updateNote = createAsyncThunk("home/updateNote",
    async (note) => {
        try {
            const docRef = doc(db, "notes", note.id);
            await updateDoc(docRef, note);
            return { ...note, id: note.id }; // Ensure the note includes the id
        } catch (error) {
            console.log("error", error);
            throw error;
        }
    }
);

export const deleteNote = createAsyncThunk(
    "home/deletePost",
    async (id) => {
            try {
                const docRef = doc(db, "notes", id);
                await deleteDoc(docRef);
                return id;
            } catch (error) {
                console.log("error", error);
                throw error;
            }
    }
);

export const getNotes = createAsyncThunk(
    "home/getNotes",
    async () => {
        try {
            const collectionRef = collection(db, "notes");
            const docs = await getDocs(collectionRef);
            let data = [];
            docs.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            return data;
        } catch (error) {
            console.error("Error fetching notes:", error);
            throw error;
        }
    }
);

export const createPost = createAsyncThunk(
    "home/createNotes",
    async (userNote) => {
        try {
            const collectionRef = collection(db, "notes");
            const response = await addDoc(collectionRef, userNote);
            return { id: response.id, ...userNote };
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }
);

const initialState = {
    notes: [],
    createdNote: null,
    updateNote: null,
    status: 'idle',
    error: null,
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setUpdateNote: (state, action) => {
            state.updateNote = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notes.push(action.payload); // Add the created note to the list
                state.createdNote = action.payload;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getNotes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notes = action.payload;
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.notes = state.notes.filter((note) => note.id !== action.payload);
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                if (action.payload && action.payload.id) {
                    state.notes = state.notes.map((note) =>
                        note.id === action.payload.id ? action.payload : note
                    );
                    state.updateNote = null;
                }
            });
    }
});

export const { setUpdateNote } = notesSlice.actions;
export default notesSlice.reducer;

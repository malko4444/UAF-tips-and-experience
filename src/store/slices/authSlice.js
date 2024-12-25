import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import { db, auth } from "../../config/firebase";
import { setDoc,getDoc, doc } from "firebase/firestore";


export const getCurrentUser = createAsyncThunk(
    "auth/currentUser",
    async (setLoading, store)=>{
        try {
            setLoading(true)
            onAuthStateChanged(auth,async(user) => {
                if (user) {
                  const uid = user.uid;
                  const docSnap = await getDoc(doc(db, "users",uid))
                    const dbUser = docSnap?.data()
                   console.log("dbuser in curent yser",dbUser)
                  store.dispatch(setUser(dbUser))
                  console.log("dbUser",dbUser);
                  setLoading(false)
                } else{
                    setLoading(false)
                }
              });
              return 
        } catch (error) {
            setLoading(false)
            console.log(error);
            
        }
         
    }
)

export const logout  = createAsyncThunk(
    'auth/logout',
    async ()=>{
        try {
            await  signOut(auth);
            return true;

            
        } catch (error) {
            
        }
    }
)
export const userLogin = createAsyncThunk(
    "auth/login",
    async (user) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
            const dbSnap = await getDoc(doc(db, "users", userCredential.user.uid)); // Corrected line
            const dbUser = dbSnap?.data();
            console.log("userLogin",userCredential);
            
            console.log("dbUser",dbSnap.data());
            
            return dbUser;
        } catch (error) {
            console.log("error", error);
        }
        
    }
);
export const signup = createAsyncThunk(
    "auth/signup",
    async (user) => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
            const userData = {
                email: user?.email,
                name: user?.name,
                password: user?.password,
                ag: user?.ag??null,
                uid:userCredential.user.uid
            }    
            await setDoc(doc(db, "users",userCredential.user.uid), userData);
            console.log("in login action",userCredential.uid);
            
            return null;
        }
        catch(error){
            console.log("sinup error",error);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, status: null },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            console.log("UserData that user signup",state.user)
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled,(state,action)=>{
            state.user = null;
            console.log("data in action",action.payload);
            

        })
        builder
        .addCase(userLogin.pending, (state) => {
            state.status = "loading";
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "succeeded";
        })
        .addCase(userLogin.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.user = null;
        })
        ;

    }
})
export const {setUser} = authSlice.actions;
export default authSlice.reducer;
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config";

const loginUser = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Login Success:", user.displayName);
    // ఇక్కడ యూజర్ డేటాని డేటాబేస్ లో చెక్ చేయాలి
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

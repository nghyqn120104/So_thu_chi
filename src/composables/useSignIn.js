import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  isPending.value = true;
  error.value = null;

  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    console.log(response);
    return response;
  } catch (err) {
    if (err) {
      error.value =
        "There is no user with that email address or Your password is not correct.";
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}

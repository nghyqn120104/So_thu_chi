import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);

async function logOut() {
  error.value = null;

  try {
    const response = await signOut(projectAuth);
    console.log(response);
    return response;
  } catch (err) {
    if (err) {
      console.log(err);
      error.value = "Can't log out";
    }
  }
}

export function useLogOut() {
  return { error, logOut };
}

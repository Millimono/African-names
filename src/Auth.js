import { supabase } from "../supabaseClient";

const signInWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) console.error(error);
  return <button onClick={signInWithGoogle}>Se connecter avec Google</button>;
};

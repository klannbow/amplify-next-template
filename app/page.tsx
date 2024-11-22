"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import VideoPlayer from "@/components/VideoPlayer";

export default function HomePage() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <h1>React player</h1>
      <VideoPlayer />

      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

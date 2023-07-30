"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { cache, use } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode}) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  return (
    <main style={{ maxWidth: '90%', marginInline: "auto", padding: 20 }}>
      <button type='button' onClick={() => signOut({ callbackUrl: '/' })}>log out</button>
      {children}
    </main>
  );
}

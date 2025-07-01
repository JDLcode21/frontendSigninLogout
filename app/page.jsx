'use client';

import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoading && auth.isAuthenticated) {
      router.push('/dashboard');
    }
  }, [auth, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {auth.isLoading ? (
        <p>Checking authentication...</p>
      ) : (
        <button
          onClick={() => {auth.signinRedirect(); }}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign In with Cognito
        </button>
      )}
    </div>
  );
}

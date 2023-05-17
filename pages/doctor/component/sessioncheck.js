import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (!session) {
      router.push('/doctor/signIn');
    }
  }, [router]);

  return null;
};


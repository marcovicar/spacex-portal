'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="inline-flex items-center gap-2 py-2 mb-6 mt-4 cursor-pointer transition backdrop-blur-md">
      <ArrowLeft size={16} />
      Back
    </div>
  );
}

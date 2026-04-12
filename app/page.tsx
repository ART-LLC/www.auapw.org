import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Image src="/images/nextjs.svg" alt="Next.js" /> {/* Line 151 */}
      <Image src="/images/nuxt.svg" alt="Nuxt.js" /> {/* Line 163 */}
      <Image src="/images/svelte.svg" alt="Svelte" /> {/* Line 172 */}
    </div>
  );
}
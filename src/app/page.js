import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <main>
      <h1>vaayudrishti</h1>
      <Link href="/users">Local users</Link>
      <br></br>
      <Link href="/researchpanel">researchers</Link>
      <br></br>
      <Link href="/privatecompanies">private companies</Link>
    </main>
    
  );
} 


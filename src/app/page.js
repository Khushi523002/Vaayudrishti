import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <h1>vaayudrishti</h1>
      <Button><Link href="/users">Local users</Link></Button>
      <br></br>
      <Button><Link href="/researchpanel">researchers</Link></Button>
      <br></br>
      <Button><Link href="/privatecompanies">private companies</Link></Button>
    </main>
    
  );
} 


import Image from "next/image";
import Banner from "./components/Banner";
import Area from "./components/Area";
import Produtos from "./components/Produtos";



export default function Home() {
  return (

    <main>
     <Banner/>
     <Area />
     <Produtos />
    </main>
  );
}

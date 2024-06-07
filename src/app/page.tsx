import Image from "next/image";
import Banner from "./components/Banner";
import Area from "./components/Area";
import Produtos from "./components/Produtos";
import Card from "./components/Card";



export default function Home() {
  return (

    <main>
     <Banner/>
     <Area />
     <Produtos />
     <Card />
    </main>
  );
}

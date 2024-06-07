import Image from "next/image";
import Banner from "./components/Banner";
import Area from "./components/Area";
import Produtos from "./components/Produtos";
import Card from "./components/Card";
import CardProdutos from "./components/CardProdutos";
import Navegacao from "./components/Navegacao";



export default function Home() {
  return (

    <main>
     <Banner/>
     <Area />
     <Produtos />
     <Card />
     <CardProdutos />
     <Navegacao />
    </main>
  );
}

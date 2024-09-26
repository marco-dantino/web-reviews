import {Button} from "@/components/ui/button";
import CardReview from "@/components/cards";
//import {products, users} from "@/mocks/mock_data_sistema_resenas.json";

// interface product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   reviews: {
//     id: string;
//     productId: string;
//     userId: string;
//     content: string;
//     likes: number;
//     dislikes: number;
//   };
// }

// interface user {
//   id: string;
//   name: string;
//   email: string;
// }

export default function HomePage() {
  return (
    <section>
      <Button>🪶🪶</Button>
      <H3 text="" />
      <CardReview />
      <div className="grid grid-cols-3 gap-4" />
    </section>
  );
}

function H3({text}: {text: string}) {
  return <h3 className="scroll-m-20 text-2xl font-normal tracking-tight">{text}</h3>;
}

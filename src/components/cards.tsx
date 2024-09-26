import React from "react";
import Image from "next/image";

import Auris from "../assets/Auris.jpg";
import CELULAR from "../assets/CELULAR.jpg";
import Mouse from "../assets/Mouse.jpg";
import PC from "../assets/PC.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    id: 1,
    title: "Auriculares Bluetooth",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: Auris,
  },
  {
    id: 2,
    title: "Smartphone Android",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: CELULAR,
  },
  {
    id: 3,
    title: "Computadora",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: PC,
  },
  {
    id: 4,
    title: "Smartwatch Samnsung",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: Mouse,
  },
  {
    id: 5,
    title: "ColiTaza",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: Mouse,
  },
  {
    id: 6,
    title: "Mouse Gamer",
    contenido: "No tiene contenido",
    description: "No tiene contenido",
    footer: "No tiene contenido",
    image: Mouse,
  },
];

function CardReview() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(({id, title, contenido, description, footer, image}) => (
        <div key={id}>
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{contenido}</p>
              <Image alt="" src={image} />
            </CardContent>
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardReview;

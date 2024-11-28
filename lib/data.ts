import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";
import { image } from "framer-motion/client";

export const links = [
  {
    label: "A IA é uma extensão do poder humano.",
    href: "",
  },
 
];

export const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "CONECTE COM QR-CODE",
    isNew: false,
    backgroundPositionX: 50,
    backgroundPositionY: -10,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "CONECTE SUA CHAVE",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "SALVE E USE",
    isNew: true,
    backgroundPositionX: 50,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
];

export const testimonials = [
  {
    text: "“minhas clientes ainda acham que sou atendendo elas hahaha, ferramenta incrivel, amei..” ",
    name: "Sophia",
    title: "Ceo Liria essence",
    avatar: avatar1,
  },
  {
    text: "“Fiz o teste só para saber como era, e não consigo mais ficar sem, realmente o futuro na palma da mão.”",
    name: "Jamie Lee",
    title: "Care Pulse",
    avatar: avatar2,
  },
  {
    text: "“Uso no meu delivery, a taxa de conversão aumentou em 80% nunca tivemos tanta demanda aceita.”",
    name: "Alisa Hester",
    title: "Delivery",
    avatar: avatar3,
  },
  {
    text: "“Meus clientes me enviam imagens, aúdios e a ferramenta responde todos, alem de falar com varias pessoas ao mesmo tempo.”",
    name: "Alec",
    title: "Marketing supervisor",
    avatar: avatar4,
  },
];

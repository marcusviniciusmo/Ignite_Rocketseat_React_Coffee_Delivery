import ExpressoTradicional from '../assets/expressoTradicional.png';
import ExpressoAmericano from '../assets/expressoAmericano.png';
import ExpressoCremoso from '../assets/expressoCremoso.png';
import ExpressoGelado from '../assets/expressoGelado.png';
import CafeComLeite from '../assets/cafeComLeite.png';
import Latte from '../assets/latte.png';
import Capuccino from '../assets/capuccino.png';
import Macchiato from '../assets/macchiato.png';
import Mocaccino from '../assets/mocaccino.png';
import ChocolateQuente from '../assets/chocolateQuente.png';
import Cubano from '../assets/cubano.png';
import Havaiano from '../assets/havaiano.png';
import Arabe from '../assets/arabe.png';
import Irlandes from '../assets/irlandes.png';
import { CoffeeDataList } from '../@types/CoffeeCard';

export const Catalog: CoffeeDataList = {
  coffees: [
    {
      id: 1,
      name: 'Expresso Tradicional',
      imageUrl: ExpressoTradicional,
      tags: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      imageUrl: ExpressoAmericano,
      tags: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      imageUrl: ExpressoCremoso,
      tags: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      imageUrl: ExpressoGelado,
      tags: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Café com Leite',
      imageUrl: CafeComLeite,
      tags: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Latte',
      imageUrl: Latte,
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 7,
      name: 'Capuccino',
      imageUrl: Capuccino,
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 8,
      name: 'Macchiato',
      imageUrl: Macchiato,
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 9,
      name: 'Mocaccino',
      imageUrl: Mocaccino,
      tags: ['Tradicional', 'Com Leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      imageUrl: ChocolateQuente,
      tags: ['Especial', 'Com Leite'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 11,
      name: 'Cubano',
      imageUrl: Cubano,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 12,
      name: 'Havaiano',
      imageUrl: Havaiano,
      tags: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 13,
      name: 'Árabe',
      imageUrl: Arabe,
      tags: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      quantity: 0,
    },
    {
      id: 14,
      name: 'Irlandês',
      imageUrl: Irlandes,
      tags: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e cantilly',
      price: 9.9,
      quantity: 0,
    },
  ],
};

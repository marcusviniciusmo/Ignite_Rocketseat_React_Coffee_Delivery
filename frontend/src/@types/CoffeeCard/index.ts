export interface CoffeeCardType {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
}

export interface CoffeeCardProps {
  coffee: CoffeeCardType;
}

export interface CoffeeDataList {
  coffees: CoffeeCardType[];
}

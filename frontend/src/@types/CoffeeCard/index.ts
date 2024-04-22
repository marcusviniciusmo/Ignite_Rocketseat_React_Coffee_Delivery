export interface Coffee {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
}

export interface CoffeeCardProps {
  coffee: Coffee;
}

export interface CoffeeDataList {
  coffees: Coffee[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  seller: string;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  owner: string;
  products: Product[];
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  chainId: number | null;
}
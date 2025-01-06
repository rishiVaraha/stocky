import { Product } from "@/app/(Components)/ProductTable/columns";
import { create } from "zustand";
import { productData } from "@/app/(Components)/ProductTable/ProductData";

interface ProductState {
  allProducts: Product[];
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  setAllProducts: (allProducts) => {
    set({ allProducts: allProducts });
  },
  loadProducts: async () => {
    const fetchedProducts = await fetchProducts();
    set({ allProducts: fetchedProducts });
  },
}));

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1200);
  });
}

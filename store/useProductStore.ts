import { Product } from "@/app/(Components)/ProductTable/columns";
import { create } from "zustand";
import { productData } from "@/app/(Components)/ProductTable/ProductData";

interface ProductState {
  allProducts: Product[];
  isLoading: boolean;
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<{ success: boolean }>;
  deleteProduct: (product: string) => Promise<{ success: boolean }>;
  openProductDialog: boolean;
  setOpenProductDialog: (openProductDialog: boolean) => void;
  updateProduct: (updatedProduct: Product) => Promise<{ success: boolean }>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  isLoading: false,
  selectedProduct: null,
  openDialog: false,
  setOpenDialog: (openDialog) => {
    set({ openDialog: openDialog });
  },
  openProductDialog: false,
  setOpenProductDialog: (openProductDialog) => {
    set({ openProductDialog: openProductDialog });
  },
  setSelectedProduct: (product: Product | null) => {
    set({ selectedProduct: product });
  },
  setAllProducts: (allProducts) => {
    set({ allProducts: allProducts });
  },
  loadProducts: async () => {
    const fetchedProducts = await fetchProducts();
    set({ allProducts: fetchedProducts });
  },
  addProduct: async (product: Product) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 789));
      set((state) => ({ allProducts: [...state.allProducts, product] }));
      return { success: true };
    } finally {
      set({ isLoading: false });
    }
  },

  updateProduct: async (updatedProduct: Product) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(updatedProduct);

      set((state) => ({
        allProducts: state.allProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      }));

      return { success: true };
    } finally {
      set({ isLoading: false });
      set({ openProductDialog: false });
      set({ selectedProduct: null });
    }
  },

  deleteProduct: async (productId: string) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1789));
      set((state) => ({
        allProducts: state.allProducts.filter(
          (product) => product.id !== productId
        ),
      }));
      return { success: true };
    } finally {
      set({ isLoading: false });
      set({ openDialog: false });
      set({ selectedProduct: null });
    }
  },
}));

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1200);
  });
}

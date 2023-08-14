import { ProductType } from '../types/products';

const { REACT_APP_DUMMY_SERVICE } = process.env;

export class ProductService {
  static async getProducts(): Promise<Array<ProductType>> {
    try {
      const response = await fetch(`${REACT_APP_DUMMY_SERVICE}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { products }: { products: Array<ProductType> } = await response.json();
      return products;
    } catch (error) {
      console.error('Failed to get products. Ended with error:', (error as Error).message);

      return [];
    }
  }

  static async addProduct(values: ProductType): Promise<ProductType | object> {
    try {
      const response = await fetch(`${REACT_APP_DUMMY_SERVICE}/products/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      return response.json();
    } catch (error) {
      console.error('Failed to add the product. Ended with error:', (error as Error).message);

      return {};
    }
  }

  static async deleteProduct(id: number): Promise<ProductType | object> {
    try {
      const response = await fetch(`${REACT_APP_DUMMY_SERVICE}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      console.error('Failed to delete the product. Ended with error:', (error as Error).message);

      return {};
    }
  }
}

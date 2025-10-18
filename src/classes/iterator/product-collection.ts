import { Iterator } from './iterator'

interface Product {
  name: string
  category: string
  price: number
}

export class ProductCollection {
  private products: Product[]

  constructor() {
    this.products = []
  }

  public add(product: Product) {
    this.products.push(product)
  }

  public getIterator(): Iterator<Product> {
    return new Iterator<Product>(this.products)
  }
}

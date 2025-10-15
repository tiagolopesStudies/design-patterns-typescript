export class Pizza {
  public size: string
  public crust: string
  public hasCheese: boolean
  public toppings: string[]

  constructor(size: string, crust: string, hasCheese: boolean, toppings: string[]) {
    this.size = size
    this.crust = crust
    this.hasCheese = hasCheese
    this.toppings = toppings
  }
}

import { ProductCollection } from './classes/iterator/product-collection'
import { UserCollection } from './classes/iterator/user-collection'

const userCollection = new UserCollection()

userCollection.add({ name: 'Tiago Lopes', email: 'teste@gmail.com' })
userCollection.add({ name: 'Damares Silva', email: 'damsilbsa@gmail.com' })
userCollection.add({ name: 'Alice Godoi', email: 'alicego@gmail.com' })
userCollection.add({ name: 'Renato Monteiro', email: 'renmont@gmail.com' })

const userIterator = userCollection.getIterator()
while (userIterator.hasNext()) {
  console.log(userIterator.next())
}

const productCollection = new ProductCollection()
productCollection.add({ name: 'Smartphone', category: 'Phone', price: 1200.59 })
productCollection.add({ name: 'Echo dot', category: 'smart', price: 129.9 })
productCollection.add({ name: 'Notebook', category: 'PC', price: 2998.97 })

const productIterator = productCollection.getIterator()
while (productIterator.hasNext()) {
  console.log(productIterator.next())
}

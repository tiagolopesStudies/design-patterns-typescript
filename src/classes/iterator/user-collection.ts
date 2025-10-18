import { Iterator } from './iterator'

interface User {
  name: string
  email: string
}

export class UserCollection {
  private users: User[]

  constructor() {
    this.users = []
  }

  public add(user: User) {
    this.users.push(user)
  }

  public getIterator(): Iterator<User> {
    return new Iterator<User>(this.users)
  }
}

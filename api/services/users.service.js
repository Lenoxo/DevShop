const { faker } = require('@faker-js/faker');

class usersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      // Generen usuarios
      const user = {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        businessArea: faker.person.jobArea(),
      };
      this.users.push(user);
    }
  }
  async createOne(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }
  async update(id, editedData) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error('User Not Found');
    } else {
      const userData = this.users[index];
      this.users[index] = {
        ...userData,
        ...editedData,
      };
      return {
        message: 'edited',
        userData: this.users[index],
      };
    }
  }
  async delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error('User Not Found');
    } else {
      this.users.splice(index, 1);
      return {
        id,
        message: 'deleted',
      };
    }
  }
}

module.exports = usersService;
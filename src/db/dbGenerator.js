const fs = require("fs");

const faker = require("faker");
faker.seed(69);

const getNextLevelExperience = level => Math.pow((level + 1) * 5, 2);

const { userImages } = require("./data/users");
const NUMBER_OF_USERS = userImages.length;
const data = { users: [] };

for (let i = 0; i < NUMBER_OF_USERS; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const level = faker.random.number({ min: 1, max: 10 });
  const nextLevelExperience = getNextLevelExperience(level);
  const currentExperience = faker.random.number({
    min: level === 1 ? 1 : getNextLevelExperience(level - 1),
    max: nextLevelExperience - getNextLevelExperience(level - 1) / 2,
  });

  data.users.push({
    id: faker.random.uuid(),
    firstName,
    lastName,
    username: faker.internet.userName(firstName, lastName),
    avatarUrl: userImages[i],
    level,
    currentExperience,
    challengesCompleted: Math.pow(level, 2) + faker.random.number({ min: 1, max: 5 }),
  });
}

fs.writeFile("db.json", JSON.stringify(data), console.error);

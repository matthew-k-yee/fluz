
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {rank: 1, username: 'user5', password: '111', relationship: '2', calorie_intake: 2000, calorie_spend: 1800},
        {rank: 2, username: 'user1', password: '222', relationship: '-', calorie_intake: 1800, calorie_spend: 1500},
        {rank: 3, username: 'user2', password: '333',relationship: '1', calorie_intake: 2200, calorie_spend: 1700},
        {rank: 4, username: 'user3', password: '444',relationship: '3', calorie_intake: 2300, calorie_spend: 1750},
        {rank: 5, username: 'user4', password: '555',relationship: 'None', calorie_intake: 1800, calorie_spend: 500},
      ]);
    });
};

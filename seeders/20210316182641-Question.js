'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Homeostasis",
          answer: "Ability to maintain equilibrium or internal balance",
          subjectId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "permeability",
          answer: "rate of flow of a liquid or gas though a porous material",
          subjectId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),          
        },
        {
          question: "osmosis",
          answer: "water moving from an area of high ot low concentration",
          subjectId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),       
        },
        {
          question: "RNA",
          answer: "single stranded ribonucleic acid",
          subjectId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
        {
          question: "genetic mutation",
          answer: "any change in nitrogen base sequence",
          subjectId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
        {
          question: "Horace Mann",
          answer: "led the movement to establish free public education.",
          subjectId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Harriet Beecher Stowe",
          answer: "Author of Uncle Tom’s Cabin and anti-slavery novel.",
          subjectId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),          
        },
        {
          question: "Thomas Paine",
          answer: "Wrote Common Sense to persuade the colonist to declare their independence from Great Britain.",
          subjectId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),       
        },
        {
          question: "Abraham Lincoln",
          answer: "Served as president of the United States (Union) during the Civil War.",
          subjectId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
        {
          question: "Jefferson Davis",
          answer: "Served as president of the Confederate States of America during the Civil War.",
          subjectId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
        {
          question: "Number of continents",
          answer: "7",
          subjectId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Prime Meridian",
          answer: "Line of 0 Longitude",
          subjectId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),          
        },
        {
          question: "Tropics",
          answer: "Region between tropic of Capricorn and Tropic of Cancer",
          subjectId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),       
        },
        {
          question: "International Date Line",
          answer: "Line of 180 degree longitude",
          subjectId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
        {
          question: "Longitude",
          answer: "Distance east or west of the Prime Meridian",
          subjectId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),      
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

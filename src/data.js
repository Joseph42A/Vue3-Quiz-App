const data = [
  {
    id: 1,
    name: "VUEJS",
    questions: [
      {
        id: 1,
        text: "What is the composition API introduced in Vue.js 3?",
        options: [
          {
            id: 1,
            label: "A",
            text: "A way to define components using class syntax",
            isCorrect: false,
          },
          {
            id: 2,
            label: "B",
            text: "A new reactive system for managing component state and logic",
            isCorrect: true,
          },
          {
            id: 3,
            label: "C",
            text: "A feature for creating reusable component templates",
            isCorrect: false,
          },
          {
            id: 4,
            label: "D",
            text: "A method for handling component lifecycle hooks",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        text: "Which of the following is a falsy value in JavaScript?",
        options: [
          {
            id: 1,
            label: "A",
            text: "0",
            isCorrect: true,
          },
          {
            id: 2,
            label: "B",
            text: "1",
            isCorrect: false,
          },
          {
            id: 3,
            label: "C",
            text: "null",
            isCorrect: true,
          },
          {
            id: 4,
            label: "D",
            text: "undefined",
            isCorrect: true,
          },
        ],
      },
      {
        id: 3,
        text: "What is the purpose of the v-model directive in Vue.js 3?",
        options: [
          {
            id: 1,
            label: "A",
            text: "It is used to create custom directives",
            isCorrect: false,
          },
          {
            id: 2,
            label: "B",
            text: "It is used for two-way data binding between form inputs and component data",
            isCorrect: true,
          },
          {
            id: 3,
            label: "C",
            text: "It is used to define computed properties in a Vue component",
            isCorrect: false,
          },
          {
            id: 4,
            label: "D",
            text: "It is used to define methods in a Vue component",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "SPORT",
    questions: [
      {
        id: 1,
        text: "Who won the FIFA World Cup in 2018?",
        options: [
          {
            id: 1,
            label: "A",
            text: "France",
            isCorrect: true,
          },
          {
            id: 2,
            label: "B",
            text: "Brazil",
            isCorrect: false,
          },
          {
            id: 3,
            label: "C",
            text: "Germany",
            isCorrect: false,
          },
          {
            id: 4,
            label: "D",
            text: "Spain",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        text: "Which country has won the most Olympic gold medals in history?",
        options: [
          {
            id: 1,
            label: "A",
            text: "United States",
            isCorrect: true,
          },
          {
            id: 2,
            label: "B",
            text: "China",
            isCorrect: false,
          },
          {
            id: 3,
            label: "C",
            text: "Russia",
            isCorrect: false,
          },
          {
            id: 4,
            label: "D",
            text: "Germany",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        text: "Which sport does Cristiano Ronaldo play?",
        options: [
          {
            id: 1,
            label: "A",
            text: "Football (Soccer)",
            isCorrect: true,
          },
          {
            id: 2,
            label: "B",
            text: "Basketball",
            isCorrect: false,
          },
          {
            id: 3,
            label: "C",
            text: "Tennis",
            isCorrect: false,
          },
          {
            id: 4,
            label: "D",
            text: "Swimming",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
export { data };

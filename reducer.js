const initialState = {
  taskList: [
    {
      id: 1,
      question: 'What is my name?',
      answers: ['Pisti', 'Ágota', 'Rétes', 'LEVI-goodanswer'],
      goodAnswerId: '3',
    },
    {
      id: 2,
      question: 'What is my second name?',
      answers: ['Pisti-goodanswer', 'KalapKabát', 'Rétes', 'Akarok már fifázni'],
      goodAnswerId: '0',
    },
    {
      id: 3,
      question: 'What is my last name?',
      answers: ['Ádám-bad-answer', 'NemÁdám', 'lkélk', 'élkélk-good-answer'],
      goodAnswerId: '3',
    },
  ],
}

function reducer(state = initialState) {
  return state
}

export default reducer

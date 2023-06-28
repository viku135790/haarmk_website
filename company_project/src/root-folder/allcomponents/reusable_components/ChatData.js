export const chatData = [
    {
        id: 'Welcome',
        message: 'Hello, welcome to our website!',
        trigger: 'AskName'
      },
      {
        id: 'AskName',
        message: 'What is your name?',
        trigger: 'Name'
      },
      {
        id: 'Name',
        user: true,
        trigger: 'Issues'
      },
      {
        id: 'Issues',
        message: 'Hi {previousValue}, please enter your issue',
        trigger: 'SelectIssue'
      },
    {
        id: 'SelectIssue',
        options: [
            { value: 'React', label: 'React', trigger: 'React' },
            { value: 'Angular', label: 'Angular', trigger: 'Angular' },
            { value: 'Java', label: 'Java', trigger: 'Java' },
        ],
    },
    {
        id: 'React',
        message: 'Thanks for sharing your React issue',
        end: true,
    },
    {
        id: 'Angular',
        message: 'Thanks for sharing your Angular issue',
        end: true,
    },
    {
        id: 'Java',
        message: 'Thanks for sharing your Java issue',
        end: true,
    }
];
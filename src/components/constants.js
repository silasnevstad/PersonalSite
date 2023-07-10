// constants.js
export const PROJECTS = [
  { id: '1', requests: 8140, title: 'Typin', date: '2 May 2023', github: 'TypingGame', languages: ['React'], logo: 'TypinLogo.png', description: "A typing game app that allows people to test their typing speed and accuracy. This app was built using React, and features time and color customization, as well as a leaderboard.", developers: 'Silas Nevstad', version: '1.0.0', url: 'https://www.typin.me'},
  { id: '2', requests: 10651, title: 'Senttrac', date: '12 Apr 2023', github: 'SentimentTracker-Frontend', languages: ['React', 'Python'], logo: 'senttracLogo.png', description: 'Senttrac is an innovative analysis tool created to offer real-time insights into the emotions driving online conversations. By leveraging state-of-the-art sentiment analysis models and a cutting-edge Large Language Model (LLM), Senttrac delves into recent tweets, Reddit posts, and news headlines related to your query. Hosted frontend with React using AWS Amplify and backend on Heroku running a Python flask server for API.', developers: 'Silas Nevstad', version: '1.0.1', url: 'https://senttrac.com' },
  { id: '3', requests: 53558, title: 'HumanGPT', date: '24 Apr 2023', github: 'Rewriter', languages: ['React','Python'], logo: 'humangptLogo.png', description: 'HumanGPT employs human recognition analysis models in conjunction with ChatGPT to transform text into a more human-like version. Striving for readability and clear communication, the algorithm focuses on retaining the text\'s original meaning while ensuring it is perceived as human-generated content. The backend is developed using JavaScript, while the frontend is built with React.', developers: 'Silas Nevstad', version: '1.0.0', url: 'https://humangpt.me' },
  { id: '4', requests: 0, title: 'AlgoPicks', date: 'Jul 2022', github: '', languages: ['Python', 'Swift'], logo: 'algoPicksLogo.png', description: 'AlgoPicks is a sports prediction and tracking app that uses machine learning algorithms to predict game outcomes. Utilizing the Firebase real-time database, the app allows users to track their bets in real-time and maintain a historical record of them, providing users with insights into their betting patterns and performance over time. With over 15,000 data points, AlgoPicks is able to predict game outcomes with a 70% accuracy rate in 2021. My goal with AlgoPicks is to create a valuable and reliable tool for both sports enthusiasts and those looking to improve their betting.', developers: 'Silas Nevstad', version: '1.3.0', url: '' },
  { id: '5', requests: 16495, title: 'Scramdleb', date: 'Mar 2023', github: 'Sramdleb', languages: ['React'], logo: 'scramdlebLogo.png', description: 'Scrambled is a word puzzle game where players shift letters to form a secret word within a limited number of moves. The game offers different difficulty levels with varying word lengths and number of moves, making it a fun and challenging game for players of all skill levels.', developers: 'Silas Nevstad', version: '2.0.1', url: 'https://scramdleb.com' },
  { id: '6', requests: 244, title: 'ChessClock', date: 'Jan 2023', github: 'Chess-Clock', languages: ['Swift'], logo: 'chessClockLogo.png', description: 'ChessClock is an app that I developed as a personal project, fueled by the frustration of not having a proper clock when playing chess with friends. I developed it in Swift in under 12 hours, and it enables chess players to play time-controlled games as well as setting custom time controls for each player and keeping track of the time remaining during the game. Its simple interface makes it easy to use for players in all age ranges.', developers: 'Silas Nevstad', version: '1.1.0', url: 'https://apps.apple.com/gb/app/chess-clock-by-sn/id1666157309' },
  { id: '7', requests: 0, title: 'AlgoTrader', date: 'Dec 2021', github: '', languages: ['Python'], logo: '', description: 'To start, the algorithm uses certain criteria such as recent performance and overall financial health to choose a number of stocks. It then conducts a deeper analysis on a smaller subset of those stocks to identify the best fit for the portfolio. Once the final list of stocks is determined, the algorithm computes the appropriate allocation for each stock in the portfolio. To align the current portfolio with the newly generated one, the algorithm executes trades and sends a text message with the list of stocks that were bought or sold. Implemented on an Alpaca paper trading account, the algorithm has delivered an 18% increase in overall portfolio value. Notably, this performance was achieved during a period when the S&P 500 (SPY) decreased by 6.14%.', developers: 'Silas Nevstad', version: '1.2.0', url: '' },
  { id: '8', requests: 64755, title: 'VSCode GPT', date: 'Feb 2023', github: 'GPT-Extension-VSCode', languages: ['JavaScript', 'Node.js'], logo: 'vscodeLogo.png', description: 'GPT is a Visual Studio Code extension that brings the power of OpenAI\'s GPT language models to your fingertips, helping you analyze and debug your code. With just a few clicks, you can get explanations for code snippets or debug outputs to help you better understand what\'s going on in your code.', developers: 'Silas Nevstad', version: '2.0.1', url: 'https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper' },
  { id: '9', requests: 0, title: 'MiniGPT', date: 'Mar 2023', github: '', languages: ['React Native'], logo: '', description: 'ChatGPT app built React native. Key features include saving chat history, model selection and customizable API keys.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
  { id: '10', requests: 1500, title: 'Categoridle', date: 'Feb 2023', github: 'Categoridle', languages: ['HTML', 'JavaScript', 'CSS'], logo: '', description: 'Categoridle is a website that allows users to play a game similar to the popular game Wordle. However, Categoridle includes an additional feature where users can select a category for the word they are trying to guess, making the game more challenging and fun. Categories so far include: Athletes, Car Brands, Countries, Companies, Captital Cities, Music, Movies, Normal 5 letter words, and a couple others with more to come.', developers: 'Silas Nevstad', version: '1.2.1', url: 'http://categoridle.com' },
  { id: '11',  requests: 0, title: 'SportSpots', date: 'Feb 2023', github: 'SportSpots', languages: ['HTML', 'JavaScript', 'CSS'], logo: '', description: 'I built this website to assist sports enthusiasts in finding the nearest sports field locations, such as a basketball courts, ice rinks, or soccer fields, based on their current location. By utilizing the Google Maps API, users can easily search for sports fields in their area and get directions to the desired location. In addition to providing location-based information, the website also features a chat function that enables users to connect with other sports enthusiasts in the area. Each sports field has its chat room, where users can share information, organize games, or provide updates about the venues.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
  { id: '12',  requests: 6788, title: 'BuddyAI', date: '17 May 2023', github: 'ComposeAI', languages: ['React', 'Python'], logo: 'buddyLogo.png', description: 'Your personal AI co-writer. Have buddy write along with you, suggesting continutations, formalizing your text, improving it or just simply ask it questions. This app is hosted using React and uses a python API hosted on Heroku.', developers: 'Silas Nevstad', version: '1.0.0', url: 'http://buddyai.me' },
  { id: '13', requests: 10100, title: 'Pulse', date: '9 Jun 2023', github: 'PulseFrontend', languages: ['React', 'Python'], logo: 'PulseLogo.jpg', description: 'This news outlet offers a diverse array of news categories to browse through. The platform presents concise news items for quick updates, with options to delve deeper into any story that catches your interest. An added feature is an AI-powered chatbot, consistently updated with the latest news, offering interactive discussions for better understanding.\nThe app harnesses ReactJS for front-end, hosted on AWS. Python powers the back-end, providing efficient data handling, hosted on Heroku for easy deployment and scalability.', developers: 'Silas Nevstad', version: '1.0.0', url: 'http://gptnews.me' },
  { id: '14', requests: 2609, title: 'Opexis', date: '26 Jun 2023', github:'Opexis', languages: ['React'], logo: 'OpexisLogo.png', description: 'A GPT-powered pocket programmer. An experimental platform that I\'ve built, using GPT as a base, with the aim to facilitate code creation through interactive AI assistance. React app hosted on AWS using Firebase.', developers: 'Silas Nevstad', version: '1.0.0', url:'https://opexis.me' },
  // { idL: '15', requests: 0, title: 'AI In Hiring', date: '15 Jun 2023', github: 'GPT-Programmer', languages: [], logo: '', description: 'A python project that leverages OpenAI\'s GPT to act as a programmer/developer helping people with less experience build things', developers: 'Silas Nevstad', version: '1.0.0', url: ''}
  // { id: '14', requests: 0, title: 'GPT-Programmer', date: '15 Jun 2023', github: 'GPT-Programmer', languages: ['Python'], logo: '', description: 'A python project that leverages OpenAI\'s GPT to act as a programmer/developer helping people with less experience build things', developers: 'Silas Nevstad', version: '1.0.0', url: 'http://github.com/silasnevstad/GPT-Programmer' },
  // { id: '12', title: 'Casino', date: 'Feb 2023', languages: 'React', logo: '', description: 'I built this simple React web application to allow users to practice their casino skills. The website features a simple game that requires users to guess the appropriate moves to increase their score. The game was designed to be interactive and fun, providing users with an engaging way to improve their knowledge and skillset of various casino games.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
];

export const QUOTES = [
  { quote: "Happiness in intelligent people is the rarest thing I know", author: "Ernest Hemingway" },
  { quote: "I was famous for saying, ‘Thats the stupidest idea I’ve ever heard’", author: "Bill Gates" },
  { quote: "A moment of pain is worth a lifetime of happiness", author: "Louis Zamperini" },
  { quote: "Happiness is reality minus expectations", author: "Elon Musk" },
  { quote: "Ernest Hemingway once said, the world is a fine place and worth fighting for. I agree with the second part", author: "Morgan Freeman" },
  // { quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr." },
  { quote: "The best advice I can give you is ‘Don’t do it’", author: "Elon Musk" },
  // { quote: "Tomorrow is another day. Not just any day, but it is a day; it will get here, there’s not question", author: "Reggie Watts" },
  { quote: "All you can control in life…is how you respond to life.", author: "Brian Banks" },
  { quote: "Starting a company is like eating glass and staring into the abyss", author: "Elon Musk" },
  // { quote: "Many people will panic to find a charger before their phones die. But won’t panic to find a plan before their dreams die.", author: "Elon Musk" },
  { quote: "When people think about travelling to the past, they worry about accidentally changing the present. But no one in the present really thinks they can radically change the future.", author: "Unknown" },
  { quote: "Self doubt kills more dreams than failure ever will.", author: "Steve Harvey" },
  { quote: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.", author: "Thomas Carlyle" },
  { quote: "Keep your face always toward the sunshine - and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", author: "William Arthur Ward" },
  // { quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", author: "Helen Keller" },
  { quote: "It is far better to be alone, than to be in bad company.", author: "George Washington" },
  { quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
  { quote: "Yesterday is history, tomorrow is a mystery, but today is a present", author: "Oogway" },
  // { quote: "I do not know with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.", author: "Albert Einstein" },
  { quote: "Discipline is doing what you hate to do, but doing it like you love it.", author: "Mike Tyson" },
  // { quote: "Life passes most people by, while they’re making grand plans for it.", author: "Unknown" },
  { quote: "Would you rather be, at war with yourself & at peace with the world. Or at peace with yourself & at war with the world.", author: "Nipsey Hussle" },
  { quote: "The definition of greatness is to inspire the people next to you", author: "Kobe Bryant" },
  { quote: "Imagination is everything; it’s the preview to life’s coming attractions.", author: "Albert Einstein" },
  { quote: "Do it or watch it be done.", author: "Unknown" },
  // { quote: "Hate, it caused a lot of problems in the world, but it hasn’t yet solved one.", author: "Unknown" },
  { quote: "Die a hero, or live long enough to see yourself become the villain.", author: "" },
  // { quote: "Our anxiety doesn’t come from thinking about the future, but wanting to control it.", author: "Unknown" },
  { quote: "Nothing in life is promised except death.", author: "Kanye West" },
  { quote: "There are two people, the man who thinks they can, and the man who thinks they can’t. And they’re both right.", author: "Kanye West" },
  { quote: "It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.", author: "Mark Twain" },
  // { quote: "Be alone, that is the secret of invention; be alone, that is when ideas are born.", author: "Nikola Tesla" },
  { quote: "Your wisdom then consists not of the knowledge you already have, but the continual search for knowledge which is the highest form of wisdom.", author: "Jordan Peterson" },
  { quote: "The early bird gets the worm but the second mouse gets the cheese", author: "Unknown" },
  { quote: "Build your own castle.", author: "Unknown" },
  { quote: "No one will ever know the violence it took to become this gentle.", author: "Unknown" },
  { quote: "Don’t die wondering.", author: "Unknown" },
  { quote: "The meaning of life is just to be alive it is so plain and so obvious and so simple and yet everybody rushes around in a great panic as if it were necessary to achive something beyond themselves.", author: "Alan Watts" },
  { quote: "We do not 'see' the world as it is; we see it as we are.", author: "Alan Watts" },
  { quote: "The future is a concept, it doesn't exist. There is no such thing as tomorrow There never will be, because time is always now. That's one of the things we discover when we stop talking to ourselves and stop thinking. We find there is only present, only an eternal now.", author: "Alan Watts" }
];

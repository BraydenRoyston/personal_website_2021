export const state = () => ({
    dark: true,
    loaded: false,
    projects: [
      {
        title: "TD Lab - Fullstack Developer",
        year: "2021",
        links: [
          {
              title: "Website", 
              value: "https://tdlab.io",
          },
        ],
        description: [
          {
              value: "Spearheaded development for a mobile application in the small business e-commerce space that aided 5 small businesses during the pandemic. Utilized Flutter to create the iOS + Android app, and Firebase for the backend.",
              key: 0,
          },
          {
              value: "Created a mobile application using Flutter and Firebase to allow TD customers to keep track of the carbon footprint and offset it accordingly.",
              key: 1,
          },
          {
            value: "Created an event management web application that allowed students in university to easily see what events related to academics and career growth were occurring near them un using VueJS."
          },
        ],
        techStack: [
          {
            value: "Flutter",
          },
          {
            value: "Firebase"
          },
          {
            value: "VueJS"
          },
          {
            value: "ReactJS"
          },

        ],
        tags: [
            {
              value: "Internship"
            },
            {
              value: "Software"
            },
            {
              value: "WebDev"
            },
            {
              value: "MobileDev",
            },
            {
              value: "FinTech"
            }

        ],
      },
      {
        title: "Clove - Software Engineer",
        year: "2021",
        links: [
          {
              title: "Website", 
              value: "https://clove.eco",
          },
        ],
        description: [
          {
              value: "One of the founding engineers for Clove, a start-up based in San Francisco with the goal of providing consumers and businesses with the ability to make informed, eco-friendly choices in the e-commerce space.",
              key: 0,
          },
          {
              value: "Developed a fully-dynamic onboarding form that allows Clove to onboard new businesses into their program using ReactJS with NextJS.",
              key: 1,
          },
        ],
        techStack: [
          {
            value: "ReactJS",
          },
          {
            value: "NextJS"
          },
          {
            value: "Firebase"
          },
        ],
        tags: [
            {
              value: "Software"
            },
            {
              value: "WebDev"
            }
        ],
      },
      {
        title: "Freelance Web Development",
        year: "2021",
        links: [
          {
              title: "Website", 
              value: "https://braydenroyston.ca",
          },
        ],
        description: [
          {
              value: "Developed this website on the JAMstack using VueJS/NuxtJS, my JavaScript framework of choice!",
              key: 0,
          },
          {
              value: "Several websites for small businesses in Southern Ontario are currently in the works - stay tuned :D",
              key: 1,
          },
        ],
        techStack: [
          {
            value: "VueJS",
          },
          {
            value: "NuxtJS"
          },
        ],
        tags: [
            {
              value: "Software"
            },
            {
              value: "WebDev"
            }
        ],
      },
      {
        title: "The GoldenHack - Software Developer",
        year: "2021",
        links: [
          {
              title: "Website", 
              value: "https://thegoldenhack.ca",
          },
        ],
        description: [
          {
              value: "Created a web app in ReactJS using React-Bootstrap which was comprised of a marketing Website and hacker application form.",
              key: 0,
          },
          {
              value: "Built an executive-facing dashboard allowing the team of 15 executives to manage hackers during the event.",
              key: 1,
          },
          {
              value: "Website visited by over 1000 users, resulting in the hackathon garnering over 400 applicants.",
              key: 2,
          },
        ],
        techStack: [
          {
            value: "ReactJS",
          },
          {
            value: "Dynamo DB"
          },
        ],
        tags: [
            {
              value: "Software"
            },
            {
              value: "WebDev"
            }
        ],
      },
      {
        title: "JDCC Laurier - Digital Strategy Academic Delegate",
        year: "2021",
        links: [
          {
              title: "Website", 
              value: "https://cabsonline.ca/jdcc/",
          },
        ],
        description: [
          {
              value: "One of 3 students the represents Wilfrid Laurier as a JDCC academic delegate in the Digital Strategy (2021) and Entrepreneurship (2020) tracks.",
              key: 0,
          },
          {
              value: "Analyzed, solved, and presented business consulting cases in the fields of tech, management, and business strategy.",
              key: 1,
          },
          {
            value: "Placed 2nd overall in the 2020 JDCC competition.",
            key: 2,
          }
        ],
        tags: [
            {
              value: "Business",
            },
            {
              value: "Consulting",
            }
        ],
      },
      {
        title: "Innovapost - DevOps Consultant",
        year: "2020",
        links: [
          {
              title: "Website", 
              value: "https://innovapost.com",
          },
        ],
        description: [
          {
              value: "Worked with the Microsoft Azure database that connects 6200 Canada Post offices, creating system architecture diagrams and ARM alerts.",
              key: 0,
          },
          {
              value: "Created Bash scripts to automate tasks on virtual machines that controlled postal services via Azure.",
              key: 1,
          },
          {
            value: "Worked with Canada Post to diagnose technical issues that affected business operations and implemented software to solve said issues.",
            key: 2,
        },
        ],
        techStack: [
          {
            value: "Microsoft Azure",
          },
          {
            value: "Bash"
          },
        ],
        tags: [
            {
              value: "Internship"
            },
            {
              value: "Software"
            },
            {
              value: "Consulting"
            }
        ],
      },
      {
        title: "To the Moon",
        year: "2021",
        links: [
          {
              title: "DevPost", 
              value: "https://devpost.com/software/swingsentiment",
          },
        ],
        description: [
          {
              value: "Developed a web app that utilizes natural language processing to determine market sentiment on stocks on the popular r/wallstreetbets.",
              key: 0,
          },
          {
              value: "Utilized ReactJS for the frontend, Dropbase for data cleaning and processing, Google Cloud for NLP, and Flask for backend data analytics.",
              key: 1,
          },
        ],
        techStack: [
          {
            value: "ReactJS",
          },
        ],
        tags: [
            {
              value: "Hackathon"
            },
            {
              value: "Software"
            },
            {
              value: "WebDev"
            },
            {
              value: "FinTech"
            },
            {
              value: "Finance"
            }
        ],
      },
      {
        title: "UBank",
        year: "2020",
        links: [
          {
              title: "DevPost", 
              value: "https://devpost.com/software/ubank-t2z9ws",
          },
        ],
        description: [
          {
              value: "Developed a banking software to aid citizens of developing countries that supports transfers, payments, and stock portfolio management all via SMS.",
              key: 0,
          },
          {
              value: "Developed a web application using ReactJS, a back-end database using Firebase, and the SMS system using Twillio and Node.js.",
              key: 1,
          },
        ],
        techStack: [
          {
            value: "ReactJS",
          },
        ],
        tags: [
            {
              value: "Hackathon"
            },
            {
              value: "Software"
            },
            {
              value: "FinTech"
            },
            {
              value: "Finance"
            },
            {
              value: "WebDev"
            },
        ],
      },
      {
        title: "Fidelity x Xlerate Lazardis Case Competition",
        year: "2020",
        description: [
          {
              value: "Finished 1st out of 56 teams comprised of students from universities across Ontario, receiving a cash prize of $4000.",
              key: 0,
          },
          {
              value: "Developed hyper-personalized ETF's and an innovative marketing plan to increase millenial interest in saving their money with Fidelity.",
              key: 1,
          },
          {
            value: "Utilized skills in financial analysis to develop highly diversified ETF's base on emergin economies that met Fidelity's clients' needs.",
            key: 2,
          }
        ],
        tags: [
            {
              value: "Business",
            },
            {
              value: "Consulting",
            },
            {
              value: "Case Competition"
            }
        ],
      },
      {
        title: "Microsoft x Laurier Marketing Association Case Competition",
        year: "2020",
        description: [
          {
              value: "Finished 3rd out of 35 teams comprised of students from Wilfrid Laurier University and the University of Waterloo, receiving a cash prize of $200.",
              key: 0,
          },
          {
              value: "Developed a comprehensive marketing plan and financial analysis to aid in the launch of the Microsoft Teams Platform to university students.",
              key: 1,
          },
        ],
        tags: [
            {
              value: "Business",
            },
            {
              value: "Consulting",
            },
            {
              value: "Case Competition"
            }
        ],
      },
      {
        title: "HP Live Case Competition",
        year: "2020",
        description: [
          {
              value: "Finished 2nd out of 300 teams comprised of Wilfrid Laurier's BBA class of 2024, receiving a cash prize of $2600.",
              key: 0,
          },
          {
              value: "Developed a strategy for \"SmartFax\", an IOT product that allows one to \"smart-fax\" anyone from anywhere, increasing HP's Gen-Z customer base.",
              key: 1,
          },
          {
            value: "Conducted a financial analysis that quantified the 5-year cash as a result of the implementation of this product.",
            key: 2,
        },
        ],
        tags: [
            {
              value: "Business",
            },
            {
              value: "Consulting",
            },
            {
              value: "Case Competition"
            }
        ],
      },
      {
        title: "LazICC Local x Foreseters Financial Case Competition",
        year: "2019",
        description: [
          {
              value: "Finished 2nd out of 35 teams comprised of Laurier BBA students, receiving a $250 cash prize.",
              key: 0,
          },
          {
              value: "Developed a strategy for \"Dr. O\", an interactive ChatBot mobile application that allowed Foresters Financial to encourage healthy lifestyles in all clients.",
              key: 1,
          },
          {
            value: "Worked on the UX design of our mobile application and go-to-market plan for the implementation of our strategy.",
            key: 2,
        },
        ],
        tags: [
            {
              value: "Business",
            },
            {
              value: "Consulting",
            },
            {
              value: "Case Competition"
            }
        ],
      },
    ]
});

export const mutations = {
    changeMode(state) {
      state.dark = !state.dark;
    },
  }
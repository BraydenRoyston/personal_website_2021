export const state = () => ({
    dark: true,
    projects: [
      {
        key: 0,
        title: "TD Lab - Fullstack Developer",
        links: [
          {
              title: "Website", 
              value: "https://tdlab.io",
              key: 0,
          },
        ],
        description: [
          {
              value: "Spearheaded development for a mobile application in the small business e-commerce space that aided 5 small businesses during the pandemic.",
              key: 0,
          },
          {
              value: "Created a web application to allow TD customers to keep track of the carbon footprint and offset it accordingly.",
              key: 1,
          },
        ],
        techStack: [
          {
            key: 0,
            value: "Flutter",
          },
          {
            key: 1,
            value: "Firebase"
          },
          {
            key: 2,
            value: "VueJS"
          },
          {
            key: 3,
            value: "ReactJS"
          },

        ],
        tags: [
            {
              key: 0,
              value: "Co-op"
            },
            {
              key: 1,
              value: "Software"
            },
            {
              key: 2,
              value: "WebDev"
            },
            {
              key: 3,
              value: "MobileDev",
            },
            {
              key: 2,
              value: "FinTech"
            }

        ],
      },
      {
        key: 1,
        title: "Clove - Software Engineer",
        links: [
          {
              title: "Website", 
              value: "https://clove.eco",
              key: 0,
          },
        ],
        description: [
          {
              value: "One of the founding engineers for Clove, a start-up based in San Francisco with the goal of providing consumers and businesse with the ability to make informed, eco-friendly choices in the e-commerce space.",
              key: 0,
          },
          {
              value: "Developed a fully-dynamic onboarding form that allows Clove to onboard new businesses into their program using ReactJS with NextJS.",
              key: 1,
          },
        ],
        techStack: [
          {
            key: 0,
            value: "ReactJS",
          },
          {
            key: 1,
            value: "NextJS"
          },
          {
            key: 2,
            value: "Firebase"
          },
        ],
        tags: [
            {
              key: 0,
              value: "Software"
            },
            {
              key: 1,
              value: "WebDev"
            }
        ],
      },
      {
        key: 2,
        title: "Freelance Web Development",
        links: [
          // {
          //     title: "Website", 
          //     value: "https://braydenroyston.ca",
          //     key: 0,
          // },
        ],
        description: [
          {
              value: "Developed this website from scratch using VueJS [my JS framework of choice, seriously check it out if you haven't already!] and NuxtJS.",
              key: 0,
          },
          {
              value: "Several websites for small businesses in Southern Ontario are currently in the works - stay tuned :D",
              key: 1,
          },
        ],
        techStack: [
          {
            key: 0,
            value: "VueJS",
          },
          {
            key: 1,
            value: "NuxtJS"
          },
        ],
        tags: [
            {
              key: 0,
              value: "Software"
            },
            {
              key: 1,
              value: "WebDev"
            }
        ],
      },
      {
        key: 3,
        title: "The GoldenHack - Software Developer",
        links: [
          {
              title: "Website", 
              value: "https://thegoldenhack.ca",
              key: 0,
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
            key: 0,
            value: "ReactJS",
          },
          {
            key: 1,
            value: "Dynamo DB"
          },
        ],
        tags: [
            {
              key: 0,
              value: "Software"
            },
            {
              key: 0,
              value: "WebDev"
            }
        ],
      },
      {
        key: 4,
        title: "JDCC Laurier - Digital Strategy Academic Delegate",
        links: [
          {
              title: "Website", 
              value: "https://cabsonline.ca/jdcc/",
              key: 0,
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
              key: 0,
              value: "Business",
            },
            {
              key: 0,
              value: "Consulting",
            }
        ],
      },
      {
        key: 5,
        title: "Innovapost - DevOps Consultant",
        links: [
          {
              title: "Website", 
              value: "https://innovapost.com",
              key: 0,
          },
        ],
        description: [
          {
              value: "Worked with the Microsoft Azure data that connects 6200 Canada Post offices, creating system architecture diagrams and ARM alerts.",
              key: 0,
          },
          {
              value: "Created Bash scripts to automate tasks on virtual machines that controlled postal services via Azure.",
              key: 1,
          },
        ],
        techStack: [
          {
            key: 0,
            value: "Microsoft Azure",
          },
          {
            key: 1,
            value: "Bash"
          },
        ],
        tags: [
            {
              key: 0,
              value: "Co-op"
            },
            {
              key: 1,
              value: "Software"
            },
            {
              key: 2,
              value: "Consulting"
            }
        ],
      },
      {
        key: 6,
        title: "To the Moon - Side Project",
        links: [
          {
              title: "DevPost", 
              value: "https://devpost.com/software/swingsentiment",
              key: 0,
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
            key: 0,
            value: "ReactJS",
          },
        ],
        tags: [
            {
              key: 0,
              value: "Hackathon"
            },
            {
              key: 1,
              value: "Software"
            },
            {
              key: 2,
              value: "FinTech"
            },
            {
              key: 3,
              value: "Finance"
            }
        ],
      },
      {
        key: 7,
        title: "UBank - Side Project",
        links: [
          {
              title: "DevPost", 
              value: "https://devpost.com/software/ubank-t2z9ws",
              key: 0,
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
            key: 0,
            value: "ReactJS",
          },
        ],
        tags: [
            {
              key: 0,
              value: "Hackathon"
            },
            {
              key: 1,
              value: "Software"
            },
            {
              key: 2,
              value: "FinTech"
            },
            {
              key: 3,
              value: "Finance"
            }
        ],
      },
    ]
});

export const mutations = {
    changeMode(state) {
      state.dark = !state.dark;
    }
  }
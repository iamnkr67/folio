/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nitesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nitesh Kumar Portfolio",
    type: "website",
    url: "http://iamnkr67.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Nitesh Kumar",
  logo_name: "NiteshKumar",
  nickname: "nkr",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://drive.google.com/file/d/1bXRknv_hb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/iamnkr67/",
  githubProfile: "https://github.com/iamnkr67",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/iamnkr67",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/iamnkr67/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:nitesh.guptaji76@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/iamnkr67",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/iamnkr67?mibextid=ZbWKwL",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iamnkr67/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/iamnkr67/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/iamnkr67",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/iamnkr67",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/iamnkr67",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@iamnkr67",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chitkara University, Himachal Pradesh",
      subtitle: "Bachelor of Engineering in Computer Science",
      logo_path: "cu_logo.png",
      alt_name: "CU_HP",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Apart from study, I am a NSS(National Service Scheme) volunteer and also being a core member in my college NSS community as Photo Documentation Head.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.chitkarauniversity.edu.in/",
    },

    {
      title: "ASRL COLLEGE SIWAN BIHAR",
      subtitle: "12th BSEB",
      logo_path: "college.png",
      alt_name: "ASRL College",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have done my higher secondary (11th - 12th) study from this college located in Siwan Dist. of Bihar.",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CSS3",
      subtitle: "-Infosys SpringBoard",
      logo_path: "css.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1J95ErqxIcVHL3xSUnrYJuFZdL7Esu80z/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "skyblue",
    },
    {
      title: "Angular",
      subtitle: "-Infosys SprigBoard",
      logo_path: "angular.png",
      certificate_link:
        "https://drive.google.com/file/d/1fOkTJpw12gVl9s9P2VFfhmc1rylqDvgj/view?usp=sharing",
      alt_name: "angular",
      color_code: "#00000099",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    {
      title: "Machine Learning",
      subtitle: "- GeeksForGeeks",
      logo_path: "machinelearning.jpg",
      certificate_link: "GFG_Complete Machine Learning_Certificate.pdf",
      alt_name: "machine-learning",
      color_code: "#0C9D5899",
    },

    {
      title: "English for Science, Technology, Engineering, and Mathematics",
      subtitle: "- Jack Sullivann & Alyssa Swanson",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/HXWZRG7HSA64",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },

    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle: "- Tom Brunskill (Forage)",
      logo_path: "tata.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/gmf3ypEXBj2wvfQWC_Tata%20Group_YXKdtashHGL4WyTFw_1723182850675_completion_certificate.pdf",
      alt_name: "TATA FORAGE",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/a07ecde2-e6d7-4e14-bbb8-c178e5f6c1cf",
      alt_name: "GCP",
      color_code: "#4285F466",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I specialize in AI development and am actively involved in the open-source community, including organizing events and participating in hackathons like Yamaha AI 2.0, MOI DevX, and BAJASAE India 2023. I also volunteer with NSS and have gained experience through remote internships with Infosys SpringBoard and BharatIntern.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "N/A",
          company: "N/A",
          company_url: "https://www.linkedin.com/iamnkr67/",
          logo_path: "i.png",
          duration: "N/A",
          location: "N/A",
          description: "N/A",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Intern",
          company: "Bharta Intern Pvt. Ltd.",
          company_url: "https://bharatintern.live/",
          logo_path: "bharat-intern.jpg",
          duration: "May 2022 - Aug 2022",
          location: "Remote",
          description:
            "I worked as a Frontend Intern at Bharat Intern Pvt. Ltd., where I developed and optimized user interfaces for web applications. This role enhanced my skills in HTML, CSS, and JavaScript while contributing to real-world projects.",
          color: "#000000",
        },
        {
          title: "YAMAHA AI HACAKATHON 2.O",
          company: "YAMAHA Motors India",
          company_url: "https://www.yamaha-motor-india.com/",
          logo_path: "yamaha_logo.png",
          duration: "May 2022",
          location: "Chitkara University, Himachal Pradesh",
          description:
            "I participated in the Yamaha AI 2.0 Hackathon as a first-year student, where I gained valuable insights into AI and ML by creating Grapes instances. Although I didn't win, but the experience significantly broadened my understanding of these technologies (AI/ML).",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "National Service Scheme",
          company: "NSS, India",
          company_url: "https:/nss.gov.in/",
          logo_path: "nss.jpg",
          duration: "June 2023 - Current",
          location: "Baddi, Himachal Pradesh",
          description:
            "Being an NSS volunteer I always feel proud of me that I got oppourtunity to connect with community and its problem.I also worked as a core member in NSS as Photo Documentation Head. Also attended 7 Days NSS camp with NSS founder Mr.Krishna Kumar Gupta.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2023 - May 2024",
          location: "Baddi, Himachal Pradesh",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        {
          title: "BAJA SAE INDIA 2023",
          company: "BAJASAEINDIA",
          company_url: "https://www.bajasaeindia.org/",
          logo_path: "baja-logo.png",
          duration: "April 2023",
          location: "Chitkara University, Himachal Pradesh",
          description:
            "I volunteered at Baja SAE India, where I checked accelerator systems to ensure compliance with strict rules. This experience gave me hands-on insight into automotive engineering and regulatory standards.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with ML, AI, React, Android, and Cloud.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in my professional career journey as well as share technical knowledge.",
    link: "https://hashnode.com/@iamnkr67",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Siwan, Bihar, India",
    locality: "Siwan",
    country: "India",
    region: "Bihar",
    postalCode: "841439",
    streetAddress: "Vill. Shekhpura PO. Chainpur PS. Goreakothi",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/wTZabHyV2wwdX7yk9",
  },
  phoneSection: {
    title: "Phone no:",
    subtitle: "+91 8092925661",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

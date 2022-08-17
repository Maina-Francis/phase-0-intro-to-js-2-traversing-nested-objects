const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  company: {
    name: "Flatbook Labs",
    jobTitle: "Developer Apprentice",
  },
  friends: [
    {
      firstName: "Nancy",
      lastName: "Burgess",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Developer Apprentice",
      },
    },
    {
      firstName: "Corinna",
      lastName: "Jackson",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Lead Developer",
      },
    },
  ],
  projects: [
    {
      title: "Flatbook",
      description:
        "The premier Flatiron School-based social network in the world.",
    },
    {
      title: "Scuber",
      description:
        "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
    },
  ],
};

console.log(userInfo.lastName);
console.log(userInfo.company.jobTitle);
console.log(userInfo.friends[1].company.name);

let counter = 0;

function deepIterator(target) {
  counter++;

  if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(userInfo);

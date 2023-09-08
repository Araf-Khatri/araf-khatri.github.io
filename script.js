const personalData = {
  name: "ARAF IBRAHIM KHATRI",
  profession: "Full Stack Developer",
  email: "arafkhatri0@gmail.com",
  phoneNo: "+91 7718982263",
  socials: [
    { name: "HackerRank", link: "" },
    { name: "Leetcode", link: "" },
    { name: "LinkedIn", link: "" },
    { name: "Github", link: "https://github.com/Araf-Khatri", isLast: true },
  ],
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "MongoDB",
    "SQL",
    "Express",
    "React / Redux",
    "NodeJS",
    "HTML",
    "CSS",
    "C",
    "Firebase",
    "REST API",
    "Data Structures & Algorithms",
    "Bootstrap",
    " TailwindCSS",
  ],
};

const contactsAndLinks = document.getElementById("personal-data");
const skillsDataSection = document.getElementById("skills-data");

let contactsEl = `
<div class="grid grid-cols-contact items-center gap-x-1">
  <i
    class="fa fa-phone-square text-primary-900"
    aria-hidden="true"
  ></i>
  <p class="text-sm text-end">${personalData.phoneNo}</p>
  <i class="fa fa-envelope text-primary-900" aria-hidden="true"></i>
  <p class="text-sm">${personalData.email}</p>
</div>
<div class="flex items-center gap-2">
`;

const socialLinks = personalData.socials;
for (let { name, link, isLast } of socialLinks) {
  contactsEl += `<a href="${
    link || ""
  }" class="text-sm text-primary-900">${name}</a>
                  ${!isLast ? "<p>|</p>" : "</div>"}`;
}

const skills = personalData.skills;
let skillsHTML = "";
for (let skill of skills) {
  skillsHTML += `
  <div class="rounded-md">
  <p class="text-base font">- ${skill}</p>
  </div>\n
  `;
}

contactsAndLinks.insertAdjacentHTML("beforeend", contactsEl);
skillsDataSection.insertAdjacentHTML("afterbegin", skillsHTML);

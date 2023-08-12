const PersonalData = {
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
};

const contactsAndLinks = document.getElementById("personal-data");
let contactsEl = `
<div class="grid grid-cols-contact items-center gap-x-1">
  <i
    class="fa fa-phone-square text-primary-900"
    aria-hidden="true"
  ></i>
  <p class="text-sm text-end">${PersonalData.phoneNo}</p>
  <i class="fa fa-envelope text-primary-900" aria-hidden="true"></i>
  <p class="text-sm">${PersonalData.email}</p>
</div>
<div class="flex items-center gap-2">
`;

const socialLinks = PersonalData.socials;
for (let { name, link, isLast } of socialLinks) {
  contactsEl += `<a href="${
    link || ""
  }" class="text-sm text-primary-900">${name}</a>
                  ${!isLast ? "<p>|</p>" : "</div>"}`;
}

contactsAndLinks.insertAdjacentHTML("beforeend", contactsEl);

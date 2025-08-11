const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".header-link");

// const cb = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//       // прибираємо active у всіх
//       links.forEach((link) => link.classList.remove("active"));

//       // додаємо active для потрібного лінка
//       const activeId = entry.target.id;
//       const activeLink = document.querySelector(
//         `.header-link[href="#${activeId}"]`
//       );

//       if (activeLink) {
//         activeLink.classList.add("active");
//       }
//     }
//   });
// };

// const sectionObserver = new IntersectionObserver(cb, {
//   threshold: [0.2, 0.5, 0.8],
// });




const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      // прибираємо active у всіх
      links.forEach((link) => link.classList.remove("active"));

      // додаємо active для потрібного лінка
      const activeId = entry.target.id;
      const activeLink = document.querySelector(
        `.header-link[href="#${activeId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  })
}, {
  threshold: [0.2, 0.5, 0.8],
});



// 🔹 Без цього код не працюватиме
sections.forEach((section) => sectionObserver.observe(section));

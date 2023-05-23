const listImage = document.querySelectorAll(".portfolio-links .info-gallery");
const listPortofolio = document.querySelectorAll(".list-portofolio");

listImage.forEach(function (el) {
  el.addEventListener("click", function (e) {
    const dataProject = new DataProjet(e.target.className);
    dataProject;
  });
});

const infoPortofolio = document.querySelectorAll(".list-portofolio");

class DataProjet {
  constructor(classgambar) {
    if (classgambar === "bx bx-info-circle satu") {
      const data = [
        "Magazine Tutorial Software Civil Engineering",
        "Design Magazine",
        "Civil Engineering study program UPJ",
        "18/02/2019",
        "I design magazine covers, recommended to display iconic elements related to civil engineering such as buildings, bridges, or heavy equipment. So that it can help attract the attention of readers and strengthen the identity of the major. and reflects the characteristics of the major that describe stability, professionalism, and technological advancement.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 2; x++) {
        images.push(x.toString());
      }

      const carousel = document.querySelector(".carousel-inner");

      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }

        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p1design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle dua") {
      const data = [
        "Civil Engineering Magazine Around Covid 19",
        "Design Magazine",
        "Civil Engineering study program UPJ",
        "18/04/2019",
        "The civil engineering student magazine that discusses COVID-19 aims to provide information about how civil engineering students can face the challenges faced during the COVID-19 pandemic which is divided per student 1 sheet and I was assigned to design the page along with the cover of the magazine with the theme of industrial geometry civil engineering",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x < 32; x++) {
        images.push(x.toString());
      }

      const carousel = document.querySelector(".carousel-inner");

      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }

        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p2design/${image}.webp`;
        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tiga") {
      const data = [
        "Instagram Feed Online Wordpress Class Promotion",
        "Social Media",
        "Level-Up Course Online",
        "08/09/2020",
        "The client asked the design theme to focus on the 25% discount given to the WordPress online class, so that it can be a special attraction for potential participants and adjust the design style of the website www.levelup.com",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p3design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle empat") {
      const data = [
        "Online Course Mobile App",
        "UI/UX",
        "Personal",
        "11/03/2021",
        "The UI design of the online class mobile app focuses on user convenience, efficiency and ease of using the application, along with providing a clear and easy-to-understand appearance for users, with appropriate and easily recognizable colors and icons",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 6; x++) {
        images.push(x.toString());
      }

      const carousel = document.querySelector(".carousel-inner");

      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }

        const img = document.createElement("img");

        img.classList.add("img-fluid");
        img.src = `assets/img/portfolio/p4design/${image}.webp`;
        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle lima") {
      const data = [
        "Header Landing Page Cryptowallet",
        "UI/UX",
        "Personal",
        "11/06/2021",
        "Redesign the Header Page of the www.cryptowallet.com website",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p5design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle enam") {
      const data = [
        "Tips for Staying Productive During WFH to Avoid Covid 19",
        "Poster",
        "Campus Assignments",
        "04/01/2020",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p6design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tujuh") {
      const data = [
        "National Seminar Poster from Civil Engineering Study Program",
        "Poster",
        "Civil Engineering study program UPJ",
        "03/07/2020",
        "I designed the poster with an elegant and futuristic theme according to the request of the Head of the Civil Engineering Study Program. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p7design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle delapan") {
      const data = [
        "Seminar Poster from Civil Engineering Study Program",
        "Poster",
        "Civil Engineering study program UPJ",
        "13/06/2020",
        "I made the poster design with strong colors and civil engineering elements according to a request from the Head of the Civil Engineering Study Program",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p8design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle sembilan") {
      const data = [
        "Webinar Poster from Faculty of Design Technology",
        "Poster",
        "Civil Engineering study program UPJ",
        "10/03/2020",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p9design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle sepuluh") {
      const data = [
        "Major Event Posters of Civil Engineering Organizations 2018",
        "Poster",
        "head of the HMS communication and information division",
        "27/02/2018",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p10design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle sebelas") {
      const data = [
        "Logo Event Civil Introduction Day",
        "Logo",
        "head of the HMS communication and information division",
        "21/05/2019",
        "Overall, this logo design focuses on civil engineering events to introduce new students to unity, collaboration, kinship between civil engineering and an equal interest in building and maintaining critical infrastructure that can improve our quality of life.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p11design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duabelas") {
      const data = [
        "Poster Participants Asian Games ",
        "Poster",
        "head of the HMS communication and information division",
        "11/07/2018",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p12design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tigabelas") {
      const data = [
        "Early college assignment poster",
        "Poster",
        "Personal",
        "03/12/2017",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p13design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle empatbelas") {
      const data = [
        "Magazine Pages Above RE/MAX",
        "Design Magazine",
        "RE/MAX",
        "11/08/2022",
        "i was shown to design 2 pages of RE/MAX magazine about social media trends 2022 and office visit activities at major RE/MAX central events. design theme made according to RE/MAX color moodboard ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 3; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p14design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle limabelas") {
      const data = [
        "Calendar RE/MAX 2023",
        "Calendar",
        "RE/MAX",
        "04/11/2022",
        "In this RE/MAX 2023 Calendar Design, I play a role in providing design concepts and looking for some words that are often used RE/MAX for appropriate and suitable branding is included in the calendar. Here I make a draft in advance of the page, starting from the design illustration to the wording. I chose the design style I used was flat vector",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 6; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p15design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle enambelas") {
      const data = [
        "Post Feed Instagram Boost Reqrutment Agent Property",
        "Social Media",
        "RE/MAX",
        "25/08/2022",
        "In this design I have to show the interest of prospective property agents by displaying a professional design and I also write the content of the content",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 2; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p16design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tujuhbelas") {
      const data = [
        "Instagram feed of indonesia's big holiday RE/MAX",
        "Social Media",
        "RE/MAX",
        "13/06/2022",
        "A project I did while working in RE/MAX. Create a wide variety of designs for RE/MAX social media needs greetings every major holiday according to the concept of the RE/MAX moodboard",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 12; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p17design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle delapanbelas") {
      const data = [
        "Logo Slogan Trusted Partner RE/MAX",
        "Logo",
        "RE/MAX",
        "07/10/2022",
        "In this logo project I was assigned to create a logo in the form of the slogan Your Trust Partner with the concept of 3D Text and the meaning of the logo is a high commitment to build a mutually beneficial relationship with clients and strive to meet the needs and desires of clients with transparency and professionalism",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 1; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p18design-${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle sembilanbelas") {
      const data = [
        "Feed Instagram Content Property",
        "Social Media",
        "RE/MAX",
        "12/12/2022",
        "I created a design thumbnail for the description on the Instagram feed content",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 4; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p19design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluh") {
      const data = [
        "Feed Instagram Professionalism",
        "Social Media",
        "RE/MAX",
        "04/01/2023",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 4; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p20design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhsatu") {
      const data = [
        "Feed Instagram Boost Content",
        "Social Media",
        "RE/MAX",
        "22/01/2023",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 2; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p21design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhdua") {
      const data = [
        "Feed Instagram Countdown Event Midyear RE/MAX",
        "Social Media",
        "RE/MAX",
        "08/10/2023",
        "designing and creating content on the Instagram feed of major event activities, namely RE/MAX Midyear 2022. carrying an outbound theme and for moodboard, logo, etc. has been well prepared by other design teams",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 4; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p22design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhtiga") {
      const data = [
        "Feed Instagram for Ads Reqrutment",
        "Social Media",
        "RE/MAX",
        "14/06/2023",
        "This Instagram feed is used for promotional tools by RE/MAX offices during the recruitment process. I made a wide variety of design templates according to the content of the content",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 8; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p23design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhempat") {
      const data = [
        "Feed Instagram for Opening Office RE/MAX Branch",
        "Social Media",
        "RE/MAX",
        "29/07/2023",
        "This Instagram feed is used for the New RE/MAX office during the instagram account creation process. I create a wide variety of design templates according to the content of the content",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 9; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p24design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhlima") {
      const data = [
        "Medali Awards Event Midyear RE/MAX 2022",
        "Medal",
        "RE/MAX",
        "08/10/2023",
        "in the RE/MAX midyear event celebrating 2022, I designed medals for the winners of property agents who have achieved their achievements. therefore I designed the medal to be as elegant and as it displays a sense of pride",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 3; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p25design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhenam") {
      const data = [
        "Design Request from RE/MAX Branch Office",
        "Social Media",
        "RE/MAX",
        "28/09/2022 ~ 11/01/2023",
        "this is the best design collection of RE/MAX branch office design requests",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 5; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p26design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhtujuh") {
      const data = [
        "Design Request from RE/MAX Branch Office Part 2",
        "Social Media",
        "RE/MAX",
        "11/02/2023",
        "this is the best design collection of RE/MAX branch office design requests",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 2; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p27design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhdelapan") {
      const data = [
        "Feed Instagram Content Property Part 2",
        "Social Media",
        "RE/MAX",
        "07/11/2022",
        "these are some of the best design collections for Indonesian RE/MAX content and I participated in making Copywriting",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 3; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p28design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tigapuluh") {
      const data = [
        "Feed Instagram Content Property Part 3",
        "Social Media",
        "RE/MAX",
        "26/01/2022",
        "",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 6; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p30design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle duapuluhsembilan") {
      const data = [
        "Instagram Feed Property Asset Competition Between Footballers Ronaldo vs Messi",
        "Social Media",
        "RE/MAX",
        "04/12/2022",
        "I took advantage of the idea of creating content between mega-star players Ronaldo and Messi in a property battle. and proven engagement generated very much from content2 previous properties",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 5; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p29design-1/${image}.webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-info-circle tigapuluhsatu") {
      const data = [
        "Presentation Design for Parkspring Property Developers",
        "Presentation",
        "Parkspring",
        "11/09/2022",
        "The presentation design I worked on was inspired by Japan's beautiful green nature by combining the natural beauty of Japan with modern technology. by giving a cool, calm, and calming impression like the atmosphere in Japan.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      let imgOld = document.querySelectorAll(".carousel-item");
      imgOld.forEach(function (img) {
        img.remove();
      });

      const images = [];
      for (let x = 1; x <= 40; x++) {
        images.push(x.toString());
      }
      const carousel = document.querySelector(".carousel-inner");
      images.forEach((image, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const img = document.createElement("img");

        img.classList.add("d-block", "w-100");
        img.src = `assets/img/portfolio/p31design-1/ppt (${image}).webp`;

        item.appendChild(img);
        carousel.appendChild(item);
      });
    } else if (classgambar === "bx bx-play-circle 1") {
      const data = [
        "2016 Pidie Jaya Earthquake",
        "Video Content",
        "Coursework",
        "12/07/2020",
        "When I was in college, my final project was to make a video about the earthquake in Indonesia. I chose Pidie Jaya Aceh because of the lack of news circulating about the incident, so I wanted to dig deeper into the information. I wrote the script and created a storyline so that the video is well structured. For editing, I use Adobe Premiere for cuts, music, and color grading. In addition, I also added animations with the After Effects app",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe src="https://www.youtube.com/embed/E7HslQjDtxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 2") {
      const data = [
        "Boundaries of Atterberg Soil Mechanics",
        "Video Content",
        "Coursework",
        "10/11/2018",
        "I feel proud and happy to be working on a video project as a final project in a civil engineering course, where I am a video editor and cameraman director. I strive to take this task seriously, especially in making sure the video fits the storyboard I've created. After completing this task, I felt very grateful for successfully achieving an A in the course. It gives me the motivation and passion to continue learning and improve my skills in the field of video editing and production.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ndf7J4PRTOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 3") {
      const data = [
        "Teaser RE/MAX Convention 7th",
        "Treaser Video",
        "Freelance",
        "09/03/2021",
        "I felt very excited when I got the second chance to work as a freelancer in the making of the 7th RE/MAX Convention event video treaser. I created an impressive dynamic opener effect style and video transitions, as well as interesting text animations that support the atmosphere of the event. I also added motion to the background to give it a more vivid and attention-grabbing feel. Throughout the video creation process, I strive to stay consistent with the predetermined style, while also adding my own creative touch. In the end, the treaser video managed to steal the limelight and get praise from clients and viewers. This is a matter of pride for me as a video editor and animator, and gives me the motivation to continue to grow and improve my skills in this field.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/JDbRAK1J4zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 4") {
      const data = [
        "Bumper Logo RE/MAX Convention 7th",
        "Bumper Animation",
        "Freelance",
        "09/03/2021",
        "On this occasion, I had the opportunity to create a cool and attractive logo bumper for the RE/MAX Convention 7th event. As a video editor, I strive to produce works that amaze and reflect the spirit of the event. In the process of creating it, I paid attention to every detail and kept consistency with the predetermined theme. I also added my own creative touch, so that the logo bumper really looks unique and different from the others. I felt very proud when I saw the final result of the logo bumper and witnessed how memorable it was when it was displayed at the RE/MAX Convention 7th event. This is an achievement in itself for me, and I look forward to continuing to create inspiring and stunning works.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/LdY90UsEaIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 5") {
      const data = [
        "Civil Engineering Channel Podcast Agus Setiawan",
        "Content Video",
        "Jobs of lecturers",
        "15/01/2021",
        'I was very honored when my lecturer, Agus Setiawan, entrusted me to conceptualize a video like a podcast that discusses the world of civil engineering. In this project, I was also responsible for creating the logo and naming the audience as "Structure Buddy". I am very happy that the idea was liked by my lecturer. I played the role of cameraman and editor in the making of the video. I strive to make quality videos with all the limitations that exist. I pay attention to every detail and maintain consistency with predetermined concepts and themes. In the end, the video managed to steal the attention and get a lot of appreciation from my lecturers and the audience. I feel proud and satisfied with the results I have achieved. I hope that the concept of this video can continue to inspire and benefit the audience of Structure Buddies in the future.',
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ng8S8NWkEtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 6") {
      const data = [
        "Treaser Progeth New Student of Civil Engineering Universitas Pembangunan Jaya 2019",
        "Treaser Video",
        "Campus Organizations",
        "03/06/2019",
        "here I am as an editor and cameraman at the 2019 freshman welcome event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Th3tOTCZfLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 7") {
      const data = [
        "Event RE/MAX Midyear Awards 2020 Top Producers & Office",
        "Content Video",
        "Freelance",
        "08/06/2020",
        "I was delighted to get my first freelance job to create motion awards at the RE/MAX Midyear 2020 event. I work hard and pay attention to every detail, as well as communicate well with clients and the team. I am proud of the quality finishes and look forward to continuing to grow as a freelancer.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/GxFiCAIT-rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 8") {
      const data = [
        "Civil Engineering Civil Expo 2019 Grand Event Teaser",
        "Treaser Video",
        "Campus Organizations",
        "12/10/2019",
        "I was very honored when entrusted to make a teaser video of the Civil Expo 2019 campus event for the campus organization. As a professional in the field of graphic design and motion graphics, I feel very challenged and enthusiastic in producing works that can promote the event and attract potential participants.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6XYfUMemXs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 9") {
      const data = [
        "Civil Engineering Civil Expo 2020 Grand Event Teaser",
        "Treaser Video",
        "Campus Organizations",
        "05/04/2020",
        "I am very happy to get a second chance to work on the Organization's Civil Campus event video teaser project. This time, I tried to bring the concept of stomp opener to the video to create a more dynamic and attractive look.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Gj18wsApFb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 10") {
      const data = [
        "KOPERASIPIL TALKS - CEKIDOT (Cerdikiawan & Anekdot)",
        "Content Video",
        "Coursework",
        "10/04/2020",
        "In this coursework, I was given the opportunity to create a monologue about entrepreneurship in the form of a podcast. I pay attention to every detail in the editing process, including setting the duration, volume, and use of music or sound effects that can amplify the message you want to convey in the podcast. I also strive to ensure that the sound quality in the podcast is clear and easy for listeners to understand.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/0wnrIi6bB3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 11") {
      const data = [
        "Event Civil Introduction Day 2018",
        "Content Video",
        "Campus Organizations",
        "16/11/2018",
        "on a summary video project after participating in the Civil Introduction Day event. As an editor, I am responsible for compiling the storyline of the video so that it can give an effective and compelling impression to the audience. In the production process, I pay attention to every detail in the making of the video, from selecting the best footage to choosing the right music to strengthen the atmosphere of the video. I also strive to pick out the most important and interesting moments from the Civil Introduction Day event and relate them well in the video storyline series.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/3nDYxd0FC_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 12") {
      const data = [
        "BESI MEMBARA (Bersama Sipil Membantu Rakyat dan Alam) 2020",
        "Content Video",
        "Campus Organizations",
        "30/01/2020",
        "I edited a video of a social service with the people of the Thousand Islands, focusing on the scene of making corals, teaching kindergarten children, and releasing turtles. I chose the best footage and paid attention to the sound quality and lighting of each scene. I strive to connect the key moments in the three activities and provide a message that can motivate the audience to participate in similar social service activities. In every job I do, I always try to provide professional and quality work.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/jUJ20JweZzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 13") {
      const data = [
        "Teaser Futsal Civil Turnament Week 2018",
        "Treaser Video",
        "Campus Organizations",
        "11/02/2018",
        "I learned to make stomp opener videos at the Civil Tournament Week 2018 event and used Las Vegas Pro video editing software for the first time. I pay attention to the details of every aspect of video creation, including music, duration, transitions, and sound and visual effects. As a result, I managed to make a stunning video and received praise from the organizing team. In addition to improving my video editing skills, this experience also taught me teamwork and overcoming challenges. I want to continue to develop my skills and create even better video works.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/upem8TEJz4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 14") {
      const data = [
        'Teaser Convention 2022 "Break Your Limit"',
        "Treaser Video",
        "Freelance",
        "24/03/2021",
        "In this freelance project, I was assigned to create a video trailer that will be used as a promotion for the Remax Convention 8th event. I use my skills and experience in video editing using the After Effects app to create interesting and creative motion graphics effects, in line with the theme of the event. I make sure that every detail in the video, such as text animations, transitions, and other visual effects, is tailored to the feel desired by the client. I try my best to create videos that are professional and can attract the attention of the potential audience of the event. In the process of making this video, I also constantly communicate with clients to ensure that the videos I produce are in line with their expectations.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/YpPDcIRUCvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 15") {
      const data = [
        "Various Activities of the HMS Civil Engineering Student Association Organization",
        "Content Video",
        "Campus Organizations",
        "30/09/2018",
        " Create a video slide show that will show various activities carried out by a civil engineering organization. This video was created with the aim of showing the achievements and activities carried out by the organization to the public visually and attractively. I combined the various photos and videos that the organization had provided, and arranged them in an interesting order so that the message I wanted to convey could be conveyed clearly. In addition, I also use visual elements such as transitions, animations, and music effects to create an interesting atmosphere and reinforce the message I want to convey. I try my best to create a quality and satisfying video for the organization, so that this video can be used for various promotional and publication purposes.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/kmqGDcYSQoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 16") {
      const data = [
        "Treaser Event RE/MAX Midyear 2021",
        "Treaser Video",
        "Work",
        "11/07/2022",
        "working on a video project for the RE/MAX Midyear event to be held at an outbound venue. My duties include creating a teaser video that will be used as a promotion for the event, as well as creating a bumper opening for the video. I use my creativity and video editing skills to produce engaging and informative videos, so as to attract participants to participate in the event. In addition, I also focused on creating a bumper opening that fits the theme of the event and gives a professional impression. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/nUfyqSD8i_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 17") {
      const data = [
        "RE/MAX Indonesia Mid Year Award 2022 | 25 Agustus 2022 | Sentul Eco Edu Tourism Forest",
        "Content Video",
        "Work",
        "14/08/2022",
        "After the RE/MAX Midyear event was over, I was given the task of making an aftermovie video for the event. As an editor, I am responsible for selecting the best scenes from the available video footage and making the right transitions between each scene. I also use my video editing skills to make sure that the video has a good rhythm and can display the overall feel of the event. I strive to create videos that are engaging and illustrate the experiences felt by the event attendees. During the editing process,With my painstaking efforts and perseverance, I managed to produce an interesting and satisfying aftermovie video for the RE/MAX Midyear show.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/aBIQd1YP3tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 18") {
      const data = [
        "Bumper Logo Event RE/MAX Midyear 2021",
        "Bumper Animation",
        "Work",
        "13/07/2022",
        "The bumper logo animation project I have created has met the manager's expectations in line with the expectations I gave.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/5tLL7z4pdK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 19") {
      const data = [
        "Eid Al-Fitr Greetings 1443 Hijriah",
        "Content Video",
        "Work",
        "13/07/2022",
        "The Eid 1443 hijri congratulatory video that I made was stunning with the theme I described and the amazing transitions. In addition, I also took the initiative to make the video storyline, so that the whole video looks very interesting and memorable. I really hope that this video can make a positive impression and provide added value to the company",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NUs4ZAigEpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 20") {
      const data = [
        "SULTAN'S HOUSE EAST JAKARTA AREA - ASYA KELIMUTU 9R",
        "Content Video",
        "Work",
        "15/09/2022",
        "I have made a video review of the Asya Kalimutu 9R house which is a luxurious house owned by the Sultan. I was given a video recorded by a makeshift cameraman, and I edited the video and added animated YouTube plans and thumbnails to make it more interesting and informative. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7OoVmOBQiC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 21") {
      const data = [
        "Luxury Homes That Make Families Cozy - PREMIUM TOBA LAKE VILLAS",
        "Content Video",
        "Work",
        "09/09/2021",
        "I have made a video review of the PREMIUM TOBA LAKE VILLAS house which is a Luxury Homes That Make Families Cozy. I was given a video recorded by a makeshift cameraman, and I edited the video and added animated YouTube plans and thumbnails to make it more interesting and informative. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/QgwLheQsyL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 22") {
      const data = [
        "EVENT REMAX GLOBAL DAY",
        "Content Video",
        "Work",
        "05/10/2022",
        "I have made a video in the framework of the RE/MAX Berbagi Bersama activity which contains the distribution of basic necessities to people who cannot afford it. Although I did not participate directly in the food distribution event, I was assigned to do video editing so that it could be shared and known by many people. The purpose of this video is to provide information about social activities carried out by RE/MAX and motivate people to participate in similar social activities. I tried my best to make this video interesting and informative so that it could attract the attention of many people. I hope this video can inspire and motivate people to do good.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/XRqKSzijlTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 23") {
      const data = [
        "RE/MAX Content (Due to Delay Buying a House Now)",
        "Content Video",
        "Work",
        "19/11/2022",
        "this is the best RE/MAX content that I can display either in the form of motion graphics or through video footage that I edited and added songs so that after",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4teLInlQysY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 24") {
      const data = [
        "Content RE/MAX (Second Home Visa Extended)",
        "Content Video",
        "Work",
        "12/10/2022",
        "this is the best RE/MAX content that I can display either in the form of motion graphics or through video footage that I edited and added songs so that after",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/U6iYSsrQt1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 26") {
      const data = [
        "Content RE/MAX (Bank Indonesia Continues 0% DP for Property in 2023)",
        "Content Video",
        "Work",
        "27/08/2022",
        "this is the best RE/MAX content that I can display either in the form of motion graphics or through video footage that I edited and added songs so that after",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4A7ACzORSyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 35") {
      const data = [
        "Content RE/MAX (Invite in to become a Remax Agent)",
        "Motion Graphic",
        "Work",
        "03/07/2022",
        "this is the best RE/MAX content that I can display either in the form of motion graphics or through video footage that I edited and added songs so that after",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="347" height="618" src="https://www.youtube.com/embed/oHFaixUER-4" title="Content RE/MAX (Invite in to become a Remax Agent)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 25") {
      const data = [
        "Videotron Invites to Join RE/MAX Indonesia",
        "Motion Graphic",
        "Work",
        "24/11/2022",
        "I am proud to have created an advertising videotron for RE/MAX with the aim of recruiting property agents. I am responsible for creating storyboards and video formats as well as producing attractive motion graphics. I strive to create advertising videos that are engaging and informative, so as to attract potential potential property agents to join RE/MAX. I pay attention to detail in every stage of making this video, from storyboards to motion graphic design, to ensure these ad videos can meet RE/MAX's business objectives. I hope this video can strengthen the RE/MAX brand and attract more property agents to join this company",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/gulRiR7WlVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 27") {
      const data = [
        "Videotron RE/MAX Branch Office Motion Graphics Location",
        "Motion Graphic",
        "Work",
        "20/11/2022",
        "I am proud to have created an advertising videotron for RE/MAX with the aim of recruiting property agents. I am responsible for creating storyboards and video formats as well as producing attractive motion graphics. I strive to create advertising videos that are engaging and informative, so as to attract potential potential property agents to join RE/MAX. I pay attention to detail in every stage of making this video, from storyboards to motion graphic design, to ensure these ad videos can meet RE/MAX's business objectives. I hope this video can strengthen the RE/MAX brand and attract more property agents to join this company",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NC7dCeNVsDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 28") {
      const data = [
        "Next Destination RE/MAX Trip 2022 - Dubai & Labuan Bajo",
        "Content Video",
        "Work",
        "31/03/2022",
        "My job is to combine travel videos to the next destination, by adding interesting map animations and making precise color improvements to improve the visual quality. In addition, I will add relevant and interesting words to provide a clearer context and story about the experience of the trip. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/35bNQ3ZmB8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 29") {
      const data = [
        "Content RE/MAX (Mother Day)",
        "Content Video",
        "Work",
        "22/12/2022",
        "In this project, I was responsible as a video editor to create the RE/MAX version of the Mother's Day celebration video with the monologue theme as the main story. I strive to create engaging and stunning video quality by combining various elements such as text, music, and visual effects. The final result was very satisfying and managed to get a positive response from the audience when uploaded via the Instagram platform. I am very happy to be able to contribute to creating videos that can inspire and motivate many people in celebrating the mother figure who means so much to all of us.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y2_PWCNkhFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 30") {
      const data = [
        "G20 Indonesia RE/MAX & Arebi Trailer",
        "Content Video",
        "Work",
        "23/11/2022",
        "I made a G20 after movie video of the best footage on YouTube and added the elements that the boss asked for. I pay attention to details like visual effects, transitions, and music to create the best quality. The video managed to become a work that perfectly illustrates the beauty and diversity of the event, and received praise from many parties including my boss. I am proud of my contribution to the creation of this video and look forward to continuing to create inspiring works.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/8S9THkeyx_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 31") {
      const data = [
        "Campaign RE/MAX Trusted Your Partner",
        "Motion Graphic",
        "Work",
        "11/08/2022",
        "I created a graphic motion video for a secure transaction campaign with a professional property agent using Powtoon software. The video was engaging and informative, and managed to become an important part of the campaign. I am proud to contribute to this project and look forward to continuing to create works that benefit the community.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/kPFJKNNOOLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 32") {
      const data = [
        "Wonderful Indonesia RE/MAX & Arebi Trailer",
        "Content Video",
        "Work",
        "23/11/2022",
        "In this project, I made an after-movie video of Pesona Indonesia by taking the best footage from Youtube and adding the elements that my boss asked for, as well as following Pesona Indonesia's aspirations to promote the natural beauty and cultural wealth of Indonesia. The result was very satisfactory and received praise from many parties. I feel proud to be able to contribute to making videos that illustrate the uniqueness and spirit of the Indonesian people. I hope to continue to create inspiring and stunning works, as well as help promote Indonesia's natural and cultural wealth to the world.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/hVDjdqLyeqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 33") {
      const data = [
        "Content RE/MAX (Testimoni Join RE/MAX With Business Owner)",
        "Content Video",
        "Work",
        "05/12/2022",
        "The project I'm working on is creating video testimonials from business owners who work with RE/MAX. I was responsible as a director, location stylist, and cameraman in the making of this video.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1519" height="577" src="https://www.youtube.com/embed/dxBAQnqwB6M" title="Content RE/MAX (Testimoni Join RE/MAX With Business Owner)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 34") {
      const data = [
        "Content RE/MAX (Testimoni Buy Apartement With RE/MAX Piyu Padi)",
        "Content Video",
        "Work",
        "05/12/2022",
        "The project I'm working on is to make a testimonial video of pitu padi reborn buying property through RE/MAX. I was responsible as a director, location stylist, and cameraman in the making of this video.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1519" height="577" src="https://www.youtube.com/embed/l79wj2xFleg" title="Content RE/MAX (Testimoni Buy Apartement With RE/MAX Piyu Padi)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 36") {
      const data = [
        "Teaser RE/MAX Convention 9th",
        "Treaser Video",
        "Work",
        "05/01/2023",
        "While working at RE/MAX, I made a video teaser for the 9th convention event with a fancy and glamorous theme. I used dynamic 3D transitions and interesting animations to give an impression that fits the theme of the event. I work closely with a team of graphic designers to create an optimal end result. I also made sure this teaser video fits the company's vision and goals.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1519" height="577" src="https://www.youtube.com/embed/nyPy4wzC9S0" title="Teaser RE/MAX Convention 9th" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 37") {
      const data = [
        "Countdown RE/MAX Convention 9th",
        "Treaser Video",
        "Work",
        "15/01/2023",
        "When I was working in RE/MAX, I was responsible for creating a video countdown consisting of 5 scenes, where the first scene contained ads and the rest of the scene contained RE/MAX promotions. I used After Effects software to make this countdown video. At my boss's request, I managed to create a moment of excitement when I reached 10 seconds with satisfactory results. I am happy to be able to make such a good contribution to this project.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1519" height="577" src="https://www.youtube.com/embed/8nmjUh52epM" title="Countdown RE/MAX Convention 9th 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 38") {
      const data = [
        "Bumper Top #1-5 Business Owner RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very pleased to be able to contribute to the full led project at the 9th RE/MAX Convention Video Awards ceremony. In this project, I worked closely with the boss and tried to create a more luxurious and elegant look to bring a more stunning visual experience to the event attendees. I am very excited to execute the concept carried by the boss and create stunning visual effects. I was very happy when this project received a positive response from the participants and the boss, proving that the hard work and effort we put in really paid off. and can enliven the event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="261" src="https://www.youtube.com/embed/mw31JXz8y3o" title="Bumper Top #1-5 Business Owner RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 39") {
      const data = [
        "Main Bumper Event RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very happy and proud to be part of the team that created the video bumper project that successfully enlivened the 9th RE/MAX Convention event using an LED screen. The concept carried by the boss carrying luxury, fun, and elegant really inspired me to create the best possible animation effect using after effect software. I really strive to produce a satisfactory work, and the positive response from the participants and bosses further motivates me to continue to work and give my best in every project I work on. I hope this project can be a valuable experience and can be a reference in the future. ",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="261" src="https://www.youtube.com/embed/2EzI9DVj-8Y" title="Main Bumper Event RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 40") {
      const data = [
        "Opening CEO Event RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very pleased to be able to contribute to the full led project at the 9th RE/MAX Convention Video Awards ceremony. In this project, I worked closely with the boss and tried to create a more luxurious and elegant look to bring a more stunning visual experience to the event attendees. I am very excited to execute the concept carried by the boss and create stunning visual effects. I was very happy when this project received a positive response from the participants and the boss, proving that the hard work and effort we put in really paid off. and can enliven the event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="261" src="https://www.youtube.com/embed/HUjBtWgnIQQ" title="Opening CEO Event RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 41") {
      const data = [
        "Video Kaleidoscope Event RE/MAX Convention 2022",
        "Content Video",
        "Work",
        "13/02/2023",
        "I feel very happy and proud because I succeeded in working on the kaleidoscope project in the opening video which managed to amaze the audience with a very unique and creative concept. In the initial scene for the opening machine band performance which serves to raise the spirits of the audience and prepare them to experience an extraordinary experience. Then, in the main kaleidoscope scene, I tried my best to create a beautiful and captivating visual effect, resulting in attractive combinations of colors and smooth transitions so as to amaze the audience and improve the quality of the event. I feel very happy that this project managed to steal the limelight and get a lot of praise from everyone present, and I am very honored to be able to make such a useful contribution to the RE/MAX Convention 9th event.",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="262" src="https://www.youtube.com/embed/We5q16AjCJo" title="Video Kaleidoscope Event RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 42") {
      const data = [
        "Bumper Top #1 Marketing Associate RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very pleased to be able to contribute to the full led project at the 9th RE/MAX Convention Video Awards ceremony. In this project, I worked closely with the boss and tried to create a more luxurious and elegant look to bring a more stunning visual experience to the event attendees. I am very excited to execute the concept carried by the boss and create stunning visual effects. I was very happy when this project received a positive response from the participants and the boss, proving that the hard work and effort we put in really paid off. and can enliven the event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="262" src="https://www.youtube.com/embed/jXkTv70TNDA" title="Bumper Top #1 Marketing Associate RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 43") {
      const data = [
        "Bumper Top #1-5 Marketing Associate RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very pleased to be able to contribute to the full led project at the 9th RE/MAX Convention Video Awards ceremony. In this project, I worked closely with the boss and tried to create a more luxurious and elegant look to bring a more stunning visual experience to the event attendees. I am very excited to execute the concept carried by the boss and create stunning visual effects. I was very happy when this project received a positive response from the participants and the boss, proving that the hard work and effort we put in really paid off. and can enliven the event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="261" src="https://www.youtube.com/embed/kJB1V9hYREU" title="Bumper Top #1-5 Marketing Associate RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (classgambar === "bx bx-play-circle 44") {
      const data = [
        "Bumper Top #1 Business Owner RE/MAX Convention 2022",
        "Bumper Animation",
        "Work",
        "13/02/2023",
        "I am very pleased to be able to contribute to the full led project at the 9th RE/MAX Convention Video Awards ceremony. In this project, I worked closely with the boss and tried to create a more luxurious and elegant look to bring a more stunning visual experience to the event attendees. I am very excited to execute the concept carried by the boss and create stunning visual effects. I was very happy when this project received a positive response from the participants and the boss, proving that the hard work and effort we put in really paid off. and can enliven the event",
      ];

      infoPortofolio.forEach(function (element, index) {
        element.innerText = data[index];
      });

      const carousel = document.querySelector(".carousel-inner");
      carousel.innerHTML = `<iframe width="1045" height="262" src="https://www.youtube.com/embed/xUwt-rA31ZA" title="Bumper Top #1 Business Owner RE/MAX Convention 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
  }
}

window.addEventListener("click", function (e) {
  if (e.target.className === "modal fade") {
    let video = document.querySelector("iframe");
    video.remove();
  }
});

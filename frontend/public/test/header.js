// console.log('heylo')

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  header.innerHTML = `
    <div class="header_header">
      <div class="left_section_header">
        <a href="/" class="intern_header">
          <img src="logo.png" alt="learning" />
        </a>
      </div>
      <div class="hamburger_header">
          <span class="hamburger_icon_header" id="hamburgerIcon">&#9776;</span>
      </div>
      <br/>
      <div class="right_section_header">
        <div class="mid_section_header">
          <ul class='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="/LFblog/blog.html">Blog</a></li>
            <li><a href="/collaborate">Collaborate</a></li>
            <li><a href="#">More »</a>
            <ul class='dropdown'>
              <li><a href='/about'>About</a></li>
              <li><a href='/careers'>Careers</a></li>
            </ul>
            </li>
            <li><a href="https://courses.learningfolks.in/s/store" style="font-size: 20px; color: blue;">Courses</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  `;

  const hamburgerIcon = header.querySelector(".hamburger_icon_header");
  const midSection = header.querySelector(".mid_section_header ul");

  let click = false;
  hamburgerIcon.addEventListener("click", () => {
    click = !click;
    if (click) {
      midSection.style.display = "block";
    } else {
      midSection.style.display = "none";
    }
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header_header");
    if (window.scrollY >= 100) {
      header.classList.add("header_shadow_header");
    } else {
      header.classList.remove("header_shadow_header");
    }
  });
});

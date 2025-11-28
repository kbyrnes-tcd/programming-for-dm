//------------------------- hamburger menu function -------------------------//
//note that hamburger function has to be called before dom content loaded
//
  //function toggleMenu() {
  //  const topnav = document.getElementById("myTopnav");
  //  topnav.classList.toggle("responsive");
  //}

function toggleMenu() {
  const topnav = document.getElementById("myTopnav");
  topnav.classList.toggle("responsive");
    
  const icon = topnav.querySelector(".icon");
    if (topnav.classList.contains("responsive")) {
        icon.innerHTML = "&times;"; //X
    } else {
        icon.innerHTML = "&#9776;"; //hamburger
    }
}

//------------------------- DOMContentLoaded -------------------------//
document.addEventListener("DOMContentLoaded", () => {
  
  
//------------------------- spotlight setup ------------------------------//
  
  //note - JS breaking with portfolio content loading?
  //add condition for running only on home page
  
  const switchButton = document.getElementById("switchSpotlight");
  if (!switchButton) return;  
  const roles = [
    {
      type: "image",
      title: "3D <span class='highlight'>Modeler</span>",
      img: "assets/pidgeon.png",
      alt: "3D model of stylized pidgeon",
      color: "#a6f4ec", //mint color
      buttonColor: "#a6f4ec",
      footerColor: "#a6f4ec",
      navColor: "#a6f4ec"
    },
    {
      type: "image",
      title: "UX/UI <span class='highlight'>Designer</span>",
      img: "assets/ux-ui.png",
      alt: "UX/UI interface mockup",
      color: "#f9f278", //soft yellow
      buttonColor: "#f9f278",
      footerColor: "#f9f278",
      navColor: "#f9f278"
    },
    {
      type: "image",
      title: "& <span class='highlight'>Illustrator</span>",
      img: "assets/crow.png",
      alt: "Illustration showing digital drawing of crow in cyberpunk city",
      color: "#ffb0f9", //soft pink
      buttonColor: "#ffb0f9",
      footerColor: "#ffb0f9",
      navColor: "#ffb0f9"
    }
    //{
    //  type: "model", //3D model-viewer
    //  title: "3D <span class='highlight'>Modeler</span>",
    //  modelSrc: "N64_model.glb", //path to .gbl
    //  alt: "3D model of stylized pidgeon",
    //  color: "#a6f4ec", //mint color
    //  buttonColor: "#a6f4ec",
    //  footerColor: "#a6f4ec",
    //  navColor: "#a6f4ec"
    //}
  ]; //closed const roles

  let currentIndex = 0;

  // ELEMENTS
  //const switchButton = document.getElementById("switchSpotlight");
  const spotlightImg = document.getElementById("spotlightImg");
  // instead of spotlightImg
  const roleTitle = document.getElementById("roleTitle");
  const spotlight = document.querySelector(".spotlight"); 
  const portfolioBtn = document.querySelector(".portfolioBtn");
  const spotlightBtn = document.querySelector(".spotlightBtn");
  const footerCircles = document.querySelectorAll(".social-link");
  const navLinks = document.querySelectorAll(".topnav a");

  
  // CLICK TO SWITCH
  switchButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % roles.length;
    const currentRole = roles[currentIndex]; 
  
  //swap h2
    roleTitle.innerHTML = currentRole.title;
  
  //swap image src and alt text
    spotlightImg.src = currentRole.img;
    spotlightImg.alt = currentRole.alt;
  
  //update accent color
    document.documentElement.style.setProperty("--accent-color", currentRole.color);

    //swap button border
    portfolioBtn.style.borderColor = currentRole.buttonColor;
    spotlightBtn.style.borderColor = currentRole.buttonColor;

    //swap footer circles
    footerCircles.forEach(circle => {
      circle.style.backgroundColor = currentRole.footerColor;
    }); //closed footer circles

    //update active nav link color
    navLinks.forEach(link => {
      if (link.classList.contains("active")) {
        link.style.color = currentRole.navColor;
      }
    }); //closed nav links
  });
});

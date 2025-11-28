/**
 * When image in portfolio is clicked -> window.location.href = "projects.html?id=<ID OF PROJECT>"; window.location.href = "projects.html?id=3";
*/


async function getData() {
  const url = "portfolio.json";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get("id"));

    const project = data.find(p => p.id === projectId);

    if (project) {
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-description").textContent = project.description;

      const imageContainer = document.getElementById("project-image");
      if (!imageContainer) {
        console.error("ERROR: #project-image element not found in HTML.");
        return;
      }

      let currentIndex = 0;
      
      //CHANGED: html contains buttons so it doesn't have to reload each time
      const imgElement = document.getElementById("slideshow-img");
      const prevSlideBtn = document.querySelector(".prev-btn");
      const nextSlideBtn = document.querySelector(".next-btn");

      //CHANGED: UPDATE IMAGE, NOT ENTIRE HTML
      const updateSlide = () => {
        imgElement.classList.add("fade-out");
        setTimeout(() => {
          imgElement.src = project.image[currentIndex];
          imgElement.alt = project.title;
          imgElement.classList.remove("fade-out");
        }, 200);
      };

      //add event listeners once
      prevSlideBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + project.image.length) % project.image.length;
        updateSlide();
      });

      nextSlideBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % project.image.length;
        updateSlide();
      });
      
      updateSlide();
      
      //add arrow key nav for slideshow only
      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          currentIndex = (currentIndex - 1 + project.image.length) % project.image.length;
          updateSlide();
        }
        if (event.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % project.image.length;
          updateSlide();
        }
      });
      
      //figure out total projects for the final next button to return to portfolio
      const totalProjects = data.length;

      //nottom nav button logic
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");

      //back button logic -1 unless id=1 for first project then back to portfolio
      if (projectId > 1) {
        prevBtn.textContent = "Previous";
        prevBtn.href = `details.html?id=${projectId - 1}`;
      } else {
        prevBtn.textContent = "Back to Portfolio";
        prevBtn.href = "portfolio.html";
      }

      //next button logic +1 unless id=14 for last project then back to portfolio
      //is there a way to define last project --> figure out total projects length
      if (projectId < totalProjects) {
        nextBtn.textContent = "Next";
        nextBtn.href = `details.html?id=${projectId + 1}`;
      } else {
        nextBtn.textContent = "Back to Portfolio";
        nextBtn.href = "portfolio.html";
      }
      
    } 
    
    else {
      document.getElementById("project-title").textContent = "Project Not Found";
    }
  } catch (error) {console.error(error);}
}

document.addEventListener("DOMContentLoaded", getData);


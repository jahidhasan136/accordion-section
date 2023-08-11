document.addEventListener("DOMContentLoaded", function () {
    const collapseTitles = document.querySelectorAll(".collapse-title");
  
    collapseTitles.forEach(title => {
      title.addEventListener("click", () => {
        const collapse = title.parentElement;
        const content = collapse.querySelector(".collapse-content");
        const allContents = document.querySelectorAll(".collapse-content");
  
        allContents.forEach(item => {
          if (item !== content) {
            item.style.display = "none";
          }
        });
  
        content.style.display = content.style.display === "none" ? "block" : "none";
      });
    });
  });
  
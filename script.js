const correctPassword = "swati";

function checkPassword() {
  const entered = document.getElementById("passwordInput").value;

  if (entered === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("website-content").style.display = "block";
  } 
  else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

/* Fade-in animation */
const memories = document.querySelectorAll(".memory");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

memories.forEach(memory => observer.observe(memory));

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/Avatar-light.png')
  } else {
    // se tiver sem light mode, ,manter a imagem normal
    img.setAttribute('src', './assets/Avatar-dark.png')
  }
 
}
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Salva o tema escolhido no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }

  // Pega a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-dark.png")
  }
}

// Verifica o tema ao carregar a página
function checkTheme() {
  const theme = localStorage.getItem("theme")
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (theme === "light") {
    html.classList.add("light")
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/Avatar-dark.png")
  }
}

// Chama a função ao carregar a página
checkTheme()
  
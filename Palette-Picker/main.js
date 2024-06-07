// console.log("Hello-world")
// const body = document.querySelector('body');
const makePaletteCard = (paletteObj) => {
  // console.log(paletteObj)
  const {uuid, title, colors, temperature} = paletteObj
  // console.log(paletteObj)
  // console.log(uuid)
  // console.log(title)
  // console.log(colors)
  // console.log(temperature)
  const li = document.createElement('li')
  const paletteTitleP = document.createElement('p')
  const threeColorsContainer = document.createElement('div')
  const colorBorder = document.createElement('div')
  const colorDisplay = document.createElement('div')
  const copyButton = document.createElement('button')
  const deleteButton = document.createElement('button')
  const temperatureP = document.createElement('p')

  li.append(paletteTitleP, threeColorsContainer, deleteButton, temperatureP)
  console.log(colors)
  colors.forEach(color => {
    const colorViewAndCopyContainer = document.createElement('div')
    threeColorsContainer.append(colorViewAndCopyContainer)
    // console.log(threeColorsContainer)
  })
  console.log(li)
}

makePaletteCard({
  "uuid": "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
  "title": "Marcy",
  "colors": [ "#c92929", "#2f5a8b", "#327a5f" ],
  "temperature": "neutral"
})
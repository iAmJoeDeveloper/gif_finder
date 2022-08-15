const apiKey = '06v3SHJy9yqOvMko9iFaeanH99OPm23j'
const endPoint = 'http://api.giphy.com/v1/gifs/'
const app = document.querySelector('#app')
const gifContainer = document.querySelector('#gifContainer')
const form = document.querySelector('form')

const findGif = async () => {
	// e.preventDefault()

	let search = document.querySelector('#searchBar').value

	if (search != '') {
		cleanDom(gifContainer)
		await fetch(`${endPoint}search?q=${search}&api_key=${apiKey}&limit=50`)
			.then((response) => response.json())
			.then((json) => {
				json.data
					.map((gif) => gif.images.fixed_height.url)
					.forEach((url) => {
						let img = document.createElement('img')
						img.src = url
						img.classList.add('image')
						gifContainer.append(img)
					})
			})
			.catch((error) => (document.body.appendChild = error))
	} else {
		console.error('There is not in the bar search')
	}
}

const cleanDom = (parent) => {
	parent.innerHTML = ''
}

//homeGif()

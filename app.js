loadGif()

const apiKey = '06v3SHJy9yqOvMko9iFaeanH99OPm23j'
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
	.then((response) => response.json())
	.then((json) => {
		json.data
			.map((gif) => gif.images.fixed_height.url)
			.forEach((url) => {
				let img = document.createElement('img')
				img.src = url
				document.body.appendChild(img)
			})
	})
	.catch((error) => (document.body.appendChild = error))

// JavaScript source code
navigator.share({
    title: 'Musik-avel',
    text: 'Rejoins nous pour partager la culture à Brécé!',
    url: 'https://mic-mac-web.github.io/musik-avel/index.html',
})
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
                            }
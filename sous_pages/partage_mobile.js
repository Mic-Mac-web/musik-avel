// JavaScript source code
navigator.share({
    title: 'Musik-avel',
    text: 'Rejoins nous pour partager la culture a Brécé!',
    url: 'https://mic-mac-web.github.io/musik-avel/index.html',
})
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
                            
    //TODO detecter une page si elle trop petite pour metre la police du paraphe different
    //TODO => soit faire une fonction boolean : si la resolution est de type telephone ou (si detecter comme tel) alors changer la page 
    // d'accueil soit url pour permetre meilleur affichage
    //TODO changer le style si tel
    // utiliser la meme fonction precedante pour permettre une 
    //TODO faire un partage ctrl v ou si tel mettre un partage de type tel 
    //TODO animer des images sur le cotépres le merche en route 
    //TODO mettre les nouvelle conextion ip,voir le nbr de conextion dans un fichier csv
    //TODO voir les cookie et reglementation 


    //TODO FONCTION Detecte de type bollean: true si et seulement si x(@param de la fonction) est inferieure ou egale a la resolution
    // de l'ecran des la premiere conexion (probleme si elle change la resolution en cours de consultation )
    //TODO FONCTION Mobile de type (unit): si detecte true selon x (a determiner) alors rediriger vers les pages html telephone
    //TODO FONCTION Petit de type (unit): si detecte true selon x : alors changer la taille de police, soit peut etre une nouvelle 
    // page/css
    //=> ATTENTION :peutre un probleme avec une confusion entre les 2 fct




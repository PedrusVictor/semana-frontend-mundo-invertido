const music = document.querySelector("#music")

const playBgm=(theme)=>{
   

    
    music.src=`./assets/musics/${theme==="dark-theme"?"inverted-world":"normal-world"}.mpeg`
   
    music.play()
}




function switchTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme")

    const theme  = document.body.classList[0]


    playBgm(theme)



}

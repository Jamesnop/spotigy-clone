let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("master");
let myprogressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songs = [
  {
    songName: "salame-e-isq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "hole-hole salame-e-isq",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "bhula dena salame-e-isq",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "tumhari kasam salame-e-isq",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: " jalandhar hoon mai salame-e-isq",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "sare jaha se achha salame-e-isq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "e mere dost lot ke aja salame-e-isq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "too jaha jaha hoga",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "teri kasam salame-e-isq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "kon hai waha salame-e-isq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    console.log("playing");
    
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity = 1
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});
songitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
  });
  const addpausecircle=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
    
    
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
    addpausecircle();
    let songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity = 1
    }
  else{
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
  })

});

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0
  }
  else{
    songIndex+=1
  }
  console.log("i clicked")
 
  audioElement.src=`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  masterSongName.innerText=songs[songIndex].songName;



});
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=9
  }
  else{
    songIndex-=1
  }
  audioElement.src=`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  masterSongName.innerText=songs[songIndex].songName;
})
const moveLeft = () => {
    let left = 
    parseInt(window.getComputedStyle(player)
    .getPropertyValue('left'));
    left -= 100;
    if (left>= 0) {
        player.style.left = left + 'px';
    }
}
const moveRight = () => {
    let left = 
    parseInt(window.getComputedStyle(player)
    .getPropertyValue('left'));
    left +=100;
    if (left<300) {
        player.style.left = left + 'px';
    }
}
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        moveLeft();
    }
    if (event.key === 'ArrowRight') {
        moveRight();
    }
});

let opstrical = document.getElementById('opstrical');
let Score = 0;
opstrical.addEventListener(
    'animationiteration', () => {
        let random = Math.floor(Math.random() * 3);
        left = random * 100;
        opstrical.style.left = left + 'px';
        Score++;
});
    setInterval(function() {
        let playerLeft = 
        parseInt(window.getComputedStyle(player)
        .getPropertyValue('left'));
        let opstricalLeft = 
        parseInt(window.getComputedStyle(opstrical)
        .getPropertyValue('left'));
        let opstricalTop = 
        parseInt(window.getComputedStyle(opstrical)
        .getPropertyValue('top'));
        document.getElementById('ScoreBord').innerText=
                `Youre Score is: ${Score}`;
        if (!(playerLeft == opstricalLeft && 
            opstricalTop<300 && opstricalTop>200))  {
            document.getElementById('restart').addEventListener(
                'click', event => {
                    opstrical.style.animation ='toptobottom 1000ms infinite linear';
                    document.getElementById('Status').innerText=
                    '';
                    document.getElementById('ScoreBord').innerText=
                    '';
                    document.getElementById('restart').style.visibility = 
                    'hidden';
                    Score = 0;
            });
        }else if (playerLeft == opstricalLeft && 
            opstricalTop<300 && opstricalTop>200) {
                document.getElementById('Status').innerText=
                'GAME OVER';
                document.getElementById('ScoreBord').innerText=
                `Youre Score is: ${Score}`;
                opstrical.style.animation = 'none';
                document.getElementById('restart').style.visibility = 'visible';
        }
        // document.getElementById('ScoreBord').innerText=Score;
    },1);


document.getElementById('left').addEventListener('touchstart',moveLeft);
document.getElementById('right').addEventListener('touchstart',moveRight);
















// if (Score >= 30 && Score <= 80) {
//     if (playerLeft == opstricalLeft && 
//         opstricalTop<300 && opstricalTop>200) {
//             opstrical.style.animation = 'none';
//     }else{
//         opstrical.style.animation =`toptobottom ${1000 - 100}ms infinite linear`;
//         console.log(1000 - 100);
//     }
// } else if(Score > 80 && Score <=150) {
//     if (playerLeft == opstricalLeft && 
//         opstricalTop<300 && opstricalTop>200) {
//             opstrical.style.animation = 'none';
//     }else{
//         opstrical.style.animation =`toptobottom ${1000 - 150}ms infinite linear`;
//         console.log(1000 - 100);
//     }
// } else if(Score > 150 && Score <=280) {
//     if (playerLeft == opstricalLeft && 
//         opstricalTop<300 && opstricalTop>200) {
//             opstrical.style.animation = 'none';
//     }else{
//         opstrical.style.animation =`toptobottom ${1000 - 200}ms infinite linear`;
//         console.log(1000 - 100);
//     }
// } else if(Score > 280 && Score <=350) {
//     if (playerLeft == opstricalLeft && 
//         opstricalTop<300 && opstricalTop>200) {
//             opstrical.style.animation = 'none';
//     }else {
//         opstrical.style.animation =`toptobottom ${1000 - 300}ms infinite linear`;
//         console.log(1000 - 100);
//     }
// } else if(Score >350) {
//     if (playerLeft == opstricalLeft && 
//         opstricalTop<300 && opstricalTop>200) {
//             opstrical.style.animation = 'none';
//     }else {
//         opstrical.style.animation =`toptobottom ${1000 - 500}ms infinite linear`;
//         console.log(1000 - 100);
//     }
// }
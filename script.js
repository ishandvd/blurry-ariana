const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const btn = document.querySelector('.refresh')


const pics = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-breathin-video-1541611731.png',
               'https://turntablethought.files.wordpress.com/2021/01/ariana-pc-2.jpg?strip=info&w=2000',
               'https://www.hdwallpaper.nu/wp-content/uploads/2019/01/ariana_grande-16-1024x576.jpg',
               'https://turntablethought.files.wordpress.com/2021/01/ariana-pc-1.jpg?strip=info&w=2000',
               'https://www.hdwallpaper.nu/wp-content/uploads/2019/01/ariana_grande-6-1024x679.jpg',
               'https://www.hdwallpaper.nu/wp-content/uploads/2019/01/ariana_grande-15-768x480.jpg',
               'https://www.hdwallpaper.nu/wp-content/uploads/2019/01/ariana_grande-11-1024x682.jpg',
               'https://turntablethought.files.wordpress.com/2021/02/ariana-pc-5.jpg?strip=info&w=2000'
             ]

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
function random_item(items){

    return items[Math.floor(Math.random()*items.length)];
    
}

btn.addEventListener('click', () => {
    window.location.reload("refresh")
})

const background = random_item(pics)
console.log('Random background is: ' + background)
bg.style.background = `url(${background})`


let load = 0;

let interval = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring () {
    load++
        if (load > 99) {
            clearInterval(interval)
        }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}




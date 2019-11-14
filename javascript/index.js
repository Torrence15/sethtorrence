document.addEventListener('DOMContentLoaded', () => {
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]
    shuffle(x)

    var pic1 = 'url(' + pictures[x[1]] + ')'
    var pic2 = 'url(' + pictures[x[2]] + ')'
    var pic3 = 'url(' + pictures[x[3]] + ')'
    var pic4 = 'url(' + pictures[x[4]] + ')'

    document.getElementById('image1').style.backgroundImage = pic1
    document.getElementById('main').style.backgroundImage = pic2
    document.getElementById('contact').style.backgroundImage = pic3
})

const pictures = {
    1: 'https://i.imgur.com/Y64Fpba.jpg',
    2: 'https://i.imgur.com/QwTQnon.jpg',
    3: 'https://i.imgur.com/4oRf2t9.jpg',
    4: 'https://i.imgur.com/f6UMfYT.jpg',
    5: 'https://i.imgur.com/KbPGLj7.jpg',
    6: 'https://i.imgur.com/jEriHzs.jpg',
    7: 'https://i.imgur.com/2f6I6nL.jpg',
    8: 'https://i.imgur.com/DIDXwig.jpg',
    9: 'https://i.imgur.com/LW3QFyR.jpg',
    10: 'https://i.imgur.com/N4DLGk0.jpg',
    11: 'https://i.imgur.com/WXg7woF.jpg',
    12: 'https://i.imgur.com/QVkrNmu.jpg',
    13: 'https://i.imgur.com/IwFSFUz.jpg',
    14: 'https://i.imgur.com/Wrx5aBM.jpg',
    15: 'https://i.imgur.com/FEkStC6.jpg'
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

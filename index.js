

function newImage(spriteAsset, spriteLeftValue, spriteBottomValue){

    let newSprite = document.createElement('img')
    newSprite.src = spriteAsset
    newSprite.style.position = 'fixed'
    newSprite.style.left = spriteLeftValue
    newSprite.style.bottom = spriteBottomValue
    document.body.append(newSprite)

}

function newItem(spriteAsset, spriteLeftValue, spriteBottomValue){

    let newSprite = document.createElement('img')
    newSprite.src = spriteAsset
    newSprite.style.position = 'fixed'
    newSprite.style.left = spriteLeftValue
    newSprite.style.bottom = spriteBottomValue
    document.body.append(newSprite)
    newSprite.addEventListener('dblclick', function(){
        newSprite.remove()
    })

}


    let greenCharacter = newImage('assets/green-character.gif', '100px', '100px')
    let pineTree = newImage('assets/pine-tree.png', '450px', '200px')
    let tree = newImage('assets/tree.png', '200px', '300px')
    let pillar = newImage('assets/pillar.png', '350px', '100px')
    let crate = newImage('assets/crate.png', '150px', '200px')
    let well = newImage('assets/well.png', '500px', '425px')

    let swordItem = newItem('assets/sword.png', '500px', '405px')
    let shieldItem = newItem('assets/sheild.png', '165px', '600px')
    let staffItem = newItem('assets/staff.png', '600px', '100px')





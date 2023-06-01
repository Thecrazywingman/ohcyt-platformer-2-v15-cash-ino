//Welcome to Ochyt Platformer 2! Feel free to edit this project, but be sure to credit me for the floor code.
namespace SpriteKind {
    export const BOSS = SpriteKind.create()
    export const BOSSBALL = SpriteKind.create()
}

namespace StatusBarKind {
    export const TriangryHealth = StatusBarKind.create()
    export const BossballHealth = StatusBarKind.create()
    export const CASHinoHealth = StatusBarKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`waterBall0`, function (sprite, location) {
    WaterLeft = true
    waterOn = false
})

function spawnTriangry () {
    TRIANGRY = sprites.create(assets.image`TRYANGRY`, SpriteKind.BOSS)
    TRIANGRY.setScale(3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(TRIANGRY, assets.tile`spawnBoss`)
    TRIANGRY.follow(mySprite, 75)
    statusbar = statusbars.create(20, 4, StatusBarKind.TriangryHealth)
    statusbar.attachToSprite(TRIANGRY)
    statusbar.value = 120
    TRIANGRY.setFlag(SpriteFlag.GhostThroughWalls, true)
    Bossfight = 1
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`button3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -200
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level6`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level18`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level14`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        spawnBossBall()
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`replay4`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

statusbars.onZero(StatusBarKind.TriangryHealth, function (status) {
    TRIANGRY.destroy()
    game.splash("You defeated Triangry!")
    backToHub()
    info.changeScoreBy(1000)
    Bossfight = 0
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.BOSS, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`spawnBoss`)
    info.changeLifeBy(-1)
    level += -1
})
function spawnCashIno () {
    CASHino = sprites.create(assets.image`cash-ino`, SpriteKind.BOSS)
    CASHino.setScale(4, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(CASHino, assets.tile`spawnBoss`)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.CASHinoHealth)
    statusbar3.value = 1000
    statusbar3.attachToSprite(CASHino)
    CASHino.follow(mySprite, 80)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`level18`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level25`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`replay3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level13`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level35`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (waterOn == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
    } else if (WaterLeft == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
    }
})

function backToHub () {
    tiles.setCurrentTilemap(tilemap`hub`)
    if (level >= 6) {
        tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(15, 2), assets.tile`spawn`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`level8`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level22`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`replay5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite, location) {
    game.splash("Level Failed")
    backToHub()
    level += -1
    triangrylevel = 0
    info.changeLifeBy(-1)
    if (bossballActive == 1) {
        BOSSBALL.destroy()
        bossballActive = 0
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`finish0`, function (sprite, location) {
    if (triangrylevel == 0) {
        jumpBoost = false
        tiles.setCurrentTilemap(tilemap`level32`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        triangrylevel += 1
        if (hearthCollected1 >= 1) {
            tiles.setTileAt(tiles.getTileLocation(15, 9), assets.tile`transparency16`)
        }
    } else if (triangrylevel == 1) {
        tiles.setCurrentTilemap(tilemap`level19`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        triangrylevel += 1
    } else if (triangrylevel == 2) {
        tiles.setCurrentTilemap(tilemap`triangryBoss`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        spawnTriangry()
        triangrylevel += 1
    }
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BOSSBALL, function (sprite, otherSprite) {
    sprite.destroy(effects.blizzard, 500)
    statusbar2.value += -5
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level16`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`jumpBoost`, function (sprite, location) {
    jumpBoost = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level17`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level16`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level53`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

statusbars.onZero(StatusBarKind.BossballHealth, function (status) {
    BOSSBALL.destroy()
    game.splash("You defeated BOSSBALL!")
    backToHub()
    info.changeScoreBy(100)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`finish`, function (sprite, location) {
    jumpBoost = false
    mayFly = false
    waterOn = false
    WaterLeft = false
    backToHub()
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`button0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`finish0`)
})

scene.onOverlapTile(SpriteKind.Projectile, assets.tile`lava`, function (sprite, location) {
    sprite.destroy()
    tiles.setTileAt(location, assets.tile`transparency16`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level10`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

function level0 () {
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
}

function nextLevel () {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 5) {
        tiles.setCurrentTilemap(tilemap`level18`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 6) {
        tiles.setCurrentTilemap(tilemap`level20`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 7) {
        tiles.setCurrentTilemap(tilemap`level22`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 8) {
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 9) {
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 10) {
        tiles.setCurrentTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 11) {
        tiles.setCurrentTilemap(tilemap`level13`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 12) {
        tiles.setCurrentTilemap(tilemap`level35`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 13) {
        tiles.setCurrentTilemap(tilemap`level14`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        spawnBossBall()
    } else if (level == 14) {
        tiles.setCurrentTilemap(tilemap`level53`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 15) {
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 16) {
        tiles.setCurrentTilemap(tilemap`level16`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 17) {
        tiles.setCurrentTilemap(tilemap`level25`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 18) {
        tiles.setCurrentTilemap(tilemap`level26`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else if (level == 19) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    } else {
        game.over(false)
    }
    level += 1
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`finish1`, function (sprite, location) {
    if (CASHinoLevel == 0) {
        jumpBoost = false
        tiles.setCurrentTilemap(tilemap`level58`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        CASHinoLevel += 1
    } else {
        tiles.setCurrentTilemap(tilemap`level59`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        spawnCashIno()
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level12`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level13`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`next`, function (sprite, location) {
    if (controller.A.isPressed()) {
        nextLevel()
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`replay2`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

function spawnBossBall () {
    BOSSBALL = sprites.create(assets.image`BOSSBALL`, SpriteKind.BOSSBALL)
    BOSSBALL.follow(mySprite, 75)
    tiles.placeOnRandomTile(BOSSBALL, assets.tile`spawnBoss`)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.BossballHealth)
    statusbar2.value = 150
    statusbar2.attachToSprite(BOSSBALL)
    BOSSBALL.setScale(3, ScaleAnchor.Middle)
    bossballActive = 1
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.BOSSBALL, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`spawnBoss`)
    info.changeLifeBy(-1)
})

info.onLifeZero(function () {
    game.over(false)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`waterBall`, function (sprite, location) {
    waterOn = true
    WaterLeft = false
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`button1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    statusbar.value += -20
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`level7`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level20`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`button2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`flyPower`, function (sprite, location) {
    mayFly = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`casino0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        tiles.placeOnRandomTile(CASHino, assets.tile`spawnBoss`)
        casinoRank = randint(0, 3)
        if (casinoRank == 2) {
            statusbar3.value += -10
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`life`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(1)
    hearthCollected1 += 1
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`casino`, function (sprite, location) {
    if (controller.A.isPressed()) {
        casinoRank = randint(1, 3)
        pause(1000)
        if (casinoRank == 2) {
            tiles.setTileAt(location, assets.tile`finish`)
        } else {
            game.splash("Try Again")
            tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`relpay1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    }
})

function spawnTycho () {
    mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 500
    scene.cameraFollowSprite(mySprite)
}

let casinoRank = 0
let CASHinoLevel = 0
let mayFly = false
let statusbar2: StatusBarSprite = null
let hearthCollected1 = 0
let jumpBoost = false
let BOSSBALL: Sprite = null
let bossballActive = 0
let triangrylevel = 0
let projectile: Sprite = null
let statusbar3: StatusBarSprite = null
let CASHino: Sprite = null
let level = 0
let Bossfight = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let TRIANGRY: Sprite = null
let waterOn = false
let WaterLeft = false
console.log("Game Updated: V1.5.4")
spawnTycho()
level0()

forever(function () {
    if (mayFly == true) {
        controller.moveSprite(mySprite)
        mySprite.ay = 0
    } else if (jumpBoost == true) {
        mySprite.ay = 300
    } else {
        mySprite.ay = 500
        controller.moveSprite(mySprite, 100, 0)
    }
})

// Music 
forever(function () {
    if (Bossfight == 1) {
        music.playMelody("B C - B C - B C ", 200)
    }
})

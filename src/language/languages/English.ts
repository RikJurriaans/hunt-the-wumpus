import NaturalLanguage from "./NaturalLanguage.ts";

export default class English implements NaturalLanguage {
  h: string = `
    Welcome to "Hunt the Wumpus"
The wumpus lives in a cave of 20 rooms. Each room has 3 tunnels to
other rooms. (Look at a dodecahedron to see how this works. If you
dont know what a dodecahedron is, ask someone.)
Hazards:
 Bottomless pits - Two rooms have bottomless pits in them. If you go
   there, you fall into the pit (& lose)!
 Super bats - Two other rooms have super bats. If you go there, a
   bat grabs you and takes you to some other room at random (which
   may be troublesome).
Wumpus:
   The wumpus is not bothered by hazards. (He has sucker feet and is
   too big for a bat to lift.)  Usually he is asleep. Two things
   wake him up: your shooting an arrow, or your entering his room.
   If the wumpus wakes, he moves one room or stays still.
   After that, if he is where you are, he eats you up and you lose!
You:
   Each turn you may move or shoot a crooked arrow.
   Moving:  You can move one room (through one tunnel).
   Arrows:  You have 5 arrows.  You lose when you run out.
      You can only shoot to nearby rooms.
      If the arrow hits the wumpus, you win.
Warnings:
   When you are one room away from a wumpus or hazard, the computer
   says:
   Wumpus:  "You smell something terrible nearby."
   Bat   :  "You hear a rustling."
   Pit   :  "You feel a cold wind blowing from a nearby cavern."`;
}

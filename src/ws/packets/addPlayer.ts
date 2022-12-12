import { MooMoo } from "../../../app";
import Player from "../../lib/_game/Player";

function addPlayer (data : Array<any>, isYou: boolean) {
    let tmpPlayer = MooMoo.playerManager.getPlayerBySid(data[1]);
    if (!tmpPlayer) {
        tmpPlayer = new Player(data[1])
        tmpPlayer.name = data[2];
        tmpPlayer.id = data[0];
        MooMoo.playerManager.addPlayer(tmpPlayer);
    }

    MooMoo.debug("Player " + tmpPlayer.name + " has joined the game.");
    
    if (isYou) {
        console.log("You are now in game!");
    }
}

export default addPlayer;
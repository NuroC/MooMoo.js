import Player from "../types/Player";

class PlayerManager {

    players:Player[];

    constructor() {
        this.players = [];
    }

    addPlayer(player:Player) {
        this.players.push(player);
    }

    removePlayer(player:Player) {
        this.players.splice(this.players.indexOf(player), 1);
    }

    removePlayerBySid(sid: number) {
        this.players.splice(this.players.findIndex(player => player.sid === sid), 1);
    }

    removePlayerById(id: string) {
        this.players.splice(this.players.findIndex(player => player.id === id), 1);
    }

    getPlayerBySid(sid: number) {
        return this.players.find(player => player.sid === sid);
    }

    getPlayerById(id: string) {
        return this.players.find(player => player.id === id);
    }

    getPlayerByName(name: string) {
        let players = this.players.filter(player => player.name === name);
        if (players.length > 1) {
            return players;
        } else return players[0];
    }

    clearPlayers() {
        this.players = [];
    }

    updatePlayer(sid: number, data: Player) {
        let player = this.getPlayerBySid(sid);
        if (player) {
            Object.assign(player, data);
        }
    }

}

export default PlayerManager;
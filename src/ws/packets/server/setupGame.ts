import { MooMoo } from "../../../../app"

import place from "../../../lib/_game/external/modules/features/place";
import chat from "../../../lib/_game/external/modules/features/chat";
import hit from "../../../lib/_game/external/modules/features/hit";

import equipHat from "../../../lib/_game/external/modules/features/equipHat";
import equipAccessory from "../../../lib/_game/external/modules/features/equipAccessory";

import unequipHat from "../../../lib/_game/external/modules/features/unequipHat";
import unequipAccessory from "../../../lib/_game/external/modules/features/unequipAccessory";

import buyHat from "../../../lib/_game/external/modules/features/buyHat";
import buyAccessory from "../../../lib/_game/external/modules/features/buyAccessory";

function setupGame (data: Array<1>) {
   let sid = data[0];
   MooMoo.myPlayer = {};
   MooMoo.myPlayer.sid = sid;
   
   // set player functions (features)
   MooMoo.myPlayer.place = place;
   MooMoo.myPlayer.chat = chat;
   MooMoo.myPlayer.hit = hit;

   MooMoo.myPlayer.equipHat = equipHat;
   MooMoo.myPlayer.equipAccessory = equipAccessory;

   MooMoo.myPlayer.unequipHat = unequipHat;
   MooMoo.myPlayer.unequipAccessory = unequipAccessory;

   MooMoo.myPlayer.buyHat = buyHat;
   MooMoo.myPlayer.buyAccessory = buyAccessory;

   MooMoo.vars.gameLoaded = true;

   MooMoo.emit("gameLoad");

   MooMoo.emit("setupGame", data);
   MooMoo.emit("setupgame", data);
   MooMoo.emit("1", data);

   let didInit = MooMoo.didInit;
   if (!didInit) {
      if(MooMoo.onGameLoad) MooMoo.onGameLoad();
      MooMoo.didInit = true;
   }
}






export default setupGame
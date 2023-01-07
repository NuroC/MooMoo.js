import { MooMoo } from "../../../../app";

function killObjects(data: Array<1>) {
    let ownerSid = data[0];

    MooMoo.GameObjectManager.removeObjectsByOwnerSid(ownerSid);

    MooMoo.emit("killObjects", data);
    MooMoo.emit("killobjects", data);
    MooMoo.emit("13", data);
}

export default killObjects;
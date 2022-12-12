import decode from "../lib/decode.js";
import encode from "../lib/encode.js";
import { handlePacket } from "./handlePacket";
import { MooMoo } from "../../app";

let _onmessage: boolean = false;

export default function hookWS() {

    WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, thisArg, args) {
            MooMoo.ws = thisArg;
            if (!_onmessage) {
                _onmessage = true;
                MooMoo.ws.addEventListener("message", (e: any) => {
                    let data = e.data;
                    try {
                        let decoded = decode(data);
                        let [packet, [...packetData]] = decoded;
                        handlePacket(packet, packetData);

                        MooMoo.sendPacket = function(type: string) {
                            let data = Array.prototype.slice.call(arguments, 1);
                            let binary = encode([type, data]);
        
                            MooMoo.ws.send(binary);
                        }
                    } catch (e) {
                        throw new Error(e);
                    }
                })
                

            }
            return Reflect.apply(target, thisArg, args);
        }
    });
}

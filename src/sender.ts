import {create, Whatsapp, Message, SocketState} from "venom-bot"


class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }

async sendText(to: string, body: string){
    //5549988106106@c.us

    await this.client.sendText(to, body)
}


    private initialize() {
        const qr     = (base64Qrimg: string) => {
            console.log();
        }
        const status = (statusSession: string) => {}
        const start  = (client: Whatsapp) => {
            this.client = client

            this.sendText('554796890453@c.us', "Olá")
        }




        create("apiwhatsappenvio", qr, status)
        .then((client)  => start(client))
        .catch((error)  => console.error(error))
    }
}

export default Sender


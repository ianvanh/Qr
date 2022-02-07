/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH*/


const chalk = require('chalk')
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs')
const figlet = require('figlet')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

async function DrkBot() {
	const conn = new WAConnection()
	conn.logger.level = 'warn'
	conn.version = [3, 3234, 9]
  conn.regenerateQRIntervalMs = 50000;

	conn.on('connecting', async () => {
	 	 conn.browserDescription = ["DrkBot", "Safari", "13.0.0"]
   console.log(
     color('[Copyright By: Ian]', 'orange'))
   console.log(
     color('Prohibida su venta\nChatea con ©Ian\nWats 573508770421', 'pink'))
   console.log(
     color(figlet.textSync('MiniBot', {
		      font: 'Graffiti',
		      horizontalLayout: 'default',
		      vertivalLayout: 'default',
	    	   width: 80,
		      whitespaceBreak: false
	    }), 'red'))
	  console.log(
		   color(	'\n\nℹ️  Escanea el Qr...'))
	})

	conn.on('open', async () => {
		await conn.sendMessage(
			conn.user.jid,
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
 MessageType.text
		);
		if (conn.user.jid.startsWith('57')) {
			await conn.sendMessage(
				conn.user.jid, '*' + conn.user.name +
				'* ⚠️ No comparta este código con nadie. ',
				MessageType.text
			)
		} else {
			await conn.sendMessage(
				conn.user.jid, '*' + conn.user.name +
					'* ⚠️ Do Not Share This Code With Anyone.',
				MessageType.text
			)
		}
		if (conn.user.jid.startsWith('57')) {
		console.log(
	  	chalk.green.bold(
				'La session fue creada y enviamos una copia a su bandeja de entrada de whatsapp.\nQue tenga lindo dia.'
			))
		} else {
		console.log(
			chalk.green.bold(
				'The session was created and we sent a copy to your WhatsApp inbox.\nHave a nice day.'
			))
		}
		process.exit(0)
	})

//	await conn.connect();
	await conn.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`MiniBot.json`,
   	Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
			 'base64'
			),
	)
}

DrkBot()
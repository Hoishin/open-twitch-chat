/* eslint-disable no-console */

import {argv} from 'yargs';
import execa from 'execa';

const help = `
open-twitch-chat: Open Twitch chat of desired channel in Chrome window

$ twitch-chat hoishin
$ twitch-chat --channel hoishin
$ twitch-chat -choishin

(All three examles above are identical)
`;

if (argv.h || argv.help) {
	console.log(help);
	process.exit(0);
}

const channel = argv.channel || argv.c || argv._[0];

if (!channel) {
	console.error('Missing channel to show the chat');
	console.log(help);
	process.exit(1);
}

execa('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
	`--app=https://twitch.tv/popout/${channel}/chat`,
]);

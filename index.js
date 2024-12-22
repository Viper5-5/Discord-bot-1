const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});




client.on('messageCreate', (message) => {
		if (message.content === 'bunny'){
			 _pictures = [
					"https://pbs.twimg.com/media/GfSJVzBWkAAhWuu?format=jpg&name=900x900",
					"https://media.discordapp.net/attachments/1319817842568462408/1319838411493998622/GdpC1ePWAAAOQKc.png?ex=67676ace&is=6766194e&hm=0a7d817a581e970aa2d50d5b65a5e35a12c3119b67eed8b706f7ec2b76dbd878&=&format=webp&quality=lossless&width=541&height=350",
					"https://media.discordapp.net/attachments/1319817842568462408/1319838380162551969/Gdr_5dqW4AAZEDr.png?ex=67676ac7&is=67661947&hm=936f329a93a74d03322d593969bc4baab8ecaef43d9e890c331c7b600b12c95a&=&format=webp&quality=lossless&width=263&height=350",
					"https://media.discordapp.net/attachments/1319817842568462408/1319837860110667857/GeBdkcUaUAAktON.png?ex=67676a4b&is=676618cb&hm=e07afc1960d5b2b824404a59e19102c092702767afb2f2086261084b35a4969a&=&format=webp&quality=lossless&width=550&height=309",
					"https://images-ext-1.discordapp.net/external/dfpjO1soS0sE3gXkq579STKWe12eIsrqfj8Y3V3GOZI/https/media.tenor.com/eLjpUWOGXZMAAAPo/yourarchivist-orange-bunny.mp4",
					"https://media.discordapp.net/attachments/1319817842568462408/1319837500272939109/GeUEkWDXUAARNTc.png?ex=676769f5&is=67661875&hm=d4eb4d10c924a52c02d2c3f082427341df105f86dcc5466df54d261a2bc7c3da&=&format=webp&quality=lossless&width=507&height=676",
					"https://media.discordapp.net/attachments/1319817842568462408/1319836924306919424/GekPn2SXMAA_EWL.png?ex=6767696c&is=676617ec&hm=90638d5582bc32d94583f9285f721d07e59cab18279a765c80a8f368454f6073&=&format=webp&quality=lossless&width=263&height=350",
					"https://media.discordapp.net/attachments/1319817842568462408/1319836786553389056/GeqpN37XAAEYfLx.png?ex=6767694b&is=676617cb&hm=2a7c26ff7538882f8f31c2b547a7e0266ee59a154d859bd572e0321c1069814e&=&format=webp&quality=lossless&width=356&height=350",
					"https://pbs.twimg.com/media/GfK4dImXIAArHMX?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfM_oArWsAAOmfF?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfOw6VhWgAAOA5M?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfQHXRhXgAA8QnX?format=jpg&name=large",
					"https://i.pinimg.com/736x/9c/ce/39/9cce396f4bef3311ca4f2d0707e33aae.jpg",
					"https://i.pinimg.com/736x/5a/59/96/5a5996f248f19e2a22a812249cd4de80.jpg",
					"https://i.pinimg.com/736x/43/1e/ce/431ece62dc705b0ea6d1841293a60f22.jpg",
					"https://i.pinimg.com/736x/92/0b/ae/920bae6d7331c656cf9689c76f350fd7.jpg",
					"https://i.pinimg.com/736x/e4/93/fe/e493fe10f820bb3ae2e9a280777f234c.jpg",
					"https://i.pinimg.com/736x/4c/ff/9a/4cff9a233b9efd2dc406ff3a5650a3a7.jpg",
					"https://pbs.twimg.com/media/GfPmgGYW0AAna17?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfJiFDGXYAArSYu?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfFtmeBWUAAvNJc?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfSSaGjasAEB_cq?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfIsKYaWMAAoaTJ?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfReAkRasAIOH1S?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfR2V-wasAIyVKF?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfRZeRObEAIGNfD?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfRTbLFasAAeXFf?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfQ2upXasAMQa7y?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfQtzX3asAEvm7p?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfQT1ydasAQFvoy?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfQbPLNaUAATSSp?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfLTdLzXYAIh9ge?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfOh9xvWcAA7vpS?format=jpg&name=small",
					"https://pbs.twimg.com/media/GeyLc-UXAAEi2UC?format=jpg&name=medium",
					"https://pbs.twimg.com/media/Ge2MWEvWQAA7x3d?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge4N2ukXMAAjMTY?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge7onnEbYAAF1X4?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge6H7_-WAAAJ3v_?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge-Q64VWIAAdbaJ?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfDPH-_XcAEQKD2?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfG2mVlWMAAdKGf?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfHAn6HWgAANpx1?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfJQYLDXgAACMB0?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfNjVIqWgAA4E_l?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfNPo0eXEAAgS1z?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfM_oArWsAAOmfF?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfMyzRUXIAAQzi_?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfLjYMCX0AAjgCu?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfLN1EQWcAE87wF?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfK737_WIAAE9Wz?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfKxKN5WUAAYJeA?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfKaeJFW0AA7S-P?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfKCYudW0AAwFEh?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfJuRipWUAAeGYD?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfJqRq1WIAIgE0S?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfJdo9DXgAAbVwl?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfI4B8TXMAAjT5X?format=jpg&name=small",
					"https://pbs.twimg.com/media/GelZWf2aEAAVsZ7?format=jpg&name=small",
					"https://pbs.twimg.com/media/GewTPWvWgAAglMu?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfD3XN3X0AAIPOd?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfDjJDaaYAE5m1O?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfDJsFYXEAAr7dh?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfC0fIIXkAAZ9uj?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfA7BcXWcAANH7n?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfA5AolWAAE3biZ?format=jpg&name=small",
					"https://pbs.twimg.com/media/GfAlw1uXcAAmkLI?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge_Tot_WYAAqdqf?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge-Q64VWIAAdbaJ?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge9WaSbXcAAZhSm?format=jpg&name=small",
					"https://pbs.twimg.com/media/Ge8cZYPbwAAx9Qd?format=jpg&name=small",
					"https://i.pinimg.com/236x/2e/53/fd/2e53fd794100a3bded7b3647e76d113f.jpg",
					"https://i.pinimg.com/236x/c0/fc/9d/c0fc9d4d3eff839938071a6dc670141a.jpg",
					"https://i.pinimg.com/236x/0b/1b/6f/0b1b6f4d080eb322a283d352967e63d4.jpg",
					"https://i.pinimg.com/236x/0b/1b/6f/0b1b6f4d080eb322a283d352967e63d4.jpg",
					"https://i.pinimg.com/236x/d3/36/58/d336582672971ff8c6c79f45996c3879.jpg",
					"https://i.pinimg.com/474x/5b/6a/71/5b6a71ca200c67e38f7f8f85d64eff6e.jpg",
					"https://i.pinimg.com/474x/63/06/58/630658ac7725609e5bc7572467e287fb.jpg",
					"https://i.pinimg.com/736x/46/d6/38/46d6383f9c8423f04512495fefc00cbb.jpg",
					"https://i.pinimg.com/474x/63/5a/43/635a436c72323a11d8928e43534d8f7c.jpg",
					"https://i.pinimg.com/236x/a8/98/56/a8985603edcbca48053ff2e7bd5f94d9.jpg",
					"https://i.pinimg.com/474x/65/6b/64/656b6464b882aa97f9b66e5b55c9a314.jpg",
					"https://i.pinimg.com/236x/5f/f2/cf/5ff2cf2b2ab3c60ee8a9f0e1fd5aa051.jpg",
					"https://i.pinimg.com/236x/40/94/85/409485183eaf32c02e8f51ff8ea374c3.jpg",
					"https://i.pinimg.com/474x/20/6a/27/206a27955b61729b975e67561e68b866.jpg",
					"https://i.pinimg.com/236x/89/d2/2d/89d22d55dfe2704cc5bfe9777c26d144.jpg",
					"https://i.pinimg.com/236x/8f/4c/e5/8f4ce553d4ec205584f99734188f1a8e.jpg",
					"https://i.pinimg.com/236x/d4/ef/fa/d4effa24ff182dd80f5b68091e115b20.jpg",
					"https://i.pinimg.com/236x/5d/4d/e3/5d4de30142d89f2b7ae53dcac65d9677.jpg",
					"https://i.pinimg.com/236x/a4/02/1d/a4021d9b10e5af8a0138bb42e195aff3.jpg",
					"https://i.pinimg.com/236x/e1/be/4e/e1be4e1db9225f636a5b588bda9ea5ec.jpg",
					"https://i.pinimg.com/236x/ac/3a/d9/ac3ad9361ed47721685d371f5c987f23.jpg",
					"https://i.pinimg.com/236x/98/fa/40/98fa40f7445bfbe4b7ff67083e7233d3.jpg",
					"https://i.pinimg.com/236x/70/bb/bf/70bbbf6cc96b40d7d7cb810f07118e91.jpg",
					"https://i.pinimg.com/474x/f7/55/f4/f755f4d4aadcfd5a7defb738bb07d533.jpg",
					"https://i.pinimg.com/474x/94/38/fd/9438fd06b9b8c9be9d289f3351a9802c.jpg",
					"https://i.pinimg.com/236x/2c/86/d5/2c86d50116ea2eadd7e488c8e135785b.jpg",
					"https://i.pinimg.com/236x/64/8a/d0/648ad0fb73aa10692a29222a197ba543.jpg",
					"https://i.pinimg.com/236x/b8/0b/72/b80b724d9e985dc4940a20d5a3ed6a5d.jpg",
					"https://i.pinimg.com/236x/cb/73/1e/cb731e0f057ce9963bee9f4cde6cec33.jpg",
					"https://i.pinimg.com/736x/47/f8/89/47f889d160d9f958ab8241e8e2f51122.jpg",
					"https://pbs.twimg.com/media/GfUQ0dHb0AASke8?format=jpg&name=large",
					"https://pbs.twimg.com/media/GfT1eqoWQAEfPmN?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfTn4Z1bcAAs8db?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfTe4-9acAA7R2_?format=jpg&name=medium",
					"https://pbs.twimg.com/media/GfTIYnra8AAFCtn?format=jpg&name=900x900",
					"https://pbs.twimg.com/media/GfO-fLyasAE1zju?format=jpg&name=small",
					"https://media.discordapp.net/attachments/866775971590701118/1186372097501564988/06F4687E-BD10-4D4A-AB4B-D43D44C0BB5F.gif?ex=6768581d&is=6767069d&hm=3b7d424baad6ca4e91eb98957003131a91d67930571a59107d39814d1be384fc&"
			 ]
			 const randomIndex = Math.floor(Math.random() * _pictures.length);
			 const randomChoice = _pictures[randomIndex];

				message.reply(randomChoice)
		}
});


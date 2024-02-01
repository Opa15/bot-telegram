const TelegramBot = require('node-telegram-bot-api');

const token = 'PUT_YOUR_TOKE_HERE';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'WRITE SOMETHING HERE');
});

const opcoes1 = [
  ['Comandos'],
];

const opcoes = [
  ['WRITE SOMETHING HERE'],
  ['WRITE SOMETHING HERE'],
  ['WRITE SOMETHING HERE'],
  ['WRITE SOMETHING HERE'],
];

const opcoes1Poll = {
  reply_markup: {
    inline_keyboard: opcoes1.map((row) => row.map((opcao) => ({ text: opcao, callback_data: opcao })))
  }
};

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

// Enviar a mensagem com as opções em formato de botões de múltipla escolha (poll)
bot.sendMessage(chatId, 'WRITE SOMETHING HERE', opcoes1Poll);
});

// Lidar com as escolhas do teclado poll
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const escolha = callbackQuery.data;
  console.log('Lidando com o botão');
  console.log(callbackQuery.data);

  // Responder à escolha
  switch (callbackQuery.data) {
    case 'Comandos':
      // Adicionando quebras de linha na resposta
      bot.sendMessage(chatId, '\n/help \n/menu');
      break;
    default:
      // Lidar com outras escolhas, se necessário
  }
});

const opcoesPoll = {
  reply_markup: {
    inline_keyboard: opcoes.map((row) => row.map((opcao) => ({ text: opcao, callback_data: opcao })))
  }
};

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  // Enviar a mensagem com as opções em formato de botões de múltipla escolha (poll)
  bot.sendMessage(chatId, 'WRITE SOMETHING HERE', opcoesPoll);
});

// Lidar com as escolhas do teclado poll
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const escolha = callbackQuery.data;
console.log('lidando com o botao')
console.log(callbackQuery.data)
  // Responder à escolha
  switch (callbackQuery.data) {
    case 'WRITE SOMETHING HERE':
      bot.sendMessage(chatId, 'WRITE SOMETHING HERE');
      break;
    case 'WRITE SOMETHING HERE':
      bot.sendMessage(chatId, 'WRITE SOMETHING HERE');
      break;
    case 'WRITE SOMETHING HERE':
      bot.sendMessage(chatId, 'WRITE SOMETHING HERE');
      break;
    case 'WRITE SOMETHING HERE':
      bot.sendMessage(chatId, 'WRITE SOMETHING HERE');
      break;
    default:
      // Lidar com outras mensagens, se necessário
      break;
  }
});

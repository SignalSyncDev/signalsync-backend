require('dotenv').config();
const { sendTradeAlert } = require('./alerts');
const { copyToSlave } = require('./copyToSlave');

const fakePosition = {
    symbol: 'EURUSD.pro',
    side: 'BUY',
    volume: 0.10,
    entryPrice: 1.0845
};

async function run() {
    console.log("🚀 SIMULATION MODE ACTIVE");
    console.log("📈 Simulating open position for EURUSD.pro...");

    await copyToSlave(fakePosition);
    await sendTradeAlert(`🚨 Simulated Position: ${fakePosition.symbol} - ${fakePosition.side} - ${fakePosition.volume} lots @ ${fakePosition.entryPrice}`);

    console.log("✅ Simulated trade copy and alerts complete.");
}
run();

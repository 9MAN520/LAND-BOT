module.exports.config = {
    name: "hanuman chalisha",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "War In Chatbox",
    commandCategory: "wargroup",
    usages: "[fyt]",
    cooldowns: 7,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।
बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि।। 
बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।। ");
setTimeout(() => {a({body: "🙏जय हनुमान ज्ञान गुन सागर।
जय कपीस तिहुं लोक उजागर।।😍" })}, 3000);
setTimeout(() => {a({body: "🙏रामदूत अतुलित बल धामा।
अंजनि-पुत्र पवनसुत नामा।।"})}, 6000);
setTimeout(() => {a({body: "महाबीर बिक्रम बजरंगी।
कुमति निवार सुमति के संगी।।🙏" })}, 9000);
setTimeout(() => {a({body: "कंचन बरन बिराज सुबेसा।
कानन कुंडल कुंचित केसा।❤️" })}, 12000);
setTimeout(() => {a({body: "हाथ बज्र औ ध्वजा बिराजै।
कांधे मूंज जनेऊ साजै❤️" })}, 15000);
setTimeout(() => {a({body: "संकर सुवन केसरीनंदन।
तेज प्रताप महा जग बन्दन।।" })}, 18000);
setTimeout(() => {a({body: "विद्यावान गुनी अति चातुर।
राम काज करिबे को आतुर।।" })}, 21000);
setTimeout(() => {a({body: "❤️" })}, 24000);
                 }

class MailBox {
    constructor(){
        this._messageCount = 0;
        this.messages = [];
    }
    get messageCount(){
        return this._messageCount;
    }
    addMessage(subject, text){
        if(subject!='' && text!='') {
            let newMsg = {
                subject: '',
                text: ''
            };
            newMsg.subject = subject;
            newMsg.text = text;
            this._messageCount++;
            this.messages.push(newMsg);
            return this;
        }
    }
    deleteAllMessages(){
        this._messageCount = 0;
        return this.messages = [];
    }
    findBySubject(substr){
        let containing = [];
        for(let obj of this.messages){
            let messageText = obj.subject;
            if (messageText.indexOf(substr)!=-1) {
                containing.push(obj)
            }
        }
        return containing;
    }
    toString(){
        let result=[];
        if(this._messageCount>0){
            for(let message of this.messages){
                result.push(` * [${message.subject}] ${message.text}`);
            }
            return result.join('\n');
        }
        else{
            return `* (empty mailbox)`
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
console.log()
let msgs = mb.findBySubject('ee');
console.log((msgs.length));
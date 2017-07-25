class MailBox {
    constructor() {
        this.messages = [];
    }

    addMessage(subject, text) {
        this.messages.push({
            subject: subject,
            text: text
        });

        return this;
    }

    get messageCount() {
        return this.messages.length;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        return this.messages
            .filter(m => m.subject.includes(substr));
    }

    toString() {
        if(this.messages.length > 0){
            return this.messages
                .map(m => ` * [${m.subject}] ${m.text}`)
                .join('\n');
        }

        return ' * (empty mailbox)';
    }
}


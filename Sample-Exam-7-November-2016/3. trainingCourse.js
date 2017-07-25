class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date) {
        this.topics.push({title, date});
        this.topics.sort((a, b) => a.date > b.date);

        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let result = `Course "${this.title}" by ${this.trainer}\n`;
        if(this.topics.length > 0){
            for(let topic of this.topics) {
                result += ` * ${topic.title} - ${topic.date.toString()}\n`
            }

            return result.trim();
        }

        return result;
    }
}
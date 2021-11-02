export default class Question{
    constructor(question, photoUrl, badge){
        this.question = question;
        this.photoUrl = photoUrl;
        this.badge = badge;
        this.printQuestion.bind(this);
    }
    printQuestion(){
        return this.question+" "+this.badge;
    }
}
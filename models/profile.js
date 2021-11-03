export default class Profile{
    constructor(uid, name, email, photoUrl, phoneNumber,level, status, skillBadge, badge, focustime, groups, totalTime, averageTime) {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.photoUrl = photoUrl;
        this.phoneNumebr = phoneNumber;
        this.level  = level;
        this.status = status;
        this.skillBadge = skillBadge;
        this.badge = badge;
        this.focustime = focustime;
        this.groups = groups;
        this.totalTime = totalTime;
        this.averageTime = averageTime;
    }
}
// 클래스 작성
class CharacterData{
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
        console.log("construction complete");
    }
    create() {
        console.log("create");
    }
}

const x = new CharacterData(500, 100, 100);

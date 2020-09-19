new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],

    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {

            let demage = this.calculateDemage(3, 10);
            this.monsterHealth -= demage
            this.turns.unshift({
                isPlayer: true,
                text: 'Pemain menyerang monster dengan kekuatang ' + demage
            });
            // Checking healt
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDemage(5, 12);
            this.checkWin();

        },
        specialAttack: function () {
            let demage = this.calculateDemage(10, 20);
            this.monsterHealth -= demage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Pemain menyerang monster dengan kekuatang besar ' + demage
            });
            // Checking healt
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Pemain heal 10 ';
            });

            this.monsterAttacks();
        },
        giveUp: function () {
            alert('Kamu Menyerah ?')
            this.gameIsRunning = false;
        },
        monsterAttacks: function () {
            let demage = this.calculateDemage(5, 12);
            this.playerHealth -= demage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster menyerang pemain dengan kekuatang ' + demage + '!'
            });
        },
        calculateDemage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('Kamu Menang ! Permainan Baru?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('Oh, Tidak! Kamu Kalah ! Permainan Baru?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            }

            return false
        }
    },
})
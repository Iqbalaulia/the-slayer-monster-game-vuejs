new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,

    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {

            this.monsterHealth -= this.calculateDemage(3, 10);

            // Checking healt
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDemage(5, 12);
            this.checkWin();

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

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
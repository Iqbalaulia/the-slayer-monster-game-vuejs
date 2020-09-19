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
            let max = 10;
            let min = 3;
            let demage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.monsterHealth -= demage

            // Checking healt
            if (this.monsterHealth <= 0) {
                alert('Kamu Menang!')
                this.demage = false
                return
            }
            max = 12;
            min = 5;
            demage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.playerHealth -= demage

            // Checking healt
            if (this.monsterHealth <= 0) {
                alert('0h! Kamu Kalah!')
                this.demage = false
                return
            }

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    },
})
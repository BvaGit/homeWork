export default function startRace(participants) {
    const race = document.getElementById('race');
    const initializationTable = document.getElementById('tab1');
    const raceTable = document.getElementById('tab2');
    const part = document.querySelectorAll('.part');
    const balances = document.querySelectorAll('.balances');
    const ages = document.querySelectorAll('.ages');
    const docs = document.querySelectorAll('.docs');
    const english = document.querySelectorAll('.english');
    const winner = document.querySelectorAll('.general__race-winner');
    const nowon = document.querySelector('.noWin');

    race.addEventListener('click', () => {
        raceTable.classList.remove('hide');
        initializationTable.classList.add('hide');
        assignNames(part[0], participants[0].name);
        assignNames(part[1], participants[1].name);
        assignNames(part[2], participants[2].name);
        assignNames(part[3], participants[3].name);
        assignNames(part[4], participants[4].name);

        Promise.any([
            Promise.all(
                [
                    accCheck(checkAcc, participants[0].balance, randomIntFromInterval(5, 10), balances[0]),
                    accCheck(checkAge, participants[0].age, randomIntFromInterval(1, 3), ages[0]),
                    accCheck(checkDocs, participants[0].documents, randomIntFromInterval(10, 20), docs[0]),
                    accCheck(checkLang, participants[0].english, randomIntFromInterval(5, 10), english[0])
                ]
            ).then((results) => {
                const isWinner = allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[0],
                    index: 0
                } : Promise.reject(false);
            })
            ,
        
            Promise.all(
                [
                    accCheck(checkAcc, participants[1].balance, randomIntFromInterval(5, 10), balances[1]),
                    accCheck(checkAge, participants[1].age, randomIntFromInterval(1, 3), ages[1]),
                    accCheck(checkDocs, participants[1].documents, randomIntFromInterval(10, 20), docs[1]),
                    accCheck(checkLang, participants[1].english, randomIntFromInterval(5, 10), english[1])
                ]
            ).then((results) => {
                const isWinner = allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[1],
                    index: 1
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    accCheck(checkAcc, participants[2].balance, randomIntFromInterval(5, 10), balances[2]),
                    accCheck(checkAge, participants[2].age, randomIntFromInterval(1, 3), ages[2]),
                    accCheck(checkDocs, participants[2].documents, randomIntFromInterval(10, 20), docs[2]),
                    accCheck(checkLang, participants[2].english, randomIntFromInterval(5, 10), english[2])
                ]
            )
            .then((results) => {
                const isWinner = allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[2],
                    index: 2
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    accCheck(checkAcc, participants[3].balance, randomIntFromInterval(5, 10), balances[3]),
                    accCheck(checkAge, participants[3].age, randomIntFromInterval(1, 3), ages[3]),
                    accCheck(checkDocs, participants[3].documents, randomIntFromInterval(10, 20), docs[3]),
                    accCheck(checkLang, participants[3].english, randomIntFromInterval(5, 10), english[3])
                ]
            )
            .then((results) => {
                const isWinner = allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[3],
                    index: 3
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    accCheck(checkAcc, participants[4].balance, randomIntFromInterval(5, 10), balances[4]),
                    accCheck(checkAge, participants[4].age, randomIntFromInterval(1, 3), ages[4]),
                    accCheck(checkDocs, participants[4].documents, randomIntFromInterval(10, 20), docs[4]),
                    accCheck(checkLang, participants[4].english, randomIntFromInterval(5, 10), english[4])
                ]
            )
            .then((results) => {
                const isWinner = allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[4],
                    index: 4
                } : Promise.reject(false);
            })
        ])
        .then((result) => {
            // console.log('winner', result);
            const { index, participant } = result;
            winner[index].textContent = 'WINNER';
        })
        .catch(() => {
            // console.log('no winners');
            nowon.classList.remove('hide');
        })
    })    

    function allResultsAreTrue(results) {
        return results.every(item => item === true);
    }

    function accCheck(fnc, data, time, element) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (fnc(data)) {
                resolve('You win');
              } else {
                reject(new Error('You lose'));
              }
            }, time)
        })
        .then(() => {
            element.classList.add('success-check');
            return true;
        }).catch(() => {
            element.classList.add('fail-check');
            return false;
        });
    }
    function checkAcc(data) {
        if (data >= 2000) {
            return true;
        } else {
            return false;
        }
    }
    function checkAge(data) {
        if (data < 18 || data > 60) {
            return false;
        } else {
            return true;
        }
    }
    function checkDocs(data) {
        if (data === '3') {
            return true; 
        } else {
            return false;
        }
    }
    function checkLang(data) {
        if (data === 'B1' || data === 'B2' || data === 'C1') {
            return true; 
        } else {
            return false;
        }
    }
    function assignNames(input, data) {
        input.textContent = data;
    }
    function randomIntFromInterval(min, max) {
        return (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
    }
}
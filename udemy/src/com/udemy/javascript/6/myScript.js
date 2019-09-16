        const getAverage = (a, b, c) => (a + b + c)/3;

        const johnTeamAvgScore = getAverage(116, 123, 94);
        const mikeTeamAvgScore = getAverage(116, 94, 123);
        const maryTeamAvgScore = getAverage(97, 134, 105);

        document.getElementById('johnAvgScore').innerHTML = 'John\'s team average score is: ' + johnTeamAvgScore;
        document.getElementById('mikeAvgScore').innerHTML = 'Mike\'s team average score is: ' + mikeTeamAvgScore;
        document.getElementById('maryAvgScore').innerHTML = 'Mary\'s team average score is: ' + maryTeamAvgScore;

        switch(true){
            case johnTeamAvgScore > mikeTeamAvgScore && johnTeamAvgScore > maryTeamAvgScore:
                    document.getElementById('winner').innerHTML = 'John team is Winner';
                    break;

            case mikeTeamAvgScore > johnTeamAvgScore && mikeTeamAvgScore > maryTeamAvgScore:
                    document.getElementById('winner').innerHTML = 'Mike team is Winner';
                    break;

            case maryTeamAvgScore > johnTeamAvgScore && maryTeamAvgScore > mikeTeamAvgScore:
                    document.getElementById('winner').innerHTML = 'Mary team is Winner';
                    break;

            default:
                    document.getElementById('winner').innerHTML = 'Match Drawn';
                    break;
        }


const gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};

const numPointsScored = (playerName) => {
  const teams = [gameObject.home, gameObject.away];
  for (const team of teams) {
    if (playerName in team.players) {
      return team.players[playerName].points;
    }
  }
  return "Please contact Stove McKeon for lack of playing time";
};

const shoeSize = (playerName) => {
  const teams = [gameObject.home, gameObject.away];
    for (const team of teams) {
      if (playerName in team.players){
        return team.players[playerName].points;
      }
    }
    return "Please contact Stove McKeon for custom Shoe Fittings"
}

// const teamColors = teamName => {
//   const teams = [gameObject.home, gameObject.away];
//     for (const team of teams) {
//       if (teamName === teams.teamName){
//         return teams.colors
//       }
//     }
//     return "Please contact Stove McKeon for a Color Blindness exam"
//}
const teamColors = teamName => {
  const teams = [gameObject.home, gameObject.away];
  for (const team of teams) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
  return "Please contact Stove McKeon for a Color Blindness exam"
};

const teamNames = teamName => {
  return [gameObject.home.teamName, gameObject.away.teamName];
} 

// Need to go through the player list and return array
const playerNumbers = teamName => {
  const teams = [gameObject.home, gameObject.away];
  for (const team of teams) {
    if (team.teamName === teamName) {
      return [Object.keys(team.players).map(playerName => team.players[playerName].number)];
    }
  }
  return "Please contact Stove McKeon for building your new imaginary expansion team"
};

// const playerNumbers = teamName => {
//   const teams = [gameObject.home, gameObject.away];
//   for (const team of teams) {
//     if (team.teamName === teamName) {
//       return [teams.players.number]
//     }
//   }
//   return "Please contact Stove McKeon for building your new imaginary expansion team"
// };
const playerStats = playerName => {
  const teams = [gameObject.home, gameObject.away];
  for (const team of teams) {
    if (playerName in team.players) {
      return team.players[playerName];
    }
  }
  return "Please contact Stove McKeon to give your imaginary player a contract";
};

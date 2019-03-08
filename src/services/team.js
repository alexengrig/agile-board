class TeamService {
  teams = {
    '1': {
      id: 1,
      name: 'Stub team #1',
      color: 'blue'
    },
    '2': {
      id: 2,
      name: 'Stub team #2',
      color: 'green'
    },
    '3': {
      id: 3,
      name: 'Stub team #3',
      color: 'red'
    }
  };

  getTeams() {
    return Object.values(this.teams);
  }

  getTeamById(id) {
    return this.teams[id];
  }
}

export default new TeamService();

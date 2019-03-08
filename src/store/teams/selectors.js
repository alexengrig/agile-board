export function getState(globalState) {
  return globalState.teams;
}

export function getTeams(globalState) {
  return Object.values(getState(globalState));
}

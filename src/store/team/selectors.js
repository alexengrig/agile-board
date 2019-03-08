export function getState(globalState) {
  return globalState.team;
}

export function getTeamId(globalState) {
  return getState(globalState).id;
}

export function getTeamName(globalState) {
  return getState(globalState).name;
}

export function getTeamColor(globalState) {
  return getState(globalState).color;
}

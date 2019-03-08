class BoardService {
  boards = {
    '1': { id: 1, name: 'Stub board #1', color: 'red' },
    '2': { id: 2, name: 'Stub board #2', color: 'green' },
    '3': { id: 3, name: 'Stub board #3', color: 'blue' }
  };

  getBoards() {
    return Object.values(this.boards);
  }

  getBoardById(id) {
    return this.boards[id];
  }
}

export default new BoardService();

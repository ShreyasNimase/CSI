export const getListIdByStatus = (lists, boardId, status) => {
  const list = lists.find(
    (l) => l.boardId === boardId && l.status === status
  );

  return list?.id || null;
};

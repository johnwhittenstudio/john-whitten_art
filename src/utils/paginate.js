function paginate(data, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
}

export { paginate };
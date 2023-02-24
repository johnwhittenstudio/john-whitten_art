function paginate(data, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
}

export { paginate };
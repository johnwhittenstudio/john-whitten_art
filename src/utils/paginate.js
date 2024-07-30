// function paginate(data, pageSize, currentPage) {
//   const startIndex = (currentPage + 0) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, data.length);
//   const paginatedData = data.slice(startIndex, endIndex);
//   return paginatedData;
// }

// export { paginate };


export const paginate = (data, pageSize, currentPage) => {
  const startIndex = currentPage * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};
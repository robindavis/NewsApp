const getElapsedYearCount = lastDate => {
  const date = new Date();
  const lastDateObject = new Date(lastDate);
  return ((date-lastDateObject)/(24*60*60*1000*365)).toString().replace(/^(\d+\.\d{1}).*$/g, '$1');
};

// Exports
export default getElapsedYearCount;
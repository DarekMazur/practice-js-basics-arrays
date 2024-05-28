const years = [1980, 1934, 2002, 2019];

const currentYear = new Date().getFullYear();

years.map(year => console.log(currentYear - year));
const formatRequests = (project) => {
    // if ther are 0 requests, return the version
    if (project.requests === 0) {
        return "Unreleased"
    }

    // if there are more than 10000 requests, format it to 10.1k
    if (project.requests > 10000) {
        return (project.requests / 1000).toFixed(1) + 'k requests';
    }

    // if there are more than 1000 requests, format it to 1.23k
    if (project.requests > 1000) {
        return (project.requests / 1000).toFixed(2) + 'k requests';
    }
        
    return project.requests + ' requests';
};

const getLanguageColor = (language) => {
    switch (language) {
        case 'JavaScript':
            return '#F5E960';
        case 'TypeScript':
            return '#2b7489';
        case 'Python':
            return '#7497F3';
        case 'Java':
            return '#f1a017';
        case 'C++':
            return '#f34b7d';
        case 'C#':
            return '#178600';
        case 'React':
            return '#c26ceb';
        case 'Node.js':
            return '#918BDF';
        case 'HTML':
            return '#BBB09B'; //E26D5A
        case 'CSS':
            return '#F49F0A';
        case 'Swift':
            return '#E1634A';
        case 'React Native':
            return '#A9F0D1';
        default:
            return '#fff';
    }
};

const parseDate = (dateString) => {
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
  
    if (!dateString) return null;
  
    // sometimes there will be  a day as well, so its either 1 May 2023 or just May 2023 so we need to handle both cases
    if (dateString.split(' ').length === 2) {
      dateString = `1 ${dateString}`;
    }
    const [day, monthStr, year] = dateString.split(' ');
    const month = months[monthStr];
  
    return new Date(year, month, day);
};
  
const sortByDate = (a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    if (!dateA || !dateB) return dateA ? -1 : 1;

    return dateB - dateA;
};

export { formatRequests, getLanguageColor, sortByDate };
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
            return '#B662DD';
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

export { formatRequests, getLanguageColor };
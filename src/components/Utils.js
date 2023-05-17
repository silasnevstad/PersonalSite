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

export { formatRequests }
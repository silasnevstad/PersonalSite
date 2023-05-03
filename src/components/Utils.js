const formatRequests = (project) => {
    // if ther are 0 requests, return the version
    if (project.requests === 0) {
        return project.version;
    }

    // if there are more than 1000 requests, format it to 1.2k
    if (project.requests > 1000) {
        return (project.requests / 1000).toFixed(1) + 'k requests';
    }
    return project.requests + ' requests';
};

export { formatRequests }
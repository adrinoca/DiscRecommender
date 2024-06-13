// General use functions

const formatDate = (date) => {
    return new Date.(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export { formatDate, capitalize };
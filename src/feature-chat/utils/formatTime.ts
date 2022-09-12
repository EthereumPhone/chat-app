export const formatTime = (date?: Date) => {
  return date
    ? new Date(date).toLocaleTimeString(undefined, {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
      })
    : '';
};

export const formatDate = (date?: Date) => {
  return date ? date.toLocaleDateString('en-US') : '';
};

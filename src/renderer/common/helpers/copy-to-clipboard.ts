/**
 * Copy text to clipboard
 */
const copyToClipboard = async (text: string) => {
  if (!navigator?.clipboard) {
    return false;
  }

  try {
    if (!text) {
      return false;
    }

    await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    return false;
  }
};

export default copyToClipboard;

const FIREBASE_DOMAIN = "https://quotes-app-756ce-default-rtdb.firebaseio.com";

export const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Couldn't fetch quotes");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
};

export const getSingleQuote = async quoteId => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response) {
    throw new Error(data.message || "Couldn't fetch the quote");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async quoteData => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Couldn't add a new quote");
  }

  return null;
};

export const addComment = async (commentData, quoteId) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`, {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Couldn't add a comment");
  }

  return { commentId: data.name };
};

export const getAllComments = async quoteId => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Couldn't fetch comments");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data(key),
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
};

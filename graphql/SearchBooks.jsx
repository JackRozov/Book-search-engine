import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../graphql/mutations';

// inside handleSaveBook function
const [saveBook] = useMutation(SAVE_BOOK);

const handleSaveBook = async (bookId) => {
  try {
    await saveBook({
      variables: { input: { ...bookDetails } }
    });
    // handle book save success
  } catch (err) {
    console.error(err);
  }
};

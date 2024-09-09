import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { REMOVE_BOOK } from '../graphql/mutations';

const { data } = useQuery(GET_ME);
const [removeBook] = useMutation(REMOVE_BOOK);

// handleDeleteBook function
const handleDeleteBook = async (bookId) => {
  try {
    await removeBook({
      variables: { bookId }
    });
    //}

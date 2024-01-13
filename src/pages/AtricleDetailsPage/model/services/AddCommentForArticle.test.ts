// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { addCommentForArticle } from './AddCommentForArticle';

// const commentText = 'commentText';

// describe('addCommentForArticle.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(addCommentForArticle);
//         thunk.api.put.mockReturnValue(Promise.resolve({ commentText }));

//         const result = await thunk.callThunk(commentText);

//         expect(thunk.api.put).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toEqual({
//             id: string,
//             user: {},
//             text: commentText,
//         });
//     });

// });

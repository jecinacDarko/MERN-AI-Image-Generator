import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: {
    type: String,     // <--- this line was incorrect
    required: true
  },
  prompt: {
    type: String,     // <--- this line was incorrect
    required: true
  },
  photo: {
    type: String,
    required: true
  },
})

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;

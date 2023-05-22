require("dotenv").config();

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URI);

  console.log("Connected to MongoDB");

  const bookSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/,
      },
      genre: {
        type: String,
        required: true,
        enum: [
          "Action",
          "Biography",
          "History",
          "Horror",
          "Kids",
          "Learning",
          "Fantasy",
          "Sci-Fi",
        ],
      },
      year: {
        type: Number,
        required: true,
      },
      verified: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  const Book = mongoose.model("Book", bookSchema);

  // // Create a new book
  // const res = await Book.create({
  //   title: "The Lord of the Rings",
  //   author: "John Doe",
  //   genre: "Fantasy",
  //   year: 1994,
  //   verified: true,
  // });
  // console.log(res);

  // // Find all books
  // const res = await Book.find({});
  // console.log(res);

  // // Find books with year great than or equal 1994
  // const res = await Book.find({ year: { $gte: 1994 } });
  // console.log(res);

  // // Find book by id
  // const res = await Book.findById("64665f00a851a290d3e90f62");
  // // const res = await Book.findOne({ _id: "64665f00a851a290d3e90f62" });
  // console.log(res);

  // // Find book by author
  // const res = await Book.findOne({ author: "John Doe" });
  // console.log(res);

  // Update book
  // const res = await Book.findByIdAndUpdate(
  //   "64665f00a851a290d3e90f62",
  //   { year: 2024, verified: false },
  //   { new: true }
  // );
  // const res = await Book.findOneAndUpdate(
  //   { _id: "64665f00a851a290d3e90f62" },
  //   { year: 2025, verified: false },
  //   { new: true }
  // );
  // console.log(res);

  // const res = await Book.findByIdAndDelete("64665f00a851a290d3e90f62");
  const res = await Book.findOneAndDelete({ _id: "64665f00a851a290d3e90f62" });
  console.log(res);
}

main().catch(console.error);

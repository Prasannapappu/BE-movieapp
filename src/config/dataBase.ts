import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://movieList:CrDwOifmkkFimVV0@movie-list.syxv0an.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Db connected");
  } catch (err) {
    console.log("Db not connected");
  }
}

connectToDatabase();

export default mongoose.connection;

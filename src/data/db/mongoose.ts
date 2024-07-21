import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://sayyamse:x3q1lhHJQhoNr1Ti@cluster0.lfgagy5.mongodb.net/demo?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch(error) {
        console.log('MongoDB connection error: ', error);
        process.exit(1);
    }
}

export default connectDB;
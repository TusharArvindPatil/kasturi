let mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/Kasturi", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("db connected"))
.catch(error => console.log("something wrong".error.message));

let courseSchema = new mongoose.Schema({
name: { type: String },
courses: [String],
isPublished: { type: Boolean},
price: { type: Number}
});

let courseModel = mongoose.model("courses", courseSchema);

async function CreateCourse() {
let data = new courseModel({
    name: "tanvi",
    courses: ["Accondet","front"],
    isPublished: true,
    price: 40000
});
 
let item = await data.save();
console.log(item);

};
//CreateCourse();


async function FetchCourses(){
let course = await courseModel
.find({name:"tanvi"})
.sort("-name")
.select("-price");
console.log(course);
};
FetchCourses();
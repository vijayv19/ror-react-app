# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


students = Student.create([
    {
        name:"Vijay Vaidya",
        email:"vijay.vaidya@gmail.com",
        rollno:10,
        address: "Ghatkopar"
    },
    {
        name:"Avinash Tiwari",
        email:"avinash.tiwari@gmail.com",
        rollno:2,
        address: "Marol"
    },
    {
        name:"Jyoti Singh",
        email:"jyoti.singh@gmail.com",
        rollno:9,
        address: "Andheri"

    },
    {
        name:"Sharik Khan",
        email:"sharik.khan@gmail.com",
        rollno:5
        address: "Thane"
    }
])
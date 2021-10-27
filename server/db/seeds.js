use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Jim",
        address: "Jims house",
        checked_in: true
    },
    {
        guest_name: "Bob",
        address: "Bobs house",
        checked_in: true
    },
    {
        guest_name: "Dave",
        address: "Daves house",
        checked_in: true
    }
]);
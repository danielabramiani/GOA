// ფუნქციას გადაეცემა სიტყვა და მან უნდა 
// დააბრუნოს ეს სიტყვა შეცვლილ ფორმატში: 
// სიტყვის მეორე ნახევარი შეაერთოს სიტყვის პირველ
//  ნახევართან და დააბრუნოს გაერთიანებული. თუ სიტყვის
//   სიგრძე კენტია, მეორე ნახევრის სიგრძე უნდა აღემატებოდეს პირველისას. 
// f("gamarjoba") = "rjobagamar", ახსნა: მეორე ნახევარს მიეწერა პირველი ნახევარი

function reverseString(string){
    return string.split("").reverse().join("");
}

console.log(reverseString("gamarjoba"))
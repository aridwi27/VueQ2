let palindrom = (kata) => {
  if (typeof kata !== "string") {
    console.log("kata harus string");
  } else {
    let kataPertama = kata.toLowerCase();
    let kataKedua = kata.toLowerCase().split("").reverse().join("");
    if (kataPertama !== kataKedua) {
      console.log("not palindrome");
    } else {
      console.log("palindrome");
    }
  }
};

palindrom("Kasur ini rusak");

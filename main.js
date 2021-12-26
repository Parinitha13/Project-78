var images = ["Brother.jpg", "Dad.jpg", "Girl.jpg", "Granny.jpg", "Grandpa.jpg", "Mom.jpg"];
var names = ["Prathiv Karthik", "Karthik Parameswaran", "Parinitha Karthik", "Maheswari Subramaniam", "Subramaniam", "Ponkamali Subramaniam"];

var i= 0;
function update() {
    i++;
    var family_members_number= 7;
    if(i > family_members_number)
    {
        i = 0;
    }
    var updatedImage= images[i];
    var updatedName= names[i];
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_name").innerHTML= updatedName;

    images.push("Grandmom.jpg")
    console.log(images[i])
    document.getElementById("family_member_image").src= updatedImage;
   
    names.push("Thenmozhi Parameswaran")
    console.log(names[i])
    document.getElementById("family_member_name").innerHTML= updatedName;

    images.push("Grandad.jpg")
    console.log(images[i])
    document.getElementById("family_member_image").src= updatedImage;

    names.push("Parameswaran")
    console.log(names[i])
    document.getElementById("family_member_name").innerHTML= updatedName;










    

}
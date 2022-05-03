var images = ["sandra.jpg", "carlos.jpg", "abi.jpg", ];
           
var names = ["sandra", "carlos", "abi",];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 2
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}

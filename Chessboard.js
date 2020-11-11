let lengthX = 8, heightY = 8, str = "";
for (y = heightY; y > 0; y--) {
  for (x = lengthX/2; x > 0; x--) {
    if (y%2 == 0) {
      str = str + "#" + " ";
    }
    else {
	  str = str + " " + "#";
    }
  }
  console.log(str + "\n");
str = "";
}
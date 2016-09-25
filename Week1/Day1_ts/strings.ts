namespace strings {
  let last_name = "Michael";
  let last_name_arr = ["S", "e", "o"]
  console.log(last_name[2]);
  console.log(last_name.length);

  let str = "The fat cat rolled -- over and -- jumped, to the side.";
  str = str.replace(/[^a-zA-Z\s]/g, ""); //regex: string manipulation

  let result = str.split(' '); //["The", "fat", "cat" (splits by "[space]").....]
  }
}

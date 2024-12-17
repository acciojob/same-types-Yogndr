function isSameType(value1, value2) {
	if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if both values have the same type
  if (typeof value1 === typeof value2) {
    return true;
  }

  // If none of the above conditions are met, return false
  return false;
}
  //your js code here
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

function isSameType(value1, value2) {
	if(typeof(value1)==typeof(value2) ||(value1==NaN && value2==NaN)){
		return true;
	}
	else if(value1!=value)
	{
		return false;
	}
  //your js code here
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
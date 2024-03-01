
function decreaseValue(&$dec = 6) {
return $dec--; 
}
function increaseValue($inc = 8) {
return $inc++; }
$val = 7;
$val = increaseValue();
decreaseValue($val);